import type { PricingTier, CarePlan, PricingFactor } from "./types";

/**
 * Three-tier custom-first pricing.
 * Prices reflect Colorado freelance positioning - competitive entry,
 * room to grow, no agency overhead.
 *
 * NOTE: `tiers` below is the single source of truth for tier pricing.
 * All other price copy across the site (hero badges, meta descriptions,
 * JSON-LD, contact form, FAQ prose, trust strip, etc.) is derived from
 * the helpers exported at the bottom of this file. Update prices here.
 */
export const tiers: PricingTier[] = [
  {
    name: "Starter Site",
    price: "$249",
    description:
      "A focused one-page custom build with a clear message and a simple path to inquiries. Perfect first website or a clean refresh on a tight budget.",
    bestFor: "New service businesses launching their first real site",
    includes: [
      "One-page custom layout",
      "Mobile-first responsive build",
      "Contact form with email delivery",
      "Local SEO foundation",
      "Launch + analytics setup",
    ],
  },
  {
    name: "Business Site",
    price: "$599",
    featured: true,
    featuredLabel: "Most popular",
    description:
      "A custom 3 – 5 page site with the structure most local service businesses actually need. The full credibility piece, scoped tightly enough to stay affordable.",
    bestFor: "Established businesses ready for a real online home",
    includes: [
      "3 – 5 page custom architecture",
      "Tailored design and brand styling",
      "Service, About, and Contact pages",
      "Conversion-focused CTAs",
      "Local SEO foundation + schema",
      "Analytics + launch support",
    ],
  },
  {
    name: "Growth Site",
    price: "$949",
    description:
      "An expanded custom build with deeper content, advanced conversion flows, and the structure to grow into. Built for businesses that want their site to actually pull weight.",
    bestFor: "Businesses investing in lead quality and long-term growth",
    includes: [
      "Expanded page and section structure",
      "Advanced conversion flow planning",
      "Quote, booking, or scheduling integration",
      "Trust + credibility sections",
      "Performance + technical polish",
      "30-day post-launch support",
    ],
  },
];

/* Two-tier care plan - hosting-only vs. active care */
export const carePlans: CarePlan[] = [
  {
    name: "Managed Hosting",
    price: "$20",
    period: "/mo",
    description:
      "Just the essentials - your site stays online, secure, and backed up. No ongoing design or content work.",
    features: [
      "Secure hosting",
      "SSL certificate",
      "Routine backups",
      "Uptime monitoring",
      "Basic domain and DNS help if needed",
    ],
    exclusions: [
      "Content edits",
      "Design changes",
      "New pages or features",
      "Active ongoing support",
    ],
  },
  {
    name: "Website Care",
    price: "$49",
    period: "/mo",
    description:
      "Everything in Managed Hosting plus small monthly updates and a real human to email when something needs attention.",
    featuredLabel: "Recommended",
    features: [
      "Everything in Managed Hosting",
      "One small content or image update per month",
      "Contact form monitoring",
      "Quarterly performance review",
      "Light email support",
    ],
    featured: true,
  },
];

/* Soft WordPress aside - mirrors the services page tone */
export const wordpressPricingNote = {
  heading: "What about WordPress?",
  body: "I can build on WordPress when it's genuinely the right fit - usually for teams already trained on it or sites that need a specific plugin ecosystem. For most local service businesses, a custom build is faster, cheaper to maintain, and easier to evolve over time. Happy to talk through which makes sense for your business.",
};

/* ────────────────────────────────────────────────────────────────
 * Derived price helpers - single source of truth for money strings
 * used across the marketing site. Import from these instead of
 * hardcoding dollar amounts in prose, badges, meta, or JSON-LD.
 * ──────────────────────────────────────────────────────────────── */

/** Tier prices, indexed by tier name for direct lookup. */
export const starterPrice = tiers[0].price;
export const businessPrice = tiers[1].price;
export const growthPrice = tiers[2].price;

/** Separate entry-level for WordPress quick-start builds (not a tier). */
export const wordpressStartPrice = starterPrice;

/** Custom-build minimum quoted in FAQ - sits between Starter and Business. */
export const customStartPrice = "$299";

/** "$249 – $949+" range label used in meta, JSON-LD, and pricing anchor. */
export const priceRangeLabel = `${starterPrice} – ${growthPrice}+`;

/** "From $249+" - used on the hero badge. */
export const heroBadgeLabel = `From ${starterPrice}+`;

/* Anchor bar - used at top of pricing page to frame value */
export const pricingAnchor = {
  comparison: [
    { label: "Typical local agency", value: "$5,000 – $15,000" },
    { label: "Marketplace template kits", value: "$200 – $800" },
    { label: "Working with me", value: priceRangeLabel, highlight: true },
  ],
  note: "Lower than an agency because there's no overhead. Higher than a template because it's actually built around your business.",
};

export const pricingFactors: PricingFactor[] = [
  {
    title: "Scope and content depth",
    text: "Page count matters, but section complexity and content depth usually have a bigger impact on effort.",
  },
  {
    title: "Design direction",
    text: "More tailored visual direction and custom layout work increase production time.",
  },
  {
    title: "Functionality",
    text: "Advanced quote, booking, or scheduling flows, automations, and third-party integrations increase technical scope.",
  },
  {
    title: "Content readiness",
    text: "Projects move faster when copy and brand assets are ready. I can help write or refine, but it's billed separately.",
  },
  {
    title: "Timeline",
    text: "Rush timelines or phased launches can affect total pricing.",
  },
];
