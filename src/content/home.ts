import type { ServiceItem, ProcessStep, FeatureItem, FAQItem } from "./types";
import {
  tiers as pricingTiers,
  starterPrice,
  businessPrice,
  growthPrice,
} from "./pricing";

/* ── Services (overview cards) ── */
export const services: ServiceItem[] = [
  {
    title: "Custom Websites",
    description:
      "Purpose-built websites designed around your business goals, services, and audience.",
    icon: "◆",
  },
  {
    title: "Website Redesigns",
    description:
      "Rebuild outdated sites with clearer messaging, modern structure, and better mobile performance.",
    icon: "◇",
  },
  {
    title: "Lead Capture Setup",
    description:
      "Set up quote forms, booking flows, and calls to action that make inquiries easier.",
    icon: "▣",
  },
  {
    title: "Ongoing Website Care",
    description:
      "Ongoing support plans to keep your site secure, updated, and running smoothly.",
    icon: "○",
  },
];

/* ── Pricing preview (homepage) - mirrors /pricing 3-tier structure ── */
// Tier names + prices come from pricing.ts (imported at top) so they never drift.
const PREVIEW_NOTES: Record<string, string> = {
  "Starter Site": "One-page custom build for a clear online presence.",
  "Business Site": "Custom 3 – 5 page site. Most popular for local businesses.",
  "Growth Site": "Expanded build with advanced conversion flows.",
};

export const pricingPreview = pricingTiers.map((t) => ({
  name: t.name,
  startingAt: t.price,
  note: PREVIEW_NOTES[t.name] ?? t.description,
  featured: t.featured ?? false,
}));

/* ── AI add-on note (homepage aside) ── */
export const aiNote = {
  heading: "Want AI on your site?",
  body: "I can also add lightweight AI to your site, like a chat assistant that answers common customer questions, or a small automation that routes leads, sends follow-ups, or drafts replies. Kept simple, wired directly into your site, and scoped so it actually helps instead of just sitting there.",
};

/* ── Process steps ── */
export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We discuss your business goals, audience, and what your site needs to do.",
  },
  {
    step: "02",
    title: "Scope & Quote",
    description: "You get a clear proposal with scope, pricing, and timeline.",
  },
  {
    step: "03",
    title: "Build",
    description: "I design and build the site with focused progress check-ins.",
  },
  {
    step: "04",
    title: "Review & Refine",
    description: "You review the build and I refine details before launch.",
  },
  {
    step: "05",
    title: "Launch",
    description: "I handle launch setup, domain connection, and final checks.",
  },
  {
    step: "06",
    title: "Ongoing Support",
    description: "Optional hosting and care are available after launch.",
  },
];

/* ── Why Work With Me ── */
export const whyWorkWithMe: FeatureItem[] = [
  {
    title: "Direct Communication",
    text: "You work directly with me from planning to launch.",
  },
  {
    title: "Business-Focused Approach",
    text: "Every design decision is tied to clarity, trust, and lead flow.",
  },
  {
    title: "Transparent Process",
    text: "Clear pricing, realistic timelines, and straightforward communication.",
  },
  {
    title: "Built for Performance",
    text: "Fast, mobile-first builds structured for local search visibility.",
  },
];

/* ── Homepage FAQ (trimmed subset) ── */
export const homeFaqItems: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer: `Custom websites start at ${starterPrice} for a one-page Starter Site. Most local service businesses land in the ${businessPrice} Business Site range, with the Growth Site at ${growthPrice} for businesses that need expanded structure and advanced conversion flows. Every project is scoped and quoted before any work begins.`,
  },
  {
    question: "How long does a project take?",
    answer:
      "Most projects are completed in 2 to 4 weeks, depending on scope and how quickly content and feedback are provided.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. If you have a site that's outdated, not mobile-friendly, or just not generating leads, I can redesign it with modern structure and clearer messaging.",
  },
  {
    question: "Do you help with hosting and launch?",
    answer:
      "Yes. I handle the technical side of launching your site, including domain connection, hosting setup, SSL, and making sure everything works properly from day one.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Managed Hosting starts at $25/month and Website Care starts at $49/month.",
  },
  {
    question: "What makes a professional website better than a DIY site?",
    answer:
      "DIY builders can get something online fast, but they often look generic and lack the structure needed to convert visitors into customers. A professionally built site is designed around your business goals, loads faster, ranks better in search, and builds real trust with potential customers.",
  },
];
