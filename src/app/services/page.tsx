import { FadeIn } from "@/components/FadeIn";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { TrackedLink } from "@/components/TrackedLink";
import { createMetadata } from "@/lib/metadata";
import { servicesDetailed, wordpressNote } from "@/content/services";
import { brand } from "@/content/site";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Custom websites, redesigns, conversion-focused pages, and ongoing care for Colorado service businesses.",
  path: "/services",
});

const SERVICE_CTA: Record<
  string,
  { href: string; label: string; track: string }
> = {
  "Custom Websites": {
    href: "/contact?service=custom-website",
    label: "Start a custom website",
    track: "services_custom_website_contact",
  },
  "Website Redesigns": {
    href: "/contact?service=redesign",
    label: "Request a redesign quote",
    track: "services_redesign_contact",
  },
  "Conversion-Focused Pages": {
    href: "/contact?service=conversion",
    label: "Improve my conversion paths",
    track: "services_conversion_contact",
  },
  "Website Care & Support": {
    href: "/pricing#care",
    label: "See care plan pricing",
    track: "services_care_pricing",
  },
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Websites built to earn trust and book the work."
        subtitle="Four focused offers for Colorado service businesses. Each one ships with clear deliverables, a real timeline, and a starting price - no surprise estimates after the call."
      />

      {/* Quick service index */}
      <SectionShell>
        <FadeIn>
          <nav aria-label="Services on this page" className="service-index">
            {servicesDetailed.map((service, i) => (
              <a
                key={service.title}
                href={`#${slugify(service.title)}`}
                className="service-index__item"
              >
                <span className="service-index__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="service-index__title">{service.title}</span>
                {service.startingPrice && (
                  <span className="service-index__price">
                    {service.startingPrice}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </FadeIn>
      </SectionShell>

      {/* Service blocks */}
      {servicesDetailed.map((service, i) => {
        const cta = SERVICE_CTA[service.title];
        const variant = i % 2 === 0 ? "alt" : "default";

        return (
          <SectionShell key={service.title} variant={variant}>
            <FadeIn>
              <article id={slugify(service.title)} className="service-block">
                <header className="service-block__header">
                  <div className="service-block__eyebrow">
                    <span className="service-block__num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="service-block__label">Service</span>
                  </div>
                  <h2 className="service-block__title">{service.title}</h2>
                  {service.outcome && (
                    <p className="service-block__outcome">
                      <span className="service-block__outcome-mark" aria-hidden>
                        →
                      </span>
                      {service.outcome}
                    </p>
                  )}
                </header>

                <div className="service-block__grid">
                  {/* Left column - narrative */}
                  <div className="service-block__col service-block__col--narrative">
                    <p className="service-block__desc">{service.description}</p>

                    {service.bestFor && (
                      <p className="service-block__fit">
                        <span className="service-block__fit-label">
                          Best fit
                        </span>
                        {service.bestFor}
                      </p>
                    )}

                    {service.notFor && (
                      <p className="service-block__notfit">
                        <span className="service-block__notfit-label">
                          Not for you if
                        </span>
                        {service.notFor}
                      </p>
                    )}
                  </div>

                  {/* Right column - deliverables card */}
                  <aside className="service-block__col service-block__col--deliverables">
                    <div className="service-deliverables">
                      <div className="service-deliverables__meta">
                        {service.startingPrice && (
                          <div className="service-deliverables__meta-row">
                            <span className="service-deliverables__meta-label">
                              Starting at
                            </span>
                            <span className="service-deliverables__meta-value">
                              {service.startingPrice}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="service-deliverables__meta-row">
                            <span className="service-deliverables__meta-label">
                              Typical timeline
                            </span>
                            <span className="service-deliverables__meta-value">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>

                      {service.includes && (
                        <>
                          <h3 className="service-deliverables__heading">
                            What&apos;s included
                          </h3>
                          <ul className="service-deliverables__list">
                            {service.includes.map((item) => (
                              <li key={item}>
                                <span
                                  className="service-deliverables__tick"
                                  aria-hidden
                                >
                                  ✓
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {cta && (
                        <TrackedLink
                          href={cta.href}
                          label={cta.track}
                          className="btn btn-primary service-deliverables__cta"
                        >
                          {cta.label}
                        </TrackedLink>
                      )}
                    </div>
                  </aside>
                </div>

                {service.process && service.process.length > 0 && (
                  <ol className="service-block__process">
                    {service.process.map((step, idx) => (
                      <li key={step.label} className="service-block__step">
                        <span className="service-block__step-num">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <div className="service-block__step-label">
                            {step.label}
                          </div>
                          <div className="service-block__step-detail">
                            {step.detail}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                )}
              </article>
            </FadeIn>
          </SectionShell>
        );
      })}

      {/* WordPress soft suggestion */}
      <SectionShell>
        <FadeIn>
          <aside className="wordpress-note">
            <div className="wordpress-note__rule" aria-hidden />
            <div>
              <h3 className="wordpress-note__heading">
                {wordpressNote.heading}
              </h3>
              <p className="wordpress-note__body">{wordpressNote.body}</p>
            </div>
          </aside>
        </FadeIn>
      </SectionShell>

      <PageCta
        title="Not sure which service fits?"
        description="Tell me a bit about your business and goals. I'll point you to the right starting place - even if that means a smaller scope than you came in expecting."
        secondaryHref={brand.bookingUrl}
        secondaryLabel="Book a Free Call"
      />
    </>
  );
}
