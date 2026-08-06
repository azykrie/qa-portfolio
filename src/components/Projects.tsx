import React from "react";
import { Bug, ArrowUpRight } from "lucide-react";
import type { Project } from "../types";

const COLORS = {
  violet: "#7C5CFC",
  violetDark: "#5B3FE0",
  violetTint: "#F1EEFF",
  ink: "#16162A",
  inkSoft: "#4B4A63",
  line: "#E7E4F4",
} as const;

interface ProjectsProps {
  projects: Project[];
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { bg: string; fg: string; label: string }> = {
    PASS: { bg: "#DFF7EE", fg: "#00B37E", label: "PASS" },
    COVERED: { bg: "#F1EEFF", fg: "#5B3FE0", label: "COVERED" },
    RUNNING: { bg: "#FFF3DC", fg: "#8A5C00", label: "RUNNING" },
    pass: { bg: "#DFF7EE", fg: "#00B37E", label: "PASS" },
  };
  const s = map[status] || map.PASS;
  return (
    <span
      style={{
        background: s.bg,
        color: s.fg,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "0.06em",
        padding: "4px 10px",
        borderRadius: "999px",
      }}
    >
      {s.label}
    </span>
  );
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="px-6 md:px-12 pb-20 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", color: COLORS.violet, textTransform: "uppercase" }}>
          Test cases: projects
        </span>
      </div>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(24px,4vw,32px)", marginBottom: "28px" }}>
        Projects that have passed testing
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            className="card-hover"
            style={{
              display: "block", border: `1px solid ${COLORS.line}`, borderRadius: "16px",
              padding: "20px", background: "#fff", textDecoration: "none", color: "inherit",
              transition: "transform .18s ease, box-shadow .18s ease, border-color .18s ease",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <StatusBadge status={p.status} />
              <ArrowUpRight size={16} style={{ color: COLORS.inkSoft }} />
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", margin: "0 0 8px" }}>
              {p.title}
            </h3>
            <p style={{ fontSize: "13.5px", color: COLORS.inkSoft, lineHeight: 1.6, margin: "0 0 14px" }}>
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t, j) => (
                <span
                  key={j}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: "11px",
                    background: COLORS.violetTint, color: COLORS.violetDark,
                    padding: "3px 8px", borderRadius: "6px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}