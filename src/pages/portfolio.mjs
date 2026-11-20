import { projects } from '../data/projects.mjs';

const escape = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const projectPath = project => `/portfolio/${project.slug}/`;
const permittedHosts = new Set(['www.pjsweeney.ie', 'carwales.ie']);

function liveLink(project, className = 'text-link') {
  if (!project.liveUrl) return '';
  const url = new URL(project.liveUrl);
  if (url.protocol !== 'https:' || !permittedHosts.has(url.hostname)) throw new Error('Unapproved portfolio website URL');
  return `<a class="${className}" href="${escape(url.href)}" target="_blank" rel="noopener noreferrer">Live preview <span class="work-new-tab">(new tab)</span></a>`;
}

function artwork(project, eager = false) {
  if (project.preview) {
    return `<figure class="work-figure"><div class="work-image-stage work-stage-${escape(project.slug)}"><img src="${escape(project.preview.src)}" alt="${escape(project.preview.alt)}" width="1348" height="926" loading="${eager ? 'eager' : 'lazy'}" decoding="async"></div><figcaption>${escape(project.preview.caption)}</figcaption></figure>`;
  }
  if (project.artwork === 'aldwyn') {
    return `<figure class="work-figure"><div class="work-identity"><span class="work-identity-rule" aria-hidden="true"></span><p class="work-identity-kicker">ALDWYN LABS</p><img src="/assets/monogram.svg" alt="Aldwyn’s interlocking AL monogram" width="480" height="426"><p class="work-identity-line">Web design.<br><span>In detail.</span></p></div><figcaption>Studio identity and website direction · In progress</figcaption></figure>`;
  }
  return `<figure class="work-figure"><div class="work-placeholder"><p class="eyebrow">${escape(project.category)}</p><p>${escape(project.title)}</p></div><figcaption>Project preview being prepared</figcaption></figure>`;
}

function projectRow(project, index) {
  return `<article class="work-entry${index % 2 ? ' work-entry-reverse' : ''}"><a class="work-image-link" href="${projectPath(project)}" aria-label="Explore ${escape(project.title)}">${artwork(project, index === 0)}</a><div class="work-entry-copy"><div class="work-entry-meta"><span>${escape(project.category)}</span><span class="work-status">${escape(project.status)}</span></div><h2><a href="${projectPath(project)}">${escape(project.title)}</a></h2><p>${escape(project.summary)}</p><ul class="work-disciplines" aria-label="Project focus">${project.disciplines.map(item => `<li>${escape(item)}</li>`).join('')}</ul><div class="work-actions"><a class="text-link" href="${projectPath(project)}">Explore the project</a>${liveLink(project)}</div></div></article>`;
}

const clientProjects = projects.filter(project => project.liveUrl);
const studioProject = projects.find(project => project.slug === 'aldwyn-labs');
const listing = {
  path: '/portfolio/', nav: 'portfolio', title: 'Portfolio — Aldwyn Labs',
  description: 'Explore Aldwyn Labs website projects: Patrick J. Sweeney Solicitors, Carwales and our own studio website. See the work and open the live sites.',
  body: `<section class="container work-intro" aria-labelledby="portfolio-title"><div><p class="eyebrow">The portfolio</p><h1 id="portfolio-title">Website<br><span class="iris">projects.</span></h1></div><div class="work-intro-note"><p>Client websites, from practice information to product browsing.</p><p>See the pages, features and current status, then visit the live sites.</p><a class="text-link" href="#projects">Browse the projects</a></div></section><section class="container work-collection" id="projects" aria-label="Client website projects">${clientProjects.map(projectRow).join('')}</section><section class="container work-studio-project" aria-labelledby="studio-project-title"><div class="work-studio-symbol" aria-hidden="true"><img src="/assets/monogram.svg" alt="" width="480" height="426"></div><div><p class="eyebrow">Studio project / In progress</p><h2 id="studio-project-title">Our own website.</h2><p>The Aldwyn identity and website, developed together. A look at the typography, artwork and shared page system behind this site.</p><a class="text-link" href="${projectPath(studioProject)}">Inside the Aldwyn build</a></div></section><section class="container work-ending"><p class="eyebrow">A website of your own</p><h2>Planning a<br>website project?</h2><a class="button button-primary" href="/start/">Project planner</a></section>`
};

const detailPages = projects.map(project => ({
  path: projectPath(project), nav: 'portfolio', title: `${project.title} — Portfolio — Aldwyn Labs`,
  description: `${project.title}: ${project.category.toLowerCase()}. Explore the website and its current project status.`,
  body: `<section class="container work-detail-intro" aria-labelledby="project-title"><a class="text-link work-back" href="/portfolio/">All projects</a><div class="work-detail-topline"><p class="eyebrow">${escape(project.category)}</p><span class="work-status">${escape(project.status)}</span></div><h1 id="project-title">${escape(project.title)}<span class="iris">.</span></h1><div class="work-detail-lead"><p class="lead">${escape(project.summary)}</p>${liveLink(project,'button button-primary')}</div></section><div class="container work-detail-cover">${artwork(project,true)}</div><section class="container work-overview" aria-labelledby="brief-title"><div><p class="eyebrow">${escape(project.briefLabel || 'The brief')}</p><h2 id="brief-title">${escape(project.briefHeading || 'A home for the studio.')}</h2></div><div class="work-overview-copy"><p>${escape(project.brief)}</p></div></section>${project.gallery?.length ? `<section class="container work-page-study" aria-labelledby="page-study-title"><p class="eyebrow">A closer look</p>${project.gallery.map((capture,index)=>`<figure><figcaption><h2${index === 0 ? ' id="page-study-title"' : ''}>${escape(capture.title)}</h2><p>${escape(capture.caption)}</p></figcaption><div class="work-page-image"><img src="${escape(capture.src)}" width="${capture.width}" height="${capture.height}" alt="${escape(capture.alt)}" loading="lazy" decoding="async"></div></figure>`).join('')}</section>` : ''}${project.notes?.length ? `<section class="work-notes"><div class="container"><p class="eyebrow">Project notes</p><h2>Inside the website.</h2><div class="work-decision-list">${project.notes.map(note=>`<article><h3>${escape(note.title)}</h3><p>${escape(note.text)}</p></article>`).join('')}</div></div></section>` : ''}${project.decisions.length ? `<section class="work-decisions"><div class="container"><p class="eyebrow">The design direction</p><div class="work-decision-list">${project.decisions.map(decision=>`<article><h3>${escape(decision.title)}</h3><p>${escape(decision.text)}</p></article>`).join('')}</div></div></section>` : ''}<section class="container work-status-note" aria-labelledby="status-title"><p class="eyebrow">Project status</p><h2 id="status-title">${escape(project.status)}</h2><p>${escape(project.progress)}</p></section><section class="container work-ending work-ending-compact"><a class="text-link" href="/portfolio/">Back to the portfolio</a><h2>Planning your<br>own website?</h2><a class="button button-primary" href="/start/">Project planner</a></section>`
}));

export default [listing, ...detailPages];
