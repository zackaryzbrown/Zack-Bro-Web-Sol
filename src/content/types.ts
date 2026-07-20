/* ── Shared content types ── */

export interface NavItem {
  href: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  outcome?: string;
  includes?: string[];
  bestFor?: string;
  notFor?: string;
  timeline?: string;
  startingPrice?: string;
  process?: { label: string; detail: string }[];
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  includes: string[];
  bestFor?: string;
  featured?: boolean;
  featuredLabel?: string;
}

export interface CarePlan {
  name: string;
  price: string;
  period: string;
  description?: string;
  features: string[];
  exclusions?: string[];
  featured?: boolean;
  featuredLabel?: string;
}

export interface PricingLane {
  label: string;
  heading: string;
  subtext: string;
  tone: "quick" | "custom";
  points: string[];
}

export interface PricingAnchorRow {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Project {
  name: string;
  type: string;
  industry?: string;
  cardSummary?: string;
  outcomeMetric?: string;
  image: string;
  url: string;
  isSpec?: boolean;
  challenge: string;
  solution: string;
  result: string;
  capabilities: string[];
  improvements?: string[];
  tech?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TrustStripItem {
  text: string;
}

export interface FeatureItem {
  title: string;
  text: string;
}

export interface PricingFactor {
  title: string;
  text: string;
}

export interface ContactStep {
  step: string;
  title: string;
  text: string;
}

export interface CtaBlock {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  business: string;
  role?: string;
  location?: string;
}

export type SocialPlatform =
  | "linkedin"
  | "instagram"
  | "x"
  | "youtube"
  | "tiktok"
  | "github";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
  handle?: string;
}
