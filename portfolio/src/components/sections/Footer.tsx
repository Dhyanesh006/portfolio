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
    <footer className="border-t border-[#222222] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/images/radio-logo.png" alt="Logo" className="h-8 w-8 rounded-full" />
            <p className="text-[#888888] text-sm mt-1">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon = ICON_MAP[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-[#111111]/60 border border-white/5 text-[#888888] hover:text-[#FFFFFF] hover:border-[#FFFFFF]/30 transition-all"
                  aria-label={link.name}
                >
                  {Icon && <Icon size={16} />}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#222222] flex flex-col md:flex-row items-center justify-between gap-4 text-[#888888] text-xs">
          <p>
            &copy; {new Date().getFullYear()} Dhyanesh V. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Crafted with <Heart size={12} className="text-[#FFFFFF] fill-[#FFFFFF]" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
