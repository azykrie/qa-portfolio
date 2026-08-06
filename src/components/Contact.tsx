import { Send } from "lucide-react";
import type { Profile } from "../types";

const COLORS = {
  violet: "#7C5CFC",
  ink: "#16162A",
  warn: "#FFB020",
  violetTint: "#F1EEFF",
} as const;

interface ContactProps {
  profile: Profile;
}

export function Contact({ profile }: ContactProps) {
  return (
    <section id="contact" className="px-6 md:px-12 pb-20 max-w-5xl mx-auto" style={{ scrollMarginTop: "73px" }}>
      <div style={{ background: COLORS.ink, borderRadius: "20px", padding: "40px 32px", color: "#fff" }}>
        <div className="flex items-center gap-2 mb-3">
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: COLORS.warn, textTransform: "uppercase" }}>
            Submit a new test case
          </span>
        </div>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(24px,4vw,32px)", margin: "0 0 12px" }}>
          Got a QA role that fits?
        </h2>
        <p style={{ color: "#B9B4FF", fontSize: "15px", maxWidth: "480px", marginBottom: "24px", lineHeight: 1.6 }}>
          Send an email and I'll respond as fast as an automated test suite runs.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            style={{
              background: COLORS.violet,
              color: "#fff",
              textDecoration: "none",
              padding: "12px 22px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Send size={16} /> {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}