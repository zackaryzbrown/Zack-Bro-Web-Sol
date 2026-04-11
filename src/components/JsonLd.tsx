import { brand } from "@/content/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.name,
    url: brand.url,
    email: brand.email,
    description: brand.description,
    founder: {
      "@type": "Person",
      name: brand.founder,
    },
    areaServed: [
      {
        "@type": "State",
        name: "Colorado",
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    serviceType: [
      "Web Design",
      "Web Development",
      "Website Redesign",
      "Small Business Website",
    ],
    priceRange: "$500 - $3,000+",
    address: {
      "@type": "PostalAddress",
      addressRegion: "CO",
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
