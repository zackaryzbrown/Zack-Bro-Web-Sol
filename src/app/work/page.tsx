import { ProjectGrid } from "@/components/ProjectGrid";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { FadeIn } from "@/components/FadeIn";
import { createMetadata } from "@/lib/metadata";
import { projects, industries } from "@/content/work";
import { brand } from "@/content/site";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Selected projects and portfolio concepts built for local service businesses. Custom websites designed to look professional and generate leads.",
  path: "/work",
});

export default function WorkPage() {
  const liveCount = projects.filter((p) => !p.isSpec).length;
  const specCount = projects.filter((p) => p.isSpec).length;

  return (
    <>
      <PageHero
        label="Selected Work"
        title="Sites built for service businesses that need to look the part."
        subtitle="A mix of live client work and portfolio concepts - each one structured around clarity, credibility, and the path from first visit to inquiry."
        index={2}
        total={5}
        meta={[
          { label: "Live client sites", value: `${liveCount} client builds` },
          { label: "Portfolio concepts", value: `${specCount} spec projects` },
          {
            label: "Industries covered",
            value: `${industries.length} verticals`,
          },
        ]}
      />

      <SectionShell variant="alt">
        <FadeIn>
          <div className="work-transparency">
            <div className="work-transparency__item">
              <div className="work-transparency__num">{liveCount}</div>
              <div className="work-transparency__label">Live client sites</div>
            </div>
            <div className="work-transparency__rule" aria-hidden />
            <div className="work-transparency__item">
              <div className="work-transparency__num">{specCount}</div>
              <div className="work-transparency__label">Portfolio concepts</div>
            </div>
            <div className="work-transparency__rule" aria-hidden />
            <div className="work-transparency__item work-transparency__item--note">
              <p className="work-transparency__note">
                I&apos;m new to freelancing and honest about it. Portfolio
                concepts show exactly what I can build for an industry -
                designed to the same standard as paid client work.
              </p>
            </div>
          </div>
        </FadeIn>

        <div style={{ marginTop: "2.5rem" }}>
          <ProjectGrid projects={projects} industries={industries} showFilter />
        </div>
      </SectionShell>

      <PageCta
        title="Have a project in mind?"
        description="Tell me about your business and I'll help you map the right website direction - even if it's a smaller scope than you came in expecting."
        secondaryHref={brand.bookingUrl}
        secondaryLabel="Book a Free Call"
        sectionClassName="section"
      />
    </>
  );
}
