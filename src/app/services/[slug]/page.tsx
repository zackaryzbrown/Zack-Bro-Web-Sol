import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { SectionIntro } from "@/components/SectionIntro";
import { CardGrid } from "@/components/CardGrid";
import { FAQ } from "@/components/FAQ";
import { PageCta } from "@/components/PageCta";
import { TrackedLink } from "@/components/TrackedLink";
import { brand } from "@/content/site";
import { getServicePage, servicePages } from "@/content/service-pages";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();
  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();
  const contactHref = `/contact?service=${service.service}`;

  return (
    <>
      <PageHero
        compact
        label={service.label}
        title={service.heading}
        subtitle={service.summary}
      >
        <TrackedLink
          href={contactHref}
          label={`service_${slug}_hero_quote`}
          className="btn-primary"
        >
          Discuss your project
        </TrackedLink>
        <Link href="/pricing" className="btn-secondary">
          See pricing
        </Link>
      </PageHero>
      <SectionShell>
        <nav aria-label="Breadcrumb" className="service-breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden> / </span>
          <Link href="/services">Services</Link>
          <span aria-hidden> / </span>
          <span aria-current="page">{service.label}</span>
        </nav>
        <div className="service-block__grid">
          <div>
            <h2>Start with what your website needs to do.</h2>
            {service.introduction.map((paragraph) => (
              <p key={paragraph} className="service-detail-copy">
                {paragraph}
              </p>
            ))}
          </div>
          <aside className="service-deliverables">
            <h2>Scope and investment</h2>
            <p className="service-detail-price">From {service.startingPrice}</p>
            <p className="service-detail-copy">
              Typical timeline: {service.timeline}.
            </p>
            <p className="service-detail-copy">{service.priceContext}</p>
            <TrackedLink
              href={contactHref}
              label={`service_${slug}_quote`}
              className="btn-primary"
            >
              Discuss your project
            </TrackedLink>
            <Link href="/pricing" className="project-case-link">
              Compare packages <span aria-hidden>→</span>
            </Link>
            <p className="service-detail-copy">
              <Link
                href="/pricing#project-policies"
                className="project-case-link"
              >
                Payment, revisions &amp; handover <span aria-hidden>→</span>
              </Link>
            </p>
          </aside>
        </div>
      </SectionShell>
      <SectionShell variant="alt">
        <SectionIntro label="The work" heading="What we plan and build." />
        <CardGrid>
          {service.deliverables.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p className="service-detail-copy">{item.text}</p>
            </article>
          ))}
        </CardGrid>
      </SectionShell>
      <SectionShell>
        <SectionIntro
          label="Explore projects"
          heading="See the work behind the offer."
        />
        <div className="service-related-links">
          <Link href="/work/mhk-training" className="project-case-link">
            MHK Training: member platform <span aria-hidden>→</span>
          </Link>
          <Link
            href="/work/a-child-s-perspective"
            className="project-case-link"
          >
            A Child&apos;s Perspective: practice website{" "}
            <span aria-hidden>→</span>
          </Link>
          <Link href="/work" className="project-case-link">
            Browse all projects <span aria-hidden>→</span>
          </Link>
        </div>
      </SectionShell>
      <SectionShell variant="alt" narrow>
        <SectionIntro label="Questions" heading="Before we start." />
        <FAQ items={service.faq} />
      </SectionShell>
      <PageCta
        title="Tell me what your website needs."
        description="Share your business, your current site if you have one, and what you want to improve. I'll reply within one business day."
        href={contactHref}
        secondaryHref={brand.bookingUrl}
        secondaryLabel="Book a Free Call"
      />
    </>
  );
}
