"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Coffee,
  Code,
  Braces,
  FileCode2,
  Palette,
  Wind,
  Atom,
  Triangle,
  Leaf,
  Globe,
  Server,
  Database,
  GitBranch,
  Box,
  Terminal,
  BarChart3,
  Network,
  Cloud,
  Shield,
  Bug,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { GithubIcon } from "@/lib/brand-icons";
import { SKILLS, SKILL_CATEGORIES } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  coffee: Coffee,
  code: Code,
  braces: Braces,
  "file-code": FileCode2,
  palette: Palette,
  wind: Wind,
  atom: Atom,
  triangle: Triangle,
  leaf: Leaf,
  globe: Globe,
  server: Server,
  database: Database,
  "git-branch": GitBranch,
  github: GithubIcon,
  container: Box,
  terminal: Terminal,
  "bar-chart": BarChart3,
  network: Network,
  cloud: Cloud,
  shield: Shield,
  bug: Bug,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills =
    activeCategory === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Skills & Technologies" subtitle="My Tech Stack" />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-[#FBBF24] text-white"
                : "bg-[#141414] text-[#A3A3A3] hover:text-[#F5F5F5]"
            }`}
          >
            All
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-[#FBBF24] text-white"
                  : "bg-[#141414] text-[#A3A3A3] hover:text-[#F5F5F5]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = ICON_MAP[skill.icon];
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4 }}
                  className="skill-card glass-card rounded-xl p-5 text-center cursor-default"
                >
                  <div className="text-[#FBBF24] w-8 h-8 mx-auto mb-3">
                    {Icon && <Icon size={32} />}
                  </div>
                  <p className="text-sm font-medium text-[#F5F5F5] mb-3">
                    {skill.name}
                  </p>
                  <div className="w-full bg-[#262626] rounded-full h-1.5 mb-1">
                    <motion.div
                      className="progress-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                  <p className="text-xs text-[#A3A3A3]">{skill.level}%</p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
