import { FadeIn } from "@/components/FadeIn";
import { CheckList } from "@/components/CheckList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { TrackedLink } from "@/components/TrackedLink";
import { createMetadata } from "@/lib/metadata";
import { servicesDetailed } from "@/content/services";
import { brand } from "@/content/site";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Custom websites, redesigns, quote and booking setup, and ongoing support for local service businesses.",
  path: "/services",
});

const getServiceAction = (title: string) => {
  switch (title) {
    case "Custom Websites":
      return {
        href: "/work",
        label: "See related work",
        track: "services_custom_websites_work",
      };
    case "Website Redesigns":
      return {
        href: "/work",
        label: "See related work",
        track: "services_redesigns_work",
      };
    case "Quote & Booking Setup":
      return {
        href: "/contact",
        label: "Request this service",
        track: "services_quote_booking_contact",
      };
    default:
      return {
        href: "/pricing",
        label: "View pricing",
        track: "services_care_pricing",
      };
  }
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Websites built to earn trust and drive inquiries."
        subtitle="Practical website services for local service businesses that want to look credible and get contacted more often."
      />

      {/* Service Cards */}
      <SectionShell variant="alt">
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {servicesDetailed.map((service, i) => (
            <FadeIn key={service.title} delay={i * 80}>
              {(() => {
                const action = getServiceAction(service.title);

                return (
                  <div
                    className="card"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "2.5rem",
                    }}
                  >
                    <div>
                      <h2
                        style={{
                          fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        {service.title}
                      </h2>
                      <p
                        style={{
                          fontSize: "0.9375rem",
                          lineHeight: 1.7,
                          marginBottom: "1.5rem",
                        }}
                      >
                        {service.description}
                      </p>

                      {service.includes && (
                        <CheckList
                          items={service.includes}
                          containerStyle={{
                            gridTemplateColumns:
                              "repeat(auto-fill, minmax(220px, 1fr))",
                            marginBottom: "1.5rem",
                          }}
                        />
                      )}

                      {service.bestFor && (
                        <p
                          style={{
                            marginTop: "1.1rem",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.35rem",
                            padding: "0.32rem 0.56rem",
                            borderRadius: "999px",
                            background: "var(--accent-light)",
                            fontSize: "0.79rem",
                            color: "var(--text-primary)",
                            fontWeight: 500,
                            lineHeight: 1.35,
                          }}
                        >
                          <span
                            style={{ color: "var(--accent)", fontWeight: 600 }}
                          >
                            Best fit:
                          </span>{" "}
                          {service.bestFor}
                        </p>
                      )}
                    </div>

                    <TrackedLink
                      href={action.href}
                      label={action.track}
                      className="service-card-action"
                      style={{ marginTop: "1.35rem" }}
                    >
                      {action.label}
                    </TrackedLink>
                  </div>
                );
              })()}
            </FadeIn>
          ))}
        </div>
      </SectionShell>

      <PageCta
        title="Not sure which service you need?"
        description="Tell me about your business and I will recommend the right approach."
        secondaryHref={brand.bookingUrl}
        secondaryLabel="Book a Free Call"
      />
    </>
  );
}
