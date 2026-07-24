"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/lib/brand-icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/lib/data";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -8, scale: 1.01 }}
        className="project-card glass-card rounded-2xl overflow-hidden group cursor-pointer"
        onClick={() => setExpanded(true)}
        data-cursor-hover
      >
        <div className="relative h-48 overflow-hidden">
          <div
            className="absolute inset-0 animate-gradient"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2), rgba(139,92,246,0.1))",
              backgroundSize: "200% 200%",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-bold text-white/5">{index + 1}</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#141414] to-transparent" />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-[#F5F5F5] mb-2 group-hover:text-[#FBBF24] transition-colors">
            {project.title}
          </h3>
          <p className="text-[#A3A3A3] text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs rounded-md bg-[#FBBF24]/10 text-[#FBBF24] border border-[#FBBF24]/20"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-1 text-xs rounded-md bg-[#262626] text-[#A3A3A3]">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-[#FBBF24]">
            <span>View Details</span>
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setExpanded(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-[#141414] border border-[#262626] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-4 right-4 text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-2">
                {project.title}
              </h3>
              <p className="text-[#FBBF24] text-sm mb-6">{project.tech.join(" / ")}</p>

              <p className="text-[#A3A3A3] leading-relaxed mb-6">
                {project.longDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#F5F5F5] mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-sm rounded-lg bg-[#FBBF24]/10 text-[#FBBF24] border border-[#FBBF24]/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F5F5F5] text-[#0A0A0A] font-medium text-sm hover:bg-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#FBBF24]/30 text-[#FBBF24] font-medium text-sm hover:bg-[#FBBF24]/10 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Featured Projects" subtitle="My Work" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
