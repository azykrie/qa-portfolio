import type { Profile } from "../types";

const COLORS = {
  line: "#E7E4F4",
  inkSoft: "#4B4A63",
  violet: "#7C5CFC",
} as const;

interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="px-6 md:px-12 py-8 max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-3"
      style={{ borderTop: `1px solid ${COLORS.line}`, fontSize: "13px", color: COLORS.inkSoft }}>
      <span>© {new Date().getFullYear()} {profile.name} · {profile.location}</span>
      <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>build passing ✓</span>
    </footer>
  );
}