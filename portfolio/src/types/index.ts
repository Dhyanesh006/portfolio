export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: SkillCategory;
}

export type SkillCategory =
  | "programming"
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "networking"
  | "cybersecurity";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
  image?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  link?: string;
}

export interface GitHubData {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface CounterStat {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  date: string;
  description: string;
  icon: string;
}
