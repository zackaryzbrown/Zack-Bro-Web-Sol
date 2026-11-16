# Live website and business acquisition audit

Audited November 14, 2026, Mountain Time. Site: https://zbweb.solutions. Target clarified by Zack: Erie, Colorado, and approximately 25 miles around Erie.

Owner clarification after the live review: Google Business Profile and Google Search Console are both set up. Their account settings and performance data were not inspected in this audit.

The site has a usable technical foundation and a coherent visual identity. Its strongest problems are local relevance, the credibility of its portfolio presentation, and the amount of work a phone visitor must do before reaching proof or a form. Metadata exists, but that does not mean the site is positioned to compete for the right searches.

This audit separates observed behavior from business hypotheses. Public pages cannot establish how many inquiries were lost, which competitors outrank the business in a particular person's Google results, or whether the main constraint is traffic or conversion. Those conclusions require Search Console, Business Profile, analytics, and actual lead records.

**Scope and evidence**

- Crawled all 16 URLs in the live sitemap: six main pages and ten project pages. Collected titles, descriptions, headings, canonical links, rendered text, images, links, JSON-LD, browser errors, and response statuses.
- Reviewed the six main pages at 390 × 844 and their desktop renderings. Checked home, work, and contact for document overflow at widths of 320, 360, 768, and 1024 pixels.
- Ran automated accessibility checks on the six main pages and one representative case study, plus manual menu and project-dialog checks.
- Ran Lighthouse mobile twice, including a run after the main crawl finished. These are local lab tests, not Google's real-user Core Web Vitals data.
- Checked internal fragments, domain variants, 404 behavior, social image endpoints, portfolio destination responses, the Calendly landing page, and an invalid contact API request.
- Tested the form's success interface by intercepting its request and providing a simulated successful response. No real inquiry email was sent, and no appointment was booked. Delivery to the owner's inbox remains unverified.
- Compared nearby businesses' public websites. Search results were used for discovery, not as a controlled Google rank-tracking study.
- Reviewed the corresponding source files. No application changes or deployment were made.

Screenshots and raw observations are in [evidence](evidence/). UTC capture timestamps on November 15 correspond to the late evening of November 14 in Colorado.

**The issues to address first**

| Priority | Observed issue | Why it matters | Next action |
| --- | --- | --- | --- |
| High | Erie is absent from all 16 pages' rendered text and the main business location/schema signals | The site does not clearly explain its relationship to its actual local market | Make Erie the primary location and describe the real nearby service area |
| High | The homepage title helper discards the supplied homepage title | Updating the intended SEO title can leave the live title unchanged | Fix the helper, then publish an Erie-focused title |
| High | Portfolio classifications and evidence conflict | A buyer may doubt the work and the claims attached to it | Verify client versus concept status and feature substantiated client work |
| High | A testimonial contains an unexplained 200% retention claim | An unclear number weakens the testimonial's credibility | Obtain clarification and an approved, accurate version |
| High | Mobile contact fields start around 918 px down; first project card starts around 1655 px down | Visitors must scroll before doing the main task | Shorten page introductions and move fields/projects upward |
| High, investigate | Both mobile Lighthouse runs scored 45 for performance | A slow first impression conflicts with the service being sold | Investigate render delay and verify on a real phone |
| High, verify | Production email delivery and actual booking completion were not established | A good-looking funnel is insufficient if inquiries do not arrive | Verify receipt and booking notifications end to end |
| Medium | The project dialog leaves keyboard focus on the page behind it | Keyboard visitors can lose their place or interact with background content | Add dialog focus management and background inertness |
| Medium | Several offer descriptions contradict package details | Buyers cannot easily tell what they are buying | Align care, WordPress, support, scope, and price language |

**1. Local search targeting and discovery**

