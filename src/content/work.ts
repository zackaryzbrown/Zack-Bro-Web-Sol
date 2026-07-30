import type { Project } from "./types";

const projectCatalog: Project[] = [
  {
    name: "Trailhead Cycles",
    type: "Bike Shop",
    image: "/projects/trailhead-cycles.png",
    url: "zackaryzbrown-yeswj.wordpress.com",
    challenge:
      "A neighborhood bike shop needed a website that reflected their premium, community-focused brand while making it easy for customers to explore bikes, book service appointments, and reserve rentals.",
    solution:
      "Built a clean WordPress site with dedicated pages for bikes, service and repairs, rentals, and contact. Hero imagery and clear navigation guide visitors to the right service, while a contact form simplifies appointment scheduling.",
    result:
      "A polished, inviting online presence that positions Trailhead Cycles as the go-to local bike shop, with clear paths from browsing to booking a service or rental.",
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
    name: "MHK Training",
    type: "Martial Arts / Fitness",
    image: "/projects/mhk-training.png",
    url: "www.mhktraining.com",
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
    name: "Mobile Auto Detailing",
    type: "Automotive Detailing",
    image: "/projects/Auto-detailing.png",
    url: "zekie-demo.zackarybrown.net",
    challenge:
      "The business needed a website that could serve as their primary lead generation tool. It had to showcase services, build trust, and make it simple for vehicle owners to request a quote.",
    solution:
      "Designed a conversion-focused site with clear service tiers, upfront pricing transparency, and prominent quote request forms. Optimized for mobile since the majority of detailing customers search from their phones.",
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
    image: "/projects/MobileDetailing.png",
    url: "mobile-details-demo.zackarybrown.net",
    challenge:
      "A Denver-based mobile detailing business needed a site that could generate leads, showcase real results, and make it dead simple for customers to request a quote via text or call.",
    solution:
      "Built a conversion-driven single-page site with before/after galleries, service breakdowns, a step-by-step booking flow, and prominent text-to-quote CTAs. Everything was optimized for the phone-first behavior of detailing customers.",
    result:
      "A high-trust, mobile-optimized site that turns visitors into quote requests through social proof, visual results, and a frictionless text-based booking experience.",
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
    image: "/projects/greenscape.png",
    url: "demo-greenscape.netlify.app",
    challenge:
      "A Boulder County lawn care and landscaping company needed a professional site that communicated reliability, showcased their range of services, and made it easy for homeowners and businesses to request a quote.",
    solution:
      "Designed a structured, trust-forward site with clear service categories, a project gallery, service area mapping, and a streamlined quote request flow. All built to convert property owners browsing for dependable outdoor maintenance.",
    result:
      "A polished web presence that positions GreenScape Pro as the reliable, professional choice in a crowded local market, with clear paths from discovery to quote request.",
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
    name: "Floor Hosting",
    type: "Hosting / SaaS Concept",
    image: "/projects/FloorHosting.png",
    url: "stupendous-otter-759661.netlify.app",
    challenge:
      "A web hosting startup needed a credible, modern site that could compete with established providers. It had to communicate speed, reliability, and real human support without feeling generic or templated.",
    solution:
      "Built a clean, developer-friendly site with clear plan breakdowns, feature highlights, and social proof from real customers. The design balances technical credibility with approachable messaging that appeals to both developers and small business owners.",
    result:
      "A professional hosting site that builds confidence through clear pricing, strong feature presentation, and authentic testimonials. It positions Floor Hosting as a serious alternative to commodity providers.",
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

  {
    name: "JustMalikBeats",
    type: "Music Production",
    image: "/projects/justmalikbeats.png",
    url: "malikbeats.com",
    challenge:
      "JustMalikBeats needed a professional platform to showcase their catalog, handle licensing, and present a cohesive brand to potential clients in the music industry.",
    solution:
      "Built a custom platform with audio playback, licensing breakdowns, and a polished brand presentation. The site balances creative expression with clear business functionality.",
    result:
      "A professional music platform that showcases the catalog effectively and provides a clear path to licensing, positioning JustMalikBeats as a credible, established producer.",
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
    type: "Music / Band",
    image: "/projects/the-futons.png",
    url: "thefutons.band",
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
];

const projectTypePriority: Record<string, number> = {
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
  const aPriority = projectTypePriority[a.type] ?? 99;
  const bPriority = projectTypePriority[b.type] ?? 99;

  if (aPriority !== bPriority) return aPriority - bPriority;
  return a.name.localeCompare(b.name);
});

/* Homepage featured subset */
export const featuredProjects = projects.slice(0, 3);

/* Unique industry/category labels (derived from project `type`),
   ordered by the same priority as `projects` above. */
export const industries: string[] = Array.from(
  new Set(projects.map((p) => p.type)),
);

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
