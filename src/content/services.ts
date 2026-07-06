import type { ServiceItem } from "./types";
import { starterPrice, businessPrice } from "./pricing";

export const servicesDetailed: ServiceItem[] = [
  {
    title: "Custom Websites",
    description:
      "A site built from scratch around your services, your customers, and the way people actually find and hire you. No template wrestling, no bloated page builders - just a clean, fast site that looks the way your business deserves.",
    icon: "◆",
    outcome:
      "A credible online home that turns first-time visitors into booked work.",
    includes: [
      "Custom design tailored to your brand",
      "Mobile-first responsive build",
      "Clear services and contact pages",
      "Local SEO foundation (titles, schema, sitemap)",
      "Contact form with email delivery",
      "Analytics setup and launch support",
    ],
    bestFor:
      "New or established service businesses that want a professional site without WordPress overhead.",
    notFor:
      "If you need a large e-commerce catalog or a complex booking platform, I'll point you to a better fit.",
    timeline: "2 – 4 weeks",
    startingPrice: `from ${starterPrice}`,
    process: [
      { label: "Discovery", detail: "Goals, audience, and content audit." },
      { label: "Design + build", detail: "Custom layout, reviewed in stages." },
      { label: "Launch", detail: "Go-live, analytics, and 30-day support." },
    ],
  },
  {
    title: "Website Redesigns",
    description:
      "If your current site is dated, hard to update, or quietly losing leads, I rebuild it with clearer messaging, a stronger visual identity, and a structure that guides visitors toward contacting you.",
    icon: "◇",
    outcome:
      "A site that finally matches the quality of the work you do offline.",
    includes: [
      "Full visual and structural redesign",
      "Rewritten or refined messaging",
      "Improved mobile experience",
      "Performance and speed improvements",
      "Updated call-to-action placement",
      "Migration of existing content and images",
    ],
    bestFor:
      "Established businesses with a site that no longer reflects their work or generates inquiries.",
    notFor:
      "If you're happy with your current site but need ongoing updates, the care plan is a better fit.",
    timeline: "2 – 5 weeks",
    startingPrice: `from ${businessPrice}`,
    process: [
      { label: "Audit", detail: "What's working, what's costing you leads." },
      { label: "Rebuild", detail: "New design, copy refinements, dev work." },
      { label: "Relaunch", detail: "Migration, redirects, and monitoring." },
    ],
  },
  {
    title: "Conversion-Focused Pages",
    description:
      "High-intent landing pages, quote request flows, and booking integrations built to do one job well: turn the people already visiting your site into inquiries you can actually follow up on.",
    icon: "▣",
    outcome: "Fewer drop-offs, more qualified leads landing in your inbox.",
    includes: [
      "Quote request and contact forms",
      "Booking or scheduling integration",
      "Service-specific landing pages",
      "Form notifications and lead routing",
      "Mobile-optimized conversion paths",
      "Goal tracking in analytics",
    ],
    bestFor:
      "Businesses already getting traffic but not enough inquiries from it.",
    notFor:
      "If you don't have a site yet, start with a Custom Website - the page work folds in.",
    timeline: "1 – 2 weeks",
    startingPrice: `from ${starterPrice}`,
    process: [
      { label: "Map", detail: "Trace the path from visit to inquiry." },
      { label: "Build", detail: "Design + wire up forms and integrations." },
      { label: "Measure", detail: "Track conversions and refine." },
    ],
  },
  {
    title: "Website Care & Support",
    description:
      "After launch, keep your site healthy, current, and quietly working in the background. Small content updates, uptime monitoring, and a single point of contact when something needs attention.",
    icon: "○",
    outcome:
      "A site that stays sharp without you ever having to think about it.",
    includes: [
      "Monthly uptime and security checks",
      "Small content and image updates",
      "Contact form monitoring",
      "Performance reviews each quarter",
      "Small design and copy edits",
      "Dedicated support contact",
    ],
    bestFor:
      "Owners who want their site maintained without learning a CMS or managing a developer.",
    notFor:
      "If you need weekly marketing pages or campaign builds, we'll scope that separately.",
    timeline: "Ongoing, month-to-month",
    startingPrice: "from $49 / mo",
    process: [
      { label: "Onboard", detail: "Access, baseline checks, comm channel." },
      { label: "Maintain", detail: "Monthly updates and monitoring." },
      { label: "Report", detail: "Quarterly health and performance review." },
    ],
  },
  {
    title: "AI Assistant & Automation",
    description:
      "Add a lightweight AI chat assistant that answers common customer questions using your own site content, or wire up small automations that route leads, send follow-ups, or draft replies. Kept small on purpose - built to actually help, not just sit on the page.",
    icon: "✦",
    outcome:
      "Fewer repetitive questions in your inbox and faster responses to new leads - without hiring anyone.",
    includes: [
      "AI chat widget trained on your site content",
      "Custom prompt tuned to your services and tone",
      "Lead-routing or auto-reply automations",
      "Contact form + email or CRM integration",
      "Guardrails so it stays on-topic",
      "Handoff-to-human path when the AI can't help",
    ],
    bestFor:
      "Businesses fielding the same questions repeatedly or losing leads because replies take too long.",
    notFor:
      "If you need a fully custom AI product or complex multi-agent system, that's a separate scope conversation.",
    timeline: "1 – 2 weeks",
    startingPrice: "from $199",
    process: [
      {
        label: "Scope",
        detail: "Identify the questions and workflows worth automating.",
      },
      {
        label: "Build",
        detail: "Configure the assistant, prompts, and integrations.",
      },
      {
        label: "Tune",
        detail: "Test with real questions and refine responses.",
      },
    ],
  },
];

export const wordpressNote = {
  heading: "Need WordPress specifically?",
  body: "I can build on WordPress when it's genuinely the right fit - usually for clients who already have a team trained on it, or who need a specific plugin ecosystem. For most local service businesses, a custom build is faster, cheaper to maintain, and easier to evolve. Happy to talk through which makes sense for you.",
};
