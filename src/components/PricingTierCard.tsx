import { CheckList } from "./CheckList";
import { TrackedLink } from "./TrackedLink";
import type { PricingTier } from "@/content/types";

interface PricingTierCardProps {
  tier: PricingTier;
  ctaHref?: string;
  ctaLabel?: string;
  ctaTrack?: string;
}

export function PricingTierCard({
  tier,
  ctaHref = "/contact",
  ctaLabel = "Request a quote",
  ctaTrack,
}: PricingTierCardProps) {
  const isFeatured = !!tier.featured;
  const track =
    ctaTrack ?? `pricing_tier_${tier.name.toLowerCase().replaceAll(" ", "_")}`;

  return (
    <article className={`pricing-tier-v2${isFeatured ? " is-featured" : ""}`}>
      {tier.featuredLabel && (
        <span className="pricing-tier-v2__ribbon">{tier.featuredLabel}</span>
      )}

      <header className="pricing-tier-v2__header">
        <h3 className="pricing-tier-v2__name">{tier.name}</h3>
        <div className="pricing-tier-v2__price-row">
          <span className="pricing-tier-v2__from">from</span>
          <span className="pricing-tier-v2__price">{tier.price}</span>
        </div>
        {tier.bestFor && <p className="pricing-tier-v2__fit">{tier.bestFor}</p>}
      </header>

      <p className="pricing-tier-v2__desc">{tier.description}</p>

      <div className="pricing-tier-v2__divider" aria-hidden />

      <p className="pricing-tier-v2__list-label">What&apos;s included</p>
      <CheckList
        items={tier.includes}
        containerStyle={{ marginTop: "0.5rem" }}
        itemStyle={{ fontSize: "0.875rem" }}
        checkStyle={{ marginTop: "1px" }}
      />

      <TrackedLink
        href={ctaHref}
        label={track}
        className={`${isFeatured ? "btn-primary" : "btn-secondary"} pricing-tier-v2__cta`}
      >
        {ctaLabel}
      </TrackedLink>
    </article>
  );
}
