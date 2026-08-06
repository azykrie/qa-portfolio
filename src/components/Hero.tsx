import { Mail, Github, Linkedin } from "lucide-react";
import type { Profile } from "../types";

const COLORS = {
  bg: "#FCFBF7",
  ink: "#16162A",
  violet: "#7C5CFC",
  violetDark: "#5B3FE0",
  violetTint: "#F1EEFF",
  pass: "#00B37E",
  fail: "#FF5A5F",
  warn: "#FFB020",
} as const;

interface HeroProps {
  profile: Profile;
  typedLines: string[];
  activeLine: number;
  cursorOn: boolean;
}

export function Hero({ profile, typedLines, activeLine, cursorOn }: HeroProps) {
  return (
    <section className="px-6 md:px-12 pt-14 pb-16 md:pt-20 md:pb-24 max-w-5xl mx-auto">
        <div
          style={{
            background: COLORS.ink,
            borderRadius: "16px",
            padding: "18px 16px",
            boxShadow: "0 20px 50px -20px #16162a55",
          }}
        >
        <div className="flex items-center gap-2 mb-4">
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: COLORS.fail, display: "inline-block" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: COLORS.warn, display: "inline-block" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: COLORS.pass, display: "inline-block" }} />
          <span style={{ marginLeft: 10, fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#7A7896" }}>
            career-test-runner
          </span>
        </div>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(10.5px, 2.9vw, 13px)",
            lineHeight: 1.9,
            minHeight: "180px",
            overflowX: "auto",
          }}
        >
          {typedLines.map((line, idx) => {
            if (!line) return null;
            const isActiveTyping = idx === activeLine;
            let color = "#00B37E";
            if (idx === 0) color = "#B9B4FF";
            else if (idx === 1) color = "#9C9AB8";
            else if (idx >= 6) color = "#FFB020";
            return (
              <div key={idx} style={{ color, whiteSpace: "pre" }}>
                {line}
                {isActiveTyping && (
                  <span style={{ color: "#fff", opacity: cursorOn ? 1 : 0 }}>▍</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: "28px" }}>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 6vw, 56px)",
            lineHeight: 1.05,
            margin: "0 0 12px",
          }}
        >
          {profile.name}
        </h1>
        <p style={{ fontSize: "18px", fontWeight: 600, color: COLORS.violet, margin: "0 0 14px" }}>
          {profile.role}
        </p>
        <p style={{ fontSize: "16px", color: "#4B4A63", maxWidth: "560px", lineHeight: 1.6, margin: "0 0 24px" }}>
          {profile.tagline}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            style={{
              background: COLORS.violet,
              color: "#fff",
              textDecoration: "none",
              padding: "11px 20px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Mail size={16} /> Get in touch
          </a>
          <a
            href={`https://${profile.github}`}
            style={{
              border: "1.5px solid #E7E4F4",
              color: COLORS.ink,
              textDecoration: "none",
              padding: "11px 20px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={`https://${profile.linkedin}`}
            style={{
              border: "1.5px solid #E7E4F4",
              color: COLORS.ink,
              textDecoration: "none",
              padding: "11px 20px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}