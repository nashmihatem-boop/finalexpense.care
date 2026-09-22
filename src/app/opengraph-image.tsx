import { ImageResponse } from "next/og";

export const alt = "FinalExpense.care — Final Expense Life Insurance Quotes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Google's CSS2 endpoint always returns the currently-valid woff2 URL for a given family/weight,
// which is more reliable than hardcoding a versioned fonts.gstatic.com path (those change).
async function loadGoogleFont(text: string, weight: 400 | 700): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await fetch(cssUrl, { headers: { "User-Agent": "Mozilla/5.0" } }).then((r) => r.text());
  const match = css.match(/src: url\(([^)]+)\) format\('(?:woff2|truetype|opentype)'\)/);
  if (!match) throw new Error("Could not find font URL in Google Fonts CSS response");
  const fontRes = await fetch(match[1]);
  return fontRes.arrayBuffer();
}

export default async function Image() {
  const HEADLINE = "FinalExpense.care Make sure the cost never lands on them.";
  const BODY = "No medical exam for most applicants Rate locked for life Free quotes in minutes";
  const [interBold, interRegular] = await Promise.all([
    loadGoogleFont(HEADLINE, 700),
    loadGoogleFont(BODY, 400),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundImage: "linear-gradient(135deg, #0b1a38 0%, #142b56 65%, #1d3d73 100%)",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 48 48" fill="none">
            <path d="M4 32 Q24 6 44 32" stroke="#eef4fb" strokeWidth="2.75" strokeLinecap="round" />
            <line x1="4" y1="34.5" x2="44" y2="34.5" stroke="#6f85ab" strokeWidth="2.75" strokeLinecap="round" />
            <circle cx="24" cy="18.7" r="3.4" fill="#f0b429" />
          </svg>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#ffffff" }}>
            FinalExpense<span style={{ color: "#f0b429" }}>.care</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 56,
            maxWidth: 920,
            fontSize: 60,
            lineHeight: 1.12,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          Make sure the cost never lands on them.
        </div>

        <div style={{ display: "flex", marginTop: 32, gap: 28 }}>
          {["No medical exam for most applicants", "Rate locked for life", "Free quotes in minutes"].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  display: "flex",
                  width: 22,
                  height: 22,
                  borderRadius: 999,
                  backgroundColor: "rgba(77,138,106,0.35)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5L6.2 11.5L13 4.5" stroke="#8fd6ae" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ display: "flex", fontSize: 22, color: "#cdd9ec" }}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
      ],
    }
  );
}
