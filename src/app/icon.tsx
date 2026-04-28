import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Browser-tab icon: serif "Z" on a sage circle, mirroring the
// ZB monogram chip on the About page for brand cohesion.
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#2D6A4F",
        borderRadius: "8px",
        color: "#FAFAF7",
        fontFamily: "Georgia, serif",
        fontSize: 24,
        fontWeight: 600,
        lineHeight: 1,
        letterSpacing: "0.02em",
        // Optical centering - pull the Z up a hair so it sits true
        paddingBottom: 2,
      }}
    >
      Z
    </div>,
    { ...size },
  );
}
