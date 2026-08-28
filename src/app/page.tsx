import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { FAQ } from "@/components/FAQ";
import { BrowserMockup } from "@/components/BrowserMockup";
import { HeroWebsiteShowcase } from "@/components/HeroWebsiteShowcase";
import { PageCta } from "@/components/PageCta";
import { TrustStrip } from "@/components/TrustStrip";
import { BuiltWithStrip } from "@/components/BuiltWithStrip";
import { SectionShell } from "@/components/SectionShell";
import { SectionIntro } from "@/components/SectionIntro";
import { CardGrid } from "@/components/CardGrid";
import { FeatureGrid } from "@/components/FeatureGrid";
import { TrackedLink } from "@/components/TrackedLink";
import { SocialLinks } from "@/components/SocialLinks";
import { Testimonials } from "@/components/Testimonials";
import { LocalServiceAreas } from "@/components/LocalServiceAreas";
import {
  services,
  pricingPreview,
  processSteps,
  whyWorkWithMe,
  homeFaqItems,
  aiNote,
} from "@/content/home";
import { featuredProjects } from "@/content/work";
import { hasPublishedTestimonials } from "@/content/testimonials";
import { brand } from "@/content/site";
import { heroBadgeLabel } from "@/content/pricing";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="section home-hero"
        style={{
          paddingTop: "clamp(2rem, 4vw, 3.5rem)",
          paddingBottom: "3rem",
        }}
      >
        <div className="home-hero__depth" aria-hidden="true">
          <span className="home-hero__panel home-hero__panel--one" />
          <span className="home-hero__panel home-hero__panel--two" />
        </div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <FadeIn>
                <p className="section-label">
                  Web Design for Local Service Businesses
                </p>
              </FadeIn>
              <FadeIn delay={80}>
                <h1 className="hero-heading">
                  <span>Websites that turn</span>
                  <span>local visitors into</span>
                  <span>booked work.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={160}>
                <p className="hero-subtext">
                  Founder-led web design for Colorado service businesses.
                  Clearer messaging, mobile-first builds, and a frictionless
                  path from first visit to inquiry.
                </p>
                <p className="hero-founder-line">
                  You work directly with me from scope to launch.
                </p>
              </FadeIn>
              <FadeIn delay={240}>
                <div className="hero-ctas">
                  <TrackedLink
                    href="/contact"
                    className="btn-primary"
                    label="home_hero_request_quote"
                  >
                    Request a Quote
                  </TrackedLink>
                  <TrackedLink
                    href={brand.bookingUrl}
                    className="btn-secondary"
                    label="home_hero_book_call"
                  >
                    Book a Free Call
                  </TrackedLink>
                </div>
                <p className="hero-promise">
                  <span className="hero-promise__dot" aria-hidden="true" />
                  {brand.responsePromise} ·{" "}
                  <TrackedLink
                    href="/work"
                    className="hero-promise__link"
                    label="home_hero_view_work"
                  >
                    or browse recent work &rarr;
                  </TrackedLink>
                </p>
                <div className="hero-social-proof">
                  <span className="hero-social-proof__label">
                    Code & network
                  </span>
                  <SocialLinks
                    variant="light"
                    className="hero-social-proof__links"
                    ariaLabel="View Zackary Brown on LinkedIn and GitHub"
                    trackingPrefix="home_hero_social"
                    platforms={["linkedin", "github"]}
                  />
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={300} direction="right">
              <div className="hero-mockup-wrapper">
                <HeroWebsiteShowcase
                  primaryBadge={heroBadgeLabel}
                  secondaryBadge="Ongoing care available"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <FadeIn delay={100}>
        <TrustStrip />
      </FadeIn>

      {/* ===== BUILT WITH (tech credibility strip) ===== */}
      <BuiltWithStrip />

      {/* ===== VALUE LOOP (4 quick pillars for skimmers) ===== */}
      <section className="value-loop-section">
        <div className="container">
          <div className="value-loop">
            {[
              {
                num: "01",
                title: "Custom Design",
                text: "Built around your business, not a recycled template.",
              },
              {
                num: "02",
                title: "Mobile-First",
                text: "Most local-business traffic is mobile. Sites are designed for it.",
              },
              {
                num: "03",
                title: "Local SEO Ready",
                text: "Structured for visibility in Colorado local search.",
              },
              {
                num: "04",
                title: "Built to Convert",
                text: "Clear paths from first visit to a real inquiry.",
              },
            ].map((item, i) => (
              <FadeIn key={item.num} delay={i * 80}>
                <div className="value-loop__item">
                  <span className="value-loop__num">{item.num}</span>
                  <h3 className="value-loop__title">{item.title}</h3>
                  <p className="value-loop__text">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <SectionShell variant="alt">
        <SectionIntro
          label="What I Do"
          heading="Services built around what your business needs"
          subtext="Focused website services with clear scope and practical deliverables."
        />
        <CardGrid>
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 80}>
              <div className="card" style={{ height: "100%" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "var(--accent-light)",
                    color: "var(--accent)",
                    fontSize: "1rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {service.icon}
                </span>
                <h3 style={{ marginBottom: "0.75rem", fontSize: "1.125rem" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}>
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </CardGrid>
        <FadeIn delay={320}>
          <div style={{ marginTop: "2.5rem" }}>
            <TrackedLink
              href="/services"
              className="btn-secondary"
              label="home_services_learn_more"
            >
              Learn More About Services
            </TrackedLink>
          </div>
        </FadeIn>

        {/* AI add-on soft aside */}
        <FadeIn delay={400}>
          <aside className="ai-note" style={{ marginTop: "3rem" }}>
            <div className="ai-note__rule" aria-hidden />
            <div>
              <h3 className="ai-note__heading">{aiNote.heading}</h3>
              <p className="ai-note__body">{aiNote.body}</p>
            </div>
          </aside>
        </FadeIn>
      </SectionShell>

      {/* ===== FEATURED WORK ===== */}
      <SectionShell>
        <SectionIntro
          label="Recent Work"
          heading="Real projects for real businesses."
          subtext="Most projects are for local service businesses where clarity and trust directly affect inquiries."
        />
        <CardGrid minWidth="300px">
          {featuredProjects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 100}>
              <div className="card" style={{ height: "100%" }}>
                <div
                  style={{
                    borderRadius: "var(--radius)",
                    marginBottom: "1.5rem",
                    overflow: "hidden",
                  }}
                >
                  <BrowserMockup url={project.url}>
                    <Image
                      src={project.image}
                      alt={`${project.name} website screenshot`}
                      width={864}
                      height={486}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </BrowserMockup>
                </div>
                <h3 style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}>
                  {project.name}
                </h3>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}>
                  {project.result}
                </p>
              </div>
            </FadeIn>
          ))}
        </CardGrid>
        <FadeIn>
          <div style={{ marginTop: "2.5rem" }}>
            <TrackedLink
              href="/work"
              className="btn-secondary"
              label="home_work_view_all"
            >
              View All Work
            </TrackedLink>
          </div>
        </FadeIn>
      </SectionShell>

      {/* ===== TESTIMONIALS (auto-hides until quotes are filled in) ===== */}
      {hasPublishedTestimonials && (
        <SectionShell variant="alt">
          <SectionIntro
            label="What Clients Say"
            heading="Honest words from real projects."
            subtext="A short list of clients I've worked with directly. Quotes used with permission."
          />
          <Testimonials />
        </SectionShell>
      )}

      {/* ===== LOCAL SERVICE AREAS (local SEO + buyer reassurance) ===== */}
      <SectionShell>
        <FadeIn>
          <LocalServiceAreas />
        </FadeIn>
      </SectionShell>

      {/* ===== WHY WORK WITH ME ===== */}
      <SectionShell variant="alt">
        <SectionIntro
          label="Why Work With Me"
          heading="Why businesses hire me directly"
        />
        <div style={{ marginTop: "2.5rem" }}>
          <FeatureGrid items={whyWorkWithMe} />
        </div>
      </SectionShell>

      {/* ===== PROCESS ===== */}
      <SectionShell>
        <SectionIntro
          label="How It Works"
          heading="A straightforward process from inquiry to launch."
          subtext="Clear steps, clear communication, and no guesswork."
        />
        <CardGrid minWidth="300px">
          {processSteps.map((step, i) => (
            <FadeIn key={step.step} delay={i * 60}>
              <div
                style={{
                  padding: "1.75rem",
                  borderLeft: "2px solid var(--accent-muted)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    letterSpacing: "0.05em",
                  }}
                >
                  STEP {step.step}
                </span>
                <h3
                  style={{ fontSize: "1.0625rem", margin: "0.5rem 0 0.5rem" }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </CardGrid>
      </SectionShell>

      {/* ===== PRICING PREVIEW ===== */}
      <SectionShell variant="alt">
        <SectionIntro
          label="Pricing"
          heading="Straightforward pricing. No hidden fees."
          subtext="Every project is scoped to your needs. Here are typical starting ranges by project type."
        />
        <div className="home-pricing-grid-wrap">
          <CardGrid minWidth="220px">
            {pricingPreview.map((tier, i) => (
              <FadeIn key={tier.name} delay={i * 80}>
                <div
                  className={`card home-pricing-card ${tier.featured ? "home-pricing-card-featured" : ""}`}
                >
                  {tier.featured && (
                    <span className="home-pricing-badge">Most Common</span>
                  )}
                  <h3 className="home-pricing-title">{tier.name}</h3>
                  <p className="home-pricing-note">{tier.note}</p>
                  <p className="home-pricing-price">
                    <span>from</span>
                    {tier.startingAt}
                  </p>
                </div>
              </FadeIn>
            ))}
          </CardGrid>
        </div>
        <FadeIn>
          <div style={{ marginTop: "2.5rem" }}>
            <TrackedLink
              href="/pricing"
              className="btn-secondary"
              label="home_pricing_see_full"
            >
              See Full Pricing
            </TrackedLink>
          </div>
        </FadeIn>
      </SectionShell>

      {/* ===== CARE PLANS TEASER ===== */}
      <SectionShell>
        <FadeIn>
          <div
            style={{
              background: "var(--accent-light)",
              borderRadius: "var(--radius-lg)",
              padding: "3rem",
            }}
          >
            <div style={{ marginBottom: "1.5rem" }}>
              <p className="section-label">After Launch</p>
              <h2
                style={{
                  marginBottom: "0.75rem",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                }}
              >
                Hosting and care after launch
              </h2>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  maxWidth: "480px",
                }}
              >
                Managed Hosting starts at $25/month. Website Care starts at
                $49/month for clients who want ongoing support.
              </p>
            </div>
            <div>
              <TrackedLink
                href="/pricing"
                className="btn-primary"
                label="home_care_plans_view"
              >
                View Plans
              </TrackedLink>
            </div>
          </div>
        </FadeIn>
      </SectionShell>

      {/* ===== FAQ ===== */}
      <SectionShell variant="alt" narrow>
        <SectionIntro
          label="Common Questions"
          heading="Frequently asked questions"
        />
        <FadeIn delay={100}>
          <FAQ items={homeFaqItems} />
        </FadeIn>
        <FadeIn delay={200}>
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <TrackedLink
              href="/pricing#faq"
              className="btn-secondary"
              label="home_faq_view_all"
              style={{ fontSize: "0.875rem" }}
            >
              View all FAQ &rarr;
            </TrackedLink>
          </div>
        </FadeIn>
      </SectionShell>

      <PageCta
        title="Ready to improve your online presence?"
        description="Tell me what your business needs and I will recommend the right starting point."
        secondaryHref={brand.bookingUrl}
        secondaryLabel="Book a Free Call"
        sectionClassName="section"
      />
    </>
  );
}
