import type {
  Project,
  Experience,
  Certificate,
  Skill,
  CounterStat,
  SocialLink,
  NavItem,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero", icon: "home" },
  { label: "About", href: "#about", icon: "person" },
  { label: "Skills", href: "#skills", icon: "code" },
  { label: "Projects", href: "#projects", icon: "folder_open" },
  { label: "Experience", href: "#experience", icon: "work" },
  { label: "GitHub", href: "#github", icon: "terminal" },
  { label: "Certificates", href: "#certificates", icon: "school" },
  { label: "Contact", href: "#contact", icon: "mail" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Dhyanesh006",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dhyanesh-v-741738274",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:dhyanesh@example.com",
    icon: "mail",
  },
];

export const TYPING_TEXTS = [
  "Computer Science Student",
  "Full Stack Developer",
  "Cybersecurity Enthusiast",
  "Networking & Cloud Learner",
];

export const COUNTER_STATS: CounterStat[] = [
  { label: "Years Learning", value: 4, suffix: "+", icon: "calendar" },
  { label: "Projects Built", value: 2, suffix: "+", icon: "code" },
  { label: "Internships", value: 3, suffix: "", icon: "briefcase" },
  { label: "GitHub Contributions", value: 500, suffix: "+", icon: "git-commit" },
];

export const SKILLS: Skill[] = [
  { name: "Java", icon: "coffee", level: 50, category: "programming" },
  { name: "Python", icon: "code", level: 45, category: "programming" },
  { name: "JavaScript", icon: "braces", level: 45, category: "programming" },
  { name: "TypeScript", icon: "file-code", level: 40, category: "programming" },
  { name: "HTML", icon: "file-code", level: 55, category: "frontend" },
  { name: "CSS", icon: "palette", level: 50, category: "frontend" },
  { name: "Tailwind CSS", icon: "wind", level: 45, category: "frontend" },
  { name: "React", icon: "atom", level: 40, category: "frontend" },
  { name: "Next.js", icon: "triangle", level: 35, category: "frontend" },
  { name: "Spring Boot", icon: "leaf", level: 45, category: "backend" },
  { name: "REST APIs", icon: "globe", level: 45, category: "backend" },
  { name: "Node.js", icon: "server", level: 35, category: "backend" },
  { name: "MySQL", icon: "database", level: 45, category: "database" },
  { name: "MongoDB", icon: "leaf", level: 30, category: "database" },
  { name: "Git", icon: "git-branch", level: 50, category: "tools" },
  { name: "GitHub", icon: "github", level: 50, category: "tools" },
  { name: "VS Code", icon: "code", level: 55, category: "tools" },
  { name: "Docker", icon: "container", level: 30, category: "tools" },
  { name: "Linux", icon: "terminal", level: 45, category: "tools" },
  { name: "Power BI", icon: "bar-chart", level: 35, category: "tools" },
  { name: "Networking", icon: "network", level: 40, category: "networking" },
  { name: "Cloud (AWS)", icon: "cloud", level: 30, category: "networking" },
  { name: "Cybersecurity", icon: "shield", level: 40, category: "cybersecurity" },
  { name: "Ethical Hacking", icon: "bug", level: 35, category: "cybersecurity" },
];

export const PROJECTS: Project[] = [
  {
    id: "rental-hub",
    title: "Rental Hub",
    description:
      "A full-stack property rental management platform for landlords, tenants, and service providers.",
    longDescription:
      "Rental Hub is a comprehensive monorepo-based property management system that streamlines the entire rental lifecycle — from listing properties and processing tenant applications to managing maintenance requests and legal agreements. It features role-based dashboards for landlords, tenants, maintenance providers, and legal professionals, all powered by a NestJS API with Prisma ORM and real-time capabilities.",
    tech: [
      "TypeScript",
      "Next.js 15",
      "React 19",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Tailwind CSS",
      "pnpm Workspaces",
      "Turborepo",
    ],
    github: "https://github.com/Dhyanesh006/Rental_Hub",
    featured: true,
  },
  {
    id: "pcstore",
    title: "PCStore",
    description:
      "A full-featured e-commerce platform for PC parts with authentication, shopping cart, and order management.",
    longDescription:
      "Built a complete PC parts store using Spring Boot with user registration and authentication, product browsing, shopping cart functionality, order history tracking, and profile management. Supports both H2 in-memory and MySQL databases, featuring animated UI popups, duplicate registration detection, and comprehensive database management scripts.",
    tech: [
      "Java",
      "Spring Boot",
      "MySQL",
      "H2 Database",
      "Thymeleaf",
      "Maven",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/Dhyanesh006/pcstore",
    featured: true,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "data-analytics",
    title: "Data Analytics Intern",
    company: "Tech Solutions Inc.",
    period: "2024",
    description: [
      "Analyzed large datasets using Python and Power BI to generate actionable insights",
      "Created interactive dashboards and visualizations for stakeholder reporting",
      "Automated data cleaning pipelines reducing manual processing time by 40%",
    ],
    tags: ["Python", "Power BI", "SQL", "Data Analysis"],
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking Intern",
    company: "CyberSec Labs",
    period: "2024",
    description: [
      "Conducted penetration testing and vulnerability assessments on client networks",
      "Documented security findings and provided remediation recommendations",
      "Performed network traffic analysis using Wireshark and Nmap",
    ],
    tags: ["Penetration Testing", "Nmap", "Wireshark", "Security Analysis"],
  },
  {
    id: "fullstack-dev",
    title: "Full Stack Development Intern",
    company: "Digital Innovations",
    period: "2023",
    description: [
      "Developed RESTful APIs using Spring Boot and MySQL for enterprise applications",
      "Built responsive front-end interfaces using React and Bootstrap",
      "Participated in agile development cycles and code reviews",
    ],
    tags: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-1",
    title: "Ethical Hacking Essentials",
    issuer: "EC-Council",
    date: "2024",
    link: "#",
  },
  {
    id: "cert-2",
    title: "Java Programming Certification",
    issuer: "Oracle Academy",
    date: "2023",
    link: "#",
  },
  {
    id: "cert-3",
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    link: "#",
  },
  {
    id: "cert-4",
    title: "Data Analytics with Python",
    issuer: "IBM Skills Network",
    date: "2024",
    link: "#",
  },
  {
    id: "cert-5",
    title: "Cybersecurity Fundamentals",
    issuer: "Cisco Networking Academy",
    date: "2023",
    link: "#",
  },
];

export const SKILL_CATEGORIES = [
  { key: "programming", label: "Programming" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "tools", label: "Tools" },
  { key: "networking", label: "Networking & Cloud" },
  { key: "cybersecurity", label: "Cybersecurity" },
] as const;

export const GITHUB_USERNAME = "Dhyanesh006";
