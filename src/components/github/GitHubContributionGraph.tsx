"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchContributions, type ContributionDay } from "@/lib/github";
import { ContributionSkeleton } from "./GitHubSkeleton";
import { CalendarDays } from "lucide-react";

const LEVEL_COLORS = [
  "bg-[#161b22]",
  "bg-[#0e4429]",
  "bg-[#006d32]",
  "bg-[#26a641]",
  "bg-[#39d353]",
];

function getWeeks(days: ContributionDay[]): ContributionDay[][] {
  const weeks: ContributionDay[][] = [];
  let currentWeek: ContributionDay[] = [];

  for (const day of days) {
    const date = new Date(day.date);
    const dayOfWeek = date.getDay();

    if (dayOfWeek === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(day);
  }
  if (currentWeek.length > 0) weeks.push(currentWeek);
  return weeks;
}

export default function GitHubContributionGraph() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchContributions()
      .then(setContributions)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ContributionSkeleton />;

  if (error || contributions.length === 0) {
    return (
      <div className="glass-card rounded-2xl p-5 text-center">
        <p className="text-[#A3A3A3] text-xs">Unable to load contribution data</p>
      </div>
    );
  }

  const totalContributions = contributions.reduce((sum, d) => sum + d.count, 0);
  const weeks = getWeeks(contributions);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl p-4 sm:p-6 overflow-hidden"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CalendarDays size={16} className="text-[#FFFFFF]" />
          <h4 className="text-sm font-semibold text-[#FFFFFF]">
            Contribution Graph
          </h4>
        </div>
        <p className="text-xs text-[#A3A3A3]">
          {totalContributions} contributions in the last year
        </p>
      </div>

      <div className="overflow-x-auto -mx-2 px-2">
        <div className="flex gap-[3px] min-w-fit">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((day) => (
                <div
                  key={day.date}
                  className={`w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] rounded-sm ${LEVEL_COLORS[day.level]} transition-colors hover:ring-1 hover:ring-[#FFFFFF]/30`}
                  title={`${day.count} contributions on ${day.date}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end gap-1.5 mt-3">
        <span className="text-[10px] text-[#A3A3A3]">Less</span>
        {LEVEL_COLORS.map((color, i) => (
          <div key={i} className={`w-[10px] h-[10px] rounded-sm ${color}`} />
        ))}
        <span className="text-[10px] text-[#A3A3A3]">More</span>
      </div>
    </motion.div>
  );
}
