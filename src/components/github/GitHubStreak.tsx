"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchStreak, type StreakData } from "@/lib/github";
import { StreakSkeleton } from "./GitHubSkeleton";
import { Flame, Trophy, BarChart3 } from "lucide-react";

export default function GitHubStreak() {
  const [streak, setStreak] = useState<StreakData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchStreak()
      .then(setStreak)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <StreakSkeleton />;

  if (error || !streak) {
    return (
      <div className="glass-card rounded-xl p-4 text-center">
        <p className="text-[#A3A3A3] text-xs">Unable to load streak data</p>
      </div>
    );
  }

  const items = [
    {
      label: "Current Streak",
      value: streak.currentStreak,
      icon: Flame,
      color: "text-[#FFFFFF]",
    },
    {
      label: "Longest Streak",
      value: streak.longestStreak,
      icon: Trophy,
      color: "text-[#CCCCCC]",
    },
    {
      label: "Total Days",
      value: streak.totalContributions,
      icon: BarChart3,
      color: "text-[#A3A3A3]",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-xl p-4 sm:p-5"
    >
      <div className="flex items-center gap-2 mb-3">
        <Flame size={16} className="text-[#FFFFFF]" />
        <h4 className="text-sm font-semibold text-[#FFFFFF]">GitHub Streak</h4>
      </div>
      <div className="flex gap-3 sm:gap-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="text-center flex-1">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Icon size={12} className={item.color} />
              </div>
              <p className="text-xl sm:text-2xl font-bold text-[#FFFFFF]">
                {item.value}
              </p>
              <p className="text-[10px] sm:text-xs text-[#A3A3A3] mt-0.5">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
