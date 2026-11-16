import type { FAQItem } from "./types";

// Owner-approved November 16, 2026, for new website builds and redesigns.
// Keep the sales pages and proposal/onboarding templates in agreement.
export const projectPolicies = {
  paymentShort:
    "A 50% deposit starts the project after we agree on the written scope. The balance is due after your approval and before launch or handover.",
  payment:
    "A 50% deposit starts the project after the written scope is agreed and signed. The remaining 50% is due after your approval and before launch or handover. Larger projects can use a milestone payment schedule agreed in writing before work begins.",
  revisions:
    "Your build includes two consolidated revision rounds within the approved scope. Each round is one collected list of feedback. Corrections where the build does not match the agreed scope do not use a revision round. New pages, features, or a change of direction are quoted separately and approved before that work begins.",
  supportShort:
    "Each website build includes 30 calendar days after launch to report defects against the approved scope, which I correct.",
  support:
    "Each website build includes 30 calendar days after launch to report reproducible defects against the approved scope, which I correct. New features, content changes, client edits, and third-party outages are outside that defect-fix scope. Ongoing edits and maintenance are available separately; hosting and care plans are optional.",
  handover:
    "After full payment, you receive the website files and administrative access agreed in your proposal, plus a handover explaining hosting and editing. Your domain and business accounts stay in your control, with client-controlled billing wherever possible. The proposal identifies your editing tools, any developer-managed changes, ongoing dependencies, and how to move to another provider. Rights in original custom work are addressed in the written agreement; third-party software, stock assets, and reusable components remain subject to their licenses. Ongoing care is optional.",
} as const;

export const projectPolicySummary = [
  {
    title: "50% deposit",
    text: "Balance after approval, before launch or handover.",
  },
  {
    title: "Two revision rounds",
    text: "Consolidated feedback within the approved scope.",
  },
  {
    title: "30-day defect window",
    text: "Report defects after launch for correction against the approved scope.",
  },
  {
    title: "Files & access",
    text: "Agreed handover after full payment; third-party licenses still apply.",
  },
] as const;

export const projectPolicyFaqItems: FAQItem[] = [
  {
    question: "How do project payments work?",
    answer: projectPolicies.payment,
  },
  {
    question: "How many revisions are included?",
    answer: projectPolicies.revisions,
  },
  {
    question: "What support is included after launch?",
    answer: projectPolicies.support,
  },
  {
    question: "What files, access, and editing tools do I receive?",
    answer: projectPolicies.handover,
  },
];
