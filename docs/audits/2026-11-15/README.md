# Website improvements, November 15, 2026

Implemented the main website changes from the November 14 audit in the local repository. Website source changes have not been deployed. The follow-up account work below includes a live Calendly update and a Search Console sitemap submission.

Owner-confirmed client work: JustMalikBeats, MHK Training, The Futons, CutePetShowdown, and A Child's Perspective. The remaining seven showcased builds are labeled as portfolio concepts.

**What changed**

| Area | Implemented |
| --- | --- |
| Local positioning | Erie, Colorado is now the primary location in the homepage, metadata, About, Contact, footer, service area copy, social images, and factual business schema. Nearby coverage names Lafayette, Louisville, Broomfield, Boulder, and Longmont. |
| Metadata | Fixed the helper that discarded the supplied homepage title. The homepage now outputs `Web Design in Erie, CO | Zackary Brown Web Solutions`. Removed the redundant keywords meta tag. Preserved the existing Google verification tag. |
| Portfolio accuracy | Explicit client and concept flags replace the assumption that every non-concept is a client. Removed duplicated, inflated client totals. Added the two supplied client websites with fresh public-page screenshots and descriptions based on visible functionality. |
| Stronger proof | Homepage features client projects first. MHK is described as a member platform. Case-study copy describes delivered functions rather than unmeasured business results. The published testimonial uses its original qualitative sentences without the unexplained retention metric; no replacement statistic was invented. |
| Mobile browsing | Shortened Work and Contact introductions and removed redundant summaries. Replaced the large phone filter list with a native industry selector. Kept direct case-study links available before opening a preview. |
| Offer clarity | Aligned $25 Managed Hosting versus $49 Website Care, corrected stale WordPress and support wording, removed the unsupported agency-price comparison, clarified what the written scope covers, and fixed visible editing mistakes. Package prices remain unchanged. |
| Inquiry reliability | Business name is optional. Bare domains are normalized. Client and server validation agree. Storage failures do not prevent success. Server errors preserve details in the JavaScript form. Forms render on the server and have a native POST fallback. Status redirects contain no inquiry details. Malformed field types return a controlled error. |
| Accessibility | Native project dialogs contain focus, close with Escape, and restore focus. Footer and discount terms have stronger contrast. Carousel controls have 44-pixel targets and explicit playback control; reduced-motion users have manual selection. |
| Performance | Above-the-fold copy renders without reveal wrappers. Analytics loading is deferred while events can queue. Inactive phone previews are deferred and secondary images use low fetch priority. Previews start paused. Updated touched Next Image usage away from deprecated priority behavior. Client project helpers no longer import the complete catalog into the client bundle. |
| Search structure | Added `/services/web-design` and `/services/website-redesign` with distinct buying information, price context, FAQs, and inquiry links. Linked them from the homepage, overview, and footer. The initial sitemap pass included 20 public pages and no longer invents fresh modification dates on every build. Added the permanent www-to-non-www redirect. |
| Maintenance | Updated the README to describe the actual Resend integration, native form path, service routes, and project classifications. |

**Verification**

- `npm run build`, `npm run lint`, `npm run typecheck`, and `git diff --check` passed.
- All 20 sitemap pages returned 200 and had one H1, the expected preferred canonical, the Google verification tag, and visible Erie context. Tested images loaded; inactive phone previews are deliberately deferred until selected.
- Automated WCAG A/AA checks found no violations on the six main pages and two new service pages under the tested conditions. This is not a certification of complete accessibility.
- Checked the main landing pages for document overflow at 320, 360, 768, 1024, and 1440 pixels.
- Checked project filtering, native-dialog focus and Escape behavior, prefilled services, blocked-storage success, server and network failures, native form submission with JavaScript disabled, malformed API bodies, and canonical host redirects with query strings.
- Actual email sending was disabled in the test server. Successful client responses were intercepted, and the native success redirect was checked through the honeypot branch. These checks establish interface and routing behavior, not inbox delivery.

| Phone layout, 390-pixel width | Audited live site | Updated local build |
| --- | ---: | ---: |
| First name field on Contact | About 918 px down | About 583 px down |
| First project on Work | About 1655 px down | About 451 px down |

The final local Lighthouse mobile run scored 91 for performance and 100 for accessibility, best practices, and basic SEO checks. It measured FCP at about 0.9 seconds, LCP at 3.4 seconds, total blocking time at 80 ms, and CLS at 0. The earlier local pass scored 84 before the hidden-preview refinement. These localhost tests are not directly comparable with the original production score of 45. Production LCP and real-user performance still need checking after deployment; no ranking or lead-volume improvement is claimed from these scores.

See [browser verification](evidence/verification.json), [the final local Lighthouse report](evidence/lighthouse-mobile-local-final.json), and the [screenshots](evidence/).

**Follow-up implementation**

