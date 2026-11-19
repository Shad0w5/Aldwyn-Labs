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
    return `<figure class="work-figure"><div class="work-identity"><span class="work-identity-rule" aria-hidden="true"></span><p class="work-identity-kicker">ALDWYN LABS</p><img src="/assets/monogram.svg" alt="Aldwyn’s interlocking AL monogram" width="480" height="426"><p class="work-identity-line">Good design.<br><span>Clear purpose.</span></p></div><figcaption>Studio identity and website direction · In progress</figcaption></figure>`;
  }
  return `<figure class="work-figure"><div class="work-placeholder"><p class="eyebrow">${escape(project.category)}</p><p>${escape(project.title)}</p></div><figcaption>Project preview being prepared</figcaption></figure>`;
}

function projectRow(project, index) {
  return `<article class="work-entry${index % 2 ? ' work-entry-reverse' : ''}"><a class="work-image-link" href="${projectPath(project)}" aria-label="Explore ${escape(project.title)}">${artwork(project, index === 0)}</a><div class="work-entry-copy"><div class="work-entry-meta"><span>${escape(project.category)}</span><span class="work-status">${escape(project.status)}</span></div><h2><a href="${projectPath(project)}">${escape(project.title)}</a></h2><p>${escape(project.summary)}</p><ul class="work-disciplines" aria-label="Project focus">${project.disciplines.map(item => `<li>${escape(item)}</li>`).join('')}</ul><div class="work-actions"><a class="text-link" href="${projectPath(project)}">Explore the project</a>${liveLink(project)}</div></div></article>`;
}

const listing = {
  path: '/portfolio/', nav: 'portfolio', title: 'Portfolio — Aldwyn Labs',
  description: 'Explore Aldwyn Labs website projects: Patrick J. Sweeney Solicitors, Carwales and our own studio website. See the work and open the live sites.',
  body: `<section class="container work-intro" aria-labelledby="portfolio-title"><div><p class="eyebrow">The portfolio</p><h1 id="portfolio-title">Work,<br><span class="iris">in context.</span></h1></div><div class="work-intro-note"><p>A solicitor practice. An automotive catalogue. Our own studio.</p><p>Different websites, each with its own purpose. Take a look at what’s live and what’s still taking shape.</p><a class="text-link" href="#projects">Browse the projects</a></div></section><section class="container work-collection" id="projects" aria-label="Website projects">${projects.map(projectRow).join('')}</section><section class="container work-ending"><p class="eyebrow">A website of your own</p><h2>What does your<br>business need?</h2><a class="button button-primary" href="/start/">Plan your website</a></section>`
};

const detailPages = projects.map(project => ({
  path: projectPath(project), nav: 'portfolio', title: `${project.title} — Portfolio — Aldwyn Labs`,
  description: `${project.title}: ${project.category.toLowerCase()}. Explore the website and its current project status.`,
  body: `<section class="container work-detail-intro" aria-labelledby="project-title"><a class="text-link work-back" href="/portfolio/">All projects</a><div class="work-detail-topline"><p class="eyebrow">${escape(project.category)}</p><span class="work-status">${escape(project.status)}</span></div><h1 id="project-title">${escape(project.title)}<span class="iris">.</span></h1><div class="work-detail-lead"><p class="lead">${escape(project.summary)}</p>${liveLink(project,'button button-primary')}</div></section><div class="container work-detail-cover">${artwork(project,true)}</div><section class="container work-overview" aria-labelledby="brief-title"><div><p class="eyebrow">${escape(project.briefLabel || 'The brief')}</p><h2 id="brief-title">${escape(project.briefHeading || 'A home for the studio.')}</h2></div><div class="work-overview-copy"><p>${escape(project.brief)}</p><dl class="work-facts"><div><dt>Project</dt><dd>${escape(project.type)}</dd></div><div><dt>Status</dt><dd>${escape(project.status)}</dd></div><div><dt>Focus</dt><dd>${project.disciplines.map(escape).join(' / ')}</dd></div></dl></div></section>${project.decisions.length ? `<section class="work-decisions"><div class="container"><p class="eyebrow">The design direction</p><div class="work-decision-list">${project.decisions.map(decision=>`<article><h3>${escape(decision.title)}</h3><p>${escape(decision.text)}</p></article>`).join('')}</div></div></section>` : ''}<section class="container work-scope" aria-labelledby="scope-title"><div><p class="eyebrow">${escape(project.scopeLabel || 'In development')}</p><h2 id="scope-title">${escape(project.scopeHeading || 'What’s taking shape.')}</h2></div><div><ul class="work-scope-list">${project.scope.map(item=>`<li>${escape(item)}</li>`).join('')}</ul><div class="work-progress"><h3>Where it stands</h3><p>${escape(project.progress)}</p></div>${project.liveUrl ? `<div class="work-detail-live"><p>Explore the current website in its own tab.</p>${liveLink(project)}</div>` : ''}</div></section><section class="container work-ending work-ending-compact"><a class="text-link" href="/portfolio/">Back to the portfolio</a><h2>A website for<br>the work you do.</h2><a class="button button-primary" href="/start/">Prepare your brief</a></section>`
}));

export default [listing, ...detailPages];
