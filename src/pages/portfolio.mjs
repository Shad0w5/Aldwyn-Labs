import { projects } from '../data/projects.mjs';

const escape = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const projectPath = project => `/portfolio/${project.slug}/`;

// This is original HTML/CSS artwork, not a screenshot or a live client website.
function projectArtwork(project, large = false) {
  if (project.preview) {
    return `<figure class="project-visual${large ? ' project-visual-large' : ''}"><img class="project-preview-image" src="${escape(project.preview.src)}" alt="${escape(project.preview.alt)}" loading="lazy"><figcaption class="project-art-caption">${escape(project.preview.caption)}</figcaption></figure>`;
  }
  if (project.artwork !== 'aldwyn') {
    return `<div class="project-visual${large ? ' project-visual-large' : ''}"><div class="project-preview-pending"><span class="eyebrow">${escape(project.category)}</span><p>${escape(project.title)}</p></div><p class="project-art-caption">Project preview being prepared</p></div>`;
  }
  return `<div class="project-visual${large ? ' project-visual-large' : ''}">
    <div class="portfolio-art" aria-hidden="true">
      <span class="portfolio-art-orbit"></span>
      <div class="portfolio-art-window">
        <div class="portfolio-art-bar"><span></span><span></span><span></span></div>
        <div class="portfolio-art-content">
          <img class="portfolio-art-logo" src="/assets/logo.svg" width="1130" height="360" alt="">
          <div class="portfolio-art-headline">Good design.<br><span>Clear purpose.</span></div>
          <div class="portfolio-art-rule"></div>
          <div class="portfolio-art-lines"><span></span><span></span></div>
          <span class="portfolio-art-button"></span>
          <img class="portfolio-art-mark" src="/assets/monogram.svg" width="480" height="426" alt="">
        </div>
      </div>
    </div>
    <p class="project-art-caption">${escape(project.title)} · Website design study</p>
  </div>`;
}

function projectCard(project) {
  return `<article class="project-showcase">
    <a class="project-image-link" href="${projectPath(project)}" aria-label="View ${escape(project.title)} project">${projectArtwork(project)}</a>
    <div class="project-info">
      <div class="project-meta"><span class="badge">${escape(project.status)}</span><span>${escape(project.type)}</span></div>
      <h2><a href="${projectPath(project)}">${escape(project.title)}</a></h2>
      <p>${escape(project.summary)}</p>
      <ul class="project-disciplines" aria-label="Project disciplines">${project.disciplines.map(item => `<li>${escape(item)}</li>`).join('')}</ul>
      <a class="text-link" href="${projectPath(project)}">Explore the project</a>
    </div>
  </article>`;
}

const listing = {
  path: '/portfolio/',
  nav: 'portfolio',
  title: 'Portfolio — Aldwyn Labs',
  description: 'Explore Aldwyn Labs projects, with their context, design decisions and current status. Our studio website is the first work in progress.',
  body: `<section class="container page-intro portfolio-intro" aria-labelledby="portfolio-title">
    <p class="eyebrow">The portfolio</p>
    <h1 id="portfolio-title">Ideas taking<br><span class="iris">shape.</span></h1>
    <p class="lead">A closer look at the work and the decisions behind it. Starting with our own corner of the web.</p>
  </section>
  <section class="container portfolio-projects" aria-label="Projects">${projects.map(projectCard).join('')}</section>
  <section class="container section portfolio-context" aria-labelledby="portfolio-context-title">
    <p class="eyebrow">A growing collection</p>
    <div><h2 id="portfolio-context-title">The process belongs<br>in the picture.</h2><p>Work takes shape through decisions, feedback and refinement. Each project is labelled with its context and current status, so you can see what is in progress and what has been completed.</p><p>More projects will be added as there is work ready to share.</p></div>
  </section>
  <section class="container section"><div class="cta-band"><div><p class="eyebrow">Your next project</p><h2>What could we<br>make together?</h2></div><a class="button button-primary" href="/start/">Plan your website</a></div></section>`
};

const detailPages = projects.map(project => ({
  path: projectPath(project),
  nav: 'portfolio',
  title: `${project.title} — Portfolio — Aldwyn Labs`,
  description: `${project.title}: ${project.category.toLowerCase()}, ${project.status.toLowerCase()}. Explore the brief, design decisions and work being developed.`,
  body: `<section class="container page-intro project-detail-intro" aria-labelledby="project-title">
    <a class="text-link project-back-link" href="/portfolio/">All projects</a>
    <div class="project-meta"><span class="badge">${escape(project.status)}</span><span>${escape(project.type)}</span></div>
    <h1 id="project-title">${escape(project.title)}<span class="iris">.</span></h1>
    <p class="lead">${escape(project.summary)}</p>
    <ul class="project-disciplines" aria-label="Project disciplines">${project.disciplines.map(item => `<li>${escape(item)}</li>`).join('')}</ul>
  </section>
  <div class="container project-detail-art">${projectArtwork(project, true)}</div>
  <section class="container section project-story" aria-labelledby="brief-title"><p class="eyebrow">The brief</p><div class="prose"><h2 id="brief-title">A clear starting point.</h2><p>${escape(project.brief)}</p></div></section>
  <section class="project-decisions"><div class="container section"><div class="section-heading"><p class="eyebrow">The thinking</p><div><h2>Every detail has a job.</h2><p>A few choices shaping this project.</p></div></div><div class="project-decision-grid">${project.decisions.map(decision => `<article><h3>${escape(decision.title)}</h3><p>${escape(decision.text)}</p></article>`).join('')}</div></div></section>
  <section class="container section project-story" aria-labelledby="scope-title"><p class="eyebrow">In development</p><div class="prose"><h2 id="scope-title">What’s taking shape.</h2><ul class="checklist">${project.scope.map(item => `<li>${escape(item)}</li>`).join('')}</ul><div class="project-progress-note"><h3>Current status</h3><p>${escape(project.progress)}</p></div></div></section>
  <section class="container section"><div class="cta-band"><div><p class="eyebrow">A website of your own</p><h2>Start with<br>your business.</h2></div><a class="button button-primary" href="/start/">Prepare a project brief</a></div></section>`
}));

export default [listing, ...detailPages];
