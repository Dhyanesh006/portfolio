"use client";

import { useScrollProgress } from "@/hooks/use-scroll-progress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px]">
      <div
        className="h-full rounded-r-full transition-[width] duration-100 ease-out"
        style={{
          width: `${progress * 100}%`,
          background: "linear-gradient(90deg, #3B82F6, #06B6D4)",
        }}
      />
    </div>
  );
}
