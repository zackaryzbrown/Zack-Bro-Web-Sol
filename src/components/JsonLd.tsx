import { brand, serviceCities } from "@/content/site";
import { services } from "@/content/home";
import { starterPrice, growthPrice } from "@/content/pricing";

/**
 * JSON-LD graph for the site root. Uses @graph to express multiple linked
 * entities (LocalBusiness + Person + WebSite) which Google understands better
 * than nested re-types and unlocks multiple rich-result paths.
 */
export function JsonLd() {
  const businessId = `${brand.url}#business`;
  const personId = `${brand.url}#person`;
  const websiteId = `${brand.url}#website`;

  const graph = [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": businessId,
      name: brand.name,
      alternateName: brand.shortName,
      url: brand.url,
      email: brand.email,
      description: brand.description,
      image: `${brand.url}/opengraph-image`,
      logo: `${brand.url}/icon`,
      priceRange: `${starterPrice} - ${growthPrice}+`,
      founder: { "@id": personId },
      address: {
        "@type": "PostalAddress",
        addressRegion: "CO",
        addressCountry: "US",
      },
      areaServed: [
        ...serviceCities.map((city) => ({
          "@type": "City",
          name: city,
          containedInPlace: { "@type": "State", name: "Colorado" },
        })),
        { "@type": "State", name: "Colorado" },
        { "@type": "Country", name: "United States" },
      ],
      serviceType: [
        "Web Design",
        "Web Development",
        "Website Redesign",
        "Local SEO",
        "Lead Capture Setup",
        "Website Maintenance",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Website Services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })),
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Sales",
        email: brand.email,
        areaServed: "US",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: brand.founder,
      jobTitle: "Founder & Web Developer",
      worksFor: { "@id": businessId },
      url: `${brand.url}/about`,
      knowsAbout: [
        "Web Design",
        "WordPress Development",
        "React",
        "Next.js",
        "Local SEO",
        "Conversion-focused web design",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: brand.url,
      name: brand.name,
      publisher: { "@id": businessId },
      inLanguage: "en-US",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
