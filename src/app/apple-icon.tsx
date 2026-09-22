import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#142b56",
        }}
      >
        <svg width="116" height="116" viewBox="0 0 48 48" fill="none">
          <path d="M4 32 Q24 6 44 32" stroke="#eef4fb" strokeWidth="3.4" strokeLinecap="round" />
          <line x1="4" y1="34.5" x2="44" y2="34.5" stroke="#6f85ab" strokeWidth="3.4" strokeLinecap="round" />
          <circle cx="24" cy="18.7" r="4.2" fill="#f0b429" />
        </svg>
      </div>
    ),
    size
  );
}
