import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
const root=resolve('.');
createServer(async(req,res)=>{try{const path=resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(path!==root&&!path.startsWith(root+'/')&&!path.startsWith(root+'\\'))throw Error();const file=path===root?resolve(root,'index.html'):path;const body=await readFile(file);res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json'})[extname(file)]||'application/octet-stream');res.end(body);}catch{res.writeHead(404);res.end('Nicht gefunden');}}).listen(4173,'127.0.0.1',()=>console.log('App: http://localhost:4173'));
