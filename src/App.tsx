import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import type { Profile, Stat, PipelineJob, Project } from "./types";

/* ============================================================
   QUICK CUSTOMIZATION GUIDE — search for "EDIT HERE" below
   1. PROFILE      -> name, role, tagline, contact
   2. STATS        -> your experience numbers
   3. SKILLS_MANUAL / SKILLS_AUTO -> your tools & skills
   4. PIPELINE     -> your work experience history
   5. PROJECTS     -> your testing projects/portfolio
   ============================================================ */

/* -------------------- EDIT HERE: 1. PROFILE -------------------- */
const PROFILE: Profile = {
  name: "Dhikri Haikal",
  role: "QA Engineer — Manual & Automation",
  tagline:
    "Finding bugs before the user does. Committed to shipping software with confidence.",
  email: "dhikrihaikal1@gmail.com",
  github: "github.com/azykrie",
  linkedin: "linkedin.com/in/dhyklll",
  location: "Bogor, Indonesia",
};

/* -------------------- EDIT HERE: 2. STATS -------------------- */
const STATS: Stat[] = [
  { label: "Testing focus", value: "Web & Mobile" },
  { label: "Bugs found", value: "50+" },
  { label: "Platforms tested", value: "3+" },
  { label: "Automation tools", value: "3" },
];

/* -------------------- EDIT HERE: 3. SKILLS -------------------- */
const SKILLS_MANUAL: string[] = [
  "Test Case Design",
  "Exploratory Testing",
  "Regression Testing",
  "UAT Facilitation",
  "Bug Reporting & Triage",
  "API Testing (Postman)",
];

const SKILLS_AUTO: string[] = [
  "Selenium WebDriver",
  "Playwright",
  "Cypress",
  "REST Assured",
  "CI/CD (GitHub Actions)",
  "Page Object Model",
];

const TOOLS: string[] = [
  "Jira", "TestRail", "Postman", "Git", "Jenkins",
  "BrowserStack", "SQL", "Docker", "Xray", "Figma",
];

/* -------------------- EDIT HERE: 4. PIPELINE (experience) -------------------- */
const PIPELINE: PipelineJob[] = [
  {
    build: "Build #02 — Current",
    company: "Volunteer / Freelance",
    role: "QA Volunteer — Web & Mobile Testing",
    period: "2024 — Present",
    status: "running",
    points: [
      "Manually tested a friend's website: checked functionality, layout, and broken links across browsers",
      "Beta-tested an iOS app via TestFlight, reporting crashes and bugs to the developer",
      "Wrote clear, easily reproducible bug reports",
    ],
  },
  {
    build: "Build #01",
    company: "[Company Name]", // EDIT HERE: replace with the company you worked at
    role: "Web Developer",
    period: "Jun 2022 — 2023",
    status: "pass",
    points: [
      "Performed manual testing on new features before release to production",
      "Found and reported bugs to the team before they reached users",
      "Built a quality-check habit as part of the development process",
    ],
  },
];

/* -------------------- EDIT HERE: 5. PROJECTS -------------------- */
const PROJECTS: Project[] = [
  {
    title: "Manual Testing — Website Development Project",
    status: "PASS",
    desc: "Tested new features before production deploys while working as a web developer: functionality checks, cross-browser, and responsive layout.",
    tags: ["Manual Testing", "Cross-browser", "Bug Reporting"],
    link: "#",
  },
  {
    title: "Volunteer Testing — Personal Website",
    status: "PASS",
    desc: "Thorough testing of a friend's website: navigation, forms, broken links, and layout across devices.",
    tags: ["Exploratory Testing", "Cross-device"],
    link: "#",
  },
  {
    title: "iOS Beta Testing via TestFlight",
    status: "COVERED",
    desc: "Joined an iOS beta testing program, reporting crashes and bugs via TestFlight ahead of public release.",
    tags: ["TestFlight", "Mobile Testing", "Bug Reporting"],
    link: "#",
  },
];

function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function QAPortfolio() {
  const [typedLines, setTypedLines] = useState<string[]>(() =>
    Array(8).fill("")
  );
  const [activeLine, setActiveLine] = useState<number>(0);
  const [cursorOn, setCursorOn] = useState<boolean>(true);

  useEffect(() => {
    const terminalTexts = [
      "$ npm run test:career",
      "> Loading QA engineer profile...",
      "✓ Manual Testing ..................... PASS",
      "✓ Automation Testing .................. PASS",
      "✓ Attention to Detail ................. PASS",
      "✓ Bug Hunting Instinct ................ PASS",
      "Test Suites: 1 passed, 1 total",
      "Tests: 4 passed, 4 total. Ready to ship",
    ];

    let lineIdx = 0;
    let charIdx = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    function resetTyping() {
      lineIdx = 0;
      charIdx = 0;
      setTypedLines(terminalTexts.map(() => ""));
      setActiveLine(0);
    }

    function typeNextChar() {
      if (lineIdx >= terminalTexts.length) {
        timeoutId = setTimeout(() => {
          resetTyping();
          timeoutId = setTimeout(typeNextChar, 350);
        }, 5000);
        return;
      }
      const fullText = terminalTexts[lineIdx];
      charIdx += 1;
      setActiveLine(lineIdx);
      setTypedLines((prev) => {
        const next = [...prev];
        next[lineIdx] = fullText.slice(0, charIdx);
        return next;
      });

      if (charIdx >= fullText.length) {
        lineIdx += 1;
        charIdx = 0;
        timeoutId = setTimeout(typeNextChar, 260);
      } else {
        timeoutId = setTimeout(typeNextChar, 16);
      }
    }

    timeoutId = setTimeout(typeNextChar, 350);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setCursorOn((c) => !c), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <div
      style={{
        background: "#FCFBF7",
        color: "#16162A",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
      `}</style>

      <Navbar profile={PROFILE} onNavigate={scrollToId} />

      <Hero profile={PROFILE} typedLines={typedLines} activeLine={activeLine} cursorOn={cursorOn} />

      <Stats stats={STATS} />

      <Skills profile={PROFILE} skillsManual={SKILLS_MANUAL} skillsAuto={SKILLS_AUTO} tools={TOOLS} />

      <Experience jobs={PIPELINE} />

      <Projects projects={PROJECTS} />

      <Contact profile={PROFILE} />

      <Footer profile={PROFILE} />
    </div>
  );
}