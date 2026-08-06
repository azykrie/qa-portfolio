import type { LucideIcon } from "lucide-react";

type JobStatus = "running" | "pass";
type ProjectStatus = "PASS" | "COVERED";
type BadgeStatus = ProjectStatus | JobStatus;
type TerminalLineType = "cmd" | "info" | "pass" | "summary";

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface PipelineJob {
  build: string;
  company: string;
  role: string;
  period: string;
  status: JobStatus;
  points: string[];
}

export interface Project {
  title: string;
  status: ProjectStatus;
  desc: string;
  tags: string[];
  link: string;
}

export interface TerminalLine {
  text: string;
  type: TerminalLineType;
}

export interface StatusBadgeProps {
  status: BadgeStatus;
}

export interface SectionEyebrowProps {
  icon: LucideIcon;
  children: React.ReactNode;
}