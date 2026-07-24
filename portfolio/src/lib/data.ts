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
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: "#github" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/dhyanesh-v",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/dhyanesh-v",
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
  { label: "Projects Built", value: 15, suffix: "+", icon: "code" },
  { label: "Internships", value: 3, suffix: "", icon: "briefcase" },
  { label: "GitHub Contributions", value: 500, suffix: "+", icon: "git-commit" },
];

export const SKILLS: Skill[] = [
  { name: "Java", icon: "coffee", level: 85, category: "programming" },
  { name: "Python", icon: "code", level: 80, category: "programming" },
  { name: "JavaScript", icon: "braces", level: 85, category: "programming" },
  { name: "TypeScript", icon: "file-code", level: 75, category: "programming" },
  { name: "HTML", icon: "file-code", level: 90, category: "frontend" },
  { name: "CSS", icon: "palette", level: 85, category: "frontend" },
  { name: "Tailwind CSS", icon: "wind", level: 90, category: "frontend" },
  { name: "React", icon: "atom", level: 80, category: "frontend" },
  { name: "Next.js", icon: "triangle", level: 75, category: "frontend" },
  { name: "Spring Boot", icon: "leaf", level: 80, category: "backend" },
  { name: "REST APIs", icon: "globe", level: 85, category: "backend" },
  { name: "Node.js", icon: "server", level: 70, category: "backend" },
  { name: "MySQL", icon: "database", level: 80, category: "database" },
  { name: "MongoDB", icon: "leaf", level: 70, category: "database" },
  { name: "Git", icon: "git-branch", level: 85, category: "tools" },
  { name: "GitHub", icon: "github", level: 85, category: "tools" },
  { name: "VS Code", icon: "code", level: 90, category: "tools" },
  { name: "Docker", icon: "container", level: 65, category: "tools" },
  { name: "Linux", icon: "terminal", level: 80, category: "tools" },
  { name: "Power BI", icon: "bar-chart", level: 70, category: "tools" },
  { name: "Networking", icon: "network", level: 75, category: "networking" },
  { name: "Cloud (AWS)", icon: "cloud", level: 65, category: "networking" },
  { name: "Cybersecurity", icon: "shield", level: 75, category: "cybersecurity" },
  { name: "Ethical Hacking", icon: "bug", level: 70, category: "cybersecurity" },
];

export const PROJECTS: Project[] = [
  {
    id: "pc-builder",
    title: "PC Builder Website",
    description:
      "A modern PC building platform where users can configure custom computers using compatible components, estimate pricing, manage configurations and browse hardware.",
    longDescription:
      "Built a comprehensive PC building platform that allows users to select compatible components, get real-time price estimates, and manage their custom builds. Features include user authentication, component compatibility checking, shopping cart functionality, and a responsive dashboard for managing saved configurations.",
    tech: ["Java", "Spring Boot", "MySQL", "Bootstrap", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/dhyanesh-v/pc-builder",
    featured: true,
  },
  {
    id: "rental-hub",
    title: "RentalHub",
    description:
      "A rental marketplace where users can browse, list and rent products through a clean and secure platform.",
    longDescription:
      "Developed a full-featured rental marketplace enabling users to list products for rent, browse available items, and complete secure bookings. Implemented user authentication, search and filtering, booking management, and a responsive UI that works seamlessly across devices.",
    tech: ["Java", "Spring Boot", "MySQL", "Bootstrap", "HTML", "CSS"],
    github: "https://github.com/dhyanesh-v/rentalhub",
    featured: true,
  },
  {
    id: "air-quality",
    title: "Air Quality Prediction",
    description:
      "Machine Learning project for predicting air quality using environmental datasets and regression models.",
    longDescription:
      "Developed a machine learning pipeline to predict air quality index using environmental datasets. Implemented multiple regression models, performed feature engineering, data cleaning, and model evaluation to achieve accurate predictions for pollution levels.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/dhyanesh-v/air-quality-prediction",
    featured: true,
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking Labs",
    description:
      "Practical cybersecurity labs covering penetration testing, vulnerability assessment, and network security.",
    longDescription:
      "Comprehensive collection of ethical hacking labs and exercises covering network scanning, vulnerability assessment, exploitation techniques, privilege escalation, and security auditing using industry-standard tools and methodologies.",
    tech: ["Kali Linux", "Nmap", "Metasploit", "Burp Suite", "Wireshark"],
    github: "https://github.com/dhyanesh-v/ethical-hacking-labs",
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

export const GITHUB_USERNAME = "dhyanesh-v";
