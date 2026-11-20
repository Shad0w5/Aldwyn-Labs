# Aldwyn Labs website — current build brief

Updated 19 November 2026. The founder requested a finished visual review build with stronger imagery and styling because the earlier site felt basic and generic. This revision refines the existing nine-page website; it does not authorize publication, DNS, purchases, client-site changes or new commercial offers.

## Goal and audience

Business owners considering a first website, a redesign or optional bounded monthly website care. No industry niche is selected. Explain the offer, show real website work, establish a recognizable visual identity and provide a usable local brief while contact delivery is unconfirmed.

## Confirmed scope

Home, Services, Website Care, Portfolio, three project details, Studio and Plan Your Website. Retain the locked AL monogram and aubergine/iris palette. Preserve the founder-requested single landscape homepage portfolio card with overlapping screenshots and “Explore our portfolio”. Keep P.J. Sweeney live and Carwales live/in progress. Do not invent project outcomes, testimonials, design roles, prices or contact details.

The optional website additions remain extra pages, project/product showcases, existing booking/enquiry connections and content moves/redirects. No custom booking platform, online checkout, marketing campaign, custom software or IT-support offer is introduced. Project, optional care and third-party costs remain separate; care fees, task cadence, allowances and support/exit terms need agreement.

## Sources

- Project ALDWYN-CURRENT-BRIEF.md first, then PROJECT-INSTRUCTIONS.md, ENGINEERING-HANDOFF.md and BUSINESS-BRIEF-AND-PLAN.md. Newer founder facts take precedence.
- Aldwyn-Identity-and-Website-Guide.pdf, 16 November 2026, and supplied brand kit. Exact SVG master and local licensed fonts retained.
- Existing GitHub source: Shad0w5/Aldwyn-Labs, website/multi-page-studio at 8c7344e1e5f858f7cb88906cfe359c5018b0047a.
- Founder-supplied P.J. Sweeney and Carwales URLs and actual homepage captures, 19 November 2026.
- Licensed architectural photograph, official source and licence recorded in ASSET-SOURCES.md.

## Design and implementation decisions

Use large editorial typography, restrained photographic texture and larger real project images. Replace repeated rounded grids with open ruled rows and alternating layouts. Shorten copy and prioritize the offer and work. Care has one prominent iris plan panel, examples and native FAQ details. Studio explains the approach without a fabricated team or office. Keep modest hover transitions with reduced-motion support.

Retain the small Node static generator with shared navigation, metadata and footer, tracked generated dist output and no application dependencies. Studio now has its own page module. Responsive imagery is locally encoded as WebP (800px and 1600px widths). No remote image/font requests, analytics or application storage are added. The asset checker now parses each srcset candidate separately.

The local brief builder retains six service options, an optional existing URL and approved extras. It validates, prepares plain text, invalidates stale output and offers copy/download. Care hides and disables extras. Nothing is sent to Aldwyn. A clear local-only note appears before the form and beside the action.

## Cloud and deployment boundary

GitHub access is verified. The founder established a Render deployment connected to website/multi-page-studio. The redesign lives on website/editorial-polish, branched from the exact existing head to avoid updating the Render-connected branch. Do not merge or trigger deployment without authorization. No separate Codex Cloud environment or automatic chat/repository sync is claimed.

Render should publish dist with npm run build and no root subdirectory. Earlier root/publish symptoms were diagnosed separately; this revision does not claim Render settings were changed or the public deployment repaired.

## Acceptance and results

Nine pages build; all local links, anchors and assets resolve; unique IDs and one H1 per page; review metadata and local-only safeguards remain. All nine pages checked in browser frames at 305, 375 and 753px content widths without horizontal overflow. Desktop main layouts, stacked homepage work, care panel and representative detail inspected. Native FAQ, mobile menu/Escape, care/showcase routing, form validation, preparation, copy, download event and stale-output behavior checked. See VALIDATION.md for evidence and limits.

## Open decisions and next action

Founder visual acceptance, approved business contact route and real delivery/data handling, exact custom domain and Render configuration, final care-plan commercial terms, and tiny favicon. Next action is review of the isolated redesign. Deployment is separate.

## Original imagery refinement — 19 November 2026

The founder requested brand-specific imagery and further integrated polish. Replaced the repeated architecture photo and care line illustration with three custom-generated material studies, matching the locked palette without changing the logo. A shared figure component serves responsive local WebP assets. Refined hero framing, captions, heading tracking, project-card depth and hover borders. Portfolio remains actual project screenshots; the brief remains practical and local-only. No publication or new service scope. Browser refresh was blocked by the cloud URL security policy, so this revision has source/asset checks but no fresh rendered-layout acceptance.


## Wordmark, interior imagery and care package — 19 November 2026

