import type { Testimonial } from "./types";

/**
 * Real client testimonials.
 *
 * Two early testimonials are available - fill in `quote`, `name`, and
 * `business` below when ready. The Testimonials component reads this list
 * and only renders entries with a non-empty `quote`, so safe to leave
 * placeholders here while finalizing copy.
 */
export const testimonials: Testimonial[] = [
  {
    id: "devante-mason-justmalikbeats",
    quote:
      "Zack was very professional, truly understood my vision, and delivered exactly what I wanted. He took time to craft the layout of my website. Since Zack redid my site, I've seen a 200% retention rate since October of 2024.",
    name: "Devante Mason",
    business: "JustMalikBeats",
    role: "Beats Producer",
  },
  {
    id: "djibril-sylla-engineer",
    quote:
      "Not only did he contribute to the project, but he also went the extra mile and fixed issues I'd had with other web designers in the final product.",
    name: "Djibril Sylla",
    business: "",
    role: "Software Engineer",
  },
];

export const hasPublishedTestimonials = testimonials.some(
  (t) => t.quote.trim().length > 0,
);
