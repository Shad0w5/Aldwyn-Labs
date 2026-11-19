# Multi-page studio website

19 November 2026. Build request: expand the merged first template into a complete multi-page review build, with a dedicated portfolio for ongoing projects. Keep the selected AL logo and aubergine/iris identity. Publishing, DNS and purchases are excluded.

## Visitors and pages
Business owners considering a website or optional website care. No industry niche is selected. Primary action is to prepare a project brief locally while business contacts remain unconfirmed.

Home → Services / Website Care → Portfolio and individual project → Studio / process → Plan your website. Nine pages currently. Portfolio entries are Patrick J. Sweeney Solicitors (live website), Carwales (live / in progress), and the actual Aldwyn website (self-initiated / in progress). The founder explicitly requested the two client URLs be added with live previews on 19 November 2026.

## Sources and decisions
- ALDWYN-CURRENT-BRIEF.md, PROJECT-INSTRUCTIONS.md, ENGINEERING-HANDOFF.md and BUSINESS-BRIEF-AND-PLAN.md supplied in the project; newer founder facts supersede older assumptions.
- Aldwyn-Identity-and-Website-Guide.pdf (16 November 2026), supplied kit and selected SVG geometry. No logo redesign; local licensed Manrope and Inter remain proposed typography.
- Main verified at a7f230cbc7f1fb51a337aa8a00fd5cac2d41b7ec, merging PR #1. Its tree matches the previous working source. Review branch: website/multi-page-studio.
- A small dependency-free Node generator now assembles shared navigation, metadata and footer across pages. This avoids repeated chrome when expanding the static site. No framework, database or CMS is required. Tracked dist files make the result directly portable to static hosting; src is the editable source.
- No analytics, remote fonts, cookies, business contact inventions, third-party forms or network requests. Form input is held in page memory, optionally copied or downloaded by the visitor. No application-side persistence; browser autofill is controlled by the visitor’s browser.
- No indexable domain/canonical/sitemap until the destination is confirmed. All pages retain noindex/nofollow for review. This is not access control; the preview is not a production site.

## Acceptance
- All seven routes, shared navigation and cross-page links resolve.
- Portfolio listing and individual project read from the same editable data; future projects need approved content and imagery.
- Mobile CSS, visible focus, native links/FAQ controls, local fonts and reduced-motion behavior preserved.
- Form validates, prepares, invalidates stale output and offers copy/download; no send claim or GET data leakage.
- Checks and independent review recorded in VALIDATION.md; report browser constraints honestly.

## Open launch questions
Exact domain, hosting/destination, approved email/phone, enquiry delivery and data handling, final typography/UI acceptance, simplified favicon, approved additional portfolio projects. None of these are silently invented by this build.

## Portfolio extension — 19 November 2026

Add actual screenshots and individual pages for the two founder-supplied sites. Describe observable website features rather than inventing project briefs, design roles, technologies, results or testimonials. Native live-preview links open the websites in separate tabs because both sites block embedded framing. Exact URLs and source observations are recorded in README and VALIDATION. Aldwyn remains unpublished; no client website was modified.
