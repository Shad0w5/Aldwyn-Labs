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


## Wordmark, interior imagery and care package — 19 November 2026

Founder requested larger Aldwyn Labs lettering beside AL, more appropriate images beyond headers and a more developed care package. Added logo-web.svg as a website-specific lockup: exact monogram and outlined letter paths preserved, Aldwyn scaled uniformly 1.4x and LABS 1.6x within the lockup. Original logo.svg remains unchanged. Header/footer use the new version; the compact monogram remains at the narrow breakpoint.

Added a generated website-planning study inside Home and Studio process sections, actual project captures inside Services, and three native SVG illustrations explaining Care requests, updates and checks. Images support the adjacent content. Project status and local-only brief handling remain unchanged.

Care now presents one Website Care package with a quote-after-review label, maintenance scope matrix, optional content allowance, support/recovery responsibilities, exclusions and an illustrated request workflow. No prices, hours, task cadence, response guarantee or cancellation terms invented.

Nine-page build and static checks pass. XML checks confirm valid SVG, unchanged AL construction and identical letter outlines. Latest browser layout acceptance remains pending due to the previously encountered cloud URL security restriction; no new browser screenshot or full rendered-layout check is claimed. Review branch only; no deployment.


## Studio layout correction — 19 November 2026

User reported the Studio page looked broken. The current preview loaded correctly; no missing CSS/assets or horizontal overflow was reproduced. Visual inspection found the process artwork isolated at the left of a wide section, separated from its steps. Replaced that arrangement with a shared two-column grid: full 3:2 artwork on the left and numbered steps on the right. It stacks at 820px. Removed the old Studio-specific crop/margin overrides from shared site CSS. Brand, copy, services and publication settings remain unchanged.

Validation: npm run build and npm run check passed for all nine pages. The managed preview browser became accessible this turn. Visually inspected desktop hero and process and the 390px framed mobile process. DOM layout checks at iframe widths 320, 390, 768 and 1024px showed no horizontal overflow (content widths 305, 375, 753 and 1009px, excluding scrollbar). All three Studio images loaded at each width. This was a focused layout review, not a whole-site interaction retest. Temporary responsive harness removed before saving.

Evidence: docs/images/studio-process-fixed-2026-11-19.jpg. Saved to website/editorial-polish for PR #3 review; no production deployment. Next: founder review of Studio preview. If the report concerns a different deployed version or section, capture that URL/view before diagnosing further.


## Services revision — 19 November 2026

Implemented founder-approved three-part website offer: Design & build (business websites, redesigns, landing pages), Improve & extend and Care & maintain. Added native section navigation, retained #website-extras for existing links, incorporated care artwork and clarified SEO/project/care/third-party boundaries. Landing-page and improvements choices now pass through the local brief builder. No new backend, platform dependency, pricing or deployment.

Checks: npm run build and npm run check passed for all nine pages. Desktop Services hero, three project choices, improvements rows and care overview visually inspected. Framed narrow layout inspected; DOM overflow checks at frame widths 320/390/768/1024px passed (content widths 305/375/753/1009px). All four Services images loaded. Keyboard Enter activated the design section link and SEO FAQ. Browser checked landing-page CTA preselection and locally prepared text includes the landing-page choice and not-sent notice. Improvement connection CTA selected improvements + connection; changing to care hid and disabled extras. No actual information delivery is implemented or claimed. Temporary QA HTML removed before final build.

Independent source critic found no blockers and suggested clarifying optional post-launch help and existing-site form guidance; both corrected. Scope of browser checks is the revised Services page and affected brief routes, not a full repeat of unrelated site flows. Screenshots: docs/images/services-revised-2026-11-19.jpg and services-care-overview-2026-11-19.jpg. Saved on website/editorial-polish for PR #3; Render branch unchanged. Next: founder visual review.


## Whole-site integration checkpoint — 19 November 2026

Scope: nine main pages plus generated 404.html; connect the approved frontend and fix cross-page inconsistencies. Updated Home services, footer improvement labels, favicon reference, error recovery and current README/AGENTS guidance. Added static guards for home reachability, known brief routes/extras and local CSS/font files.

- npm run build and npm run check passed: ten HTML documents, local links/assets, cross-page anchors, unique IDs, headings, metadata, home reachability, service queries, CSS assets and local-only form safeguards.
- Browser inspected Home, Services, Care, Portfolio, each of the three project detail routes, Studio, Start and direct 404 document. Followed listing/detail/back links and shared navigation, Services section links and 404 home recovery. Existing live-site buttons retain native protected new-tab links; remote sites were not re-tested this turn.
- All ten documents checked in browser frames at 320, 390 and 768px widths (305, 375 and 753px content widths). No document horizontal overflow. The intentionally clipped rotated identity rule extends within its overflow-hidden artwork panel and does not widen the document. Narrow Home visually inspected; previous focused Services/Studio mobile checks remain supplementary evidence. This is responsive sampling, not a device/browser certification.
- Mobile menu opens; Escape closes it. Native section-link and FAQ keyboard behavior was checked during the Services pass. Current menu also checked in the final Home frame.
- Brief native required-field validation rejects empty input. All six project types produce the corresponding local project line; care omits extras. Early immediate DOM reads caught pending UI updates for new/care; rechecked after the UI settled and both passed. Copy reported success, a download event returned a file, and editing input hid stale output. No enquiry was transmitted. The downloaded file’s contents were not independently opened; its source text was inspected in the prepared brief.
- Independent source critic found no blockers and confirmed new 404 wiring; stale README query/evidence references corrected. Browser log sampling returned extension metadata errors, not a site-code finding; this is not a guarantee of zero errors in every browser.
- Temporary responsive QA HTML removed by final build. Final homepage evidence: docs/images/final-home-2026-11-19.jpg.

