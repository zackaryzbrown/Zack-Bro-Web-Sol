import { FadeIn } from "@/components/FadeIn";
import { testimonials } from "@/content/testimonials";

/**
 * Editorial testimonial block - pulled-quote style, paired with the same
 * serif voice as section headings. Renders nothing if no testimonial has
 * a published quote yet, so it's safe to ship with placeholders.
 */
export function Testimonials() {
  const published = testimonials.filter((t) => t.quote.trim().length > 0);
  if (published.length === 0) return null;

  return (
    <div className="testimonials-grid">
      {published.map((t, i) => (
        <FadeIn key={t.id} delay={i * 120}>
          <figure className="testimonial-card">
            <span className="testimonial-mark" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="testimonial-quote">{t.quote}</blockquote>
            <figcaption className="testimonial-cite">
              <span className="testimonial-rule" aria-hidden="true" />
              <span>
                <span className="testimonial-name">{t.name}</span>
                {(t.role || t.business) && (
                  <span className="testimonial-role">
                    {[t.role, t.business].filter(Boolean).join(", ")}
                    {t.location ? ` · ${t.location}` : ""}
                  </span>
                )}
              </span>
            </figcaption>
          </figure>
        </FadeIn>
      ))}
    </div>
  );
}
