"use client";

import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/lib/brand-icons";
import { SOCIAL_LINKS } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
};

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-3">
            <img src="/images/stark-logo.png" alt="Logo" className="h-7 w-7 sm:h-8 sm:w-8 rounded-full" />
            <p className="text-[#A3A3A3] text-xs sm:text-sm mt-1">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon = ICON_MAP[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center bg-[#0A0A0A]/60 border border-white/5 text-[#A3A3A3] hover:text-[#FFFFFF] hover:border-[#FFFFFF]/30 transition-all"
                  aria-label={link.name}
                >
                  {Icon && <Icon size={16} />}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-[#A3A3A3] text-[10px] sm:text-xs">
          <p>
            &copy; {new Date().getFullYear()} Dhyanesh V. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Crafted with <Heart size={10} className="text-[#FFFFFF] fill-[#FFFFFF] sm:w-3 sm:h-3" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
