"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {subtitle && (
        <p className="text-accent uppercase tracking-widest text-sm font-medium mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF]">{title}</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-[#FFFFFF] to-[#CCCCCC] mx-auto mt-4 rounded-full" />
    </motion.div>
  );
}
