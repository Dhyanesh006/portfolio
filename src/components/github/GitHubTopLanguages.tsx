"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchLanguages, type LanguageInfo } from "@/lib/github";
import { LanguageSkeleton } from "./GitHubSkeleton";
import { Code2 } from "lucide-react";

export default function GitHubTopLanguages() {
  const [languages, setLanguages] = useState<LanguageInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchLanguages()
      .then(setLanguages)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LanguageSkeleton />;

  if (error || languages.length === 0) {
    return (
      <div className="glass-card rounded-xl p-4 text-center">
        <p className="text-[#A3A3A3] text-xs">Unable to load languages</p>
      </div>
    );
  }

  const totalBytes = languages.reduce((sum, l) => sum + l.bytes, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-xl p-4 sm:p-5"
    >
      <div className="flex items-center gap-2 mb-3">
        <Code2 size={16} className="text-[#FFFFFF]" />
        <h4 className="text-sm font-semibold text-[#FFFFFF]">Top Languages</h4>
      </div>
      <div className="space-y-2.5">
        {languages.map((lang, i) => {
          const percent = Math.round((lang.bytes / totalBytes) * 100);
          return (
            <div key={lang.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-[#FFFFFF]">{lang.name}</span>
                <span className="text-[10px] text-[#A3A3A3]">{percent}%</span>
              </div>
              <div className="w-full bg-[#1A1A1A] rounded-full h-1.5">
                <motion.div
                  className="h-1.5 rounded-full"
                  style={{ backgroundColor: lang.color || "#A3A3A3" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {languages.map((lang) => (
          <span
            key={lang.name}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-xs text-[#A3A3A3] bg-[#FFFFFF]/5 border border-[#FFFFFF]/10"
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: lang.color || "#A3A3A3" }}
            />
            {lang.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
