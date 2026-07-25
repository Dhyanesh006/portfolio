"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className={cn(
        "fixed left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-4xl md:w-[calc(100%-2rem)] z-50 top-4 transition-all duration-300 rounded-2xl overflow-hidden",
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

            <div className="hidden md:flex items-center gap-0.5">
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

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-[#A3A3A3] hover:text-[#FFFFFF] p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Toggle menu"
              >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden liquid-glass-scrolled rounded-2xl mt-1"
              >
                <div className="px-3 pb-3 flex flex-col gap-0.5">
                  {NAV_ITEMS.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleClick(item.href)}
                      className={cn(
                        "text-left px-3 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 min-h-[44px]",
                        activeSection === item.href.replace("#", "")
                          ? "text-[#FFFFFF] bg-[#FFFFFF]/10"
                          : "text-[#A3A3A3] hover:text-[#FFFFFF] hover:bg-white/5"
                      )}
                    >
                      <span className="material-symbols-rounded text-[16px] leading-none">
                        {item.icon}
                      </span>
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
  );
}
