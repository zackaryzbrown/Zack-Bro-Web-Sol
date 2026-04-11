import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "MHK Training",
    type: "Fitness & Training",
    image: "/projects/mhk-training.png",
    url: "www.mhktraining.com",
    challenge:
      "MHK Training had strong programs but their online presence didn't reflect it. Potential clients couldn't easily understand what was offered or take the next step toward booking.",
    solution:
      "Built a clean, structured website with clear service breakdowns, trainer credentials, and integrated booking. Every page guides visitors from understanding the training approach to scheduling a session.",
    result:
      "A credible, conversion-ready web presence that positions MHK Training as a serious fitness business — with a streamlined path from first visit to booked session.",
    capabilities: [
      "Custom design",
      "Service pages",
      "Booking integration",
      "Mobile-responsive",
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
    url: "www.mobileautodetailing.com",
    challenge:
      "The business needed a website that could serve as their primary lead generation tool — showcasing services, building trust, and making it simple for vehicle owners to request a quote.",
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
    improvements: [
      "Service tier structure clarifying offerings and pricing",
      "Quote request forms placed at key decision points",
      "Mobile-optimized for phone-first customer behavior",
      "Trust-building design for a competitive local market",
    ],
  },
  {
    name: "JustMalikBeats",
    type: "Music Production",
    image: "/projects/justmalikbeats.png",
    url: "www.justmalikbeats.com",
    challenge:
      "JustMalikBeats needed a professional platform to showcase their catalog, handle licensing, and present a cohesive brand to potential clients in the music industry.",
    solution:
      "Built a custom platform with audio playback, licensing breakdowns, and a polished brand presentation. The site balances creative expression with clear business functionality.",
    result:
      "A professional music platform that showcases the catalog effectively and provides a clear path to licensing — positioning JustMalikBeats as a credible, established producer.",
    capabilities: [
      "Custom build",
      "Audio integration",
      "Licensing pages",
      "Brand design",
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
    image: "/projects/the-futons.png",
    url: "www.thefutons.com",
    challenge:
      "The Futons needed a web presence that captured their identity as a band while making it easy for fans and event organizers to find information and book them for shows.",
    solution:
      "Created a site that balances personality with practicality — featuring music samples, show information, and clear contact options for booking inquiries.",
    result:
      "An authentic online presence that represents the band professionally and makes booking inquiries frictionless for event organizers.",
    capabilities: [
      "Custom design",
      "Media integration",
      "Contact setup",
      "Responsive layout",
    ],
    improvements: [
      "Booking-friendly contact flow for event organizers",
      "Media integration showcasing music and performances",
      "Brand-authentic design reflecting the band's identity",
      "Mobile-ready layout for fans discovering them at events",
    ],
  },
];

/* Homepage featured subset */
export const featuredProjects = projects.slice(0, 3);
