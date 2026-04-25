import type { CarePlan } from "@/content/types";

interface CarePlanCardProps {
  plan: CarePlan;
}

export function CarePlanCard({ plan }: CarePlanCardProps) {
  const isHostingOnly = plan.name === "Managed Hosting";

  return (
    <article
      className={`card care-plan-card${plan.featured ? " care-plan-featured" : ""}`}
    >
      {plan.featuredLabel && (
        <p className="care-plan-badge">{plan.featuredLabel}</p>
      )}
      <h3>{plan.name}</h3>
      <div className="care-plan-price-wrap">
        <p className="care-plan-price">{plan.price}</p>
        <span>{plan.period}</span>
      </div>
      {plan.description && (
        <p className="care-plan-description">{plan.description}</p>
      )}

      {isHostingOnly && (
        <p className="care-plan-boundary">
          Hosting-only plan. No ongoing content, design, or feature work.
        </p>
      )}

      <p className="care-plan-list-label">Includes</p>
      <ul className="care-plan-list">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      {plan.exclusions && plan.exclusions.length > 0 && (
        <details className="care-plan-exclusions">
          <summary className="care-plan-exclusions-summary">
            What&apos;s not included
          </summary>
          <p className="care-plan-exclusions-copy">
            {plan.exclusions.join(", ")}. These can be added through Website
            Care or one-time scoped updates.
          </p>
        </details>
      )}
    </article>
  );
}
