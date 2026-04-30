import { serviceCities } from "@/content/site";
import { industries } from "@/content/site";

/**
 * Local-SEO block: surfaces every (city × industry) intent in plain text so
 * Google can crawl it, but presents it as a tasteful editorial grid rather
 * than a keyword-stuffed wall. Real text, real links, no cloaking.
 */
export function LocalServiceAreas() {
  return (
    <div className="local-service-areas">
      <div className="local-service-areas__cities">
        <p className="section-label">Service Areas</p>
        <h2 className="local-service-areas__heading">
          Built for Colorado service businesses.
        </h2>
        <p className="local-service-areas__intro">
          Working with local businesses across the Front Range and beyond.
          Remote-friendly, in-person available when it helps.
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
