# Launch decisions and visitor data

Updated 20 November 2026. Engineering working record, not a public privacy notice, contract or declaration of compliance. Review code is on website/editorial-polish; production changes require separate approval.

## Commercial decisions — next priority

There is still no public price or duration signal. Better wording does not close that information gap. Before the sales launch, the founder needs to approve realistic figures based on the actual offer and delivery capacity. Do not publish the illustrative 'from EUR X' or '3–5 weeks' wording from reviews as facts.

| Offer | Decision still needed | Basis to record |
| --- | --- | --- |
| Landing page | Starting fee and typical delivery range | Content supplied, features, revisions, review time and available build hours |
| Business website / redesign | Starting fee or useful range, typical delivery range | Defined page count, content work, editing setup, integrations and existing-site condition |
| Website Care | Monthly fee and content allowance | Actual maintenance tasks, host coverage, support time, risk and third-party costs |

For every price: confirm currency/tax treatment, inclusions, exclusions and third-party costs. For every duration: distinguish working time from elapsed time, identify the start condition, content dependencies and review dates. Keep Care response targets separate from project delivery time and issue-resolution promises.

After approval, place the relevant price/timing line on Services project options and the Care package, with concise qualifications. No public placeholders, arbitrary prices, response guarantees or unapproved dates.

## Current application data flow

This inventory describes the review code, not every part of the production host.

| Activity | Current implementation | What the privacy work must cover |
| --- | --- | --- |
| Loading a page | Browser requests HTML, CSS, JS, fonts and images from the serving host. Fonts and images are local assets. No embedded remote client sites. | Hosting/CDN/security handling of network metadata, including IP addresses, requested URLs, timestamps, user agents and referrers where processed; verify actual fields, purposes, recipients, regions/transfers and retention. |
| Project planner | Project type, outline, optional business name/website and selected extras exist in page memory. No name/email fields, form action, network submission, analytics call or application persistent storage. | Explain local processing; ask users to omit secrets and sensitive client information. Ordinary page requests are a separate flow from planner answers. |
| Copy / download | A user action writes the prepared text to the clipboard or creates a local TXT download. No Aldwyn inbox delivery. | Explain the saved copy is controlled by the visitor and their device/browser. Do not claim the host processes no visitor data merely because the form sends nothing. |
| Visiting project websites | Explicit links open the real client site in a new tab using noopener/noreferrer. Those sites are not loaded inside Aldwyn pages. | Identify external destinations as independently operated. No guarantees about their policies or functionality. |
| Analytics, booking or form services | None implemented in the reviewed application. | Reassess before adding: actual fields/events, cookies or device storage, purpose, legal basis, recipients, retention, international transfers and any required consent. Do not assume every 'privacy-friendly' tool is exempt. |

No browser network-capture or Render account inspection has established the complete production data flow. Code inspection is not evidence of every host/CDN operation. The application does not set cookies; that is not a verified claim that the complete serving stack never does.

## Hosting verification still required

The founder's earlier dashboard showed a Render Static Site. Render's general logging documentation describes HTTP request logs for public web services on specified plans; those fields/retention tables must not be applied to this static site without verification. Hosting/CDN/security operations may process visitor metadata even when logs are not visible to the site owner.

Confirm the actual provider configuration, applicable data-processing terms/subprocessors, processing locations and transfers, log fields, purpose, retention/deletion and access controls. Render's privacy and DPA URLs were located, but the web reader returned page headings/navigation without substantive policy text. No claim is made that those terms have been fully reviewed.

## Public privacy notice and business information

Before launch, confirm the operating legal/trading identity and a reachable privacy contact, then write the notice from the verified inventory. Cover the whole website and its providers, not only enquiries. Record purposes/legal bases, recipients, retention, transfers, rights and complaint information as applicable. Include real enquiry/email/booking processing if those features are added. Review any host logs already in use even while contact delivery is pending.

Business disclosures depend on the confirmed legal setup. Do not invent a registration number, VAT status, address, county or limited-company identity. A notice with missing controller/contact details is not ready to publish.

## Release acceptance

- [ ] Founder approves fee/timing signals and Care allowance/support terms.
- [ ] Confirm the already purchased domain, renewals, ownership and email provision.
- [ ] Select a real enquiry destination and implement delivery, validation, abuse/error handling and a permitted receipt test.
- [ ] Complete host/provider visitor-data verification and accurate public notice/business details.
- [ ] Confirm domain canonical URLs, share previews, sitemap, robots/indexability and production 404 behavior.
- [ ] Record founder preview acceptance, production destination, rollback path and explicit launch authorization.

No deployment, purchases, DNS changes, analytics or external form accounts were added in this revision.

## Clean official sources

Reviewed 20 November 2026. These URLs have no query or tracking parameters.

- Irish Data Protection Commission, transparency: https://www.dataprotection.ie/en/organisations/know-your-obligations/transparency
- CRO, website company disclosures: https://cro.ie/Registration/Company/Incidental-Obligations/Letterheads/
- Render static sites: https://render.com/docs/static-sites
- Render general logging: https://render.com/docs/logging
- Render privacy policy: https://render.com/privacy
- Render data processing addendum: https://render.com/dpa
