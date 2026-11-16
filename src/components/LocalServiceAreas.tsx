import { serviceCities } from "@/content/site";
import { industries } from "@/content/site";

/** The local service area, presented for business owners comparing options. */
export function LocalServiceAreas() {
  return (
    <div className="local-service-areas">
      <div className="local-service-areas__cities">
        <p className="section-label">Service Areas</p>
        <h2 className="local-service-areas__heading">
          Based in Erie. Built for nearby businesses.
        </h2>
        <p className="local-service-areas__intro">
          Web design for small businesses within about 25 miles of Erie,
          including Lafayette, Louisville, Broomfield, Boulder, and Longmont.
          Local meetings and remote collaboration are available.
        </p>
        <ul className="local-service-areas__city-list">
          {serviceCities.map((city) => (
            <li key={city}>{city}</li>
          ))}
          <li className="local-service-areas__city-list--more">
            &amp; surrounding areas
          </li>
        </ul>
      </div>

      <div className="local-service-areas__industries">
        <p className="section-label">Industries Served</p>
        <ul className="local-service-areas__industry-list">
          {industries.map((industry) => (
            <li key={industry}>{industry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
