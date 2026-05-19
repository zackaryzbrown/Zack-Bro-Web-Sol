# Zackary Brown Web Solutions

Marketing site for Zackary Brown Web Solutions, a Colorado-based web shop focused on local service businesses. Built with the Next.js App Router and content-as-code.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript (strict)
- Tailwind CSS 4 (no config file, uses `@import "tailwindcss"`)
- `next/font` for `DM Sans` (body) and `Instrument Serif` / Lora (headings)
- Web3Forms for contact submissions, Upstash Redis for rate limiting
- Optional Google Analytics 4

> Heads up: this is Next.js 16. APIs like dynamic route `params` are `Promise`-based and must be `await`ed. See [AGENTS.md](AGENTS.md) for agent rules.

## Project Structure

```text
src/app/                Routes, page-level metadata, sitemap, robots
  work/[slug]/          Dynamic case-study pages (SSG)
  api/contact/          Server route that forwards to Web3Forms
src/components/         Shared UI building blocks (server-first)
src/content/            Typed content modules (copy, projects, FAQ, pricing)
src/lib/                Metadata helper, rate limiter, social image, contact utils
public/projects/        Project screenshots
```

Content lives in `src/content/*.ts` as typed objects (types in `src/content/types.ts`). Edit copy there rather than in JSX.

## Pages

- `/` home (hero, trust strip, built-with strip, services, pricing preview, work, testimonials, FAQ, CTA)
- `/services` four focused service offers
- `/work` filterable grid; opens an in-page modal
- `/work/[slug]` full case-study page per project (SSG, one per entry in `src/content/work.ts`)
- `/pricing` three custom-build tiers plus two care plans
- `/about`, `/contact` about and contact form

Slugs are derived from project name via `projectSlug()` in `src/content/work.ts`. The sitemap (`src/app/sitemap.ts`) automatically includes every project URL.

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
WEB3FORMS_ACCESS_KEY=your_key_here
```

The form posts to `/api/contact`; the server route forwards to Web3Forms. Without this key, the form shows a configuration error instead of sending.

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

CTA clicks and form events are wired through `TrackedLink` and `lib/analytics.ts` and stay no-op when this is unset.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

The production build prerenders all static pages plus one HTML file per `/work/[slug]`.

## Deployment (AWS Amplify)

`amplify.yml` is configured for SSR/API routes. Make sure your Amplify build writes server env vars into `.env.production` before `next build` so the `/api/contact` route handler can read `WEB3FORMS_ACCESS_KEY` and the Upstash credentials at runtime.

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
