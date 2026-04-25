import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// iOS home-screen icon — larger surface, slightly more presence.
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#2D6A4F",
        color: "#FAFAF7",
        fontFamily: "Georgia, serif",
        fontSize: 132,
        fontWeight: 600,
        lineHeight: 1,
        letterSpacing: "0.02em",
        paddingBottom: 10,
      }}
    >
      Z
    </div>,
    { ...size },
  );
}
