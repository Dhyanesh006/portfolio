"use client";

import { useState, useEffect } from "react";

interface ScreenSize {
  width: number;
  profileImage: string;
  bubbleImage: string;
  headingSize: string;
  subtitleSize: string;
  particleCount: number;
}

function compute(width: number): ScreenSize {
  const vw = width / 100;

  let profileImage: string;
  let bubbleImage: string;
  let headingSize: string;
  let subtitleSize: string;
  let particleCount: number;

  if (width < 480) {
    profileImage = `${Math.max(8 * vw, 6)}rem`;
    bubbleImage = "0rem";
    headingSize = "2rem";
    subtitleSize = "1rem";
    particleCount = 10;
  } else if (width < 768) {
    profileImage = `${Math.max(9 * vw, 7)}rem`;
    bubbleImage = "0rem";
    headingSize = "2.25rem";
    subtitleSize = "1.1rem";
    particleCount = 15;
  } else if (width < 1024) {
    profileImage = `${Math.min(10 * vw, 16)}rem`;
    bubbleImage = `${Math.min(8 * vw, 10)}rem`;
    headingSize = "3rem";
    subtitleSize = "1.5rem";
    particleCount = 30;
  } else if (width < 1440) {
    profileImage = `${Math.min(9 * vw, 16)}rem`;
    bubbleImage = `${Math.min(9 * vw, 14)}rem`;
    headingSize = "3.5rem";
    subtitleSize = "1.5rem";
    particleCount = 40;
  } else if (width < 1920) {
    profileImage = `${Math.min(8.5 * vw, 16)}rem`;
    bubbleImage = `${Math.min(8.5 * vw, 15)}rem`;
    headingSize = "4rem";
    subtitleSize = "1.5rem";
    particleCount = 50;
  } else {
    profileImage = "16rem";
    bubbleImage = "15rem";
    headingSize = "4.5rem";
    subtitleSize = "1.75rem";
    particleCount = 60;
  }

  return { width, profileImage, bubbleImage, headingSize, subtitleSize, particleCount };
}

export function useScreenSize(): ScreenSize {
  const [size, setSize] = useState<ScreenSize>(() =>
    compute(typeof window !== "undefined" ? window.innerWidth : 1920)
  );

  useEffect(() => {
    let rafId: number;

    const handleResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setSize(compute(window.innerWidth));
      });
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}
