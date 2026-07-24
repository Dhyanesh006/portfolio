"use client";

import { motion } from "framer-motion";
import { Calendar, Code, Briefcase, GitCommitHorizontal } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { COUNTER_STATS } from "@/lib/data";
import { useCountUp } from "@/hooks/use-count-up";

const ICON_MAP: Record<string, React.ElementType> = {
  calendar: Calendar,
  code: Code,
  briefcase: Briefcase,
  "git-commit": GitCommitHorizontal,
};

function StatCard({ stat, index }: { stat: (typeof COUNTER_STATS)[0]; index: number }) {
  const { count, ref } = useCountUp(stat.value, 2000);
  const Icon = ICON_MAP[stat.icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -4 }}
      className="glass-card rounded-xl p-6 text-center group cursor-default"
    >
      <div className="text-[#3B82F6] w-8 h-8 mx-auto mb-3">
        {Icon && <Icon size={32} />}
      </div>
      <div className="text-4xl font-bold text-gradient mb-1">
        {count}
        {stat.suffix}
      </div>
      <div className="text-[#94A3B8] text-sm">{stat.label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <p className="text-[#94A3B8] text-base leading-relaxed mb-6">
              I&apos;m a passionate Computer Science & Engineering student with a deep
              interest in building impactful software solutions. My journey in tech
              started with curiosity about how systems work, and it has evolved into a
              commitment to creating elegant, efficient applications.
            </p>
            <p className="text-[#94A3B8] text-base leading-relaxed mb-6">
              With hands-on experience in full-stack development, I enjoy crafting
              end-to-end solutions using Java, Spring Boot, React, and modern web
              technologies. I believe in writing clean, maintainable code that solves
              real-world problems.
            </p>
            <p className="text-[#94A3B8] text-base leading-relaxed">
              Beyond development, I&apos;m deeply fascinated by cybersecurity and cloud
              computing. I spend time exploring ethical hacking labs, understanding
              network security, and staying updated with the latest in cloud
              infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {COUNTER_STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
