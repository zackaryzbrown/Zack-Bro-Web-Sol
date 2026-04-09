export function TrustStrip() {
  const items = [
    "Direct communication, no middlemen",
    "Clear pricing from $500+",
    "Based in Colorado",
    "Ongoing website care after launch",
  ];

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
        {items.map((item) => (
          <div key={item} className="trust-strip-item">
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
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
