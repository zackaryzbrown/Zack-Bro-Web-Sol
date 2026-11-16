import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { TrackedLink } from "@/components/TrackedLink";
import { brand, navLinks, serviceCities } from "@/content/site";

const serviceLinks = [
  { label: "Custom Websites", href: "/services/web-design" },
  { label: "Website Redesigns", href: "/services/website-redesign" },
  {
    label: "Conversion-Focused Pages",
    href: "/services#conversion-focused-pages",
  },
  { label: "Care & Support", href: "/services#website-care-and-support" },
];

const resourceLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/pricing#faq" },
  { label: "Care plans", href: "/pricing#care" },
  { label: "Book a free call", href: brand.bookingUrl, external: true },
  { label: "Find me on Google", href: brand.googleBusinessUrl, external: true },
  {
    label: "Leave a Google review",
    href: brand.googleReviewUrl,
    external: true,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        {/* Top - promise band */}
        <div className="site-footer__promise">
          <div className="site-footer__promise-mark">
            <span className="site-footer__promise-dot" aria-hidden />
            <span className="site-footer__promise-text">
              {brand.responsePromise} · Based in {brand.location}, serving Erie
              and nearby communities
            </span>
          </div>
          <TrackedLink
            href="/contact"
            label="footer_promise_cta"
            className="site-footer__promise-cta"
          >
            Start a project
            <span aria-hidden> →</span>
          </TrackedLink>
        </div>

        {/* Columns */}
        <div className="site-footer__grid">
          {/* Brand */}
          <div className="site-footer__col site-footer__col--brand">
            <Link href="/" className="site-footer__brand">
              <span className="site-footer__brand-mark" aria-hidden>
                Z
              </span>
              <span className="site-footer__brand-name">
                {brand.shortName}
                <span className="site-footer__brand-tagline">
                  {brand.tagline}
                </span>
              </span>
            </Link>
            <p className="site-footer__desc">
              Web design for small businesses in Erie and nearby Front Range
              communities. Custom builds, clear pricing, and optional care.
            </p>
            <a href={`mailto:${brand.email}`} className="site-footer__email">
              {brand.email}
            </a>
            <SocialLinks
              variant="dark"
              ariaLabel="Follow Zackary on social media"
              trackingPrefix="footer_social"
            />
          </div>

          {/* Pages */}
          <div className="site-footer__col">
            <p className="site-footer__heading">Site</p>
            <nav
              className="site-footer__nav"
              aria-label="Footer site navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="site-footer__link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="site-footer__col">
            <p className="site-footer__heading">Services</p>
            <nav
              className="site-footer__nav"
              aria-label="Footer services navigation"
            >
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="site-footer__link"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="site-footer__col">
            <p className="site-footer__heading">Resources</p>
            <nav
              className="site-footer__nav"
              aria-label="Footer resources navigation"
            >
              {resourceLinks.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__link"
                  >
                    {item.label}
                    <span aria-hidden> ↗</span>
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="site-footer__link"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
          </div>
        </div>

        {/* Service areas band - local SEO */}
        <div className="site-footer__areas">
          <p className="site-footer__heading">
            <span aria-hidden className="site-footer__pin">
              ⌖
            </span>{" "}
            Erie &amp; nearby service areas
          </p>
          <ul className="site-footer__cities">
            {serviceCities.map((city) => (
              <li key={city}>{city}</li>
            ))}
            <li className="site-footer__cities-more">
              &amp; surrounding areas
            </li>
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="site-footer__bottom">
          <p className="site-footer__copy">
            &copy; {currentYear} {brand.name}. All rights reserved.
          </p>
          <div className="site-footer__bottom-links">
            <Link href="/privacy" className="site-footer__link-muted">
              Privacy &amp; analytics
            </Link>
            <span className="site-footer__bottom-sep" aria-hidden>
              ·
            </span>
            <Link href="/sitemap.xml" className="site-footer__link-muted">
              Sitemap
            </Link>
            <span className="site-footer__bottom-sep" aria-hidden>
              ·
            </span>
            <Link href="/contact" className="site-footer__link-muted">
              Contact
            </Link>
            <span className="site-footer__bottom-sep" aria-hidden>
              ·
            </span>
            <span className="site-footer__built">
              Built in {brand.location} with care
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
