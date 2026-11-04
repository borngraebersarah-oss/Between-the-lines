import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {parse,merge,analyze,tokens,emojis} from '../engine.js';
for(const [letter,count] of [['a',1418],['b',1236],['c',1797]])test('Originalfixture '+letter+' – Parser und acht echte Analysen',async()=>{
 const txt=await readFile(new URL(`v1/data/main/chat_${letter}_standard.txt`,import.meta.url),'utf8');
 const expected=JSON.parse(await readFile(new URL(`v1/data/main/chat_${letter}_expected.json`,import.meta.url),'utf8'));
 const p=await parse(txt),a=analyze(p.messages,'2026-01-01','2026-06-30');
 assert.equal(p.messages.length,count);assert.equal(a.words,expected.texting.words);
 assert.deepEqual(a.hours.map(x=>x.length),expected.prime.hours.map(x=>x.count));
 assert.deepEqual(a.windows,expected.prime.winning_windows.map(x=>x.hours));
 assert.equal(a.longest,expected.streak.longest);assert.equal(a.peak,expected.peak.count);
 assert.deepEqual(a.peakDays.map(x=>x.date),expected.peak.days);
 assert.deepEqual(Object.fromEntries([...a.families].map(([f,v])=>[f,v.count])),expected.emoji.families);
 assert.equal(a.validPauses[0].minutes,expected.silence.maximum);
 assert.equal(a.base,expected.hotcold.baseline);
 assert.deepEqual(a.phases.map(x=>[x.kind,x.from,x.to,x.days]),expected.hotcold.phases.map(x=>[x.class,x.from,x.to,x.days]));
 for(let i=0;i<7;i++)assert.equal(p.messages.filter(m=>(new Date(m.date+'T00:00:00Z').getUTCDay()+6)%7===i).length,expected.weekday[i].n);
 const repeated=await parse(txt);assert.deepEqual(p.messages.map(m=>m.id),repeated.messages.map(m=>m.id));assert.equal(merge(p.messages,repeated.messages,'add').messages.length,count);
 const excluded=analyze(p.messages,'2026-01-01','2026-06-30',[a.daily[0].date],[a.validPauses[0].id]);assert.equal(excluded.ms.length,count);assert.equal(excluded.validPauses.length,a.validPauses.length-1);assert.notEqual(excluded.base,a.base);
});
test('Importfehler, Kollision, Multiline, identische Sendungen und Randfälle',async()=>{
 await assert.rejects(parse(''),/Keine/);await assert.rejects(parse('31.02.2026, 10:00 - A: Hallo'),/Ungültige/);
 const txt='01.01.2026, 10:00 - A: Hallo\nFortsetzung\n01.01.2026, 10:00 - A: Hallo\nFortsetzung\n01.01.2026, 10:01 - B: Ja';
 const p=await parse(txt);assert.equal(p.messages.length,3);assert.notEqual(p.messages[0].id,p.messages[1].id);
 const changed=await parse(txt.replaceAll('Hallo','Anders'));assert.throws(()=>merge(p.messages,changed.messages,'add'),/kollision/i);
 assert.equal(merge(p.messages,[p.messages[0],p.messages[2]],'replace').messages.length,2);
 assert.deepEqual(tokens("don't E-Mail 123 https://example.invalid 👩‍💻"),["don't","e-mail"]);assert.equal(emojis('👩‍💻🇩🇪👍🏽1️⃣').length,4);
 const a=analyze(p.messages,'2026-01-02','2026-01-02');assert.equal(a.peak,0);assert.deepEqual(a.windows,[]);assert.equal(a.hotcoldStatus,'insufficient-data');
});
test('Leerer Start und keine Fixture-/Mock-Imports im Browsercode',async()=>{
 const app=await readFile(new URL('../app.js',import.meta.url),'utf8');assert.match(app,/let chats=\[\]/);assert.doesNotMatch(app,/fetch\(|tests\/v1|mockCompanion|legacy/);
});