Status: frontend integration checkpoint complete for review on website/editorial-polish (PR #3); no deployment or Render settings change. Remaining launch tasks: verified business contact destination and enquiry delivery/data handling, approved care pricing/allowances/support terms, domain and indexability/canonical/sitemap configuration, founder acceptance and launch permission. The direct 404 document renders; actual production missing-URL status/fallback mapping is unverified. Favicon references the exact existing monogram; a dedicated tiny-size redesign was not made. Next action: founder’s final frontend refinement.

## Review-feedback improvement pass — 19 November 2026

Goal: improve the visitor experience from the founder-supplied 65/100 review, without fabricating contacts, prices, project results, platforms or business details. The score was not independently reproduced and no replacement score is claimed.

Implemented: work-led homepage hero with actual Sweeney screenshot; more concrete Home/Services/Care copy; truthful one-person Studio statement and clearer point of view; renamed process link; feature-based project notes and verified Aldwyn stack; progressive three-step local brief with only description required, optional identity/context and blank text fallback; mobile actions with safe-area clearance; reduced-motion-aware process reveals; social-card asset and optional PUBLIC_SITE_URL metadata. Existing AL/palette, landscape portfolio card, project status, noindex and review/deployment boundary retained.

Checks completed:
- Default build and static checks pass for nine main routes plus 404. Configured-origin build/check also passed using synthetic https://example.com; final output rebuilt without that variable. Canonical links are permitted only for each document’s exact configured-origin URL. This did not configure a real domain or change indexing.
- Browser guided brief passed empty-description rejection, all six service choices, care omission of extras, optional identity (blank name/email), invalid optional email rejection, back/edit navigation, plain local output, copy status and a dynamic download event. Stage headings receive focus and the progress header scrolls into view. Service query parsing remains allowlisted. Earlier immediate route reads sometimes preceded deferred initialisation; final service preselection recheck is pending after the later browser failure below.
- Browser inspected revised Home hero, Studio, guided brief and share-card layout. Thirty framed HTML/CSS layout samples at 320/390/768px (305/375/753px content widths) showed no document horizontal overflow; intentionally clipped identity artwork excluded from element overflow flags. Some later frame views had no app-initialisation class, so these do not certify the final mobile JavaScript interactions.
- A no-app-script mirror showed all static controls and the always-visible blank template link. The browser download-event check for that static TXT timed out/reset the tool. File existence/content and links pass static checks; actual browser static download remains unverified. Temporary test mirrors removed by final build.
- Two clipped Page.captureScreenshot attempts timed out. Exported the social card through the functioning viewport screenshot API instead; metadata matches its actual 1363 × 936 dimensions. Editable HTML source is retained. Public-origin and social-platform preview/crop acceptance remain pending.
- All JPEG/WebP assets decoded with Pillow. Restored existing asset hashes match GitHub. Solid colour ratios: soft-white/aubergine 15.30, muted/aubergine 9.18, muted/plum 7.88, iris/aubergine and aubergine/iris 6.18. This is a core-palette check, not a full rendered accessibility audit. No Lighthouse, production speed or client-site performance scores are claimed.
- Independent source critic found two issues (canonical checker and mobile safe-area clearance); both fixed. No other consequential source blockers reported.

Browser limitation: after the successful guided-flow checks, later navigations showed an empty app-initialisation class. Direct asset inspection returned net::ERR_BLOCKED_BY_CLIENT; reported browsing issue b20afbfb-0b62-4a8c-a7ee-7c38931017e6. Final mobile menu/action-bar and post-refresh route rechecks remain open. No alternate browser/network route was used to bypass the denial, and no application change was made to compensate for the environment. Source syntax/build checks continue to pass. Final desktop screenshot: docs/images/feedback-home-2026-11-19.jpg.

Launch dependencies unchanged: real inbox/contact delivery and data handling, confirmed purchased domain, approved fees/times/care terms, applicable business information/policies, public metadata/indexing/host checks and explicit launch approval. Analytics and ProfessionalService schema were not added speculatively. Render static sites do not spin down between requests; the cold-start criticism refers to free web services (official https://render.com/docs/static-sites and https://render.com/hosting/react checked). Open Graph image properties checked against https://ogp.me/.
