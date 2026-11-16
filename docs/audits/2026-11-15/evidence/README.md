# Implementation evidence

The [change notes](../README.md) explain the changes and their limits. The earlier screenshots are from the audited production site; updated screenshots are from the local production build at the same viewport size.

| Page | Before, phone | Updated phone | Updated desktop |
| --- | --- | --- | --- |
| Home | [Before](../../2026-11-14/evidence/home-mobile-top.png) | [Updated](home-mobile.png) | [Desktop](home-desktop.png) |
| Work | [Before](../../2026-11-14/evidence/work-mobile-top.png) | [Updated](work-mobile.png) | [Desktop](work-desktop.png) |
| Contact | [Before](../../2026-11-14/evidence/contact-mobile-top.png) | [Updated](contact-mobile.png) | [Desktop](contact-desktop.png) |
| New custom website service page | — | [Phone](services-web-design-mobile.png) | [Desktop](services-web-design-desktop.png) |

- [Browser and form verification](verification.json): 20 public pages, client/concept classifications, native dialog focus, inquiry behavior, responsive widths, and carousel controls.
- [Final local Lighthouse report](lighthouse-mobile-local-final.json): 91 performance and 100 accessibility, best practices, and basic SEO checks under the recorded local lab conditions.
- [Earlier local performance pass](lighthouse-mobile-local.json): 84 performance before the final mobile preview refinement.

Local performance results do not establish deployed performance or search rankings. No real inquiry email was sent and no appointment was booked during automated verification.

## Follow-up checks

[Remaining-fix verification](remaining-fixes-checks.json) records the inquiry-reference and referral checks, analytics preference checks, and local HTTP verification of the 21-page sitemap. Provider responses were mocked; no actual message or appointment was sent. The native browser connection failed before fresh visual or account-report checks could finish.

[Approved-policy verification](approved-policy-checks.json) records the November 16 build/lint/typecheck checks and seven local HTTP page checks after owner approval of the project policies. Visual browser review remained unavailable.
