import type { FeatureItem } from "./types";
import { projectPolicies } from "./project-policies";

export const founderBio = [
  "I'm a web developer based in Erie, Colorado. I build and redesign websites for local service businesses in Erie, Lafayette, Louisville, Broomfield, Boulder, and Longmont, with a focus on making your services clear and your business easy to contact.",
  "From the first conversation to launch, you work with me directly. No account managers, no junior handoffs, no template factory. Just a clear scope, a fair price, and a site built to make your business look the part.",
  "My focus is simple: strong first impressions, clear messaging, mobile-first design, and the technical fundamentals that make Google and real humans take you seriously.",
] as const;

export const proofStats: { value: string; label: string }[] = [
  {
    value: "1-day",
    label: "Response promise for new inquiries",
  },
  {
    value: "100%",
    label: "Founder-led - you talk to the person building it",
  },
  {
    value: "Erie, CO",
    label: "Your local point of contact",
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
    text: "I design and build with regular progress check-ins. You have two consolidated revision rounds within the agreed scope, and corrections of implementation mistakes do not use those rounds.",
  },
  {
    step: "04",
    title: "Launch & support",
    text: "After approval and final payment, I launch the site and hand over the agreed files and access. You have 30 calendar days after launch to report defects against the approved scope for correction. Ongoing care is optional.",
  },
];

export const commitments: FeatureItem[] = [
  {
    title: "Direct communication",
    text: "You work with me directly from first message to launch day. One point of contact for your questions and feedback.",
  },
  {
    title: "Clear pricing & timelines",
    text: projectPolicies.paymentShort,
  },
  {
    title: "Professional execution",
    text: "Every site is built to look polished, perform well on mobile, and support the business goals we agreed on up front.",
  },
  {
    title: "Support after launch",
    text: `${projectPolicies.supportShort} Optional Managed Hosting starts at $25/mo. Website Care at $49/mo adds a small monthly update, form monitoring, and light email support.`,
  },
];
