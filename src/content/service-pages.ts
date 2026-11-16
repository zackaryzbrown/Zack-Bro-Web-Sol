import { businessPrice, starterPrice } from "./pricing";
import type { FAQItem } from "./types";
import { projectPolicyFaqItems } from "./project-policies";

interface ServicePageContent {
  slug: string;
  title: string;
  description: string;
  label: string;
  heading: string;
  summary: string;
  introduction: string[];
  deliverables: { title: string; text: string }[];
  startingPrice: string;
  timeline: string;
  service: string;
  priceContext: string;
  faq: FAQItem[];
}

export const servicePages: ServicePageContent[] = [
  {
    slug: "web-design",
    title: "Custom Website Design in Erie, CO",
    description: `Custom websites for Erie small businesses, from ${starterPrice}. Clear service pages, mobile-friendly design, working inquiry forms, and a scoped launch plan.`,
    label: "Custom website design",
    heading: "A clear online home for your business.",
    summary:
      "Custom website design for small businesses in Erie, Lafayette, Louisville, Broomfield, Boulder, and Longmont. Work directly with the person designing and building your site.",
    introduction: [
      "A first website needs to answer the questions a customer asks before contacting you: what do you do, where do you work, what does the next step involve, and why should they choose you? We plan the pages around those decisions before choosing the layout.",
      "I build focused websites for service businesses, from a single page to a broader service, about, and contact structure. You get a written scope before work begins, a chance to review the build, and an agreed launch and handover plan.",
    ],
    deliverables: [
      {
        title: "Pages with a purpose",
        text: "Service information, location details, and useful calls to action organized around what your customers need to know.",
      },
      {
        title: "A considered mobile experience",
        text: "Readable layouts and accessible controls, with a straightforward path to requesting a quote or booking a conversation.",
      },
      {
        title: "An inquiry path that gets checked",
        text: "A contact form and email delivery setup, plus agreed booking or other integrations where your scope calls for them.",
      },
      {
        title: "Search and launch foundations",
        text: "Page titles, descriptions, crawlable links, sitemap, factual business markup, and agreed analytics setup.",
      },
    ],
    startingPrice: starterPrice,
    timeline: "2 to 4 weeks",
    service: "custom-website",
    priceContext: `The ${starterPrice} Starter Site is a focused one-page build. Business Sites start at ${businessPrice} for three to five pages. Content, integrations, and additional functionality are agreed in your quote. Hosting and active care are optional, separate plans.`,
    faq: [
      ...projectPolicyFaqItems,
      {
        question: "What do I need before we start?",
        answer:
          "Your business goals, services, contact details, and any existing logo, photos, or copy are a useful starting point. We'll identify missing content during planning and include any writing or asset work in the quote.",
      },
      {
        question: "Can you connect my booking tool?",
        answer:
          "Yes, booking links and integrations can be included where the tool supports them. We confirm the booking service, subscription charges, and integration scope before work begins.",
      },
      {
        question: "Does a new site include ongoing SEO?",
        answer:
          "The build includes foundational page structure and search setup. Ongoing content, local profile management, and broader SEO campaigns are separate work. A new site does not guarantee a particular search position or lead volume.",
      },
      {
        question: "Can we meet locally?",
        answer:
          "I'm based in Erie, Colorado, and work with businesses within about 25 miles. We can discuss a local meeting or work by video and email, depending on what suits the project.",
      },
    ],
  },
  {
    slug: "website-redesign",
    title: "Website Redesigns for Erie Businesses",
    description: `Website redesigns for Erie businesses from ${businessPrice}. Review your current site, improve mobile usability and service messaging, and plan a careful relaunch.`,
    label: "Website redesign",
    heading: "Make your website fit your business today.",
    summary:
      "For Erie and nearby businesses with a site that feels dated, is difficult to use on a phone, or no longer explains their services clearly.",
    introduction: [
      "A redesign starts with your existing website. We look at its service information, navigation, contact path, mobile layout, and any available search or analytics data. That helps separate useful content worth keeping from the areas that need attention.",
      "The aim is a clearer customer journey and a site your business can maintain. The scope can include reorganizing pages, refining messaging, updating the design, migrating existing content, and checking the inquiry flow before relaunch.",
    ],
    deliverables: [
      {
        title: "A review before the rebuild",
        text: "Identify outdated information, mobile friction, unclear service pages, and practical changes to the inquiry path.",
      },
      {
        title: "A clearer page structure",
        text: "Organize your current services and proof so customers can find the right information and understand what to do next.",
      },
      {
        title: "A planned content migration",
        text: "Agree what content and images move across, which URLs stay, and which changed addresses need redirects.",
      },
      {
        title: "A checked relaunch",
        text: "Review links, forms, responsive layouts, metadata, and the agreed launch configuration before switching over.",
      },
    ],
    startingPrice: businessPrice,
    timeline: "2 to 5 weeks",
    service: "redesign",
    priceContext: `Redesigns start at ${businessPrice}. The final quote depends on the existing site, page count, content migration, new functions, and platform. We agree on the scope and relaunch plan before any work begins.`,
    faq: [
      ...projectPolicyFaqItems,
      {
        question: "Do I need to replace the whole site?",
        answer:
          "Not always. If the main problem is a confusing page, broken inquiry path, or outdated content, a focused improvement may be enough. I'll recommend a scope after reviewing the current site.",
      },
      {
        question: "What happens to my current Google visibility?",
        answer:
          "We review existing URLs and any available Search Console data, retain useful content, and plan redirects for changed addresses. Search performance can change after a relaunch, so rankings cannot be guaranteed.",
      },
      {
        question: "Can we keep my domain and existing content?",
        answer:
          "Usually, yes. We confirm access to your domain, hosting, content, and any third-party tools during scoping. The proposal spells out what is retained, migrated, or replaced.",
      },
      {
        question: "Will my current website stay online during the work?",
        answer:
          "We plan the review and launch approach around your existing setup. Where possible, the replacement is built separately so the current site can remain available until the agreed switch-over.",
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
