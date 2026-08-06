import type { Stat } from "../types";

interface StatsProps {
  stats: Stat[];
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="px-6 md:px-12 pb-16 max-w-5xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            style={{ background: "#F1EEFF", borderRadius: "14px", padding: "20px" }}
          >
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "28px", fontWeight: 700, color: "#5B3FE0" }}>
              {s.value}
            </div>
            <div style={{ fontSize: "13px", color: "#4B4A63", marginTop: "4px" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}