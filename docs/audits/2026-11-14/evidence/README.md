# Audit evidence

These files document the live-site review on November 14, 2026, Mountain Time. The findings and recommended actions are in the [audit](../README.md).

| Page | Actual phone viewport, 390 × 844 | Desktop viewport, 1440 × 1000 | Full phone page |
| --- | --- | --- | --- |
| Home | [Phone](home-mobile-top.png) | [Desktop](home-desktop-top.png) | [Full page](home-mobile.png) |
| Services | [Phone](services-mobile-top.png) | [Desktop](services-desktop-top.png) | [Full page](services-mobile.png) |
| Work | [Phone](work-mobile-top.png) | [Desktop](work-desktop-top.png) | [Full page](work-mobile.png) |
| Pricing | [Phone](pricing-mobile-top.png) | [Desktop](pricing-desktop-top.png) | [Full page](pricing-mobile.png) |
| About | [Phone](about-mobile-top.png) | [Desktop](about-desktop-top.png) | [Full page](about-mobile.png) |
| Contact | [Phone](contact-mobile-top.png) | [Desktop](contact-desktop-top.png) | [Full page](contact-mobile.png) |

Full-page browser captures can include the off-canvas menu outside the actual 390-pixel viewport. On some captures that adds a white strip or off-screen navigation to the right. Use the actual viewport images to assess what a visitor sees. Document overflow checks at the tested widths were negative; the added screenshot area is not reported as a customer-facing layout defect.

| Observation | File |
| --- | --- |
| Compact audit facts and Lighthouse metrics | [summary.json](summary.json) |
| Rendered page content, links, metadata, schema, accessibility findings | [crawl.json](crawl.json) |
| Dialog focus, simulated form success, analytics events, HTTP checks | [verification.json](verification.json) |
| Booking page content, element positions, extra responsive widths, MHK destination text | [last-checks.json](last-checks.json) |
| Production rejection of an empty inquiry | [contact-validation.json](contact-validation.json) |
| Live sitemap | [sitemap.xml](sitemap.xml) |
| First Lighthouse mobile run | [lighthouse-mobile.json](lighthouse-mobile.json) |
| Second Lighthouse mobile run after the main crawl | [lighthouse-mobile-isolated.json](lighthouse-mobile-isolated.json) |
| Booking landing page | [booking-desktop.png](booking-desktop.png) |

The simulated inquiry used `audit@example.com` and an intercepted response. It was not transmitted to the production contact handler. The separate empty API request was rejected before sending email. A successful interface test therefore does not certify inbox delivery.
