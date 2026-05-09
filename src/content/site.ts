import type { NavItem, TrustStripItem } from "./types";

/* ── Brand ── */
export const brand = {
  name: "Zackary Brown Web Solutions",
  shortName: "Zackary Brown",
  tagline: "Web Solutions",
  founder: "Zackary Brown",
  email: "zackary@zbweb.solutions",
  location: "Colorado",
  url: "https://zbweb.solutions",
  bookingUrl: "https://calendly.com/zackary-zbweb/30min",
  responsePromise: "Reply within 1 business day",
  description:
    "Founder-led web business building modern, conversion-focused websites for local service businesses across Colorado. Custom sites, redesigns, and ongoing support.",
} as const;

/* ── Cities served (used for SEO + schema) ── */
export const serviceCities: string[] = [
  "Denver",
  "Boulder",
  "Colorado Springs",
  "Fort Collins",
  "Aurora",
  "Lakewood",
  "Loveland",
  "Longmont",
];

/* ── Navigation ── */
export const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/* ── Trust strip ── */
export const trustStripItems: TrustStripItem[] = [
  { text: "Reply within 1 business day" },
  { text: "Colorado-based, work remotely" },
  { text: "Transparent pricing from $349+" },
  { text: "Ongoing care after launch" },
];

/* ── Industries ── */
export const industries: string[] = [
  "Automotive Detailing",
  "Dental Offices",
  "Med Spas",
  "Martial Arts Schools",
  "Gyms & Fitness Studios",
  "Contractors",
  "Salons & Barbershops",
  "Landscapers",
  "Cleaning Services",
  "Local Service Brands",
];
