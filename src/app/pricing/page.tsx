import { FadeIn } from "@/components/FadeIn";
import { FAQ } from "@/components/FAQ";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { PricingTierCard } from "@/components/PricingTierCard";
import { SectionShell } from "@/components/SectionShell";
import { SectionIntro } from "@/components/SectionIntro";
import { CarePlanCard } from "@/components/CarePlanCard";
import { createMetadata } from "@/lib/metadata";
import {
  tiers,
  carePlans,
  pricingFactors,
  pricingAnchor,
  wordpressPricingNote,
} from "@/content/pricing";
import { brand } from "@/content/site";
import { pricingFaqItems } from "@/content/faq";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "Transparent custom website pricing from $349 to $1,299+. Three clear tiers, no surprise estimates, optional monthly care plan after launch.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Pricing"
        title="Custom websites, priced honestly."
        subtitle="Three tiers built around what local service businesses actually need. Every project is from pricing, scoped to your goals, and quoted before any work begins."
      />

      {/* Value anchor bar */}
      <SectionShell>
        <FadeIn>
          <div className="pricing-anchor">
            <div className="pricing-anchor__rows">
              {pricingAnchor.comparison.map((row) => (
                <div
                  key={row.label}
                  className={`pricing-anchor__row${row.highlight ? " is-highlight" : ""}`}
                >
                  <span className="pricing-anchor__label">{row.label}</span>
                  <span className="pricing-anchor__value">{row.value}</span>
                </div>
              ))}
            </div>
            <p className="pricing-anchor__note">{pricingAnchor.note}</p>
          </div>
        </FadeIn>
      </SectionShell>

      {/* Tier cards */}
      <SectionShell variant="alt">
        <SectionIntro
          label="Build packages"
          heading="Pick the scope that fits."
          subtext="All three are custom builds - same craft, scaled to your needs and budget. Not sure where you fit? Book a call and I'll point you to the right tier."
        />
        <div className="pricing-tier-v2-grid">
          {tiers.map((tier, i) => {
            const budgetSlug = tier.name.toLowerCase().split(" ")[0];
            return (
              <FadeIn key={tier.name} delay={i * 90}>
                <PricingTierCard
                  tier={tier}
                  ctaHref={`/contact?service=custom-website&budget=${budgetSlug}`}
                />
              </FadeIn>
            );
          })}
        </div>
      </SectionShell>

      {/* WordPress soft note */}
      <SectionShell>
        <FadeIn>
          <aside className="wordpress-note">
            <div className="wordpress-note__rule" aria-hidden />
            <div>
              <h3 className="wordpress-note__heading">
                {wordpressPricingNote.heading}
              </h3>
              <p className="wordpress-note__body">
                {wordpressPricingNote.body}
              </p>
            </div>
          </aside>
        </FadeIn>
      </SectionShell>

      {/* Care plan */}
      <SectionShell variant="alt">
        <div id="care">
          <SectionIntro
            label="After launch"
            heading="Hosting only or active care - your call."
            subtext="Managed Hosting keeps your site online. Website Care adds real post-launch help. Both are optional, month-to-month, cancel anytime."
          />
          <div className="care-plan-grid">
            {carePlans.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 80}>
                <CarePlanCard plan={plan} />
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* What affects pricing */}
      <SectionShell>
        <SectionIntro
          label="What affects pricing"
          heading="Final quotes depend on more than page count."
          subtext="Each project is scoped to your goals. These are the biggest variables that affect total investment."
        />
        <div className="pricing-factors-list">
          {pricingFactors.map((factor, i) => (
            <FadeIn key={factor.title} delay={i * 60}>
              <article className="pricing-factor-row">
                <h3>{factor.title}</h3>
                <p>{factor.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </SectionShell>

      {/* FAQ */}
      <SectionShell variant="alt" narrow>
        <div id="faq">
          <SectionIntro
            label="Questions"
            heading="Pricing FAQ"
            subtext="Straight answers so you can choose your next step with confidence."
          />
          <FadeIn delay={100}>
            <FAQ items={pricingFaqItems} />
          </FadeIn>
        </div>
      </SectionShell>

      <PageCta
        title="Ready to scope your project?"
        description="Tell me what your business needs and I'll send a clear, scoped quote within one business day."
        secondaryHref={brand.bookingUrl}
        secondaryLabel="Book a Free Call"
      />
    </>
  );
}