1. **Erie is missing where it should be most obvious.** No crawled page's rendered text mentions Erie. The shared location is only Colorado. The homepage description leads with Denver, Boulder, and Colorado Springs. The visible location lists emphasize Denver, Boulder, Colorado Springs, Fort Collins, Aurora, Lakewood, Loveland, and Longmont. The business schema repeats that footprint and does not identify Erie as the home town. This is a confirmed mismatch with the stated acquisition goal, not proof of a penalty. Start with Erie, Lafayette, Louisville, Broomfield, Boulder, and Longmont, subject to the actual service radius. Keep broader availability as a secondary statement. Do not claim offices in nearby cities. Source: `src/content/site.ts:5`, `src/components/LocalServiceAreas.tsx`, `src/components/JsonLd.tsx:28`.

2. **There is a real homepage title implementation defect.** `createMetadata()` substitutes its own title whenever the path is empty or `/`, ignoring the title passed by the layout. The live title is brand plus a broad local-service-business tagline; the more specific title supplied in the layout never reaches the page. Suggested final title: `Web Design in Erie, CO | Zackary Brown Web Solutions`. The other main titles are also generic service labels, with no Erie context. Use concise page-specific titles after the pages themselves have matching content. Google recommends descriptive titles and considers headings and other page content too. [Google's title guidance](https://developers.google.com/search/docs/appearance/title-link). Source: `src/lib/metadata.ts:19`.

3. **Commercial services have sections, rather than focused pages.** The sitemap contains six general pages and ten portfolio entries. Custom websites, redesigns, maintenance, and conversion work share `/services`. This limits the detail, title, internal links, examples, and buying questions each service can address. Start with useful pages for custom web design and website redesign; add maintenance when there is enough distinct material. Link them visibly from navigation, relevant work, and pricing. More URLs alone are not the objective.

4. **Portfolio URLs receive weak links from the main browsing pages.** The homepage links featured projects to outside destinations. On `/work`, project cards are buttons that open a dialog; the case-study link appears after opening it. Neither page initially exposes ordinary links to the case-study URLs. The sitemap and related-project links provide discovery, so these pages are not completely orphaned. Give each card a persistent case-study link and retain previews as an option. Google generally extracts crawlable links from anchors with `href`. [Google's crawlable-link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable). Source: `src/components/ProjectGrid.tsx:130`.

5. **Business Profile and Search Console are set up; their performance remains unexamined.** Zack confirmed both are set up after the live review. Missing setup should therefore not be treated as a finding. There is no Maps/review link in the inspected site navigation. Inspect the existing profile's categories, actual Erie location/service area, website, phone, reviews, and public presentation. Use Search Console to check indexing, Google-selected canonicals, and actual search queries. Keep a home address private where appropriate instead of publishing or inventing a storefront. Account data is needed to assess settings and results; this audit does not establish a profile eligibility problem. [Google's business representation guidance](https://support.google.com/business/answer/3038177).

6. **Authority and reviews need measurement.** A technical review cannot quantify the backlink or review gap. Nearby competitors make client identities, local presence, and proof easier to inspect. Check genuine review coverage and relevant local/client links before attributing poor visibility to metadata. Google's local guidance describes relevance, distance, and prominence, including links and reviews. Website city lists do not override searcher distance. [Google's local ranking guidance](https://support.google.com/business/answer/7091).

7. **The schema describes a much broader business than the immediate target.** It includes state/country service coverage, an address with only state and country, and no locality, public business phone, or `sameAs` profile links. Add truthful Erie location context, actual service coverage, and maintained public identity links. Validate the final markup. The current script parses, but parsing successfully does not establish eligibility for a particular Google result or improved rankings. Do not expose a private street address just to fill a schema field. [Google's LocalBusiness guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business).

8. **Both hostnames serve the site.** `https://www.zbweb.solutions/` and its `/services` path return 200 without redirecting to the preferred non-www address. The pages declare the non-www canonical, which helps. Add a permanent www-to-non-www redirect and preserve paths and queries. This is cleanup, not evidence that Google is penalizing duplicate content.

9. **Metadata length is a smaller concern.** The homepage description is 193 characters and some project descriptions reach 282–287 characters. They read like full result paragraphs and may produce weak or truncated snippets. Rewrite them around the actual page and buyer intent. There is no universal fixed character count that guarantees display or ranking. Do not put snippet trimming above the local targeting and proof issues.

10. **The keywords meta tag does not solve the targeting problem.** The helper repeats Colorado and city phrases in `keywords`. Google does not use this tag for indexing or ranking. Spend effort on useful visible content, titles, links, and proof. [Google's supported meta tags](https://developers.google.com/search/docs/crawling-indexing/special-tags).

11. **Sitemap dates reflect generation time rather than individual edits.** Every entry receives the same new timestamp. Track meaningful page changes if maintaining `lastmod`. This is a low-priority accuracy issue. The sitemap itself loads successfully and includes the current project routes.

Avoid producing a batch of near-identical town pages. Make the homepage the primary Erie entry point, then add other location material only when there is a real local customer need and distinct evidence to support it. [Google's doorway-abuse policy](https://developers.google.com/search/docs/essentials/spam-policies).

**2. Trust, positioning, and the offer**

12. **The portfolio's status system is unreliable.** The work page advertises eight client builds and two concepts. Its code counts every item without `isSpec` as a live client. Floor Hosting is categorized as a hosting/SaaS concept while its case-study page also calls it a live client site. The three homepage features all use demo-style hostnames under a claim about real business projects. A demo hostname alone does not prove a project was unpaid; the problem is that the presentation cannot explain the distinction. Verify each entry as commissioned client work, personal project, concept, or redesign exercise. Derive counts and labels from an explicit status. Feature real commissioned work where confirmed. Source: `src/app/work/page.tsx:18`, `src/content/work.ts`, `src/app/work/[slug]/page.tsx`.

13. **Result paragraphs usually describe intended benefits rather than measured outcomes.** Statements about credibility and a streamlined inquiry path demonstrate design intent. They do not show traffic, bookings, conversion rates, or business improvement. For two or three strongest projects, explain the original problem, Zack's specific work, what was shipped, the date, the client's identity, and any verified result with its measurement period. If no outcome data exists, describe the delivered capability without implying measured success.

14. **The MHK story undersells and partly misdescribes the live product.** The linked site presents a martial arts member workspace with curriculum and a live class schedule. The case study reads more like a generic lead-generation fitness website. Describe the actual product, role, user workflows, and technical work. The destination also visibly displays a 555-style phone number; confirm and correct public placeholders before using the site as proof of production quality. Do not infer user numbers or operational success from the displayed schedule. Evidence: `last-checks.json`, MHK live page, and `/work/mhk-training`.

15. **The retention metric needs clarification.** The testimonial reports a 200% retention rate without defining the measure, denominator, or comparison. Ordinary customer retention and net revenue retention are different measures; a reader cannot tell which is meant. Ask the client what changed, over what period, and how it was measured. Get permission for an accurate clarified quote or use an approved excerpt without the ambiguous metric. Do not silently rewrite a client's attributed words. Source: `src/content/testimonials.ts:15`.

16. **The second testimonial has limited buyer context.** It identifies a software engineer without a business or named engagement. Clarify the relationship and project, with permission. A relevant small-business owner endorsement would better support the current audience than another general praise quote.

17. **The work page spends space apologizing for experience before showing work.** The new-to-freelancing explanation follows duplicate client/concept totals and precedes the filters and portfolio. Honest labels are valuable; the duplicated summary and defensive framing delay the evidence. Use a brief factual explanation beside a clearly marked concept group. Let the strongest completed work lead.

18. **The entry prices may create uncertainty about scope.** A $599 custom three-to-five-page build is far below several nearby examples examined. This is not proof that low prices are costing sales, and raising them is not an SEO fix. Explain what keeps the offer affordable, what content the client supplies, revision limits, copywriting, integrations, and what causes a higher final quote. Compare qualification and close rate before changing prices. Avoid unsupported broad agency-versus-template price comparisons.

19. **Ownership and editing questions remain unanswered.** State who owns the domain, source, design, content, hosting account, and credentials after payment. Explain how a nontechnical owner changes text, what handover includes, and what happens if a care plan is cancelled or Zack becomes unavailable. The current independence-after-launch promise needs a practical editing and transfer explanation, especially for custom-coded sites. These are buying questions, not just contract details.

20. **Several offer details contradict one another.** The services page advertises active care/editing benefits from $25/month, while pricing describes $25 as hosting only and $49 as active care. The WordPress FAQ emphasizes a cheaper quick-start path that is not a displayed package; elsewhere custom builds are described as cheaper to maintain. The services process includes 30-day support, while the pricing cards attach that wording to Growth. Clarify platform tradeoffs and exact inclusions without blanket claims. Sources: `src/content/services.ts`, `src/content/pricing.ts`, `src/content/faq.ts`.

21. **There are visible editing mistakes.** Pricing includes the phrase `Every project is from pricing`. Services says four offers while listing five. The about page describes care from $25 even though active support is separated into the $49 tier. Correct these inconsistencies before promoting the offer. They are small individually, but a web designer's own site is part of the product demonstration.

22. **Some marketing language overstates what can be established.** The DIY comparison says professional sites rank better as a general rule. Custom development alone does not guarantee that result. `Most popular`, the average reply statistic, and the count of cities served should reflect real evidence; otherwise use a recommendation or service promise. Replace broad assertions with concrete deliverables and substantiated observations.

23. **The top of the homepage prioritizes developer signals over client proof.** The code/network box and framework strip are understandable to developers but do little to answer a local owner's hiring questions. Keep relevant technologies available further down. Put a verified client example, a short owner endorsement, and Erie-based availability closer to the primary call to action. The existing founder photo on About is useful; make that human identity easier to reach from the selling pages.

24. **Contact identity could feel more established.** The live site uses a Gmail address and offers scheduled calls but no visible tap-to-call business number. Neither is an automatic SEO fault. A working domain email and a public business phone, if Zack wants calls, can reduce buyer uncertainty. Verify delivery before replacing the working email address. Do not publish a private number by assumption.

25. **Data handling is not explained on the site.** No privacy-policy page or link was present in the inspected routes/navigation, despite a contact form and Google Analytics. Add a plain explanation of what inquiry data is used for and what analytics is collected. This audit makes no legal compliance determination.

**3. Mobile experience, accessibility, and inquiry reliability**

26. **The main task is too far down several mobile pages.** At 390 pixels wide, the name input begins about 918 pixels down Contact. The first project button begins about 1655 pixels down Work. The introduction, decorative page numbering, summary rows, duplicate totals, and industry filters consume the earlier space. Contact and Work should place the form and strongest project immediately after a compact introduction. The homepage is about 13,250 pixels tall, Pricing 11,207, and Services 10,743 at that width. Length alone is not a defect, but repeated promises and process explanations increase the distance to evidence and decisions. Screenshots: `contact-mobile-top.png`, `work-mobile-top.png`, and full-page mobile captures.

27. **The inquiry form asks for more effort than an opening conversation needs.** It requires business name as well as name, email, and a 20-character project message, with service selection and a website field also visible. Consider making business name optional and keeping the first interaction to the essential information. Replace the five-minute framing with a short, truthful expectation. The website field requires a full URL, so a common bare domain such as `example.com` is rejected by browser validation; accept or normalize that common entry. These are friction hypotheses to measure, not observed abandonment rates.

28. **The project modal does not manage focus.** After opening it, the active element remains the project card outside the dialog. The code closes on Escape but does not implement the focus trapping and restoration already present in the mobile menu. Move focus inside on open, contain Tab navigation, make background content inert, and restore focus on close. The page should also support directly opening a case study without needing the modal.

29. **Contrast and touch targets need attention.** Automated checks found footer text contrast around 3.83:1 where 4.5:1 is expected for the small normal-weight text. The active work-filter count measured 4.24:1. The carousel dots are only 8 pixels high, with several 20 pixels wide, making them difficult to tap even if spacing reduces accidental taps. Increase the invisible hit area or control size, brighten the footer text, and validate focus styling. The carousel also auto-advances without a persistent visible pause control; reduced-motion support is present, but provide an explicit pause/resume option. Sources: accessibility results in `crawl.json` and `src/components/HeroWebsiteShowcase.tsx`.

30. **The mobile speed finding is repeatable but needs diagnosis.** Lighthouse 12.8.2 returned performance 45, accessibility 90, best practices 100, and SEO 100 in both runs. LCP was approximately 5.6 and 5.3 seconds; total blocking time was approximately 1820 and 3220 ms; CLS was 0. The second run identified the hero text paragraph as the LCP element, with about 87% of its LCP time attributed to render delay. It also estimated roughly 100 KiB of unused JavaScript and 12 KiB of image-sizing savings. Much of the long task time was unattributed. Do not blame one library, hosting, or images without profiling. Investigate above-the-fold reveal/render behavior, fonts, and main-thread work; verify on a physical phone and consult real-user data. A lab score is not a direct measure of lost leads or a definitive explanation for rankings. [Google's page-experience guidance](https://developers.google.com/search/docs/appearance/page-experience).

31. **The form interface works under simulation; real delivery is still an open boundary.** Service prefill worked. An intercepted submission produced the correct payload and success message, and `form_started`, `form_submitted`, and `form_success` entered the analytics data layer. An actual empty API request returned HTTP 400 with a validation error, showing the endpoint responds. None of this proves production Resend credentials, sender verification, inbox delivery, or reply-to behavior. Test one clearly marked inquiry with the owner's involvement and confirm its receipt and reply path. Do the same for booking confirmations.

32. **There are code-level reliability risks worth fixing during form work.** The form defaults to GET with no non-JavaScript submission handler, so blocked or failed JavaScript has no working send path and can expose typed values in a query string. `localStorage` is read before the submission try/catch; blocked storage could leave the button in a sending state. Add a deliberate fallback and guard storage access. The server's name-length rule is stricter than the visible input's HTML rule. Show requirements beside the relevant field and associate errors with it. These risks were found in source review rather than reproduced in a customer's browser. Source: `src/components/ContactForm.tsx` and `src/app/api/contact/route.ts`.

33. **Booking works as a destination, but the event presentation is generic.** The Calendly page renders Zackary Brown, a 30-minute meeting, Mountain Time, and selectable future dates. It does not explain the website consultation agenda. Rename the event to match the free consultation promise and explain what the owner should bring and what they will leave with. No time slot was reserved. A link click should be tracked separately from a completed booking.

34. **Measurement stops short of proving business outcomes.** Confirm the site's Analytics measurement ID belongs to the intended property and that events reach its reports. Mark the successful inquiry event as a key event where appropriate. Measure actual completed bookings, qualified inquiries, quotes, and wins; an outbound Calendly click is not a booked sales call. Preserve useful source information in the lead workflow without sending inquiry text or email addresses to Analytics. The report does not establish historical traffic, conversion rate, or lead quality.

35. **Maintenance documentation is stale.** The README still describes Web3Forms although the live application's contact route and environment example use Resend. Correct the runbook so future configuration work does not break the main inquiry channel. Confirm the production rate-limit store and its failure behavior as part of operational maintenance. No private environment values were read or copied for this report.

**What nearby competitors make easier to understand**

These are public presentation comparisons, not independently verified claims about their results or a claim that every example ranks above this site.

| Business | Public evidence | Practical lesson |
| --- | --- | --- |
| [Claire Horner, Lafayette](https://clairehorner.com/) | Clear Lafayette identity, named client and testimonial attached to a specific project, direct explanations of ownership/editing | A small solo portfolio can build trust through specificity rather than a large project count |
| [Lerner Works, Niwot/Boulder County](https://www.lernerworks.com/boulder-county-web-design/) | Named founder/base, explicit nearby communities including Erie, ownership and engagement details, defined deliverables | Explain the local relationship and reduce practical buying uncertainty |
| [Cloudburst Design, Lafayette](https://cloudburstdesign.com/) | Visible business phone, local identity, named featured projects, separate service information, client/testimonial navigation | Make a business's existence, expertise, and proof straightforward to inspect |
| [Customer Paradigm's Erie page](https://www.customerparadigm.com/erie-co-website-design-development/) | A page explicitly addressing Erie, a clear admission that its office is elsewhere, and a direct call/text path | You can truthfully be the Erie-based option, instead of leaving that advantage unstated |

Several competitor pages are not models to copy wholesale. Larger navigation menus, dated content, and general promises can also create friction. The opportunity is to make this business easier to locate, assess, and contact with a clear, honest local offer.

**A concrete positioning draft**

- Homepage title: `Web Design in Erie, CO | Zackary Brown Web Solutions`
- Eyebrow: `ERIE, COLORADO WEB DESIGN`
- Main heading: `Websites that help local businesses win more inquiries.`
- Supporting copy: `I build and redesign websites for small businesses in Erie, Lafayette, Louisville, Broomfield, Boulder, and Longmont. Work directly with me from the first conversation to launch, with clear scope and pricing.`
- Price context: `One-page sites from $249. Business sites from $599.`
- Primary action: request a quote. Secondary action: view a verified client project or book the clearly described consultation.

This is a draft direction, not deployed copy. Choose the location wording based on the real service radius and support it throughout the site. Avoid implying guaranteed bookings or rankings.

**Recommended order of work**

| When | Work | Completion evidence |
| --- | --- | --- |
| First | Correct client/concept classifications, ambiguous metrics, offer contradictions, and obvious typos; verify real email delivery | Every displayed claim has a truthful basis; one marked inquiry is received and can be replied to |
| Next | Publish Erie-based positioning, fix the title helper, update factual schema and nearby service areas | The live title, main copy, About, Contact, footer, and schema consistently explain Erie |
| Next | Move contact fields and real work upward on mobile; fix modal focus and contrast | Form and proof are visible much earlier; keyboard use and automated checks pass the affected paths |
| Next | Profile mobile render delay and reduce verified bottlenecks | Improved controlled lab measurements and a good experience on a physical phone |
| Within the following weeks | Publish focused service material and two substantiated case studies; inspect the existing Business Profile and Search Console settings and performance | Useful pages linked from the site; sitemap and priority-page indexing checked; accurate profile and local search data reviewed |
| Ongoing | Ask real clients for honest reviews, build relevant local relationships, and maintain public identity | Genuine reviews and relevant references; consistent contact/location information |
| After sufficient traffic | Review the acquisition funnel and adjust the offer based on evidence | Nonbrand visibility, qualified inquiries, booked calls, quotes, and wins tracked together |

These are an execution sequence, not a promise of a ranking or lead volume within a fixed period.

**The data needed to determine the actual bottleneck**

Use the last 90 days in Search Console, split branded and nonbranded queries, inspect Erie/nearby-service terms, and compare landing pages and devices. Check indexing and Google-selected canonicals for the homepage, services, and strongest case studies. Do not use the number of `site:` search results as an indexed-page count; the public search results in this audit were inconsistent.

Then connect impressions → clicks → useful visits → form starts → received inquiries or completed bookings → qualified leads → quotes → wins. Low impressions call for indexing, relevance, and authority work. Impressions with few clicks call for intent and search-result presentation work. Visits without inquiries call for stronger proof, clearer offers, and less friction. Inquiries without sales call for qualification, follow-up, and offer review. Multiple constraints can coexist.

The current evidence supports a clear improvement plan. It does not support an honest claim that metadata, backlinks, pricing, or any one factor is the sole cause of the business shortfall.

**Checks that passed**

- All 16 sitemap pages returned HTTP 200 with one primary heading and a self-referencing preferred canonical.
- Robots permits public pages and references the sitemap; no blocking page-level robots tag was found on the crawled routes.
- Unknown page returned a real HTTP 404. HTTP redirects to HTTPS. The tested trailing slash normalizes.
- All checked internal fragment targets exist. All portfolio website destinations returned HTTP 200.
- Project images loaded during ordinary sequential scrolling; initial unloaded lazy images were not counted as broken images.
- No uncaught page errors were reported during the 16-page crawl.
- No document horizontal overflow was found at the tested responsive widths. Main-page phone layouts retain readable text and usable main buttons.
- Mobile menu opens and closes with Escape. The project modal also closes with Escape.
- Icon and social-preview image endpoints returned images successfully.
- Some social services blocked automated requests or returned transport errors. Those results do not establish that the linked accounts are broken.
- The visual identity, visible founder, direct contact alternative, starting prices, and explicit response expectation provide a useful foundation to improve.

Technical checks passing means the site is accessible to visitors and crawlers under the tested conditions. Competitive visibility and persuasive evidence require the additional work above.
