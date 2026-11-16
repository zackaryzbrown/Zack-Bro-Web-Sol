# Zackary Brown Web Solutions

Marketing site for Zackary Brown Web Solutions, an Erie, Colorado web business serving local service businesses within about 25 miles. Built with the Next.js App Router and content-as-code.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript (strict)
- Tailwind CSS 4 (no config file, uses `@import "tailwindcss"`)
- `next/font` for `DM Sans` (body) and Lora (headings)
- Resend for contact submissions, Upstash Redis for rate limiting
- Optional Google Analytics 4

> Heads up: this is Next.js 16. APIs like dynamic route `params` are `Promise`-based and must be `await`ed. See [AGENTS.md](AGENTS.md) for agent rules.

## Project Structure

```text
src/app/                Routes, page-level metadata, sitemap, robots
  work/[slug]/          Dynamic case-study pages (SSG)
  api/contact/          Server route that sends through Resend
src/components/         Shared UI building blocks (server-first)
src/content/            Typed content modules (copy, projects, FAQ, pricing)
src/lib/                Metadata helper, rate limiter, social image, contact utils
public/projects/        Project screenshots
```

Content lives in `src/content/*.ts` as typed objects (types in `src/content/types.ts`). Edit copy there rather than in JSX.

## Pages

- `/` home (hero, trust strip, built-with strip, services, pricing preview, work, testimonials, FAQ, CTA)
- `/services` service overview
- `/services/web-design`, `/services/website-redesign` focused service pages
- `/work` filterable project grid with direct case-study links and optional accessible previews
- `/work/[slug]` full case-study page per project (SSG, one per entry in `src/content/work.ts`)
- `/pricing` three custom-build tiers plus two care plans
- `/about`, `/contact` about and contact form
- `/privacy` factual data-use notice and browser analytics controls

Slugs are derived from project name via `projectSlug()` in `src/content/work.ts`. The sitemap (`src/app/sitemap.ts`) automatically includes every project and service detail URL.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in what you need.

### Contact form (required for submissions)

```bash
RESEND_API_KEY=your_key_here
RESEND_TO_EMAIL=zackaryzbrown@gmail.com
RESEND_FROM_EMAIL="Contact Form <contact@zbweb.solutions>"
```

The form posts to `/api/contact`; the server route sends through Resend. Use a verified Resend sender domain. Without this key, submissions return an error with a direct email fallback.

### Rate limiting (recommended for production)

```bash
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

If omitted, the API falls back to an in-memory limiter (fine for local dev, not safe across multiple instances).

### Analytics (optional)

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

CTA clicks and form events are wired through `TrackedLink` and `lib/analytics.ts`. An unset ID uses the project fallback; set it explicitly to the intended property, or set an empty value to disable analytics. Analytics respect the browser opt-out on `/privacy` and Global Privacy Control. Google signals and ad personalization signals are disabled in the site configuration.

`generate_lead` fires only after a JavaScript submission receives a valid inquiry reference from the server. The reference is also included in the inquiry email, along with the optional referral answer. Provider acceptance is not confirmed inbox delivery. Native/no-JavaScript submissions do not create a browser conversion. Confirm received inquiries and completed bookings separately from button clicks; see [the measurement guide](docs/business/visibility-and-leads.md) and [lead tracker template](docs/business/lead-tracker-template.csv).

The owner approved the [project policies](docs/business/proposed-service-terms.md) for new website projects on November 16, 2026. Shared public wording lives in `src/content/project-policies.ts`. Use the matching [proposal template](docs/business/project-proposal-template.md) and [onboarding checklist](docs/business/project-onboarding-checklist.md); complete project-specific agreement provisions and keep existing signed agreements in force.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

The production build prerenders all static pages plus one HTML file per `/work/[slug]` and `/services/[slug]`. Contact renders on the server so prefilled and native POST forms work without client JavaScript.

## Deployment (AWS Amplify)

`amplify.yml` is configured for SSR/API routes. Make sure your Amplify build writes server env vars into `.env.production` before `next build` so the `/api/contact` route handler can read `RESEND_API_KEY` and the Upstash credentials at runtime.

## CI

GitHub Actions runs `lint`, `typecheck`, and `build` on pushes and pull requests to `main`.

## Conventions

- Server Components by default. `"use client"` is reserved for interactive UI (forms, modal, header menu, fade-in observer).
- Colors and spacing use CSS custom properties defined in `src/app/globals.css` (`--accent`, `--bg`, `--bg-alt`, `--text-primary`, etc.). Prefer those over raw hex values.
- Copy style: no em dashes (use hyphens or commas). Sentence case for UI labels.
- New SEO-visible routes should be added to `src/app/sitemap.ts`.
- Metadata is built through `createMetadata()` in `src/lib/metadata.ts` for consistent canonical URLs and OG tags.

## Notes

- `AGENTS.md` and `CLAUDE.md` are AI-agent helper files (repo tooling, not runtime code). `.agents/skills/` holds skill definitions for the same.
- Testimonials in `src/content/testimonials.ts` render conditionally; the section is hidden when the array is empty.
- Project status is explicit: `isClient` marks confirmed client work and `isSpec` marks a concept. An omitted flag does not imply a client. Keep both consistent with owner-confirmed project history.
- `www.zbweb.solutions` permanently redirects to the preferred non-www hostname, preserving paths and queries.
- Contact accepts JSON and native form POST submissions. Native submissions redirect to a generic status URL without inquiry details in the query string. Browser storage is optional; server rate limits still apply.
- A successful Resend API response indicates acceptance, not confirmed inbox delivery. Verify actual receipt and booking confirmations separately.
