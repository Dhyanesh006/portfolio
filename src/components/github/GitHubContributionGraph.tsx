"use client";

import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { ContributionSkeleton } from "./GitHubSkeleton";
import { CalendarDays } from "lucide-react";
import { Suspense } from "react";

export default function GitHubContributionGraph() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl p-4 sm:p-6 overflow-hidden"
    >
      <div className="flex items-center gap-2 mb-4">
        <CalendarDays size={16} className="text-[#FFFFFF]" />
        <h4 className="text-sm font-semibold text-[#FFFFFF]">
          Contribution Graph
        </h4>
      </div>

      <div className="overflow-x-auto -mx-2 px-2">
        <Suspense fallback={<ContributionSkeleton />}>
          <GitHubCalendar
            username="Dhyanesh006"
            colorScheme="dark"
            blockSize={11}
            blockMargin={3}
            fontSize={12}
            labels={{
              totalCount: "{{count}} contributions in the last year",
            }}
          />
        </Suspense>
      </div>
    </motion.div>
  );
}
