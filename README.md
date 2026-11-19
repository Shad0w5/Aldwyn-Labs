# Aldwyn Labs website

First unpublished website template. Plain HTML, CSS and JavaScript with no build dependencies or backend.

## Preview

Run `python3 -m http.server 3000 --directory dist` and open the local address printed by the server. In ChatGPT Work's managed environment use `sites-preview start /absolute/path/to/checkout` instead.

## Current scope

- Responsive homepage, mobile menu, services, optional care, delivery approach, studio introduction and FAQs.
- Project brief validation, local text-file download and clipboard copy with a manual-copy fallback.
- Selected extended AL SVG master; aubergine, plum, iris, soft white and muted lavender palette.
- Manrope and Inter fonts hosted locally with their licences. Typography remains a proposal for review.

The form does not submit data and nothing is stored online. Do not imply delivery. A real enquiry route needs confirmed business contact information and a separately scoped implementation.

## Before launch

Confirm domain, business contacts, final content and font pairing; implement and test the chosen enquiry route; review actual privacy requirements; approve a micro favicon; verify desktop/mobile and keyboard flows; remove the preview-only noindex and unpublished footer text only as part of an authorized launch. No analytics or third-party scripts are installed.

There is no Site registration, production hosting or automatic deployment configured. `.openai/hosting.json` describes the local static preview directory (`dist`) only and has no project ID.

## Brand source

Aldwyn-Identity-and-Website-Guide.pdf and Aldwyn-Brand-Identity-Kit-v1.zip in the Aldwyn Labs ChatGPT project/Library. Earlier exploratory logos are superseded. Use one SVG geometry and do not redraw the monogram. The full symbol is intended from 48 px visible width; favicon work is pending.

## Verification on 19 November 2026

Passed: JavaScript syntax; unique HTML IDs and internal anchor targets; referenced local assets; preview font/image loading; desktop visual review at 1363 px; care-link FAQ opening; project brief generation; clipboard copy; file download; invalid email rejection; whitespace-only brief rejection; stale brief hidden after input changes; keyboard Tab movement with visible focus.

Independent code review completed. Mobile menu labelling and safe no-JavaScript form behaviour were corrected. CSS includes mobile/tablet breakpoints, but a true narrow-viewport browser pass remains pending because the available browser API did not expose viewport resizing. Do not describe this as fully mobile-tested or launch-ready.
