"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchStats } from "@/lib/github";
import { StatCardSkeleton } from "./GitHubSkeleton";
import { Star, GitFork, Users, GitBranch, AlertCircle } from "lucide-react";

interface Stats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  totalForks: number;
}

const STAT_ITEMS = [
  { key: "publicRepos" as const, label: "Repos", icon: GitBranch },
  { key: "followers" as const, label: "Followers", icon: Users },
  { key: "following" as const, label: "Following", icon: Users },
  { key: "totalStars" as const, label: "Stars", icon: Star },
  { key: "totalForks" as const, label: "Forks", icon: GitFork },
];

export default function GitHubStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchStats()
      .then(setStats)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
        {[...Array(5)].map((_, i) => (
          <StatCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="glass-card rounded-xl p-4 text-center">
        <p className="text-[#A3A3A3] text-xs">Unable to load stats</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
      {STAT_ITEMS.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card rounded-xl p-3 sm:p-4 text-center"
          >
            <div className="flex items-center justify-center gap-1 text-[#A3A3A3] text-[10px] sm:text-xs mb-1.5">
              <Icon size={12} />
              <span>{item.label}</span>
            </div>
            <p className="text-lg sm:text-2xl font-bold text-[#FFFFFF]">
              {stats[item.key]}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
