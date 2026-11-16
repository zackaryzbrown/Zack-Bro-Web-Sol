# Visibility and lead measurement

Prepared November 15, 2026. Use this alongside Search Console, Google Business Profile, Calendly, and the inquiry inbox. No account metrics or client results should be invented to fill an empty cell.

## What the website now measures

- `cta_click`: someone clicked a tracked call to action. A booking-link click is not a booked call.
- `form_started`, `form_submitted`, and `form_failure`: diagnostic steps. They are not qualified leads.
- `form_success` and `generate_lead`: JavaScript form success after the server returns a valid inquiry reference from an accepted email request. Use only `generate_lead` as the inquiry key event to avoid counting both as separate conversions.
- No lead conversion is generated merely by opening `/contact?status=sent`. A native form submission without JavaScript can reach the inbox but will not create a browser analytics event.
- A successful email request means provider acceptance, not inbox delivery. Analytics blockers, privacy settings, disabled JavaScript, and blocked Google scripts will leave gaps. Reconcile totals with actual messages.

[Google's recommended event reference](https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead) documents `generate_lead`. Confirm the intended GA4 property and use Realtime/DebugView after deployment before marking it as a key event. Do not assign an invented revenue value to an inquiry. Track won revenue from completed sales.

## Practical lead workflow

Each accepted inquiry email includes a random `ZB-...` reference and the optional answer to “How did you find me?”. Use the reference in [the CSV template](lead-tracker-template.csv). Keep actual customer contact details in the private inbox or a chosen CRM, rather than in the source repository or analytics.

Recommended stages: received, replied, consultation booked, consultation held, quoted, won, lost, spam. A qualified lead is an inquiry that fits the service offered and target area, has a plausible project need, and can be discussed with a decision maker. Record when a consultation is actually booked or held; do not infer it from a website click.

Review weekly: real inquiries received, time to first reply, qualified leads, consultations held, quotes sent, projects won, and won revenue. Deduplicate repeated messages by project/contact in your private records. Record a concise reason for lost projects when known.

## Search Console review

Use the existing verified `https://zbweb.solutions/` property. Check the sitemap submission, page indexing and exclusions, and actual search performance before attributing low traffic to one technical issue. Compare the last complete 28 days with the preceding 28 days, and use a longer period if traffic is sparse. Separate brand queries from searches such as Erie web design, website designer near me, and nearby service-area queries. Search Console location data does not establish a precise 25-mile ranking radius.

Track impressions, clicks, CTR, landing pages, device, and relevant queries. Treat average position as an aggregate, not a fixed local rank. After deployment, inspect the homepage and the two focused service pages, and check their canonical/indexing status. The submitted sitemap URL stays the same as new pages are added.

## Google Business Profile

Keep the existing verified listing. Confirm its real-world business name, primary category, website, service area, hours, contact methods, and whether it is correctly configured as a service-area business. Do not add a residential address publicly merely to fill a field.

The owner supplied [this review link](https://g.page/r/CbnLFwqHD5FiEBM/review). The website now links to it. A simple review request for a past client is: “If you'd like to share your experience working with me, you can leave an honest Google review here: [link]. Thank you.” This is a draft only; no requests have been sent.

Ask clients with real experiences consistently. Do not offer incentives or ask only people expected to leave positive feedback. [Google's review guidance](https://support.google.com/business/answer/3474122?hl=en) supports sharing the review link and explains its restrictions.

## Evidence for stronger case studies

For each confirmed client, request permission to publish results and record a comparable baseline and follow-up period. Useful measures include qualified inquiries, booking completions, successful purchases, or time saved on administration. Include dates, the measurement source, other campaign changes, and limitations. Use functional case-study descriptions until reliable measurements are available. The five client labels do not imply measured SEO or revenue outcomes.

## Account details still needed

- Confirm the Calendly account's Eastern time setting against your intended working schedule. The website link now uses the owner-confirmed account; the consultation's existing availability and phone setup were preserved.
- Verify a real inquiry in the intended inbox and test the reply address after deployment. No external test email or fake appointment was sent in this pass.
- Confirm a domain email or business phone before changing public contact details. The existing address remains usable; do not publish the private account phone automatically.
