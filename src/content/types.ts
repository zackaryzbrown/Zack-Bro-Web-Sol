/* ── Shared content types ── */

export interface NavItem {
  href: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  includes?: string[];
  bestFor?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  includes: string[];
  featured?: boolean;
}

export interface CarePlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Project {
  name: string;
  type: string;
  image: string;
  url: string;
  challenge: string;
  solution: string;
  result: string;
  capabilities: string[];
  improvements?: string[];
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
