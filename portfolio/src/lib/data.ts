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
    url: "mailto:dhyanesh006@gmail.com",
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
    title: "Bentley Certificate 1",
    issuer: "Bentley",
    date: "2024",
    link: "/images/certificates/Bentley 1 Dhyanesh .pdf",
  },
  {
    id: "cert-2",
    title: "Bentley Certificate 2",
    issuer: "Bentley",
    date: "2024",
    link: "/images/certificates/Bentley 2 Dhyanesh .pdf",
  },
  {
    id: "cert-3",
    title: "Bentley Certificate 3",
    issuer: "Bentley",
    date: "2024",
    link: "/images/certificates/Bentley 3 Dhyanesh .pdf",
  },
  {
    id: "cert-4",
    title: "Celonis Certificate 1",
    issuer: "Celonis",
    date: "2024",
    link: "/images/certificates/Celonis 1 Dhyanesh .pdf",
  },
  {
    id: "cert-5",
    title: "Celonis Certificate 2",
    issuer: "Celonis",
    date: "2024",
    link: "/images/certificates/Celonis 2 Dhyanesh .pdf",
  },
  {
    id: "cert-6",
    title: "MongoDB Certificate",
    issuer: "MongoDB",
    date: "2024",
    link: "/images/certificates/dhyanesh mongo certificate.pdf",
  },
  {
    id: "cert-7",
    title: "MongoDB Certificate 2",
    issuer: "MongoDB",
    date: "2024",
    link: "/images/certificates/dhyanesh Mongodb 2 .pdf",
  },
  {
    id: "cert-8",
    title: "MATLAB Certificate",
    issuer: "MathWorks",
    date: "2024",
    link: "/images/certificates/Mathwork 1 Dhyanesh .pdf",
  },
  {
    id: "cert-9",
    title: "Microsoft Certificate",
    issuer: "Microsoft",
    date: "2024",
    link: "/images/certificates/Microsoft Dhyanesh .pdf",
  },
  {
    id: "cert-10",
    title: "MongoDB Certificate 1",
    issuer: "MongoDB",
    date: "2024",
    link: "/images/certificates/Mongodb 1 dhyanesh.pdf",
  },
  {
    id: "cert-11",
    title: "MongoDB Certificate 2",
    issuer: "MongoDB",
    date: "2024",
    link: "/images/certificates/Mongodb 2 Dhyanesh .pdf",
  },
  {
    id: "cert-12",
    title: "MongoDB Certificate 3",
    issuer: "MongoDB",
    date: "2024",
    link: "/images/certificates/Mongodb 3 Dhyanesh .pdf",
  },
  {
    id: "cert-13",
    title: "Wadhwani Foundation Certificate 1",
    issuer: "Wadhwani Foundation",
    date: "2024",
    link: "/images/certificates/Wadhwani Foundation Certificate 1 Dhyanesh .pdf",
  },
  {
    id: "cert-14",
    title: "Wadhwani Foundation Certificate 2",
    issuer: "Wadhwani Foundation",
    date: "2024",
    link: "/images/certificates/Wadhwani 2 Dhyanesh .pdf",
  },
  {
    id: "cert-15",
    title: "General Certificate",
    issuer: "Professional Development",
    date: "2024",
    link: "/images/certificates/Dhyanesh.pdf",
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
