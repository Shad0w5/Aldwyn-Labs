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

Current artwork is generated for Aldwyn and hosted locally. It does not represent an office or client project. Historical photograph licences remain in `docs/ASSET-SOURCES.md`; generated artwork prompts are in `docs/BRAND-ART-PROMPTS.md`.

## Brief builder and launch boundaries

Service links accept `service=new`, `redesign`, `landing`, `improvements`, `care` or `guidance`. Optional `extra` values are `pages`, `showcase`, `connection`, `migration`. Unknown values are ignored. Care hides/disables extras. The optional existing URL is held as text; the application does not request it.

The form prepares a local brief with copy/download. It has no submission endpoint, application storage, analytics or third-party scripts. HTML submit starts disabled until JavaScript handling is installed. Do not present it as enquiry delivery without implementing and testing a real contact flow and appropriate data handling.

All pages retain noindex/nofollow for review. This is not access control. Business email/phone, real enquiry delivery, custom domain, final care fees/allowances/support terms, final design acceptance and launch approval remain open. No canonical domain, sitemap or contact details are invented.

See `docs/BUILD-BRIEF.md`, `docs/VALIDATION.md`, `docs/DESIGN-RESEARCH.md` and `docs/ASSET-SOURCES.md` for decisions, checks and sources. Current review evidence is listed in `docs/VALIDATION.md`; the older `editorial-*` captures show superseded artwork. The final integration screenshot is `docs/images/final-home-2026-11-19.jpg`.


Current imagery update (19 November 2026): custom generated abstract artwork replaces the repeated architecture photograph. Assembly is used on Home, Composition on Services/Studio, and Continuity on Care. Use the responsive local WebP files in dist/assets/brand-art with src/brand-art.mjs. Keep real project screenshots on portfolio pages. The images are not a replacement logo or evidence of client work; prompts and provenance are in docs/BRAND-ART-PROMPTS.md and docs/ASSET-SOURCES.md.


Website wordmark update: the founder requested larger lettering on 19 November 2026. Use dist/assets/logo-web.svg for the website horizontal lockup; original logo.svg is retained. AL construction is unchanged. In-page planning art and the illustrated Care workflow are now part of the review design. Care remains one scoped package with an optional content allowance and individually agreed pricing.


## Integration checkpoint — 19 November 2026

The homepage, Services and footer share the three-part offer: design/build, improvements and optional care. Nine main routes plus a generated `dist/404.html` fallback use one header/footer and the existing monogram favicon. The 404 document was visually checked directly; the production host must still be checked for missing-URL status and fallback handling after an authorized deployment. Canonical URLs, sitemap and live indexing wait for a confirmed domain and launch. All review documents retain noindex.

The brief builder is functional for preparation, copy and download only. Confirm a real business destination and data handling before implementing enquiry delivery. Do not treat it as a working contact submission. See the latest validation checkpoint for actual browser checks, remaining launch dependencies and the next frontend review.


## Feedback revision — 19 November 2026

The homepage now features a real project, specific benefit-led copy and a pre-launch enquiry notice. The original overlapping landscape portfolio card is retained. Studio explains the one-person working relationship. Client project notes describe verified site features; delivery roles, technologies and outcome metrics are not invented. The Aldwyn project documents the actual static stack.

The brief is progressively enhanced into three steps: goal, optional details, review/save. Only the project description is required; name/email are optional and collapsed. Care still disables extras. A blank `/assets/Aldwyn-Website-Brief.txt` is generated for an offline/no-JavaScript fallback. This remains local preparation, not enquiry delivery. Mobile quick actions are omitted on Start and 404 to avoid covering the form. Small process reveals respect reduced motion.

`src/social-card.html` is the editable share-card layout. Its browser capture is `dist/assets/social-card.jpg` (1363 × 936). The important content is centred for social crops. To regenerate, temporarily copy the source into dist for managed browser review and capture the viewport; remove the temporary preview before rebuilding. The 1200 × 630 clipped capture API timed out, so the saved export retains its actual dimensions. Re-test platform crops against the public URL before launch.

Builds can take `PUBLIC_SITE_URL` as an HTTPS origin once the actual domain is confirmed. It supplies absolute canonical/og:url/share-image URLs; without it, canonical/og:url are omitted and the image path is local for review. A synthetic `https://example.com` configuration was tested and removed; it is not a business domain. Indexing remains disabled regardless of that variable. Configure real origin and launch indexing separately, then test social previews. No domain, inbox, phone, booking service, analytics, legal details or pricing was invented.

Current evidence is docs/images/feedback-home-2026-11-19.jpg. See the latest VALIDATION section for browser limitations, including the final refresh that stopped initialising scripts.
