import { AnalyticsPreferences } from "@/components/AnalyticsPreferences";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { brand } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy & Analytics",
  description:
    "How Zackary Brown Web Solutions handles website inquiries, optional analytics, and consultation bookings. Manage analytics in your browser.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        compact
        label="Privacy"
        title="Your details, explained."
        subtitle="How information is used when you visit this site, send an inquiry, or book a consultation."
      />
      <SectionShell narrow className="privacy-page">
        <p className="privacy-page__updated">Updated November 15, 2026</p>
        <section>
          <h2>Website inquiries</h2>
          <p>
            The contact form asks for your name, email, and project description.
            You can also provide a business name, website, service interest, and
            how you found me. I use these details to answer your inquiry and
            discuss your project.
          </p>
          <p>
            Submissions are sent through{" "}
            <a href="https://resend.com/legal/privacy-policy">Resend</a> to my
            business inbox. The form does not add you to a marketing mailing
            list. Please leave passwords, payment details, and sensitive
            personal records out of your message.
          </p>
        </section>
        <section>
          <h2>Hosting and form protection</h2>
          <p>
            This website is hosted on AWS Amplify. Hosting and email services
            process technical information needed to deliver pages and messages.
            To limit spam, the form counts requests using your IP address. When
            Upstash is configured, that request counter is processed by Upstash
            Redis; otherwise, a temporary counter runs on the website server.
          </p>
          <p>
            A successful form submission stores a timestamp in your browser to
            help prevent accidental repeat submissions. Blocking browser storage
            does not prevent you from sending an inquiry.
          </p>
        </section>
        <section id="analytics">
          <h2>Optional site analytics</h2>
          <p>
            When enabled, Google Analytics measures page visits, device and
            browser information, approximate location, and interactions such as
            quote requests and booking-link clicks. It uses first-party
            analytics cookies. Names, email addresses, and the text entered in
            the inquiry form are not included in the site&apos;s custom
            analytics events.
          </p>
          <p>
            Analytics are enabled by default when configured. You can turn them
            off below. This site also keeps analytics off when your browser
            sends a Global Privacy Control signal. Turning them off stops this
            site&apos;s analytics and removes its accessible Google Analytics
            cookies; it does not delete data already processed by Google.
          </p>
          <AnalyticsPreferences />
          <p>
            See{" "}
            <a href="https://policies.google.com/privacy">
              Google&apos;s privacy policy
            </a>{" "}
            for information about its processing.
          </p>
        </section>
        <section>
          <h2>Booking a consultation</h2>
          <p>
            The booking links open Calendly. Information you enter there is
            handled by Calendly and the connected scheduling services to arrange
            your call. See{" "}
            <a href="https://calendly.com/legal/privacy-notice">
              Calendly&apos;s privacy notice
            </a>
            . Clicking a booking link on this site is measured separately from a
            completed booking.
          </p>
        </section>
        <section>
          <h2>Questions about your information</h2>
          <p>
            Inquiries are handled through email. To ask about information you
            have shared, request a correction, or request deletion of inquiry
            messages, email <a href={`mailto:${brand.email}`}>{brand.email}</a>.
            This notice covers {brand.name}&apos; own website; client websites
            have their own information practices.
          </p>
        </section>
      </SectionShell>
    </>
  );
}
