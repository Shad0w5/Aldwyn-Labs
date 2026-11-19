# Validation — 19 November 2026

## Homepage portfolio card refinement

Replaced the two homepage project cards with one landscape portfolio card. The two actual website screenshots overlap on the left; portfolio introduction, project names/status and a single “Explore our portfolio” link sit on the right. The card stacks vertically at narrower CSS breakpoints. Individual project pages and live-preview links remain on the portfolio page.

`npm run build` and `npm run check` passed for nine pages after the change. Source layout and responsive rules were self-reviewed. Fresh visual/browser verification was blocked: the existing cloud tab timed out at Page.enable, tab inventory timed out, and a fresh tab attempt also timed out. No new screenshot or successful browser-layout check is claimed for this card. Earlier browser checks below refer to their respective earlier revisions.

## Services and care refinement

- `npm run build` and `npm run check` pass for nine pages. The link checker now resolves query-bearing local routes and HTML-encoded query separators before checking paths/anchors.
- Separate implementation and content/UX critic agents reviewed the work. Fixed a pre-existing malformed service selector (care and guidance were missing opening option tags) and removed wording that could imply marketing campaigns or checkout were currently available as extra services.
- Desktop Services and Care inspected at 1363px viewport width; no horizontal overflow. Actual new-site/showcase and care buttons navigated to the local brief with the expected selection. All four native select options appeared correctly. Extra checkboxes and the optional existing website address were visible and labelled.
- Synthetic review@example.com flow: new-site brief contained the selected showcase and existing URL; clipboard copy included them; changing to care invalidated old output, hid and disabled extras, and generated a care brief without extras. Download event succeeded. Invalid URL was rejected natively. Unknown service and extra query values were ignored.
- Services, Care, care brief and showcase brief were checked in same-origin browser frames at 390/320/768px outer widths (375/305/753px content widths). All twelve checks had scrollWidth equal to clientWidth. Care preselection and showcase checkbox selection remained correct at each width. Mobile menu closed with Escape; native care FAQ could be expanded with the keyboard.
- Checks remain Chromium browser/frame checks, not physical-device or full cross-browser certification. No real enquiry delivery, service purchase, contact transmission or production publication occurred. Final fees, allowances, task frequencies and response/cancellation terms are still open.

## Automated checks
- `npm run build`: seven pages generated with shared chrome and page metadata.
- `npm run check`: JavaScript syntax; unique IDs; one H1 per page; description/title/noindex presence; all local assets, route links and cross-page anchors resolve; HTML submit initially disabled; no form action/GET delivery; no fetch, beacon, XHR or application browser-storage APIs in the site script.
- Stale generated-page removal: a temporary retired route was removed on rebuild, while brand/font assets remained. Invalid and duplicate route descriptors are rejected before files are written.

## Browser observations
Supported Work preview, Chromium desktop viewport 1363px. Home, Services, Portfolio, project detail, Studio, Website Care and Start routes visited through native links. Homepage and main editorial layouts inspected; local fonts and images loaded. No horizontal overflow on the desktop home and project-detail checks. Care FAQ opened with native details controls.

Phone layouts were checked through a temporary same-origin iframe harness, not a physical device or mobile browser emulator. Outer widths 390px and 320px produced inner content widths 375px and 305px with the browser scrollbar. All seven routes at 305px content width had scrollWidth equal to clientWidth after a correction to the project-start heading/grid sizing. Studio additionally checked at 753px content width (768px outer). Home at 375px inspected visually. Mobile menu opened, Escape closed it. The narrow header uses the supplied full monogram rather than shrinking the wordmark.

The brief builder was exercised using synthetic review@example.com data: valid preparation, correct unsent message, clipboard copy, successful download event, and hiding stale output after an input change. Native invalid-email and trimmed message rejection were verified. Keyboard Tab from a field moved focus to the next field with visible focus. No live enquiry delivery exists to test.

## Independent review
A separate critic checked code and content. Fixed supported findings: guard form initialization on pages without a form; remove stale generated portfolio HTML; distinguish visual parent-navigation selection from exact-page aria-current semantics; replace the obsolete one-page README. A phone-width overflow found during browser QA was corrected and rechecked.

## Limits and next acceptance
This is not an exhaustive accessibility, security, performance or cross-browser audit. No physical-device/Safari/Firefox checks, live email delivery, production DNS/hosting, domain-specific indexing or launch acceptance were performed. Narrow-browser-frame QA does not establish physical-device behavior. Fonts and UI details remain recommendations for founder review. Contact delivery, final portfolio permissions/content, destination and launch authorization are required before production.

## Portfolio additions — 19 November 2026

Founder supplied https://www.pjsweeney.ie/ and https://carwales.ie/ and explicitly requested portfolio entries with live previews. Both homepages were opened in the supported cloud browser and captured at 1348 × 926 pixels. Screenshots are stored locally with descriptive alternative text and capture-date captions. Descriptions use observable navigation/content, not invented delivery scope or measured outcomes. Carwales remains live / in progress; final acceptance is unconfirmed.

Both sites prevent cross-origin embedded display. Carwales returned X-Frame-Options: sameorigin; a real P.J. Sweeney iframe attempt displayed “refused to connect”. The final implementation contains no embedded remote frame, proxy or automatic third-party request. Native live-preview links open the approved HTTPS URLs with target=_blank and rel=noopener noreferrer. Browser clicks opened new tabs at the expected URLs; direct homepage views were independently observed. No external form, enquiry, basket, purchase or client-site change was submitted.

`npm run build` and `npm run check` pass for nine pages. The checker permits only the two intended external link destinations, still disallows remote assets/other endpoints and checks new-tab protections. Actual preview images loaded. Desktop Carwales project-detail width was 1363px with no horizontal overflow. Portfolio listing, both new detail pages and the updated Home were checked in a 320px outer iframe / 305px inner content width; all had scrollWidth equal to clientWidth. The temporary QA harness was removed from the final build.

A separate critic checked the additions: no consequential defect found. Corrected the screenshot dimensions in markup and CSS to their actual 1348 × 926 ratio and updated the page-count documentation. Screenshots are dated snapshots and need recapturing when client sites change. This remains an unpublished review build.

