import type { PipelineJob } from "../types";

const COLORS = {
  violet: "#7C5CFC",
  passTint: "#DFF7EE",
  pass: "#00B37E",
  warnTint: "#FFF3DC",
  warn: "#FFB020",
  inkSoft: "#4B4A63",
  line: "#E7E4F4",
  bg: "#FCFBF7",
} as const;

interface ExperienceProps {
  jobs: PipelineJob[];
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { bg: string; fg: string; label: string }> = {
    PASS: { bg: COLORS.passTint, fg: COLORS.pass, label: "PASS" },
    COVERED: { bg: "#F1EEFF", fg: "#5B3FE0", label: "COVERED" },
    running: { bg: COLORS.warnTint, fg: "#8A5C00", label: "RUNNING" },
    pass: { bg: COLORS.passTint, fg: COLORS.pass, label: "PASS" },
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

export function Experience({ jobs }: ExperienceProps) {
  return (
    <section id="experience" className="px-6 md:px-12 pb-20 max-w-5xl mx-auto" style={{ scrollMarginTop: "73px" }}>
      <div className="flex items-center gap-2 mb-4">
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", color: COLORS.violet, textTransform: "uppercase" }}>
          Pipeline: work experience
        </span>
      </div>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(24px,4vw,32px)", marginBottom: "28px" }}>
        Career build history
      </h2>

      <div style={{ position: "relative", paddingLeft: "28px" }}>
        <div style={{ position: "absolute", left: "9px", top: "8px", bottom: "8px", width: "2px", background: COLORS.line }} />
        {jobs.map((job, i) => (
          <div key={i} style={{ position: "relative", marginBottom: i === jobs.length - 1 ? 0 : "32px" }}>
            <div
              style={{
                position: "absolute", left: "-28px", top: "4px",
                width: "20px", height: "20px", borderRadius: "50%",
                background: job.status === "running" ? COLORS.warn : COLORS.pass,
                border: `3px solid ${COLORS.bg}`,
              }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "6px" }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", fontWeight: 700, color: COLORS.inkSoft }}>
                {job.build}
              </span>
              <StatusBadge status={job.status} />
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "18px", margin: "0 0 2px" }}>
              {job.role} · {job.company}
            </h3>
            <p style={{ fontSize: "13px", color: COLORS.inkSoft, margin: "0 0 10px" }}>{job.period}</p>
            <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "14px", color: COLORS.inkSoft, lineHeight: 1.7 }}>
              {job.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}