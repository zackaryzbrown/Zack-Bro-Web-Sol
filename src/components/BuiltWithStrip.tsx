/**
 * BuiltWithStrip - small, restrained credibility band.
 *
 * Renders a single line of stack/tool wordmarks. No logos, no images -
 * just clean type that signals "this person actually builds with real tools"
 * without breaking the editorial aesthetic.
 */
const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "WordPress",
  "AWS",
  "Tailwind",
  "Stripe",
];

export function BuiltWithStrip() {
  return (
    <section className="builtwith-strip" aria-label="Tools and platforms">
      <div className="container builtwith-strip__inner">
        <span className="builtwith-strip__label">Built with</span>
        <ul className="builtwith-strip__list">
          {STACK.map((tool) => (
            <li key={tool} className="builtwith-strip__item">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
