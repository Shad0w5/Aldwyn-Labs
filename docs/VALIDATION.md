# Latest imagery revision — 19 November 2026

- Three generated artworks visually inspected in generation output; no text, invented client UI, team or logo introduced. Six local WebP encodings are 640/1120px wide, all below 50KB each. Shared helper emits dimensions, responsive srcset, decorative empty alt and a readable caption.
- npm run build and npm run check pass for nine pages. Prior portfolio and local brief behavior are unchanged.
- New browser refresh was rejected by the cloud browser URL security policy. No workaround attempted. Earlier browser and screenshot evidence below applies to the previous architecture-photo revision, not this new imagery layout. Fresh desktop/phone visual acceptance remains pending.
- Independent critic reviewed the final source and found no blocking issue: old grayscale/sizing rules are overridden, Care remains square, decorative alt text is appropriate and WebP descriptors match assets. Rendered crop/height remains unverified.
- No deployment, DNS, purchases or contact delivery added. Changes remain on website/editorial-polish.

# Validation — editorial redesign, 19 November 2026

These checks apply to website/editorial-polish based on 8c7344e. Earlier checks of the previous layout do not establish the current layout's behavior. This review does not publish the redesign or change Render.

## Automated

- npm run build: nine pages generated from the shared shell and page modules; stale HTML (including the temporary responsive harness) removed, permanent assets retained.
- npm run check: application/build JavaScript syntax, unique IDs, one H1 per page, metadata/noindex/main navigation, local assets/routes, query-bearing links, cross-page anchors and safe approved external links pass.
- The asset checker now validates each srcset candidate rather than treating a candidate list as one path.
- Brief HTML submit remains disabled until local handling is installed. No form action/GET delivery and no application fetch/XHR/beacon/browser-storage APIs are present.

## Browser checks

Supported ChatGPT Work preview at http://127.0.0.1:4173/, Chromium. Desktop viewport was approximately 1363px wide (1348px content with scrollbar at some observations).

- Home, Services, Care, Portfolio, Studio, Start and P.J. Sweeney detail visited. Homepage hero, actual project imagery, landscape overlapping work card, portfolio rows, care plan panel, studio and form layouts inspected. Homepage and inspected detail had equal scroll/client width; loaded image checks showed no broken images at the inspected positions.
- All nine routes were visited in a temporary same-origin iframe at 390, 320 and 768px outer widths, producing 375, 305 and 753px content widths. All 27 checks had scrollWidth equal to clientWidth and the expected H1. This is browser-frame QA, not physical-device emulation.
- Phone home and tablet home/studio inspected visually. Mobile menu opened; Escape closed it and returned focus to the toggle. The native care FAQ opened with Enter. Sticky header and visible keyboard focus were observed.
- Actual “Shape your care brief” and “Discuss a showcase” links opened Start with the expected selection. Care hid/disabled the extras fieldset; showcase preselected the approved checkbox. Four service options remained available.
- With synthetic review@example.com data, a care brief included the existing URL and omitted extras, displayed the unsent message, copied the correct text and raised a successful download event. Changing to redesign hid stale output and restored extras. An invalid existing URL was rejected by native validation, with focus on the URL field. No real contact data was transmitted or enquiry delivered.

## Independent review

Two page implementation agents and a separate critic reviewed the integrated source. The critic found no consequential content or UI-contract defect. Their only check failure came from the intentionally temporary QA HTML; it was removed by the final rebuild before the final successful checks. The critic requested tablet hero/menu verification, which was performed.

## Evidence

Viewport captures are stored in docs/images/:
- editorial-home-2026-11-19.jpg
- editorial-work-2026-11-19.jpg
- editorial-care-2026-11-19.jpg

A full-page export produced inconsistent responsive-logo rendering despite normal viewport/DOM observations; that export is not included as evidence. The saved captures use the live viewport screenshot API.

The new photograph is locally hosted in two WebP encodings: 173806 bytes (1600px width) and 42498 bytes (800px width). Existing local fonts and project snapshots are retained. No Lighthouse score, field performance measurement or cross-browser certification is claimed.

## Limits and launch work

No Safari/Firefox or physical-device checks, full accessibility/security audit, email delivery, production DNS/hosting change or launch acceptance performed. Browser extension metadata errors appeared in the tool console; these are not attributed to the website application. All pages remain noindex/nofollow, which is not access control.

The founder's existing Render URL is separate from this isolated review branch. Its final settings and live behavior need a separate check before deployment. Business contact details and real enquiry handling, custom domain, final care terms, tiny favicon and founder visual approval remain open.

## Retained project-source observations

The founder requested https://www.pjsweeney.ie/ and https://carwales.ie/ as portfolio entries. Both were captured at 1348 × 926 on 19 November 2026. Carwales returned X-Frame-Options: sameorigin; a real P.J. Sweeney iframe attempt refused to connect. The portfolio therefore uses dated screenshots and protected native new-tab links, with no remote iframe or bypass. Copy describes observable features and accurate status, without invented delivery roles or measured outcomes. Neither client site was modified.
