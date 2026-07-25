"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/lib/brand-icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { SOCIAL_LINKS } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
};

export default function Contact() {

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading title="Get In Touch" subtitle="Contact" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">
              Let&apos;s work together
            </h3>
            <p className="text-[#A3A3A3] leading-relaxed mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-[#A3A3A3]">
                <div className="w-10 h-10 rounded-lg bg-[#FFFFFF]/10 flex items-center justify-center">
                  <Mail size={18} className="text-[#FFFFFF]" />
                </div>
                <span className="text-sm">dhyanesh006@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-[#A3A3A3]">
                <div className="w-10 h-10 rounded-lg bg-[#FFFFFF]/10 flex items-center justify-center">
                  <MapPin size={18} className="text-[#FFFFFF]" />
                </div>
                <span className="text-sm">India</span>
              </div>
            </div>

            <div className="flex gap-3">
              {SOCIAL_LINKS.filter((l) => l.icon !== "mail").map((link) => {
                const Icon = ICON_MAP[link.icon];
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center bg-[#0A0A0A]/60 border border-white/5 text-[#A3A3A3] hover:text-[#FFFFFF] hover:border-[#FFFFFF]/30 transition-colors"
                  >
                    {Icon && <Icon size={18} />}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <motion.a
              href="mailto:dhyanesh006@gmail.com?subject=Portfolio%20Inquiry"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-sm text-black transition-all min-h-[44px]"
              style={{ background: "linear-gradient(135deg, #FFFFFF, #CCCCCC)" }}
            >
              <Send size={18} />
              Send Me an Email
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
