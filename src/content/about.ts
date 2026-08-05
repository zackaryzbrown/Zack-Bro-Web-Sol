import type { FeatureItem } from "./types";

export const founderBio = [
  "I'm a Colorado-based developer who builds modern, conversion-focused websites for local service businesses - the kind of companies where a customer almost always checks the site before they pick up the phone.",
  "From the first conversation to launch, you work with me directly. No account managers, no junior handoffs, no template factory. Just a clear scope, a fair price, and a site built to make your business look the part.",
  "My focus is simple: strong first impressions, clear messaging, mobile-first design, and the technical fundamentals that make Google and real humans take you seriously.",
] as const;

export const proofStats: { value: string; label: string }[] = [
  {
    value: "1-day",
    label: "Average reply time on new inquiries",
  },
  {
    value: "100%",
    label: "Founder-led - you talk to the person building it",
  },
  {
    value: "8+",
    label: "Front Range cities served and growing",
  },
];

export const approach: FeatureItem[] = [
  {
    title: "Business goals first",
    text: "Before design starts, I want to know what the site actually needs to do - more calls, more quote requests, better credibility, or a clearer explanation of your services.",
  },
  {
    title: "Clarity over complexity",
    text: "Visitors should understand what you do, who you help, and what to do next within seconds - not after scrolling through five animated sections.",
  },
  {
    title: "Built for trust",
    text: "For service businesses, design isn't just looks. It needs to make your business feel established, credible, and easy to contact on any device.",
  },
  {
    title: "Mobile-first, always",
    text: "Most people will see your site on a phone first. Every build is designed mobile-up - fast to load, easy to tap, and built to convert on a small screen.",
  },
];

export const process: { step: string; title: string; text: string }[] = [
  {
    step: "01",
    title: "Discovery call",
    text: "A free 30-minute conversation about your business, your customers, and what success looks like. No sales pressure - if it's not a fit, I'll tell you.",
  },
  {
    step: "02",
    title: "Scoped quote",
    text: "You get a clear, fixed quote with everything included: scope, timeline, deliverables, and what happens after launch. No surprises.",
  },
  {
    step: "03",
    title: "Design & build",
    text: "I design and develop in tight feedback loops. You see real progress every few days - not a six-week silence followed by a dramatic reveal.",
  },
  {
    step: "04",
    title: "Launch & support",
    text: "We launch when it's actually ready. After that, you can hand it back, hire me for ongoing care, or just call when you need a tweak.",
  },
];

export const commitments: FeatureItem[] = [
  {
    title: "Direct communication",
    text: "You work with me directly from first message to launch day. One inbox, one phone number, no middle layer.",
  },
  {
    title: "Clear pricing & timelines",
    text: "You'll know the scope, cost, and expected launch date before any work starts. A 50% deposit kicks things off; the rest is due at launch.",
  },
  {
    title: "Professional execution",
    text: "Every site is built to look polished, perform well on mobile, and support the business goals we agreed on up front.",
  },
  {
    title: "Support after launch",
    text: "Need hosting, edits, or ongoing peace of mind? Care plans start at $25/mo so you're never left figuring it out alone.",
  },
];
