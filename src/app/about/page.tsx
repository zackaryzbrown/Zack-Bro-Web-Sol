import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { SectionIntro } from "@/components/SectionIntro";
import { FeatureGrid } from "@/components/FeatureGrid";
import { createMetadata } from "@/lib/metadata";
import {
  founderBio,
  approach,
  commitments,
  process,
  proofStats,
} from "@/content/about";
import { brand } from "@/content/site";

export const metadata = createMetadata({
  title: "About",
  description:
    "Websites for local service businesses that need to look credible online. Clear, professional, inquiry-focused execution.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="about-page">
      <PageHero
        label="ABOUT"
        title="Modern websites for local service businesses."
        subtitle="I build clean, modern websites that help service businesses make a stronger first impression and make it easier for customers to get in touch."
        index={4}
        total={5}
        meta={[
          { label: "Founder", value: brand.founder },
          { label: "Based in", value: brand.location },
          { label: "Focus", value: "Local service businesses" },
        ]}
      />

      {/* Founder Section */}
      <SectionShell variant="alt">
        <div className="about-founder-grid">
          <FadeIn>
            <figure className="about-founder-portrait">
              <div className="about-founder-portrait__media">
                <span
                  className="about-founder-portrait__outline"
                  aria-hidden="true"
                />
                <div className="about-founder-portrait__frame">
                  <div className="about-founder-portrait__inner">
                    <Image
                      src="/zackary-brown-profile.jpg"
                      alt={`${brand.founder}, Founder and Developer`}
                      width={600}
                      height={750}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                      priority
                    />
                  </div>
                </div>
                <span
                  className="about-founder-portrait__monogram"
                  aria-hidden="true"
                >
                  ZB
                </span>
              </div>
              <figcaption className="about-founder-portrait__caption">
                <span
                  className="about-founder-portrait__rule"
                  aria-hidden="true"
                />
                <span className="about-founder-portrait__caption-name">
                  {brand.founder}
                </span>
                <span className="about-founder-portrait__caption-role">
                  Founder &amp; Developer
                </span>
              </figcaption>
            </figure>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="about-founder-copy-col">
              <h2 className="about-founder-heading">
                Hi, I&apos;m {brand.founder}.
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {founderBio.map((paragraph, i) => (
                  <p key={i} className="about-copy">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionShell>

      {/* Proof stats strip */}
      <SectionShell>
        <FadeIn>
          <div className="about-stats">
            {proofStats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <span className="about-stat__value">{stat.value}</span>
                <span className="about-stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </SectionShell>

      {/* Approach */}
      <SectionShell variant="alt">
        <div className="about-section-intro">
          <SectionIntro
            label="MY APPROACH"
            heading="How I think about building websites for businesses."
          />
        </div>
        <div className="about-feature-grid">
          <FeatureGrid items={approach} minWidth="300px" />
        </div>
      </SectionShell>

      {/* Who I Work With - pull-quote */}
      <SectionShell narrow>
        <FadeIn>
          <figure className="about-quote">
            <span className="about-quote__mark" aria-hidden>
              &ldquo;
            </span>
            <blockquote className="about-quote__body">
              I build for the businesses where a customer almost always checks
              the website before they pick up the phone. If your site needs to
              shape trust, explain services, and guide visitors toward a call or
              quote - that&apos;s exactly what I&apos;m here for.
            </blockquote>
            <figcaption className="about-quote__cite">
              - {brand.founder}, Founder
            </figcaption>
          </figure>
        </FadeIn>
      </SectionShell>

      {/* Process timeline */}
      <SectionShell variant="alt">
        <div className="about-section-intro">
          <SectionIntro
            label="HOW IT WORKS"
            heading="From first message to launch day."
            subtext="A simple, transparent process - no jargon, no surprise invoices."
          />
        </div>
        <FadeIn>
          <ol className="about-process">
            {process.map((item) => (
              <li key={item.step} className="about-process__step">
                <div className="about-process__num">{item.step}</div>
                <div className="about-process__body">
                  <h3 className="about-process__title">{item.title}</h3>
                  <p className="about-process__text">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </FadeIn>
      </SectionShell>

      {/* Commitments */}
      <SectionShell>
        <div className="about-section-intro">
          <SectionIntro
            label="WHAT YOU CAN EXPECT"
            heading="What working with me is actually like."
          />
        </div>
        <div className="about-feature-grid">
          <FeatureGrid items={commitments} minWidth="250px" variant="card" />
        </div>
      </SectionShell>

      <PageCta
        title="Let's talk about your project."
        description="Tell me what your business needs and I will follow up with clear next steps."
        copyMaxWidth="560px"
        secondaryHref={brand.bookingUrl}
        secondaryLabel="Book a Free Call"
      />
    </div>
  );
}
