import type { FeatureItem } from "@/content/types";
import { FadeIn } from "./FadeIn";

interface FeatureGridProps {
  items: FeatureItem[];
  minWidth?: string;
  variant?: "plain" | "card";
}

export function FeatureGrid({
  items,
  minWidth = "280px",
  variant = "plain",
}: FeatureGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, ${minWidth}), 1fr))`,
        gap: variant === "card" ? "1.5rem" : "2rem",
      }}
    >
      {items.map((item, i) => (
        <FadeIn key={item.title} delay={i * 80}>
          <div
            className={variant === "card" ? "card" : undefined}
            style={variant === "card" ? { height: "100%" } : undefined}
          >
            <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.5rem" }}>
              {item.title}
            </h3>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
              {item.text}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
