import type { FAQItem } from "./types";
import { starterPrice } from "./pricing";
import { projectPolicies } from "./project-policies";

/* ── Homepage FAQ (tight subset - 6 items) ── */
export { homeFaqItems } from "./home";

/* ── Pricing FAQ ── */
export const pricingFaqItems: FAQItem[] = [
  {
    question: "Are these fixed prices or starting prices?",
    answer:
      "These are starting prices for custom builds. The final quote covers your pages, content, integrations, and agreed support. WordPress projects are quoted separately. You approve the scope and price before work starts.",
  },
  {
    question: "How do we choose between a custom build and WordPress?",
    answer:
      "We compare the functions you need, how you want to edit the site, and the ongoing maintenance involved. WordPress can suit a familiar editing workflow or particular plugins; a custom build can suit a focused design or integration. Neither is automatically the cheaper or better choice.",
  },
  {
    question: "What is included in Managed Hosting at $25/mo?",
    answer:
      "Managed Hosting includes secure hosting, SSL, backups, uptime monitoring, and basic domain or DNS help if needed. It does not include content edits, design changes, larger updates, new pages or features, or ongoing support work.",
  },
  {
    question: "What is included in Website Care at $49/mo?",
    answer:
      "Website Care includes everything in Managed Hosting plus regular maintenance checks, contact form checks, one small content update per month, and light email support.",
  },
  {
    question: "Do I need to pay everything upfront?",
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
    question: "What's not included in these prices?",
    answer:
      "Domain registration, premium stock photography, copywriting beyond the agreed scope, and third-party subscriptions or AI usage are separate. Hosting is optional. Any additional costs are agreed in your proposal.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Most new custom websites take 2 to 4 weeks. Redesigns usually take 2 to 5 weeks. Your quote includes a timeline based on scope, content readiness, and review time.",
  },
  {
    question: "What will my written quote cover?",
    answer:
      "Before the deposit, we agree on the pages, content responsibilities, revisions, integrations, editing access, ownership and handover, launch support, and any recurring charges. Work outside that scope is quoted separately before it begins.",
  },
  {
    question: "Will I be able to edit or move my website?",
    answer: projectPolicies.handover,
  },
  {
    question: "Can I switch from Managed Hosting to Website Care later?",
    answer:
      "Yes. You can move from hosting-only to Website Care at any time. Both options are month-to-month.",
  },
  {
    question: "What if I don't need a care plan?",
    answer:
      "Care plans are optional. After launch, you're free to manage your site independently. Plans are there for businesses that want ongoing support without the hassle.",
  },
];

/* ── Full FAQ (for a dedicated FAQ page or deeper link) ── */
export const fullFaqItems: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer: `Custom websites start at ${starterPrice} for a focused one-page build. Larger sites and WordPress projects receive a scoped quote after we discuss your goals. Hosting and active care are optional, separate plans.`,
  },
  {
    question: "How long does a project take?",
    answer:
      "Most websites are completed in 2 to 4 weeks depending on complexity and how quickly content is provided. I'll give you a realistic timeline during the quoting process.",
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
    answer: `${projectPolicies.supportShort} Managed Hosting at $25/month covers hosting essentials, while Website Care at $49/month adds ongoing help and updates. Both plans are optional.`,
  },
  {
    question: "Can you work with businesses outside Colorado?",
    answer:
      "Absolutely. While I'm based in Colorado, I work with businesses remotely across the country. Most communication happens over email and video calls.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Just a conversation about your business and goals. From there, I'll handle the design, development, and technical setup. I'll guide you on what content and images are needed along the way.",
  },
  {
    question:
      "Why does my business need a website if I already have social media?",
    answer:
      "Social media is great for visibility, but you don't own it. A website gives you a professional home base that you control, where customers can learn about your services, read reviews, and contact you directly without distractions or algorithms getting in the way.",
  },
  {
    question: "How can a website help me get more leads?",
    answer:
      "A well-structured website guides visitors toward taking action, whether that's requesting a quote, booking a service, or calling you. With clear messaging, strong calls to action, and mobile-friendly design, your site becomes a 24/7 sales tool that works even when you're busy.",
  },
  {
    question: "What makes a professional website better than a DIY site?",
    answer:
      "A DIY builder can be a useful starting point. Working with me adds planning, tailored design, clearer service information, and a checked inquiry flow. We'll choose an approach around your business goals, budget, and editing needs.",
  },
  {
    question: "What if I already have a website, but it's not getting results?",
    answer:
      "That's one of the most common situations I work with. If your site isn't generating leads, it usually comes down to unclear messaging, poor mobile experience, or weak calls to action. I can redesign and restructure your site to fix those issues and turn it into something that actually works for your business.",
  },
  {
    question: "Can my website help me show up better in Google?",
    answer:
      "Yes. Every site I build includes foundational SEO, including proper page structure, meta tags, fast load times, and mobile optimization. These are the basics that help Google understand and rank your site. For local businesses, this can make a real difference in showing up when nearby customers search for your services.",
  },
];
