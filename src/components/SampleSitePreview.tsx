export function SampleSitePreview() {
  return (
    <div
      style={{
        background: "#FFFFFF",
        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
        fontSize: "10px",
        lineHeight: 1.4,
        color: "#1A1A1A",
        minHeight: "320px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Nav */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 16px",
          borderBottom: "1px solid #F0EDE8",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "3px",
              background: "#3D7B4F",
            }}
          />
          <span style={{ fontWeight: 600, fontSize: "9px", letterSpacing: "0.02em" }}>
            GreenScape Pro
          </span>
        </div>
        <div style={{ display: "flex", gap: "10px", fontSize: "7px", color: "#777", fontWeight: 500 }}>
          <span>Services</span>
          <span>Gallery</span>
          <span>About</span>
          <span
            style={{
              background: "#3D7B4F",
              color: "#fff",
              padding: "2px 8px",
              borderRadius: "3px",
              fontSize: "7px",
            }}
          >
            Get a Quote
          </span>
        </div>
      </div>

      {/* Hero area */}
      <div
        style={{
          background: "linear-gradient(135deg, #F7FAF5 0%, #EDF5E8 100%)",
          padding: "24px 16px 20px",
        }}
      >
        <div style={{ maxWidth: "65%" }}>
          <p
            style={{
              fontSize: "6px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#3D7B4F",
              marginBottom: "4px",
            }}
          >
            Professional Landscaping
          </p>
          <p
            style={{
              fontFamily: "var(--font-instrument-serif), Georgia, serif",
              fontSize: "15px",
              lineHeight: 1.15,
              color: "#1A1A1A",
              marginBottom: "6px",
              fontWeight: 400,
            }}
          >
            Your outdoor space, designed and maintained by experts.
          </p>
          <p style={{ fontSize: "7px", color: "#666", lineHeight: 1.5, marginBottom: "10px", maxWidth: "85%" }}>
            Full-service landscaping for homes and businesses. Design, installation, seasonal care, and maintenance.
          </p>
          <div style={{ display: "flex", gap: "6px" }}>
            <span
              style={{
                background: "#3D7B4F",
                color: "#fff",
                padding: "4px 10px",
                borderRadius: "4px",
                fontSize: "7px",
                fontWeight: 500,
              }}
            >
              Free Estimate
            </span>
            <span
              style={{
                border: "1px solid #D0D0C8",
                color: "#444",
                padding: "4px 10px",
                borderRadius: "4px",
                fontSize: "7px",
                fontWeight: 500,
              }}
            >
              Our Work
            </span>
          </div>
        </div>
      </div>

      {/* Service cards */}
      <div
        style={{
          padding: "14px 16px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "8px",
        }}
      >
        {[
          { title: "Design", color: "#E8F0E2" },
          { title: "Installation", color: "#E2ECF0" },
          { title: "Maintenance", color: "#F0EDE2" },
        ].map((s) => (
          <div
            key={s.title}
            style={{
              background: s.color,
              borderRadius: "6px",
              padding: "10px 8px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: "rgba(0,0,0,0.06)",
                margin: "0 auto 4px",
              }}
            />
            <p style={{ fontWeight: 600, fontSize: "7.5px", color: "#333" }}>{s.title}</p>
            <p style={{ fontSize: "6px", color: "#777", marginTop: "2px" }}>Professional service</p>
          </div>
        ))}
      </div>

      {/* Social proof strip */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          padding: "8px 16px 14px",
          fontSize: "6.5px",
          color: "#888",
        }}
      >
        <span>★★★★★ 48 reviews</span>
        <span>·</span>
        <span>Licensed & Insured</span>
        <span>·</span>
        <span>Serving Denver Metro</span>
      </div>
    </div>
  );
}
