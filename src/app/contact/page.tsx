import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { TrackedLink } from "@/components/TrackedLink";
import { createMetadata } from "@/lib/metadata";
import { contactSteps } from "@/content/contact";
import { brand } from "@/content/site";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Request a quote for your custom website project. Colorado-based, replies within 1 business day. No pressure, no spam.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Tell me about your project."
        subtitle="Share a few details and I'll reply within 1 business day with next steps or a scoped quote."
        index={5}
        total={5}
        meta={[
          { label: "Reply within", value: "1 business day" },
          { label: "Based in", value: brand.location },
          { label: "Book a call", value: "30-min intro" },
        ]}
      />

      <SectionShell variant="alt">
        <div className="contact-layout">
          {/* Form panel */}
          <FadeIn>
            <div className="contact-form-panel">
              <header className="contact-form-panel__header">
                <h2 className="contact-form-panel__title">Request a quote</h2>
                <p className="contact-form-panel__subtitle">
                  Five minutes here saves us both a long discovery call.
                </p>
              </header>
              <ContactForm />
            </div>
          </FadeIn>

          {/* Sidebar */}
          <FadeIn delay={100}>
            <aside className="contact-sidebar">
              {/* Response promise */}
              <div className="contact-sidebar__card contact-sidebar__card--promise">
                <div className="contact-sidebar__promise-row">
                  <span className="contact-sidebar__promise-dot" aria-hidden />
                  <span className="contact-sidebar__promise-label">
                    {brand.responsePromise}
                  </span>
                </div>
                <p className="contact-sidebar__promise-text">
                  You&apos;ll hear back from a real human (me), not a scheduling
                  bot. Most replies go out same-day.
                </p>
              </div>

              {/* Direct contact */}
              <div className="contact-sidebar__card">
                <p className="contact-sidebar__heading">Prefer email?</p>
                <a
                  href={`mailto:${brand.email}`}
                  className="contact-sidebar__email"
                >
                  {brand.email}
                </a>
                <p className="contact-sidebar__note">
                  Based in {brand.location}. Available locally and remotely
                  across the Front Range.
                </p>
              </div>

              {/* Calendar */}
              <div className="contact-sidebar__card contact-sidebar__card--cta">
                <p className="contact-sidebar__heading">Prefer to talk?</p>
                <p className="contact-sidebar__note">
                  Book a free 30-minute call. We&apos;ll talk through your goals
                  and figure out the right next step - no commitment.
                </p>
                <TrackedLink
                  href={brand.bookingUrl}
                  label="contact_sidebar_book_call"
                  className="btn-secondary contact-sidebar__cta-btn"
                >
                  Book a free 30-min call
                  <span aria-hidden> ↗</span>
                </TrackedLink>
              </div>

              {/* What happens next */}
              <div className="contact-sidebar__card">
                <p className="contact-sidebar__heading">What happens next</p>
                <ol className="contact-steps">
                  {contactSteps.map((item) => (
                    <li key={item.step} className="contact-step">
                      <span className="contact-step__num">{item.step}</span>
                      <div>
                        <p className="contact-step__title">{item.title}</p>
                        <p className="contact-step__text">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </FadeIn>
        </div>
      </SectionShell>
    </>
  );
}
