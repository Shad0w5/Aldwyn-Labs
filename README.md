# Aldwyn Labs website

An unpublished seven-page studio website, preserving the selected extended AL monogram and dark aubergine/iris identity. Source is maintained in this repository. GitHub access is verified; a separate Codex Cloud environment or automatic chat/repository sync has not been verified.

## Work on the site

Requires Node.js 22 or newer. No package installation or third-party dependencies.

```sh
npm run build
npm run check
```

Edit `src/`, then rebuild. `scripts/build.mjs` combines page descriptors with shared navigation, metadata and footer; generated HTML/CSS/JS is tracked in `dist/`. HTML under `dist/` is regenerated and stale HTML routes are removed on each build. Keep permanent assets under `dist/assets/`; do not hand-edit generated pages.

In ChatGPT Work, use `sites-preview start /workspace/sites/aldwyn-labs` and the exact returned URL. If a preview is already running, use `sites-preview status`. Outside that managed environment, a static server can serve `dist/`, for example `python3 -m http.server 3000 --directory dist`.

## Pages and editable sources

| Route | Source |
| --- | --- |
| `/` | `src/pages/main.mjs` |
| `/services/` | `src/pages/services.mjs` |
| `/website-care/` | `src/pages/services.mjs` |
| `/portfolio/` | `src/pages/portfolio.mjs` and `src/data/projects.mjs` |
| `/portfolio/aldwyn-labs/` | Generated from project data |
| `/studio/` | `src/pages/main.mjs` |
| `/start/` | `src/pages/main.mjs` and `src/project-form.mjs` |

Shared behavior: `src/app.js`. Styling: `src/base.css`, `src/site.css` and `src/pages/portfolio.css`. Shared shell: `scripts/build.mjs`. Exact brand assets and font licences: `dist/assets/`.

## Adding portfolio projects

Add an approved object to the `projects` array in `src/data/projects.mjs`, using the existing entry as a schema. Give it a unique lowercase hyphenated `slug`, accurate `status` and `type`, summary, disciplines, brief, design decisions, scope and progress statement. The listing and individual route are generated together.

For a preview image, add the permitted image to `dist/assets/projects/` and set `preview: {src: '/assets/projects/example.webp', alt: 'Meaningful description', caption: 'Accurate context'}`. Only the current Aldwyn entry uses `artwork: 'aldwyn'`. Entries without imagery show a neutral project panel. Do not copy that artwork setting onto unrelated projects. Confirm permission for client names, content, imagery and links. Label concepts and work in progress; no invented results. Rebuild and check all links before committing. Removing a data entry removes its generated HTML on the next build.

## Form and launch boundaries

The project-start form is a local brief builder. It validates input, prepares text, and offers copy/download. It has no submission endpoint, online storage, analytics or third-party scripts. HTML submit starts disabled until the local JavaScript handler is installed. Do not relabel it as an enquiry form without implementing and testing real delivery and appropriate data handling.

All pages are marked noindex/nofollow. This is a review setting, not access control. No site has been published or registered for hosting by this change. Domain, business email/phone, hosting, final typography/UI, simplified favicon, real enquiry handling and launch approval remain open. No canonical domain or sitemap has been invented.

See `docs/BUILD-BRIEF.md` for scope and decisions, `docs/DESIGN-RESEARCH.md` for research, and `docs/VALIDATION.md` for actual checks and remaining limits.