Founder requested larger Aldwyn Labs lettering beside AL, more appropriate images beyond headers and a more developed care package. Added logo-web.svg as a website-specific lockup: exact monogram and outlined letter paths preserved, Aldwyn scaled uniformly 1.4x and LABS 1.6x within the lockup. Original logo.svg remains unchanged. Header/footer use the new version; the compact monogram remains at the narrow breakpoint.

Added a generated website-planning study inside Home and Studio process sections, actual project captures inside Services, and three native SVG illustrations explaining Care requests, updates and checks. Images support the adjacent content. Project status and local-only brief handling remain unchanged.

Care now presents one Website Care package with a quote-after-review label, maintenance scope matrix, optional content allowance, support/recovery responsibilities, exclusions and an illustrated request workflow. No prices, hours, task cadence, response guarantee or cancellation terms invented.

Nine-page build and static checks pass. XML checks confirm valid SVG, unchanged AL construction and identical letter outlines. Latest browser layout acceptance remains pending due to the previously encountered cloud URL security restriction; no new browser screenshot or full rendered-layout check is claimed. Review branch only; no deployment.

## Services structure approved — 19 November 2026

Founder approved revising Services around three related groups: Design & build (business websites, redesigns, landing pages), Improve & extend (scoped additions, showcases, existing-tool connections, content moves) and Care & maintain (link to dedicated optional care plan). SEO foundations belong within agreed website builds; ongoing SEO, advertising, social management, apps, IT support and AI research are not advertised as current services. New landing-page and existing-site improvement brief choices preserve the selected route. No price or delivery commitment is invented. Preserve existing #website-extras links, project images and exact locked identity. Acceptance: readable three-part hierarchy, keyboard/native anchor links, correct brief preselection, care boundaries and mobile stacking. Review branch only; no deployment.


## Final integration checkpoint — 19 November 2026

Founder requested a complete site review and connected components before one final frontend change. Home now mirrors all three approved service groups; footer links use the current improvements wording. All nine main pages remain connected through the shared header/footer and contextual links. Added unchanged monogram favicon and a generated shared-shell 404 document with home/services recovery links. Removed superseded Studio crop overrides. Strengthened checks for home reachability, service/extra query values and CSS/font asset files. Updated handoff guidance. No contact backend, third-party accounts, launch, purchase or DNS change.

Review build is ready for the founder’s remaining frontend request. Business contact destination/enquiry delivery, approved care commercials, domain/indexing and production fallback handling remain open launch tasks. Current implementation does not claim enquiry delivery.


## Visitor-focused feedback revision — 19 November 2026

Founder supplied a markup-based review and asked to improve the site. Accepted improvements: real-project hero while preserving the existing landscape portfolio card; more specific copy; direct one-person working relationship without a name/photo/bio; fuller project notes from existing facts; a shorter three-step local brief with optional personal details and a static blank-file fallback; mobile quick actions; restrained reduced-motion-aware process reveals; social asset and configurable public-origin metadata.

Decisions: keep exact approved logo/palette, native controls and dependency-free static stack. One bounded care plan remains; no unapproved prices, tiers, timeframes or performance/client outcomes. No external contact/account setup or deployment. The domain is already purchased but its name remains unconfirmed. Render static-site cold-start criticism is inapplicable to static hosting (official Render static/free documentation checked). A professional-service schema, public indexing/sitemap, real policies and analytics are not guessed into the review build.

Acceptance: build/check default and configured-origin paths; all six brief choices and care boundaries; validation, back/edit, copy/download; no horizontal page overflow at sampled widths; exact asset geometry; real portfolio status; honest launch dependencies. Next action: founder review, then confirm actual domain and a reachable inbox before implementing enquiry delivery and relevant data handling.


## Current copy revision — 19 November 2026

This decision supersedes the preceding feedback pass's one-person positioning. The founder rejected copy that sounded like pasted review feedback and explicitly requested no solo-person messaging. Rewrote all public page introductions, headings, service explanations, care descriptions and project notes in an independent studio voice. No invented team claims. Retained the exact identity, existing artwork, real portfolio status, landscape portfolio card, service scope and local-only brief behavior. Removed internal acceptance/testing narrative from public project pages and reduced repeated scope lists.

Acceptance: each page has a distinct purpose; no headcount messaging; benefits and practical descriptions precede necessary scope boundaries; no unsupported contacts, fees, delivery times or results; accurate brief labels and care state; build and route checks pass; revised desktop openings and narrow layout samples reviewed. Research covered Fhoke, aurelo and Built by Buffalo. Two critics reviewed before and after and their remaining substantive suggestions were applied.

Status: saved for review on website/editorial-polish / PR #3. Do not merge into the Render-connected branch or deploy without founder approval. Next: founder reviews the new copy and then confirms a real domain/inbox before enquiry delivery is implemented.
