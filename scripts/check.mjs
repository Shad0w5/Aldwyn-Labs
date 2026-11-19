import {readFile,readdir,stat} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
async function walk(dir){let files=[];for(const entry of await readdir(dir,{withFileTypes:true})){const p=path.join(dir,entry.name);files.push(...entry.isDirectory()?await walk(p):[p]);}return files;}
const files=await walk(root),pages=files.filter(p=>p.endsWith('.html'));
const errors=[];
const docs=new Map();
const approvedLiveUrls=new Set(['https://www.pjsweeney.ie/','https://carwales.ie/']);
for(const file of pages){
 const text=await readFile(file,'utf8');const ids=[...text.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 if(new Set(ids).size!==ids.length)errors.push(`${file}: duplicate IDs`);
 if((text.match(/<h1[\s>]/g)||[]).length!==1)errors.push(`${file}: expected one h1`);
 for(const required of ['<title>','name="description"','noindex, nofollow','id="main"','aria-label="Main navigation"'])if(!text.includes(required))errors.push(`${file}: missing ${required}`);
 docs.set(file,{text,ids:new Set(ids)});
}
for(const [file,{text}] of docs){
 for(const match of text.matchAll(/\b(href|src|srcset)="([^"]+)"/g)){
  const raw=match[2].replaceAll('&amp;','&');
  const urls=match[1]==='srcset'?raw.split(',').map(item=>item.trim().split(/\s+/)[0]):[raw];
  for(const url of urls){
   if(/^(?:https?:|data:|mailto:|tel:)/.test(url)){if(!url.startsWith('data:')&&!(match[1]==='href'&&approvedLiveUrls.has(url)))errors.push(`${file}: unexpected external endpoint ${url}`);continue;}
   const [route,hash]=url.split('#');const pathname=route.split('?')[0];let target=pathname.startsWith('/')?path.join(root,pathname):path.resolve(path.dirname(file),pathname||path.basename(file));
   try{if((await stat(target)).isDirectory())target=path.join(target,'index.html');await stat(target);}catch{errors.push(`${file}: missing ${url}`);continue;}
   if(hash&&!docs.get(target)?.ids.has(hash))errors.push(`${file}: broken anchor ${url}`);
  }
 }
 for(const link of text.matchAll(/<a\b[^>]*href="(https:[^"]+)"[^>]*>/g)){
  if(!link[0].includes('target="_blank"')||!link[0].includes('rel="noopener noreferrer"'))errors.push(`${file}: live link must safely open in a new tab`);
 }
 for(const frame of text.matchAll(/<iframe\b[^>]*>/g))if(/\ssrc=/.test(frame[0]))errors.push(`${file}: live frame must start without a remote src`);
}
const start=await readFile(path.join(root,'start/index.html'),'utf8');
if(!/<button[^>]+type="submit"[^>]+disabled/.test(start))errors.push('Brief submission must start disabled until JS installs local handling.');
if(/<form[^>]+(?:action=|method="get")/.test(start))errors.push('Brief form must not send personal data.');
for(const file of ['src/app.js','dist/app.js']){const s=await readFile(file,'utf8');if(/\b(?:fetch|XMLHttpRequest|sendBeacon|localStorage|sessionStorage)\s*[.(]/.test(s))errors.push(`${file}: unexpected data transmission/storage`);}
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`Checked ${pages.length} pages: unique IDs, headings, metadata, local links/assets, cross-page anchors and local-only form safeguards.`);

