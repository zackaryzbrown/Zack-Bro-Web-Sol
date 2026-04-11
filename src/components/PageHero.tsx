import { FadeIn } from "./FadeIn";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="section page-hero">
      <div className="container">
        <FadeIn>
          <p className="section-label">{label}</p>
          <h1 className="page-hero-title">{title}</h1>
          {subtitle && <p className="section-subtext">{subtitle}</p>}
        </FadeIn>
      </div>
    </section>
  );
}
