import {mkdir,writeFile,readFile,copyFile,readdir,unlink} from 'node:fs/promises';
import path from 'node:path';
import mainPages from '../src/pages/main.mjs';
import servicePages from '../src/pages/services.mjs';
import portfolioPages from '../src/pages/portfolio.mjs';
import studioPage from '../src/pages/studio.mjs';

const notFound={path:'/404/',nav:'',title:'Page not found — Aldwyn Labs',description:'This page could not be found. Return to Aldwyn Labs or explore our website services.',body:`<section class="container section error-page"><p class="eyebrow">404 / Page not found</p><h1>This page has<br><span class="iris">moved on.</span></h1><p class="lead">The address may have changed, or the link may be incomplete. Find your way back below.</p><div class="svc-actions"><a class="button button-primary" href="/">Back to home</a><a class="text-link" href="/services/">Explore the services</a></div></section>`};
const pages=[...mainPages,...servicePages,...portfolioPages,studioPage,notFound];
const routes=new Set();
for(const page of pages){
 if(!/^\/(?:[a-z0-9-]+\/)*$/.test(page.path)||routes.has(page.path))throw new Error(`Invalid or duplicate route: ${page.path}`);
 routes.add(page.path);
}
// HTML in dist is generated. Remove stale routes after renames/removals; keep assets.
async function cleanHtml(directory){
 for(const entry of await readdir(directory,{withFileTypes:true})){
  const file=path.join(directory,entry.name);
  if(entry.isDirectory())await cleanHtml(file);else if(entry.name.endsWith('.html'))await unlink(file);
 }
}
await mkdir('dist',{recursive:true});await cleanHtml('dist');
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const logo=`<picture><source media="(max-width: 360px)" srcset="/assets/monogram.svg"><img src="/assets/logo-web.svg" width="1100" height="360" alt="Aldwyn Labs"></picture>`;
function navLink(page,label,url,key){return `<a href="${url}"${page.nav===key?' class="nav-active"':''}${page.path===url?' aria-current="page"':''}>${label}</a>`;}
for(const page of pages){
 const html=`<!doctype html>
<html lang="en-IE"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#211729"><meta name="description" content="${escape(page.description)}"><meta name="robots" content="noindex, nofollow"><meta property="og:title" content="${escape(page.title)}"><meta property="og:description" content="${escape(page.description)}"><meta property="og:type" content="website"><title>${escape(page.title)}</title><link rel="preload" href="/assets/fonts/Manrope-Variable.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/assets/fonts/InterVariable.woff2" as="font" type="font/woff2" crossorigin><link rel="icon" href="/assets/monogram.svg" type="image/svg+xml"><link rel="stylesheet" href="/styles.css"><script src="/app.js" defer></script></head>
<body><a class="skip-link" href="#main">Skip to content</a><header class="site-header"><div class="container header-inner"><a class="brand" href="/" aria-label="Aldwyn Labs home">${logo}</a><button class="menu-toggle" type="button" aria-label="Menu" aria-expanded="false" aria-controls="navigation"><span>Menu</span><span class="menu-lines" aria-hidden="true"></span></button><nav id="navigation" aria-label="Main navigation">${navLink(page,'Services','/services/','services')}${navLink(page,'Portfolio','/portfolio/','portfolio')}${navLink(page,'Studio','/studio/','studio')}<a class="button button-small button-outline" href="/start/"${page.nav==='start'?' aria-current="page"':''}>Plan your website</a></nav></div></header>
<main id="main" tabindex="-1">${page.body}</main>
<footer class="site-footer"><div class="container"><div class="footer-main"><div><a class="brand" href="/" aria-label="Aldwyn Labs home">${logo}</a><p>Business websites, designed and built in Ireland. Optional care when you need a hand.</p></div><nav class="footer-nav" aria-label="Footer navigation"><a href="/services/">Website design</a><a href="/portfolio/">Our work</a><a href="/website-care/">Website care</a><a href="/studio/">The studio</a><a href="/services/#website-extras">Website improvements</a><a href="/start/">Plan your website</a></nav></div><div class="footer-bottom"><p>© <span id="year">2026</span> Aldwyn Labs</p><p>Good design. Clear purpose.</p></div></div></footer></body></html>`;
 const target=page===notFound?'dist/404.html':path.join('dist',page.path,'index.html');
 await mkdir(path.dirname(target),{recursive:true}); await writeFile(target,html);
}
let css=await readFile('src/base.css','utf8')+'\n'+await readFile('src/site.css','utf8');
for(const file of ['services.css','portfolio.css']){try{css+='\n'+await readFile(`src/pages/${file}`,'utf8');}catch(e){if(e.code!=='ENOENT')throw e;}}
await writeFile('dist/styles.css',css);await copyFile('src/app.js','dist/app.js');
console.log(`Built ${pages.length-1} pages and a 404 fallback with shared navigation and local assets.`);

