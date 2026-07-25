"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const INFO_ITEMS = [
  { icon: "cake", label: "20" },
  { icon: "location_on", label: "Coimbatore, India" },
  { icon: "school", label: "B.E Computer Science And Engineering Student" },
];

const SKILL_ICONS = [
  "java", "python", "html", "css", "js", "ts",
  "react", "nextjs", "spring", "tailwind", "mysql",
  "git", "docker", "linux", "aws",
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-6 sm:p-8"
          >
            <p className="text-[#A3A3A3] text-base leading-relaxed mb-6">
              I&apos;m a passionate Computer Science & Engineering student with a deep
              interest in building impactful software solutions. My journey in tech
              started with curiosity about how systems work, and it has evolved into a
              commitment to creating elegant, efficient applications.
            </p>
            <p className="text-[#A3A3A3] text-base leading-relaxed mb-6">
              With hands-on experience in full-stack development, I enjoy crafting
              end-to-end solutions using Java, Spring Boot, React, and modern web
              technologies. I believe in writing clean, maintainable code that solves
              real-world problems.
            </p>
            <p className="text-[#A3A3A3] text-base leading-relaxed">
              Beyond development, I&apos;m deeply fascinated by cybersecurity and cloud
              computing. I spend time exploring ethical hacking labs, understanding
              network security, and staying updated with the latest in cloud
              infrastructure.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h3 className="text-[#FFFFFF] font-bold text-lg">Dhyanesh V</h3>
                  <p className="text-[#A3A3A3] text-sm">B.E Computer Science And Engineering</p>
                </div>
              </div>
              <div className="space-y-4">
                {INFO_ITEMS.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-[#A3A3A3]">
                    <span className="material-symbols-rounded text-[20px] text-[#FFFFFF]">
                      {item.icon}
                    </span>
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-2xl p-4 sm:p-6"
            >
              <div className="flex flex-wrap gap-2 sm:gap-2">
                {SKILL_ICONS.map((skill) => (
                  <img
                    key={skill}
                    src={`https://skillicons.dev/icons?i=${skill}&theme=dark`}
                    alt={skill}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                    loading="lazy"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
