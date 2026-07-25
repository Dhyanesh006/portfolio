"use client";

import { useEffect, useState, useRef } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const rafId = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return progress;
}
