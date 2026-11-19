import type { Project } from "./types";

const projectCatalog: Project[] = [
  {
    name: "MHK Training",
    type: "Martial Arts / Fitness",
    industry: "Fitness",
    image: "/projects/mhk-training.png",
    url: "www.mhktraining.com",
    isSpec: false,
    outcomeMetric:
      "Live client site - clearer service hierarchy and frictionless booking flow.",
    challenge:
      "MHK Training had strong programs but their online presence didn't reflect it. Potential clients couldn't easily understand what was offered or take the next step toward booking.",
    solution:
      "Built a clean, structured website with clear service breakdowns, trainer credentials, and integrated booking. Every page guides visitors from understanding the training approach to scheduling a session.",
    result:
      "A credible, conversion-ready web presence that positions MHK Training as a serious fitness business, with a streamlined path from first visit to booked session.",
    capabilities: [
      "Custom design",
      "Service pages",
      "Booking integration",
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
      "Clear service hierarchy for multiple program types",
      "Integrated booking flow reducing friction to sign-up",
      "Mobile-first design for on-the-go browsing",
      "Professional credibility through structured content",
    ],
  },
  {
    name: "JustMalikBeats",
    type: "Music Production SaaS",
    industry: "SaaS",
    image: "/projects/justmalikbeats.png",
    url: "malikbeats.com",
    isSpec: false,
    outcomeMetric:
      "Live client platform - full SaaS-style site with catalog, licensing tiers, and Stripe checkout.",
    challenge:
      "A music producer SaaS needs a professional platform to showcase a catalog, handle licensing tiers, and present a cohesive brand to potential clients in the music industry.",
    solution:
      "Built a custom platform with audio playback, licensing breakdowns, and a polished brand presentation. The site balances creative expression with clear business functionality.",
    result:
      "A professional music platform that showcases the catalog effectively and provides a clear path to licensing - a credible, established producer presence online.",
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
    name: "The Futons",
    type: "Music / Band",
    industry: "Creative",
    image: "/projects/the-futons.png",
    url: "thefutons.band",
    isSpec: false,
    outcomeMetric:
      "Live band site - booking-ready contact flow for event organizers.",
    challenge:
      "The Futons needed a web presence that captured their identity as a band while making it easy for fans and event organizers to find information and book them for shows.",
    solution:
      "Created a site that balances personality with practicality, featuring music samples, show information, and clear contact options for booking inquiries.",
    result:
      "An authentic online presence that represents the band professionally and makes booking inquiries frictionless for event organizers.",
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
  {
    name: "North Peak Dental",
    type: "Dental Practice",
    industry: "Healthcare",
    image: "/projects/NorthPeakDental.png",
    url: "northpeakdental.netlify.app",
    isSpec: true,
    outcomeMetric:
      "Portfolio concept demonstrating a new-patient onboarding flow and appointment booking.",
    challenge:
      "A modern dental practice needs a website that reflects a calm, patient-first approach - making it easy for new patients to understand services, build trust, and book a first appointment without friction.",
    solution:
      "Designed a clean, welcoming site with clear service breakdowns, an easy onboarding flow for new patients, and prominent appointment CTAs. The design balances professionalism with warmth.",
    result:
      "A polished, trust-building web presence designed to position a dental practice as modern and approachable, with a streamlined path from first visit to booked appointment.",
    capabilities: [
      "Custom design",
      "Service pages",
      "Patient onboarding",
      "Appointment booking",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Google Fonts"],
    improvements: [
      "New patient flow reducing friction to first appointment",
      "Service breakdowns building confidence before visiting",
      "Calm, modern design reflecting a patient-first atmosphere",
      "Clear CTAs guiding visitors to book or call",
    ],
  },
  {
    name: "Mobile Auto Detailing",
    type: "Automotive Detailing",
    industry: "Home Services",
    image: "/projects/Auto-detailing.png",
    url: "zekie-demo.zackarybrown.net",
    isSpec: true,
    outcomeMetric:
      "Portfolio concept - conversion-focused service tiers and quote-request flow.",
    challenge:
      "A mobile detailing business needs a website that serves as their primary lead generation tool - showcasing services, building trust, and making it simple for vehicle owners to request a quote.",
    solution:
      "Designed a conversion-focused site with clear service tiers, upfront pricing transparency, and prominent quote request forms. Optimized for mobile since most detailing customers search from their phones.",
    result:
      "A polished, professional site that builds instant trust and gives customers a clear, frictionless path from browsing services to requesting a quote.",
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
    type: "Automotive Detailing",
    industry: "Home Services",
    image: "/projects/MobileDetailing.png",
    url: "mobile-details-demo.zackarybrown.net",
    isSpec: true,
    outcomeMetric:
      "Portfolio concept - before/after gallery and text-to-quote SMS flow.",
    challenge:
      "A Denver-based mobile detailing business needs a site that can generate leads, showcase real results, and make it simple for customers to request a quote via text or call.",
    solution:
      "Built a conversion-driven single-page site with before/after galleries, service breakdowns, a step-by-step booking flow, and prominent text-to-quote CTAs. Everything was optimized for phone-first customer behavior.",
    result:
      "A high-trust, mobile-optimized site designed to turn visitors into quote requests through social proof, visual results, and a frictionless text-based booking experience.",
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
      "Review showcase reinforcing quality with real feedback",
    ],
  },
  {
    name: "GreenScape Pro",
    type: "Lawn Care & Landscaping",
    industry: "Home Services",
    image: "/projects/greenscape.png",
    url: "demo-greenscape.netlify.app",
    isSpec: true,
    outcomeMetric:
      "Portfolio concept - service area mapping and tiered quote flow for residential + commercial.",
    challenge:
      "A Boulder County landscaping company needs a professional site that communicates reliability, showcases their range of services, and makes it easy for homeowners and businesses to request a quote.",
    solution:
      "Designed a structured, trust-forward site with clear service categories, a project gallery, service area mapping, and a streamlined quote request flow.",
    result:
      "A polished web presence designed to position a landscaping business as the reliable, professional choice in a crowded local market.",
    capabilities: [
      "Custom design",
      "Service pages",
      "Project gallery",
      "Quote request flow",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    improvements: [
      "Service tier structure covering residential and commercial needs",
      "Project gallery showcasing real transformation results",
      "Service area map building local trust and relevance",
      "Testimonials and trust signals reinforcing reliability",
    ],
  },
  {
    name: "Trailhead Cycles",
    type: "Bike Shop",
    industry: "Retail",
    image: "/projects/trailhead-cycles.png",
    url: "zackaryzbrown-yeswj.wordpress.com",
    isSpec: true,
    outcomeMetric:
      "Portfolio concept - WordPress build showing service, rental, and booking pages for a local shop.",
    challenge:
      "A neighborhood bike shop needs a website that reflects a premium, community-focused brand while making it easy for customers to explore bikes, book service appointments, and reserve rentals.",
    solution:
      "Built a clean WordPress site with dedicated pages for bikes, service and repairs, rentals, and contact. Hero imagery and clear navigation guide visitors to the right service.",
    result:
      "A polished, inviting online presence that positions a local bike shop as the community go-to, with clear paths from browsing to booking a service or rental.",
    capabilities: ["WordPress", "Service pages", "Rental info", "Contact form"],
    tech: ["WordPress", "PHP", "CSS"],
    improvements: [
      "Service pages breaking down tune-ups, repairs, and custom builds",
      "Rental section with clear gear options for visitors",
      "Customer reviews building trust with real testimonials",
      "Mobile-friendly layout for riders on the go",
    ],
  },
  {
    name: "Floor Hosting",
    type: "Hosting / SaaS Concept",
    industry: "SaaS",
    image: "/projects/FloorHosting.png",
    url: "stupendous-otter-759661.netlify.app",
    isSpec: true,
    outcomeMetric:
      "Portfolio concept - plan comparison and feature presentation for a hosting startup.",
    challenge:
      "A web hosting startup needs a credible, modern site that can compete with established providers - communicating speed, reliability, and real human support without feeling generic.",
    solution:
      "Built a clean, developer-friendly site with clear plan breakdowns, feature highlights, and social proof. The design balances technical credibility with approachable messaging.",
    result:
      "A professional hosting site that builds confidence through clear pricing, strong feature presentation, and authentic testimonials.",
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
      "Customer testimonials building trust with real use cases",
      "Clean, modern design competing with established brands",
    ],
  },
];

/* Sort: real client work first, then spec by industry */
const industryPriority: Record<string, number> = {
  "Home Services": 1,
  Healthcare: 2,
  Fitness: 3,
  Retail: 4,
  Creative: 5,
  SaaS: 6,
};

export const projects: Project[] = [...projectCatalog].sort((a, b) => {
  // Real clients first
  if (!!a.isSpec !== !!b.isSpec) return a.isSpec ? 1 : -1;

  const aIndustry = industryPriority[a.industry ?? ""] ?? 99;
  const bIndustry = industryPriority[b.industry ?? ""] ?? 99;
  if (aIndustry !== bIndustry) return aIndustry - bIndustry;

  return a.name.localeCompare(b.name);
});

export const featuredProjects = projects.slice(0, 3);

export const industries: string[] = Array.from(
  new Set(projects.map((p) => p.industry).filter(Boolean) as string[]),
).sort((a, b) => (industryPriority[a] ?? 99) - (industryPriority[b] ?? 99));

/** Slugify a project name for /work/[slug] routing. */
export function projectSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => projectSlug(p.name) === slug);
}
