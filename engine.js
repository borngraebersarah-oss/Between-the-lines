export const RULE_VERSION='static-preview-1';
const DAY=86400000;
export function tokens(text){return text.normalize('NFC').replace(/https?:\/\/\S+|[\w.+-]+@[\w.-]+/gu,' ').toLowerCase().match(/\p{L}+(?:['’\-]\p{L}+)*/gu)||[];}
export function emojis(text){return [...new Intl.Segmenter('de',{granularity:'grapheme'}).segment(text)].map(x=>x.segment).filter(x=>/\p{Extended_Pictographic}|\p{Regional_Indicator}|\u20e3/u.test(x));}
export function own(m){return m.type==='text'?m.text:'';}
export async function parse(text){
 const messages=[];let current=null;let system=0;const occurrences=new Map();
 for(const [i,line] of text.replace(/^\uFEFF/,'').replace(/\r\n?/g,'\n').split('\n').entries()){
  if(!line.trim())continue;
  const h=line.match(/^(\d{2})\.(\d{2})\.(\d{4}), (\d{2}):(\d{2}) - (.*)$/u);
  if(!h){if(current&&!/^\d{1,4}[./-]\d/.test(line)){current.text+='\n'+line;continue;}throw Error(`Nicht unterstützte Zeile ${i+1}. Erwartet: TT.MM.JJJJ, HH:mm - Name: Text`);}
  const [,d,mo,y,hh,mm,body]=h;const date=`${y}-${mo}-${d}`,stamp=`${date}T${hh}:${mm}:00`;const t=Date.parse(stamp+'Z');
  if(!Number.isFinite(t)||new Date(t).toISOString().slice(0,19)!==stamp)throw Error(`Ungültige Zeit in Zeile ${i+1}`);
  const split=body.indexOf(': ');if(split<1){system++;current=null;continue;}
  current={sender:body.slice(0,split).normalize('NFC'),date,time:`${hh}:${mm}`,stamp,text:body.slice(split+2),line:i+1};messages.push(current);
 }
 if(!messages.length)throw Error('Keine unterstützten Nachrichten gefunden.');
 for(const m of messages){m.type=/^(Diese Nachricht wurde gelöscht\.|This message was deleted\.?)$/i.test(m.text)?'deleted':/^(<Medien ausgeschlossen>|<Medien weggelassen>|<Media omitted>|<(?:Bild|Video|Sprachnachricht|Audio|Sticker|GIF|Dokument) ausgelassen>|Medien ausgeschlossen|Medien weggelassen|‎?<[^>]+:.*>)$/i.test(m.text)?'media':'text';
  const signature=JSON.stringify([m.sender,m.stamp,m.text]);const n=(occurrences.get(signature)||0)+1;occurrences.set(signature,n);
  const hash=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(signature+'#'+n));m.id=[...new Uint8Array(hash)].map(x=>x.toString(16).padStart(2,'0')).join('');
 }
 messages.sort((a,b)=>a.stamp.localeCompare(b.stamp)||a.line-b.line);
 return {messages,participants:[...new Set(messages.map(m=>m.sender))],system};
}
export function merge(old,incoming,mode){
 const participants=[...new Set(old.map(m=>m.sender))].sort().join('\0');
 if([...new Set(incoming.map(m=>m.sender))].sort().join('\0')!==participants)throw Error('Teilnehmer stimmen nicht überein. Update blockiert.');
 const groups=new Map();for(const m of old){const k=m.sender+'\0'+m.stamp;const a=groups.get(k)||[];a.push(m.text);groups.set(k,a);}
 for(const m of incoming){const a=groups.get(m.sender+'\0'+m.stamp);if(a&&!a.includes(m.text))throw Error('Mögliche Bearbeitung oder Identitätskollision bei '+m.date+' '+m.time+'. Update blockiert; keine automatische Zuordnung.');}
 const oldIds=new Set(old.map(m=>m.id));return {messages:mode==='replace'?incoming:[...old,...incoming.filter(m=>!oldIds.has(m.id))].sort((a,b)=>a.stamp.localeCompare(b.stamp)||a.line-b.line),duplicates:incoming.filter(m=>oldIds.has(m.id)).length};
}
export function days(from,to){const ds=[];for(let t=Date.parse(from+'T00:00:00Z');t<=Date.parse(to+'T00:00:00Z');t+=DAY){if(ds.length>40000)throw Error('Zeitraum zu groß.');ds.push(new Date(t).toISOString().slice(0,10));}return ds;}
export function analyze(messages,from,to,excludedDays=[],excludedPauses=[]){
 const ms=messages.filter(m=>m.date>=from&&m.date<=to);const daily=days(from,to).map(date=>({date,ms:ms.filter(m=>m.date===date)}));
 const hours=Array.from({length:24},(_,h)=>ms.filter(m=>+m.time.slice(0,2)===h));
 const max=Math.max(0,...hours.map((_,h)=>[0,1,2].reduce((s,k)=>s+hours[(h+k)%24].length,0)));
 const windows=new Map();if(max)for(let h=0;h<24;h++){let hs=[h,(h+1)%24,(h+2)%24];if(hs.reduce((s,k)=>s+hours[k].length,0)!==max)continue;while(!hours[hs[0]].length)hs.shift();while(!hours[hs.at(-1)].length)hs.pop();windows.set(hs.join(','),hs);}
 const runs=[];for(const d of daily){if(!d.ms.length)continue;const r=runs.at(-1);if(r&&Date.parse(d.date)-Date.parse(r.to)===DAY){r.to=d.date;r.days++;}else runs.push({from:d.date,to:d.date,days:1});}
 const peak=Math.max(0,...daily.map(d=>d.ms.length));const comparison=daily.filter(d=>!excludedDays.includes(d.date));const base=comparison.length?comparison.reduce((s,d)=>s+d.ms.length,0)/comparison.length:null;const phases=[];let run=null;
 if(comparison.length>=14&&base>0)for(const d of daily){const kind=excludedDays.includes(d.date)?'excluded':d.ms.length>=1.5*base?'hot':d.ms.length<=.5*base?'cold':'normal';if(kind!=='hot'&&kind!=='cold'){run=null;continue;}if(run&&run.kind===kind){run.to=d.date;run.days++;}else{run={kind,from:d.date,to:d.date,days:1};phases.push(run);}}
 const pauses=ms.slice(1).map((m,i)=>({id:ms[i].id+':'+m.id,before:ms[i],after:m,minutes:(Date.parse(m.stamp+'Z')-Date.parse(ms[i].stamp+'Z'))/60000})).sort((a,b)=>b.minutes-a.minutes);
 const families=new Map();for(const m of ms)for(const e of emojis(own(m))){const f=e.replace(/[\uFE0E\uFE0F\u{1F3FB}-\u{1F3FF}]/gu,'');const a=families.get(f)||{count:0,ids:new Set(),variants:new Map()};a.count++;a.ids.add(m.id);a.variants.set(e,(a.variants.get(e)||0)+1);families.set(f,a);}
 return {ms,daily,hours,windows:[...windows.values()],runs,longest:Math.max(0,...runs.map(r=>r.days)),peak,peakDays:peak?daily.filter(d=>d.ms.length===peak):[],families,base,phases:phases.filter(p=>p.days>=3),hotcoldStatus:comparison.length<14?'insufficient-data':base===0?'not-applicable':'available',pauses,validPauses:pauses.filter(p=>!excludedPauses.includes(p.id)),words:ms.reduce((s,m)=>s+tokens(own(m)).length,0)};
}

