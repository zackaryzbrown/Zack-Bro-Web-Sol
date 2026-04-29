import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { BrowserMockup } from "@/components/BrowserMockup";
import { FadeIn } from "@/components/FadeIn";
import { PageCta } from "@/components/PageCta";
import { TrackedLink } from "@/components/TrackedLink";

import { projects, projectSlug, getProjectBySlug } from "@/content/work";
import { createMetadata } from "@/lib/metadata";
import { brand } from "@/content/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: projectSlug(p.name) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return createMetadata({ title: "Case Study", description: "", path: `/work/${slug}` });

  const descBase = project.outcomeMetric ?? project.result;
  return createMetadata({
    title: `${project.name} - ${project.type}`,
    description: `${project.name}: ${descBase}`,
    path: `/work/${slug}`,
  });
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const liveHref = `https://${project.url.replace(/^https?:\/\//, "")}`;

  // Related: next two projects after this one (wraps).
  const idx = projects.findIndex((p) => projectSlug(p.name) === slug);
  const related = [projects[(idx + 1) % projects.length], projects[(idx + 2) % projects.length]];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.name,
            about: project.type,
            creator: { "@type": "Organization", name: brand.name },
            url: `${brand.url}/work/${slug}`,
            image: project.image,
          }),
        }}
      />

      {/* ===== HERO ===== */}
      <section className="section page-hero">
        <div className="container">
          <FadeIn>
            <p className="section-label">
              <Link
                href="/work"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                ← Back to work
              </Link>
            </p>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                marginBottom: "1rem",
              }}
            >
              <span className="project-modal-type">{project.type}</span>
              {project.industry && (
                <span className="project-modal-type">{project.industry}</span>
              )}
              {project.isSpec ? (
                <span className="project-modal-status project-modal-status--spec">
                  Portfolio concept
                </span>
              ) : (
                <span className="project-modal-status project-modal-status--live">
                  Live client site
                </span>
              )}
            </div>
            <h1 className="page-hero-title">{project.name}</h1>
            {project.outcomeMetric && (
              <p
                className="section-subtext"
                style={{ color: "var(--accent)", fontWeight: 500 }}
              >
                {project.outcomeMetric}
              </p>
            )}
          </FadeIn>
        </div>
      </section>

      {/* ===== SCREENSHOT ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <FadeIn>
            <BrowserMockup url={project.url}>
              <Image
                src={project.image}
                alt={`${project.name} website screenshot`}
                width={1728}
                height={972}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </BrowserMockup>
          </FadeIn>
        </div>
      </section>

      {/* ===== STORY (Challenge / Solution / Result) ===== */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: "780px" }}>
          <FadeIn>
            <div style={{ marginBottom: "2.5rem" }}>
              <h2 className="project-modal-label">The Challenge</h2>
              <p className="project-modal-text" style={{ fontSize: "1.05rem" }}>
                {project.challenge}
              </p>
            </div>
            <div style={{ marginBottom: "2.5rem" }}>
              <h2 className="project-modal-label">The Solution</h2>
              <p className="project-modal-text" style={{ fontSize: "1.05rem" }}>
                {project.solution}
              </p>
            </div>
            <div>
              <h2 className="project-modal-label">The Result</h2>
              <p className="project-modal-text" style={{ fontSize: "1.05rem" }}>
                {project.result}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== IMPROVEMENTS + CAPABILITIES + TECH ===== */}
      <section className="section">
        <div className="container" style={{ maxWidth: "920px" }}>
          {project.improvements && project.improvements.length > 0 && (
            <FadeIn>
              <div style={{ marginBottom: "3rem" }}>
                <h3 className="project-modal-label">Key Improvements</h3>
                <div className="project-modal-improvements">
                  {project.improvements.map((item) => (
                    <div key={item} className="project-modal-improvement">
                      <span
                        style={{
                          color: "var(--accent)",
                          fontWeight: 600,
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        ✓
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          <FadeIn delay={100}>
            <div className="project-modal-footer" style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
              <div className="project-modal-footer-col">
                <h3 className="project-modal-label">Capabilities</h3>
                <ul className="project-modal-cap-list">
                  {project.capabilities.map((cap) => (
                    <li key={cap}>{cap}</li>
                  ))}
                </ul>
              </div>

              {project.tech && project.tech.length > 0 && (
                <div className="project-modal-footer-col">
                  <h3 className="project-modal-label">Tools &amp; Tech</h3>
                  <div className="project-modal-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="project-modal-tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div style={{ marginTop: "2rem" }}>
              <TrackedLink
                href={liveHref}
                className="btn-primary"
                label={`case_study_visit_${slug}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                {project.isSpec ? "View Concept" : "Visit Live Site"}
                <span aria-hidden="true" style={{ fontSize: "1.1em" }}>
                  ↗
                </span>
              </TrackedLink>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== RELATED ===== */}
      <section className="section-alt">
        <div className="container">
          <FadeIn>
            <p className="section-label" style={{ textAlign: "center" }}>
              More work
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
                marginTop: "1.5rem",
              }}
            >
              {related.map((r) => (
                <Link
                  key={r.name}
                  href={`/work/${projectSlug(r.name)}`}
                  className="related-project-card"
                  style={{
                    display: "block",
                    padding: "1.25rem",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "border-color 0.2s ease, transform 0.2s ease",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-tertiary)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {r.type}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-instrument-serif), serif",
                      fontSize: "1.35rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {r.name}
                  </p>
                  <p
                    style={{
                      color: "var(--accent)",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                    }}
                  >
                    View case study →
                  </p>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <PageCta
        title="Want results like this for your business?"
        description="Tell me about your project. I'll send back a clear plan, a fixed price, and a realistic timeline within one business day."
        linkLabel="Start your project"
        secondaryHref="/work"
        secondaryLabel="See all work"
      />
    </>
  );
}
