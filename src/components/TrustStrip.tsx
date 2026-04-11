import { trustStripItems } from "@/content/site";

export function TrustStrip() {
  return (
    <div
      style={{
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
        padding: "1.25rem 1.5rem",
        background: "var(--bg)",
      }}
    >
      <div className="container trust-strip-grid">
        {trustStripItems.map((item) => (
          <div key={item.text} className="trust-strip-item">
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--accent)",
                flexShrink: 0,
                opacity: 0.7,
              }}
            />
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
