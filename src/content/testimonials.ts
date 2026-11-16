import type { Testimonial } from "./types";

/**
 * Published feedback. Preserve the distinction between client work and
 * professional collaboration when adding attribution.
 */
export const testimonials: Testimonial[] = [
  {
    id: "devante-mason-justmalikbeats",
    quote:
      "Zack was very professional, truly understood my vision, and delivered exactly what I wanted. He took time to craft the layout of my website.",
    name: "Devante Mason",
    business: "JustMalikBeats",
    role: "Beats Producer",
  },
  {
    id: "djibril-sylla-engineer",
    quote:
      "Not only did he contribute to the project, but he also went the extra mile and fixed issues I'd had with other web designers in the final product.",
    name: "Djibril Sylla",
    business: "College project collaborator",
    role: "Professional recommendation",
  },
];

export const hasPublishedTestimonials = testimonials.some(
  (t) => t.quote.trim().length > 0,
);
