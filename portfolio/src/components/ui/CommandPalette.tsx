"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const items = NAV_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = useCallback((href: string) => {
    setOpen(false);
    setQuery("");
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] flex items-start justify-center pt-[20vh] px-4"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => {
              setOpen(false);
              setQuery("");
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="relative w-full max-w-lg bg-[#141414] border border-[#262626] rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[#262626]">
              <Search size={18} className="text-[#A3A3A3] shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Navigate to section..."
                className="flex-1 bg-transparent text-[#F5F5F5] text-sm outline-none placeholder:text-[#A3A3A3]/50"
              />
              <button
                onClick={() => {
                  setOpen(false);
                  setQuery("");
                }}
                className="text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="max-h-64 overflow-y-auto py-2">
              {items.length === 0 ? (
                <div className="px-5 py-6 text-center text-[#A3A3A3] text-sm">
                  No results found.
                </div>
              ) : (
                items.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleSelect(item.href)}
                    className="w-full flex items-center gap-3 px-5 py-3 text-left hover:bg-[#262626] transition-colors group"
                  >
                    <span className="text-sm text-[#F5F5F5]">{item.label}</span>
                    <ArrowRight
                      size={14}
                      className="text-[#A3A3A3] ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                ))
              )}
            </div>

            <div className="px-5 py-3 border-t border-[#262626] flex items-center gap-4 text-[10px] text-[#A3A3A3]/60">
              <span>
                <kbd className="px-1.5 py-0.5 rounded bg-[#262626] text-[#A3A3A3]">
                  Esc
                </kbd>{" "}
                to close
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
