import type { LucideIcon } from "lucide-react";

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface Project {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  problem: string;
  architecture: string;
  dataset?: string;
  models?: string;
  results?: string;
  contributions: string[];
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  accent: string;
}

export interface ResearchTopic {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface Skill {
  name: string;
  level?: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: string;
  abstract: string;
  methodology: string;
  results: string;
  futureWork: string;
  tech: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
}

export interface GitHubRepo {
  name: string;
  url: string;
  stars: number;
  language: string | null;
  description: string | null;
  updatedAt: string;
}

export interface GitHubEvent {
  id: string;
  type: string;
  repo: string;
  createdAt: string;
}

export interface GitHubAnalytics {
  username: string;
  avatarUrl: string;
  profileUrl: string;
  followers: number;
  publicRepos: number;
  totalStars: number;
  languages: Array<{ name: string; percentage: number; color: string }>;
  topRepos: GitHubRepo[];
  recentActivity: GitHubEvent[];
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}
