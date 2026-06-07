import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MAW Labs — AI-Native Engineering Company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "200px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #3b82f6, #f59e0b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "22px",
            }}
          >
            M
          </div>
          <div style={{ display: "flex", gap: "6px", fontSize: "28px", fontWeight: "600" }}>
            <span style={{ color: "#ffffff" }}>MAW</span>
            <span style={{ color: "#60a5fa" }}>Labs</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "900px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: "800",
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            We build software
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: "800",
              lineHeight: 1.1,
              letterSpacing: "-1px",
              background: "linear-gradient(90deg, #60a5fa, #fbbf24)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            that thinks.
          </div>
          <div style={{ fontSize: "24px", color: "#a1a1aa", marginTop: "8px", lineHeight: 1.4, maxWidth: "700px" }}>
            AI automation · Custom software · Cybersecurity · Cloud · Data engineering
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e" }} />
            <span style={{ color: "#71717a", fontSize: "18px" }}>mawlabs.ai</span>
          </div>
          <div
            style={{
              background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
              color: "white",
              padding: "12px 28px",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Free AI Audit →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
