"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setVisible(true);
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let moveTimeout: ReturnType<typeof setTimeout>;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setMoving(true);
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => setMoving(false), 150);
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
      }
      requestAnimationFrame(animate);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        setHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(raf);
      clearTimeout(moveTimeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block ${
        moving ? "cursor-moving" : ""
      } ${hovering ? "cursor-hover" : ""}`}
      style={{ width: 40, height: 40 }}
    >
      <img
        src="/images/stark-logo.png"
        alt=""
        className="w-full h-full object-contain"
        draggable={false}
      />
    </div>
  );
}
