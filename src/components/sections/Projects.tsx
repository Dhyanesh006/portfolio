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
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div
              className="absolute inset-0 animate-gradient"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2), rgba(139,92,246,0.1))",
                backgroundSize: "200% 200%",
              }}
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            {!project.image && <span className="text-6xl font-bold text-white/5">{index + 1}</span>}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        </div>

        <div className="p-4 sm:p-6">
          <h3 className="text-xl font-bold text-[#FFFFFF] mb-2 group-hover:text-[#FFFFFF] transition-colors">
            {project.title}
          </h3>
          <p className="text-[#A3A3A3] text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs rounded-md bg-[#FFFFFF]/10 text-[#FFFFFF] border border-[#FFFFFF]/20"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-1 text-xs rounded-md bg-[#1A1A1A] text-[#A3A3A3]">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-[#FFFFFF]">
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
              className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-5 sm:p-8 relative mx-2 sm:mx-0"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#A3A3A3] hover:text-[#FFFFFF] transition-colors w-10 h-10 flex items-center justify-center"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">
                {project.title}
              </h3>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain rounded-lg mb-4"
                />
              )}
              <p className="text-[#FFFFFF] text-sm mb-6">{project.tech.join(" / ")}</p>

              <p className="text-[#A3A3A3] leading-relaxed mb-6">
                {project.longDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#FFFFFF] mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-sm rounded-lg bg-[#FFFFFF]/10 text-[#FFFFFF] border border-[#FFFFFF]/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-lg bg-[#FFFFFF] text-[#000000] font-medium text-sm hover:bg-white transition-colors min-h-[44px]"
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
                    className="flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-lg border border-[#FFFFFF]/30 text-[#FFFFFF] font-medium text-sm hover:bg-[#FFFFFF]/10 transition-colors min-h-[44px]"
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
    <section id="projects" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading title="Featured Projects" subtitle="My Work" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
