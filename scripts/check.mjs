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
// Catch stale service buttons and unconnected pages when the offer or routes change.
const serviceValues=new Set([...start.matchAll(/<option value="([^"]+)"/g)].map(match=>match[1]));
const extraValues=new Set([...start.matchAll(/name="extras" value="([^"]+)"/g)].map(match=>match[1]));
const reachable=new Set([path.join(root,'index.html')]);
const pending=[...reachable];
while(pending.length){
 const file=pending.pop();
 for(const match of docs.get(file).text.matchAll(/<a\b[^>]*href="([^"#]+)"/g)){
  const href=match[1].replaceAll('&amp;','&');
  if(!href.startsWith('/'))continue;
  const url=new URL(href,'https://review.invalid');
  if(url.pathname==='/start/'){
   if(url.searchParams.has('service')&&!serviceValues.has(url.searchParams.get('service')))errors.push(`${file}: unknown brief service ${href}`);
   for(const extra of url.searchParams.getAll('extra'))if(!extraValues.has(extra))errors.push(`${file}: unknown brief extra ${href}`);
  }
  const target=path.join(root,url.pathname.endsWith('/')?url.pathname+'index.html':url.pathname);
  if(docs.has(target)&&!reachable.has(target)){reachable.add(target);pending.push(target);}
 }
}
for(const file of docs.keys())if(path.basename(file)!=='404.html'&&!reachable.has(file))errors.push(`${file}: no navigation path from home`);
const css=await readFile(path.join(root,'styles.css'),'utf8');
for(const match of css.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)){
 const url=match[1];if(url.startsWith('data:'))continue;
 if(!url.startsWith('/')){errors.push(`Unexpected stylesheet asset ${url}`);continue;}
 try{await stat(path.join(root,url));}catch{errors.push(`Missing stylesheet asset ${url}`);}
}

if(!/<button[^>]+type="submit"[^>]+disabled/.test(start))errors.push('Brief submission must start disabled until JS installs local handling.');
if(/<form[^>]+(?:action=|method="get")/.test(start))errors.push('Brief form must not send personal data.');
for(const file of ['src/app.js','dist/app.js']){const s=await readFile(file,'utf8');if(/\b(?:fetch|XMLHttpRequest|sendBeacon|localStorage|sessionStorage)\s*[.(]/.test(s))errors.push(`${file}: unexpected data transmission/storage`);}
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`Checked ${pages.length} pages: unique IDs, headings, metadata, local links/assets, cross-page anchors, home reachability, brief routes, CSS assets and local-only form safeguards.`);

