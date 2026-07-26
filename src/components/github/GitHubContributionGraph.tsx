"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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

const LEVEL_COLORS_SOLID = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];

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

function cellKey(week: number, day: number): string {
  return `${week}-${day}`;
}

function PacManSprite({ open }: { open: boolean }) {
  const angle = open ? 35 : 4;
  const rad = (angle * Math.PI) / 180;
  const tx = 50 + 50 * Math.cos(-rad);
  const ty = 50 + 50 * Math.sin(-rad);
  const bx = 50 + 50 * Math.cos(rad);
  const by = 50 + 50 * Math.sin(rad);

  return (
    <svg viewBox="0 0 100 100" width="11" height="11" className="drop-shadow-[0_0_4px_rgba(250,204,21,0.9)]">
      <path
        d={`M50,50 L${tx},${ty} A50,50 0 1,0 ${bx},${by} Z`}
        fill="#FFD700"
      />
      <circle cx="58" cy="30" r="5" fill="#000" />
    </svg>
  );
}

export default function GitHubContributionGraph() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pacman, setPacman] = useState({ week: 0, day: 0 });
  const [eaten, setEaten] = useState<Set<string>>(new Set());
  const [mouthOpen, setMouthOpen] = useState(true);
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const weeksRef = useRef<ContributionDay[][]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    fetchContributions()
      .then(setContributions)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    weeksRef.current = getWeeks(contributions);
  }, [contributions]);

  const advancePacman = useCallback(() => {
    const weeks = weeksRef.current;
    if (weeks.length === 0) return;

    setMouthOpen((m) => !m);

    setPacman((prev) => {
      let { week, day } = prev;
      const currentWeek = weeks[week];

      if (!currentWeek) {
        return prev;
      }

      day++;
      if (day >= currentWeek.length) {
        day = 0;
        week++;
        if (week >= weeks.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setCompleted(true);
          return prev;
        }
      }

      setEaten((e) => new Set([...e, cellKey(week, day)]));
      return { week, day };
    });
  }, []);

  useEffect(() => {
    if (started && !loading && contributions.length > 0 && !completed) {
      intervalRef.current = setInterval(advancePacman, 100);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [started, loading, contributions, advancePacman, completed]);

  useEffect(() => {
    if (completed) {
      const timer = setTimeout(() => {
        setEaten(new Set());
        setPacman({ week: 0, day: 0 });
        setCompleted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [completed]);

  useEffect(() => {
    if (!loading && contributions.length > 0) {
      const timer = setTimeout(() => setStarted(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [loading, contributions]);

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
              {week.map((day, di) => {
                const key = cellKey(wi, di);
                const isPacmanHere =
                  pacman.week === wi && pacman.day === di && started && !completed;
                const isEatenHere = eaten.has(key);

                return (
                  <div
                    key={day.date}
                    className="w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] rounded-sm transition-all duration-75 relative"
                    title={`${day.count} contributions on ${day.date}`}
                  >
                    {isPacmanHere ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PacManSprite open={mouthOpen} />
                      </div>
                    ) : isEatenHere ? (
                      <div
                        className="w-full h-full rounded-sm"
                        style={{ backgroundColor: LEVEL_COLORS_SOLID[day.level] }}
                      />
                    ) : (
                      <div className="w-full h-full rounded-sm bg-[#3a3a3a] shadow-[inset_0_0_2px_rgba(255,255,255,0.15)]" />
                    )}
                  </div>
                );
              })}
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
