import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { BrowserMockup } from "@/components/BrowserMockup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Zackary Brown Web Solutions",
  description: "Selected projects built for local service businesses. Custom websites designed to look professional and generate leads.",
};

const projects = [
  {
    name: "MHK Training",
    type: "Fitness & Training",
    challenge:
      "MHK Training needed a professional web presence that matched the quality of their training programs. Their previous online presence didn't communicate their services clearly or make it easy for potential clients to take the next step.",
    solution:
      "Built a clean, modern website with clear service breakdowns, trainer information, and integrated booking. The site structure guides visitors from understanding the training approach to scheduling a session.",
    result:
      "A professional online presence that clearly positions MHK Training as a serious fitness business, with a streamlined path from discovery to booking.",
    capabilities: ["Custom design", "Service pages", "Booking integration", "Mobile-responsive"],
  },
  {
    name: "Zekie Mobile Detailing",
    type: "Automotive Detailing",
    challenge:
      "Zekie Mobile Detailing needed a website that could serve as their primary sales tool, showcasing their services, pricing, and making it easy for vehicle owners to request a quote online.",
    solution:
      "Designed a conversion-focused website with clear service tiers, pricing transparency, and prominent quote request forms. The site is optimized for mobile since most customers find detailing services from their phones.",
    result:
      "A clean, professional site that makes Zekie look established and trustworthy, with a straightforward path from browsing services to requesting a quote.",
    capabilities: ["Custom design", "Quote forms", "Service & pricing pages", "Mobile-first"],
  },
  {
    name: "JustMalikBeats",
    type: "Music Production",
    challenge:
      "JustMalikBeats needed a professional platform to showcase their music catalog, handle licensing, and present a cohesive brand to potential clients in the music industry.",
    solution:
      "Built a custom platform with audio playback, licensing information, and a professional brand presentation. The site balances creative expression with clear business functionality.",
    result:
      "A professional music platform that showcases the catalog effectively and provides a clear path to licensing, positioning JustMalikBeats as a serious producer.",
    capabilities: ["Custom build", "Audio integration", "Licensing pages", "Brand design"],
  },
  {
    name: "The Futons",
    type: "Music / Band",
    challenge:
      "The Futons needed a web presence that captured their identity as a band while making it easy for fans and event organizers to find information and get in touch.",
    solution:
      "Created a site that balances personality with practicality. It features music samples, show information, and clear contact options for booking inquiries.",
    result:
      "An authentic online presence that represents the band professionally and makes booking inquiries frictionless.",
    capabilities: ["Custom design", "Media integration", "Contact setup", "Responsive layout"],
  },
];

