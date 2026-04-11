import type { ReactNode } from "react";

interface SectionShellProps {
  children: ReactNode;
  variant?: "default" | "alt";
  narrow?: boolean;
  className?: string;
}

export function SectionShell({
  children,
  variant = "default",
  narrow = false,
  className = "",
}: SectionShellProps) {
  return (
    <section
      className={`${variant === "alt" ? "section-alt" : "section"} ${className}`}
    >
      <div
        className="container"
        style={narrow ? { maxWidth: "720px" } : undefined}
      >
        {children}
      </div>
    </section>
  );
}
