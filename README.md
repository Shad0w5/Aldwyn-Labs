# Aldwyn Labs website

Nine-page business website review build, using the selected extended AL monogram and dark aubergine/iris identity. Editable source and generated static output are maintained in this GitHub repository. GitHub access is verified; a separate Codex Cloud environment and automatic chat/repository sync are not verified.

## Current review and deployment

The founder has connected Render to `website/multi-page-studio` and supplied `https://aldwyn-labs.onrender.com/`. The visual redesign is isolated on `website/editorial-polish`, based on commit `8c7344e1e5f858f7cb88906cfe359c5018b0047a`, so it does not update the connected branch. Do not merge or move it to a deployment branch without launch authorization.

For a Render Static Site serving this repository: root directory blank, build command `npm run build`, publish directory `dist`. A previous deployment served the repository root, leaving `/` unavailable while `/dist/index.html` existed; these settings were recommended, but no Render setting change or successful production recheck is claimed by this redesign.

## Work on the site

Requires Node.js 22 or newer. No package installation or third-party application dependencies.

```sh
npm run build
npm run check
```

Edit `src/`, then rebuild. `scripts/build.mjs` combines page descriptors with shared navigation, metadata and footer. Generated HTML/CSS/JS is tracked in `dist/`; stale HTML routes are removed on each build. Keep permanent assets under `dist/assets/` and do not hand-edit generated pages.

In ChatGPT Work, use `sites-preview start /workspace/sites/aldwyn-labs` and the exact returned URL. If already running, use `sites-preview status`. Outside that managed environment, any static host can serve `dist/`.

## Pages and source

| Route | Editable source |
| --- | --- |
| `/` | `src/pages/main.mjs` |
| `/services/` | `src/pages/services.mjs` |
| `/website-care/` | `src/pages/services.mjs` |
| `/portfolio/` | `src/pages/portfolio.mjs`, `src/data/projects.mjs` |
| `/portfolio/pj-sweeney/` | Generated from project data |
| `/portfolio/carwales/` | Generated from project data |
| `/portfolio/aldwyn-labs/` | Generated from project data |
| `/studio/` | `src/pages/studio.mjs` |
| `/start/` | `src/pages/main.mjs`, `src/project-form.mjs` |

Shared behavior: `src/app.js`. Styling: `src/base.css`, `src/site.css`, `src/pages/services.css`, `src/pages/portfolio.css`. Shared shell: `scripts/build.mjs`. Brand assets and font licences: `dist/assets/`.

## Adding projects and imagery

Add an approved object to `projects` in `src/data/projects.mjs`, following the current schema with a unique lowercase hyphenated slug, accurate status, summary, focus, overview and scope. Listing and detail pages generate together. Removing a data entry removes its generated page on rebuild.

For a screenshot, add the permitted file to `dist/assets/projects/` and set its `preview` source, meaningful alt text and accurate caption. Only the Aldwyn entry uses `artwork: 'aldwyn'`. Confirm client names, content, imagery and links; distinguish concepts and work in progress. Do not invent results or delivery roles.

The founder requested Patrick J. Sweeney Solicitors and Carwales on 19 November 2026. Their previews are dated browser captures and native HTTPS new-tab links. Carwales stays Live / In progress until final acceptance is confirmed. Both client sites prevent framing, so no remote site is embedded or automatically loaded. No proxy bypass is used. Captures need refreshing when the live sites change.

The locally hosted architectural photograph is an editorial texture, not an Aldwyn office or client project. Photographer, source, licence and encodings are recorded in `docs/ASSET-SOURCES.md`. Preserve those notes when replacing imagery.

## Brief builder and launch boundaries

Service links accept `service=new`, `redesign`, `care` or `guidance`. Optional `extra` values are `pages`, `showcase`, `connection`, `migration`. Unknown values are ignored. Care hides/disables extras. The optional existing URL is held as text; the application does not request it.

The form prepares a local brief with copy/download. It has no submission endpoint, application storage, analytics or third-party scripts. HTML submit starts disabled until JavaScript handling is installed. Do not present it as enquiry delivery without implementing and testing a real contact flow and appropriate data handling.

All pages retain noindex/nofollow for review. This is not access control. Business email/phone, real enquiry delivery, custom domain, final care fees/allowances/support terms, tiny favicon, final design acceptance and launch approval remain open. No canonical domain, sitemap or contact details are invented.

See `docs/BUILD-BRIEF.md`, `docs/VALIDATION.md`, `docs/DESIGN-RESEARCH.md` and `docs/ASSET-SOURCES.md` for decisions, checks and sources. Current review images are in `docs/images/editorial-*-2026-11-19.jpg`.
