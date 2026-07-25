"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/lib/data";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className={cn(
          "fixed left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-4xl md:w-[calc(100%-2rem)] z-50 top-4 transition-all duration-300 rounded-2xl overflow-hidden hidden md:block",
          scrolled ? "liquid-glass-scrolled" : "liquid-glass"
        )}
      >
        <div className="h-14 px-4 flex items-center justify-between">
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#hero");
            }}
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/images/stark-logo.png" alt="Logo" className="h-9 w-9 rounded-full" />
          </motion.a>

          <div className="flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className={cn(
                  "px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors relative flex items-center gap-1",
                  activeSection === item.href.replace("#", "")
                    ? "text-[#FFFFFF]"
                    : "text-[#A3A3A3] hover:text-[#FFFFFF]"
                )}
              >
                <span className="material-symbols-rounded text-[16px] leading-none">
                  {item.icon}
                </span>
                {item.label}
                {activeSection === item.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#FFFFFF] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-300",
          scrolled ? "liquid-glass-scrolled" : "liquid-glass"
        )}
      >
        <div className="flex items-center justify-around px-1 py-1 safe-area-bottom">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 py-2 px-1 rounded-xl transition-colors min-w-[44px] min-h-[44px]",
                  isActive
                    ? "text-[#FFFFFF]"
                    : "text-[#A3A3A3]"
                )}
              >
                <span className={cn(
                  "material-symbols-rounded text-[20px] leading-none transition-all",
                  isActive && "text-[#FFFFFF]"
                )}>
                  {item.icon}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveNav"
                    className="w-1 h-1 rounded-full bg-[#FFFFFF]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
