import { ProjectGrid } from "@/components/ProjectGrid";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { createMetadata } from "@/lib/metadata";
import { projects } from "@/content/work";
import { brand } from "@/content/site";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Selected projects built for local service businesses. Custom websites designed to look professional and generate leads.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Previous Work"
        title="Real projects built for real businesses."
        subtitle="Most of my work is for local service businesses, with a few select founder-led brands mixed in when the fit is right. Each project is shaped around the client's audience, goals, and the outcomes that matter most."
      />

      <SectionShell variant="alt">
        <ProjectGrid projects={projects} />
      </SectionShell>

      <PageCta
        title="Have a project in mind?"
        description="I'd like to hear about your business and what you're looking to accomplish online. Let's start a conversation."
        secondaryHref={brand.bookingUrl}
        secondaryLabel="Book a Free Call"
        sectionClassName="section"
      />
    </>
  );
}
