"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { BrowserMockup } from "./BrowserMockup";
import { TrackedLink } from "./TrackedLink";
import type { Project } from "@/content/types";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, close]);

  const active = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="project-grid">
        {projects.map((project, i) => (
          <button
            key={project.name}
            className="project-grid-card"
            onClick={() => setActiveIndex(i)}
            type="button"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="project-grid-image">
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
            </div>
            <div className="project-grid-info">
              <span className="project-grid-type">{project.type}</span>
              <h3 className="project-grid-name">{project.name}</h3>
              <div className="project-grid-caps">
                {project.capabilities.slice(0, 3).map((cap) => (
                  <span key={cap} className="project-grid-cap">
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Detail Modal */}
      {active && (
        <div
          className="project-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} project details`}
        >
          <div className="project-modal">
            <button
              className="project-modal-close"
              onClick={close}
              type="button"
              aria-label="Close project details"
            >
              ✕
            </button>

            <div className="project-modal-image">
              <BrowserMockup url={active.url}>
                <Image
                  src={active.image}
                  alt={`${active.name} website screenshot`}
                  width={1728}
                  height={972}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </BrowserMockup>
            </div>

            <div className="project-modal-body">
              <p className="project-modal-type">{active.type}</p>
              <h2 className="project-modal-name">{active.name}</h2>

              <div className="project-modal-details">
                <div>
                  <h4 className="project-modal-label">The Challenge</h4>
                  <p className="project-modal-text">{active.challenge}</p>
                </div>
                <div>
                  <h4 className="project-modal-label">The Solution</h4>
                  <p className="project-modal-text">{active.solution}</p>
                </div>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <h4 className="project-modal-label">The Result</h4>
                <p className="project-modal-text">{active.result}</p>
              </div>

              {active.improvements && active.improvements.length > 0 && (
                <div style={{ marginBottom: "1.25rem" }}>
                  <h4 className="project-modal-label">Key Improvements</h4>
                  <div className="project-modal-improvements">
                    {active.improvements.map((item) => (
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
              )}

              <div className="project-modal-caps">
                {active.capabilities.map((cap) => (
                  <span key={cap} className="project-modal-cap">
                    {cap}
                  </span>
                ))}
              </div>

              <TrackedLink
                href={`https://${active.url.replace(/^https?:\/\//, "")}`}
                className="btn-primary"
                label={`work_visit_site_${active.name.toLowerCase().replaceAll(" ", "_")}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "1rem",
                }}
              >
                Visit Live Site
                <span aria-hidden="true" style={{ fontSize: "1.1em" }}>
                  ↗
                </span>
              </TrackedLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
