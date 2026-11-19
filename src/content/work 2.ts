import type { Project } from "./types";
import { projectSlug } from "@/lib/projects";
export { projectSlug, projectStatusLabel } from "@/lib/projects";

const projectCatalog: Project[] = [
  {
    name: "A Child's Perspective",
    type: "Child Life Practice",
    isClient: true,
    image: "/projects/a-childs-perspective.png",
    imageWidth: 1440,
    imageHeight: 1000,
    url: "a-childs-perspective.com",
    challenge:
      "Explain a child life practice's services clearly and help families find support information, learn about the practitioners, and take the next step toward an appointment.",
    solution:
      "Built a responsive practice website with service information for children, teens, siblings, and caregivers, practitioner profiles, and clear appointment links. The design uses calm colors and readable page structure to support a sensitive subject.",
    result:
      "A practice website bringing service information, practitioner introductions, and appointment paths into one clear experience for families.",
    cardSummary:
      "A child life practice website with clear service information and appointment paths for Colorado families.",
    capabilities: [
      "Service pages",
      "Practitioner profiles",
      "Appointment links",
      "Responsive layout",
    ],
    improvements: [
      "Services organized around the people the practice supports",
      "Clear introductions to the practitioners",
      "Consistent paths to appointment and contact information",
      "Responsive layouts for families browsing on a phone",
    ],
  },
  {
    name: "CutePetShowdown",
    type: "Community Fundraising",
    isClient: true,
    image: "/projects/cute-pet-showdown.png",
    imageWidth: 1440,
    imageHeight: 1000,
    url: "cutepetshowdown.com",
    challenge:
      "Present a community pet-photo fundraiser, explain entry and donation-based voting, and make the supporting rescue cause easy to understand.",
    solution:
      "Built the Pets for Pups fundraiser website with entry information, donation checkout links, voting guidance, a public leaderboard, and cause and rules pages. The interface separates entering a pet from supporting an existing entry.",
    result:
      "A community fundraiser website bringing pet entries, voting information, donation links, and public standings together in one place.",
    cardSummary:
      "The Pets for Pups pet-photo fundraiser, with entries, donation links, voting guidance, and a public leaderboard.",
    capabilities: [
      "Entry flow",
      "Public leaderboard",
      "Donation links",
      "Rules & FAQ",
    ],
    improvements: [
      "Separate instructions for pet entries and vote donations",
      "Public standings with clear navigation",
      "Cause information explaining the rescue fundraiser",
      "Rules and FAQs supporting participant questions",
    ],
  },
  {
    name: "Trailhead Cycles",
    isSpec: true,
    type: "Bike Shop",
    image: "/projects/trailhead-cycles.png",
    url: "zackaryzbrown-yeswj.wordpress.com",
    challenge:
      "Explore a neighborhood bike shop website that makes service information, bike options, and rental details easy to find. This is a portfolio concept rather than a client engagement.",
    solution:
      "Built a clean WordPress site with dedicated pages for bikes, service and repairs, rentals, and contact. Hero imagery and clear navigation guide visitors to the right service, while a contact form simplifies appointment scheduling.",
    result:
      "A bike shop website concept with service information, rental options, and a contact form.",
    capabilities: ["WordPress", "Service pages", "Rental info", "Contact form"],
    tech: ["WordPress", "PHP", "CSS"],
    improvements: [
      "Service pages breaking down tune-ups, repairs, and custom builds",
      "Rental section with clear gear options for visitors",
      "Example review section demonstrating where client feedback could appear",
      "Mobile-friendly layout for riders on the go",
    ],
  },
  {
    name: "MHK Training",
    isClient: true,
    type: "Martial Arts / Fitness",
    image: "/projects/mhk-training.png",
    url: "www.mhktraining.com",
    challenge:
      "MHK Training needed a shared workspace for martial arts students and families to find class schedules, curriculum, and training pathways in one place.",
    solution:
      "Built a responsive member platform with a public schedule preview, sign-in entry points, and structured curriculum pathways. The interface brings class planning and training resources into a consistent experience.",
    result:
      "A martial arts member platform that brings class schedules, curriculum, and training resources into one workspace.",
    cardSummary:
      "A member platform for class schedules, curriculum, and martial arts training resources.",
    capabilities: [
      "Custom design",
      "Member workspace",
      "Class schedules",
      "Mobile-responsive",
    ],
    tech: [
      "React",
      "Vite",
      "CSS Modules",
      "Web3Forms",
      "AWS Amplify",
      "Docker",
      "Node.js",
    ],
    improvements: [
      "Public schedule preview with clear sign-in paths",
      "Organized curriculum and training pathways",
      "Responsive access for students and families",
      "Consistent navigation across academy resources",
    ],
  },
  {
    name: "Mobile Auto Detailing",
    isSpec: true,
    type: "Automotive Detailing",
    image: "/projects/Auto-detailing.png",
    url: "zekie-demo.zackarybrown.net",
    challenge:
      "Create a portfolio concept showing how a detailing business could present services, explain pricing, and make quote requests easy on a phone.",
    solution:
      "Designed a conversion-focused site with clear service tiers, upfront pricing transparency, and prominent quote request forms. Optimized for mobile since the majority of detailing customers search from their phones.",
    result:
      "A detailing website concept with service tiers, pricing information, and quote request forms.",
    capabilities: [
      "Custom design",
      "Quote forms",
      "Service & pricing pages",
      "Mobile-first",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "shadcn/ui",
      "Framer Motion",
      "React Hook Form",
    ],
    improvements: [
      "Service tier structure clarifying offerings and pricing",
      "Quote request forms placed at key decision points",
      "Mobile-optimized for phone-first customer behavior",
      "Trust-building design for a competitive local market",
    ],
  },
  {
    name: "Mobile Detailing",
    isSpec: true,
    type: "Automotive Detailing",
    image: "/projects/MobileDetailing.png",
    url: "mobile-details-demo.zackarybrown.net",
    challenge:
      "Explore a mobile detailing concept with a Denver service-area example, visual work samples, and clear text-or-call quote links.",
    solution:
      "Built a conversion-driven single-page site with before/after galleries, service breakdowns, a step-by-step booking flow, and prominent text-to-quote CTAs. Everything was optimized for the phone-first behavior of detailing customers.",
    result:
      "A mobile detailing website concept with service information, before-and-after galleries, and text-to-quote links.",
    capabilities: [
      "Custom design",
      "Before/after gallery",
      "SMS quote integration",
      "Service area map",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "MUI",
      "shadcn/ui",
      "Framer Motion",
    ],
    improvements: [
      "Before/after comparisons building instant credibility",
      "Text-to-quote flow matching how customers actually communicate",
      "Service area coverage map for local SEO and trust",
      "Example review showcase demonstrating a customer-feedback layout",
    ],
  },
  {
    name: "GreenScape Pro",
    isSpec: true,
    type: "Lawn Care & Landscaping",
    image: "/projects/greenscape.png",
    url: "demo-greenscape.netlify.app",
    challenge:
      "Create a landscaping website concept using a Boulder County service-area example, with clear service categories and a simple quote-request path.",
    solution:
      "Designed a structured, trust-forward site with clear service categories, a project gallery, service area mapping, and a streamlined quote request flow. All built to convert property owners browsing for dependable outdoor maintenance.",
    result:
      "A landscaping website concept with service pages, a project gallery, and quote-request paths.",
    capabilities: [
      "Custom design",
      "Service pages",
      "Project gallery",
      "Quote request flow",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    improvements: [
      "Service tier structure covering residential and commercial needs",
      "Example project gallery demonstrating the presentation of outdoor work",
      "Service area map building local trust and relevance",
      "Testimonials and trust signals reinforcing reliability",
    ],
  },
  {
    name: "Floor Hosting",
    cardSummary:
      "A hosting website concept with plan comparisons, feature explanations, and example content.",
    type: "Hosting / SaaS Concept",
    isSpec: true,
    image: "/projects/FloorHosting.png",
    url: "stupendous-otter-759661.netlify.app",
    challenge:
      "Explore how a hosting brand could present plans, technical features, and signup paths in a clear website concept.",
    solution:
      "Designed a hosting concept with clear plan comparisons, feature explanations, and example content to demonstrate how a technical service can be presented to customers.",
    result:
      "A hosting website concept demonstrating pricing comparisons, feature presentation, and a clear path to choosing a plan. Example content illustrates the design rather than verified customer outcomes.",
    capabilities: [
      "Custom design",
      "Pricing pages",
      "Feature showcase",
      "Testimonials",
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    improvements: [
      "Clear plan comparison helping customers choose confidently",
      "Feature grid communicating technical advantages simply",
      "Clearly structured example content demonstrating the page layout",
      "Clean, modern design competing with established brands",
    ],
  },

  {
    name: "JustMalikBeats",
    isClient: true,
    type: "Music Production",
    image: "/projects/justmalikbeats.png",
    url: "malikbeats.com",
    challenge:
      "JustMalikBeats needed a professional platform to showcase their catalog, handle licensing, and present a cohesive brand to potential clients in the music industry.",
    solution:
      "Built a custom platform with audio playback, licensing breakdowns, and a polished brand presentation. The site balances creative expression with clear business functionality.",
    result:
      "A custom music platform with audio previews, licensing information, and a purchase flow.",
    capabilities: [
      "Custom build",
      "Audio integration",
      "Licensing pages",
      "Brand design",
    ],
    tech: [
      "React",
      "Vite",
      "Express",
      "MongoDB",
      "Stripe",
      "JWT",
      "AWS Amplify",
      "CSS Modules",
    ],
    improvements: [
      "Audio showcase letting clients preview before purchasing",
      "Clear licensing structure reducing back-and-forth inquiries",
      "Professional brand presentation across all touchpoints",
      "Streamlined catalog navigation for browsing beats",
    ],
  },
  {
    name: "Studio - Photography Concept",
    cardSummary:
      "An editorial photography portfolio concept with image-led galleries, service packages, and inquiry paths.",
    type: "Photography",
    isSpec: true,
    image: "/projects/PhotoDemo.png",
    url: "photographymockup.netlify.app",
    challenge:
      "Modern photographers often lose bookings to sites that feel dated or generic: grids of thumbnails with no story, no editorial feel, and no clear path to inquire. A photography studio needs a portfolio that reads like a magazine, not a proof gallery.",
    solution:
      "Designed a cinematic, editorial concept site with a full-bleed hero, asymmetric featured work grid, three category cards, service packages, and a booking-focused CTA. Typography pairs Cormorant Garamond with Inter for a modern editorial feel, and the ember accent color gives the dark palette warmth without competing with the imagery.",
    result:
      "A concept portfolio that positions a photographer as a premium creative: every section is built around the imagery, with clear paths from browsing to booking a session. Ready to be re-skinned with a real photographer's brand, work, and contact details.",
    capabilities: [
      "Editorial layout",
      "Cinematic hero",
      "Portfolio grid",
      "Booking CTA",
    ],
    tech: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "lucide-react",
    ],
    improvements: [
      "Full-bleed hero that lets a single image do the selling",
      "Asymmetric featured work grid inspired by editorial magazines",
      "Category cards routing visitors by shoot type (sports, portraits, events)",
      "Service packages structured for clear, quotable booking inquiries",
    ],
  },
  {
    name: "Lumière Hair Studio",
    cardSummary:
      "A salon website concept with service menus, team profiles, and appointment links.",
    type: "Hair Salon",
    isSpec: true,
    image: "/projects/HairSolonImg.png",
    url: "lumierehairstudio.netlify.app",
    repo: "github.com/zackaryzbrown/HairSolonDemo",
    challenge:
      "Small salons lose bookings to sites that feel dated, generic, or buried under stock photography. A modern hair studio needs a boutique online presence that funnels visitors straight to a booked appointment — without waiting on a photographer, CMS, or six-figure agency build.",
    solution:
      "Designed a conversion-focused, single-page marketing site for a fictional modern salon. Editorial typography (Playfair Display + Inter) and a warm neutral palette deliver a premium boutique feel, while every layout choice — hero, services, stylist cards, before/after gallery, and a persistent mobile Call/Book bar — funnels toward the booking form. All business details (services, stylists, hours, address, pricing) are centralized in typed data files so it can be rebranded for a real salon in under an hour.",
    result:
      "A ship-ready local-business template that reads like a boutique brand, not a template. SEO metadata, HairSalon JSON-LD structured data, WCAG-conscious UX, and Core Web Vitals wins are wired up from day one — ready to hand off to a real salon with only content swaps.",
    capabilities: [
      "Editorial single-page design",
      "Booking form + mobile CTA bar",
      "Before/after gallery",
      "HairSalon structured data",
    ],
    tech: [
      "Next.js 14",
      "React 18",
      "TypeScript 5",
      "Tailwind CSS 3",
      "next/font",
      "lucide-react",
    ],
    improvements: [
      "Conversion-optimized layout funneling every section toward the booking form",
      "Token-driven design system (CSS variables → Tailwind → TS constants) keeping brand in sync across UI, theme color, and JSON-LD",
      "WCAG-conscious UX: skip link, aria-invalid/aria-describedby form wiring, focus return in mobile drawer, reduced-motion support",
      "Accessible booking form with typed state machine, honeypot anti-spam, and pluggable Web3Forms/Formspree/Resend handler",
      "SEO fundamentals wired in: Metadata API, canonical/OG/Twitter cards, HairSalon JSON-LD from a single config file",
    ],
  },
  {
    name: "The Futons",
    isClient: true,
    type: "Music / Band",
    image: "/projects/the-futons.png",
    url: "thefutons.band",
    challenge:
      "The Futons needed a web presence that captured their identity as a band while making it easy for fans and event organizers to find information and book them for shows.",
    solution:
      "Created a site that balances personality with practicality, featuring music samples, show information, and clear contact options for booking inquiries.",
    result:
      "A band website presenting music, show updates, media, and booking inquiries.",
    capabilities: [
      "Custom design",
      "Media integration",
      "Contact setup",
      "Responsive layout",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Cloudinary", "Web3Forms"],
    improvements: [
      "Booking-friendly contact flow for event organizers",
      "Media integration showcasing music and performances",
      "Brand-authentic design reflecting the band's identity",
      "Mobile-ready layout for fans discovering them at events",
    ],
  },
];

const projectTypePriority: Record<string, number> = {
  "Child Life Practice": 0,
  "Dental Practice": 1,
  "Automotive Detailing": 2,
  "Lawn Care & Landscaping": 3,
  "Martial Arts / Fitness": 4,
  "Bike Shop": 5,
  "Design Studio": 6,
  Contractors: 7,
  Photography: 8,
};

export const projects: Project[] = [...projectCatalog].sort((a, b) => {
  if (Boolean(a.isClient) !== Boolean(b.isClient)) return a.isClient ? -1 : 1;
  if (Boolean(a.isSpec) !== Boolean(b.isSpec)) return a.isSpec ? 1 : -1;
  const aPriority = projectTypePriority[a.type] ?? 99;
  const bPriority = projectTypePriority[b.type] ?? 99;

  if (aPriority !== bPriority) return aPriority - bPriority;
  return a.name.localeCompare(b.name);
});

/* Homepage featured subset */
export const featuredProjects = [
  "A Child's Perspective",
  "MHK Training",
  "JustMalikBeats",
]
  .map((name) => projects.find((project) => project.name === name))
  .filter((project): project is Project => project !== undefined);

/* Unique industry/category labels (derived from project `type`),
   ordered by the same priority as `projects` above. */
export const industries: string[] = Array.from(
  new Set(projects.map((p) => p.type)),
);

/** Find the project associated with a case-study route. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => projectSlug(p.name) === slug);
}
