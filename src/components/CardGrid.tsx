import type { ReactNode } from "react";

interface CardGridProps {
  children: ReactNode;
  minWidth?: string;
}

export function CardGrid({ children, minWidth = "260px" }: CardGridProps) {
  return (
    <div
      className="card-grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, ${minWidth}), 1fr))`,
        gap: "1.5rem",
      }}
    >
      {children}
    </div>
  );
}
