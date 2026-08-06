import { Terminal, Menu, X } from "lucide-react";
import type { Profile } from "../types";

interface NavbarProps {
  profile: Profile;
  onNavigate: (id: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Navbar({ profile, onNavigate, mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-5 sticky top-0 z-20">
      <div className="flex items-center gap-2">
        <Terminal size={18} style={{ color: "#7C5CFC" }} />
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "15px" }}>
          {profile.name.split(" ")[0].toLowerCase()}.qa
        </span>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-7" style={{ fontSize: "14px", fontWeight: 500, color: "#4B4A63" }}>
        <button onClick={() => onNavigate("skills")} style={{ color: "inherit", background: "none", border: "none", cursor: "pointer", font: "inherit" }}>Skills</button>
        <button onClick={() => onNavigate("experience")} style={{ color: "inherit", background: "none", border: "none", cursor: "pointer", font: "inherit" }}>Experience</button>
        <button onClick={() => onNavigate("projects")} style={{ color: "inherit", background: "none", border: "none", cursor: "pointer", font: "inherit" }}>Projects</button>
        <button
          onClick={() => onNavigate("contact")}
          style={{
            color: "#7C5CFC",
            background: "none",
            cursor: "pointer",
            font: "inherit",
            border: "1.5px solid #7C5CFC",
            padding: "7px 16px",
            borderRadius: "999px",
          }}
        >
          Get in touch
        </button>
      </div>

      {/* Mobile hamburger button - hidden on desktop */}
      <button
        className="md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
        style={{
          background: "none",
          border: "1.5px solid #E7E4F4",
          borderRadius: "10px",
          padding: "8px",
          cursor: "pointer",
          color: "#16162A",
        }}
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </nav>
  );
}
