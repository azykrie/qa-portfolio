import React from "react";
import { CheckCircle2, Github, FlaskConical, Code2 } from "lucide-react";
import type { Profile } from "../types";

const COLORS = {
  violet: "#7C5CFC",
  violetDark: "#5B3FE0",
  violetTint: "#F1EEFF",
  pass: "#00B37E",
  inkSoft: "#4B4A63",
  line: "#E7E4F4",
} as const;

interface SkillsProps {
  profile: Profile;
  skillsManual: string[];
  skillsAuto: string[];
  tools: string[];
}

export function Skills({ profile, skillsManual, skillsAuto, tools }: SkillsProps) {
  return (
    <section id="skills" className="px-6 md:px-12 pb-20 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", color: COLORS.violet, textTransform: "uppercase" }}>
          Test suite: skills
        </span>
      </div>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(24px,4vw,32px)", marginBottom: "28px" }}>
        Every skill here has passed QA
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: "16px", padding: "22px" }}>
          <div className="flex items-center gap-2 mb-4">
            <FlaskConical size={17} style={{ color: COLORS.pass }} />
            <span style={{ fontWeight: 700, fontSize: "15px" }}>Manual testing</span>
          </div>
          <div className="flex flex-col gap-3">
            {skillsManual.map((s, i) => (
              <div key={i} className="flex items-center gap-2" style={{ fontSize: "14px" }}>
                <CheckCircle2 size={16} style={{ color: COLORS.pass, flexShrink: 0 }} />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ border: `1px solid ${COLORS.line}`, borderRadius: "16px", padding: "22px" }}>
          <div className="flex items-center gap-2 mb-4">
            <Code2 size={17} style={{ color: COLORS.violet }} />
            <span style={{ fontWeight: 700, fontSize: "15px" }}>Automation testing</span>
          </div>
          <div className="flex flex-col gap-3">
            {skillsAuto.map((s, i) => (
              <div key={i} className="flex items-center gap-2" style={{ fontSize: "14px" }}>
                <CheckCircle2 size={16} style={{ color: COLORS.violet, flexShrink: 0 }} />
                <span>{s}</span>
              </div>
            ))}
            <a
              href={`https://${profile.github}`}
              style={{
                marginTop: "6px", display: "inline-flex", alignItems: "center", gap: "6px",
                fontFamily: "'JetBrains Mono', monospace", fontSize: "12px",
                color: COLORS.violetDark, textDecoration: "none",
              }}
            >
              <Github size={14} /> Automation scripts pushed to GitHub →
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        {tools.map((t, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              background: "#fff",
              border: `1px solid ${COLORS.line}`,
              padding: "6px 12px",
              borderRadius: "8px",
              color: COLORS.inkSoft,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}