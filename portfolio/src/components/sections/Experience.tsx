"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXPERIENCES } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading title="Experience" subtitle="My Journey" />

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line opacity-30" />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0A0A0A] border-2 border-[#FFFFFF]/40 flex items-center justify-center z-10">
                <Briefcase size={18} className="text-[#FFFFFF]" />
              </div>

              <div
                className={`w-full md:w-[calc(50%-2rem)] ml-16 md:ml-0 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <div className="glass-card rounded-xl p-6">
                  <p className="text-[#FFFFFF] text-sm font-medium mb-1">{exp.period}</p>
                  <h3 className="text-lg font-bold text-[#FFFFFF] mb-1">{exp.title}</h3>
                  <p className="text-[#CCCCCC] text-sm mb-3">{exp.company}</p>

                  <ul className={`space-y-2 mb-4 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.description.map((desc, j) => (
                      <li key={j} className="text-[#A3A3A3] text-sm leading-relaxed">
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-[#FFFFFF]/10 text-[#FFFFFF] border border-[#FFFFFF]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
