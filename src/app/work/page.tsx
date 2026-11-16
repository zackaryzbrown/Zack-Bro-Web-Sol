import { ProjectGrid } from "@/components/ProjectGrid";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { createMetadata } from "@/lib/metadata";
import { projects, industries } from "@/content/work";
import { brand } from "@/content/site";

export const metadata = createMetadata({
  title: "Website Projects & Portfolio",
  description:
    "Explore website projects and clearly labeled design concepts by Zackary Brown, a web designer in Erie, Colorado.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        compact
        label="Selected Work"
        title="Explore the work."
        subtitle="See what was built, how it works, and the thinking behind it. Client projects and portfolio concepts are labeled."
      />

      <SectionShell variant="alt">
        <ProjectGrid projects={projects} industries={industries} showFilter />
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
