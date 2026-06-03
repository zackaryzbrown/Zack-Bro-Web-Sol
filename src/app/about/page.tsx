import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { SectionIntro } from "@/components/SectionIntro";
import { FeatureGrid } from "@/components/FeatureGrid";
import { createMetadata } from "@/lib/metadata";
import { founderBio, approach, commitments } from "@/content/about";
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

      {/* Approach */}
      <SectionShell>
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

      {/* Who I Work With */}
      <SectionShell variant="alt" narrow>
        <FadeIn>
          <p className="section-label">WHO I WORK WITH</p>
          <h2 className="section-heading about-who-heading">
            Best fit for local service businesses.
          </h2>
          <p className="about-copy">
            I mostly work with businesses where a customer checks the website
            before making contact. If your site helps shape trust, explain your
            services, and guide someone toward calling or requesting a quote,
            you are the kind of business I build for.
          </p>
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