const projectColors: Record<string, { primary: string; bg: string; bgAlt: string }> = {
  "MHK Training": { primary: "#C44D2A", bg: "#FDF5F2", bgAlt: "#F9EBE6" },
  "Zekie Mobile Detailing": { primary: "#1A5276", bg: "#EFF6FA", bgAlt: "#DDE9F0" },
  "JustMalikBeats": { primary: "#7D3C98", bg: "#F8F2FC", bgAlt: "#EDE0F5" },
  "The Futons": { primary: "#2E7D32", bg: "#F2F8F2", bgAlt: "#E0F0E0" },
};

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "5rem" }}>
        <div className="container">
          <FadeIn>
            <p className="section-label">Selected Work</p>
            <h1 style={{ maxWidth: "640px", marginBottom: "1.25rem" }}>
              Real projects built for real businesses.
            </h1>
            <p className="section-subtext">
              Each project below was designed around the specific needs of the
              business, including their audience, their goals, and the outcomes that
              matter to them.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects */}
      <section className="section-alt">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {projects.map((project, i) => (
              <FadeIn key={project.name} delay={i * 100}>
                <article
                  className="card"
                  style={{ padding: "0", overflow: "hidden" }}
                >
                  {/* Project preview */}
                  <div
                    style={{
                      padding: "1.5rem",
                      background: "var(--bg-alt)",
                      borderBottom: "1px solid var(--border-light)",
                    }}
                  >
                    <BrowserMockup url={`www.${project.name.toLowerCase().replace(/\s+/g, "")}.com`}>
                      {(() => {
                        const c = projectColors[project.name] || { primary: "var(--accent)", bg: "var(--bg)", bgAlt: "var(--accent-light)" };
                        return (
                          <div style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: "10px", background: "#fff", minHeight: "200px" }}>
                            {/* Mini nav */}
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 14px", borderBottom: "1px solid #f0f0ec" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: c.primary }} />
                                <span style={{ fontWeight: 600, fontSize: "8px", letterSpacing: "0.02em" }}>{project.name}</span>
                              </div>
                              <div style={{ display: "flex", gap: "8px", fontSize: "6.5px", color: "#999", fontWeight: 500 }}>
                                <span>Services</span>
                                <span>About</span>
                                <span style={{ background: c.primary, color: "#fff", padding: "2px 6px", borderRadius: "3px" }}>Contact</span>
                              </div>
                            </div>
                            {/* Mini hero */}
                            <div style={{ background: `linear-gradient(135deg, ${c.bg} 0%, ${c.bgAlt} 100%)`, padding: "20px 14px 16px" }}>
                              <p style={{ fontSize: "5.5px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: c.primary, marginBottom: "3px" }}>{project.type}</p>
                              <p style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif", fontSize: "13px", lineHeight: 1.2, color: "#1A1A1A", marginBottom: "6px", maxWidth: "70%" }}>{project.name}</p>
                              <p style={{ fontSize: "6.5px", color: "#777", lineHeight: 1.5, marginBottom: "8px", maxWidth: "75%" }}>Professional solutions tailored to your business needs.</p>
                              <div style={{ display: "flex", gap: "5px" }}>
                                <span style={{ background: c.primary, color: "#fff", padding: "3px 8px", borderRadius: "3px", fontSize: "6px", fontWeight: 500 }}>Get Started</span>
                                <span style={{ border: "1px solid #d0d0c8", color: "#555", padding: "3px 8px", borderRadius: "3px", fontSize: "6px", fontWeight: 500 }}>Learn More</span>
                              </div>
                            </div>
                            {/* Mini cards row */}
                            <div style={{ padding: "10px 14px 12px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px" }}>
                              {project.capabilities.slice(0, 3).map((cap) => (
                                <div key={cap} style={{ background: c.bg, borderRadius: "4px", padding: "8px 6px", textAlign: "center" }}>
                                  <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: `${c.primary}15`, margin: "0 auto 3px" }} />
                                  <p style={{ fontWeight: 600, fontSize: "6px", color: "#444" }}>{cap}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })()}
                    </BrowserMockup>
                  </div>

                  <div style={{ padding: "2.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          color: "var(--accent)",
                        }}
                      >
                        {project.type}
                      </p>
                    </div>

                    <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
                      {project.name}
                    </h2>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "2rem",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <div>
                        <h4
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                            color: "var(--text-tertiary)",
                            marginBottom: "0.5rem",
                            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                          }}
                        >
                          The Challenge
                        </h4>
                        <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                          {project.challenge}
                        </p>
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                            color: "var(--text-tertiary)",
                            marginBottom: "0.5rem",
                            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                          }}
                        >
                          The Solution
                        </h4>
                        <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div style={{ marginBottom: "1.5rem" }}>
                      <h4
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          color: "var(--text-tertiary)",
                          marginBottom: "0.5rem",
                          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                        }}
                      >
                        The Result
                      </h4>
                      <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                        {project.result}
                      </p>
                    </div>

                    {/* Capabilities */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {project.capabilities.map((cap) => (
                        <span
                          key={cap}
                          style={{
                            padding: "0.375rem 0.875rem",
                            border: "1px solid var(--border)",
                            borderRadius: "100px",
                            fontSize: "0.8125rem",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: "center", maxWidth: "600px" }}>
          <FadeIn>
            <h2 style={{ marginBottom: "1rem" }}>
              Have a project in mind?
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--text-secondary)",
                maxWidth: "480px",
                margin: "0 auto 2rem",
                lineHeight: 1.7,
              }}
            >
              I&apos;d like to hear about your business and what you&apos;re looking to
              accomplish online. Let&apos;s start a conversation.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
