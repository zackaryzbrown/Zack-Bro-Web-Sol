import { FadeIn } from "./FadeIn";

export interface PageHeroMetaItem {
  label: string;
  value: string;
}

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  /** Position in the numbered page series (1-based). Renders `01 / total`. */
  index?: number;
  /** Total pages in the series. Required alongside `index`. */
  total?: number;
  /** Editorial meta list rendered in the right column. */
  meta?: readonly PageHeroMetaItem[];
}

function pad2(n: number): string {
  return n.toString().padStart(2, "0");
}

export function PageHero({
  label,
  title,
  subtitle,
  index,
  total,
  meta,
}: PageHeroProps) {
  const hasMeta = Boolean(meta && meta.length > 0);
  const showCounter =
    typeof index === "number" && typeof total === "number" && total > 0;

  return (
    <section className="section page-hero">
      <div className="container">
        <div
          className="page-hero-grid"
          data-has-meta={hasMeta ? "true" : undefined}
        >
          <FadeIn>
            <p className="section-label">{label}</p>
            <h1 className="page-hero-title">{title}</h1>
            {subtitle && <p className="section-subtext">{subtitle}</p>}
          </FadeIn>

          {(hasMeta || showCounter) && (
            <FadeIn delay={120} direction="right">
              <aside className="page-hero__meta" aria-label="Page overview">
                {showCounter && (
                  <>
                    <p className="page-hero__meta-count">
                      {pad2(index!)}
                      <span className="page-hero__meta-count-total">
                        {" / "}
                        {pad2(total!)}
                      </span>
                    </p>
                    <span className="page-hero__meta-rule" aria-hidden />
                  </>
                )}
                {hasMeta && (
                  <dl className="page-hero__meta-list">
                    {meta!.map((item) => (
                      <div key={item.label} className="page-hero__meta-item">
                        <dt className="page-hero__meta-label">{item.label}</dt>
                        <dd className="page-hero__meta-value">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </aside>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