- Added `/privacy` with factual descriptions of inquiries, hosting, spam protection, optional analytics, and external bookings. Linked it from the form and footer. The sitemap now includes 21 public pages. No fixed inquiry deletion schedule or new contract promise was invented.
- Added a browser analytics opt-out that applies immediately, removes accessible first-party analytics cookies, survives ordinary navigation, and respects Global Privacy Control. Blocked storage does not break the setting or form. Analytics remain enabled by default when configured; no full legal-compliance certification is claimed.
- Added the owner-supplied Google review link on the homepage and footer. Used the Place ID resolved from that link to create a Google Maps business-profile link, also referenced in business schema. No rating or review total was invented.
- Owner clarified that Djibril Sylla was a college project collaborator. Updated his attribution and the section introduction to distinguish his professional recommendation from client feedback.
- Replaced the old booking URL with the owner-confirmed `https://calendly.com/zackaryzbrown/30min`. Through the connected Calendly account, renamed the existing event to **Free Website Consultation** and added an agenda. Read back the update successfully. Preserved the existing 30-minute duration, phone setup, availability, and account time zone. No fake appointment or notification was created.
- Added an optional referral-source field and a random inquiry reference in accepted inquiry emails. The client emits `generate_lead` only after receiving a valid reference; rejected requests and the honeypot branch do not produce that reference. Do not count `form_success` and `generate_lead` as two distinct business conversions.
- Prepared [proposed project policies](../../business/proposed-service-terms.md), a [measurement guide](../../business/visibility-and-leads.md), and an empty [lead tracker template](../../business/lead-tracker-template.csv). The owner subsequently approved these policies on November 16; see the follow-through below.

**Live account observations and actions**

- The existing Google Business Profile review panel displayed **Get your first review**. This is direct account evidence of the current review gap; it is not a measured explanation for a particular ranking position. Its visible listing name was `ZBWebSolutions`.
- The existing Search Console property was `https://zbweb.solutions/`. Its Sitemaps table had no submitted entries. Submitted `https://zbweb.solutions/sitemap.xml`; Google displayed **Sitemap submitted successfully**. The resulting row initially displayed **Unknown / Couldn't fetch / 0 discovered pages**. That is the last verified processing state, not a successful crawl.
- Direct HTTP requests to the live sitemap returned 200, XML content, and a valid URL set, including with a Googlebot user agent. The live robots file allows public pages and advertises that same sitemap. Changing the user agent does not establish what Google's actual crawler receives.
- The native browser connection then failed repeatedly with `Sky Computer Use native pipe startup failed`, including after reconnecting. Could not finish the sitemap drill-down, indexing/performance reports, Business Profile settings, or new visual browser checks. No account traffic figures were inferred.
- AWS CLI account checks failed with an invalid request signature. The default region setting also appears invalid. No credential was changed or printed, and no production deployment was performed.
- The local environment has no Resend or Upstash credentials configured. Production settings are unverified; local success tests use a mocked provider and cannot prove real inbox delivery.

The follow-up build, lint, typecheck, and focused module/HTTP checks passed. See [follow-up verification](evidence/remaining-fixes-checks.json). No fresh Lighthouse score or automated accessibility certification is claimed for this pass.

**Remaining work that needs production or account evidence**

- Deploy the reviewed changes, then confirm one real inquiry reaches the intended inbox and reply-to works. Confirm booking notifications separately.
- Review the existing Search Console and Business Profile data for indexing, actual local queries, clicks, profile details, and inquiries. Setup already exists and was not changed.
- Measure completed bookings, received inquiries, qualified leads, and sales separately from CTA clicks. No external analytics conversion settings were changed.
- Check real-user/mobile performance and the host redirect on the deployed AWS environment. The local LCP result still leaves room for improvement.
- Correct the MHK destination's public placeholder phone in that project's own repository or admin environment.
- Resolve the Search Console sitemap fetch status and review indexing/performance once browser access resumes. The project policies were subsequently approved and implemented locally; complete the client-specific agreement and retention operating routine. Confirm whether the connected Calendly account should use Mountain time; it currently reports Eastern. Domain email/business phone and measured client outcomes still require actual details or records.

The original audit remains a dated snapshot of the live site before this implementation pass.


**Owner-approved policy follow-through, November 16, 2026**

The owner approved the proposed payment, revision, defect-fix, and handover policies. Implemented them for new website projects in shared content at `src/content/project-policies.ts`.

- Added a visible policy summary below all three website packages: 50% deposit, balance after approval and before launch/handover; two consolidated revision rounds; a 30-calendar-day post-launch reporting window for scoped defects that are corrected; and agreed files/access after full payment.
- Pricing and service FAQs explain revision rounds, separately approved additional scope, defect corrections versus ongoing work, editing access, handover, and third-party licenses.
- About, Contact, the homepage, and the services overview use consistent payment and support wording. Removed the old “balance due at launch” wording and the Growth-only generic support bullet.
- Created matching [proposal](../../business/project-proposal-template.md) and [onboarding](../../business/project-onboarding-checklist.md) templates. The business policies document now records the owner's approval. Each client proposal still needs its actual scope, parties, figures, dates, and agreement provisions completed; existing signed agreements stay in force.
- No fixed deletion promise was added to the privacy notice. The inbox/provider retention routine remains an operating follow-up.

These source changes remain local. The browser inventory still reports a native pipe startup failure, so a fresh visual review is unavailable. Build/lint/typecheck and direct local HTTP checks are recorded in [approved-policy verification](evidence/approved-policy-checks.json); no new live search-performance result or deployment is claimed.
