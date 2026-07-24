"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/lib/brand-icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { SOCIAL_LINKS } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    await new Promise((r) => setTimeout(r, 1000));

    setSent(true);
    setSending(false);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Get In Touch" subtitle="Contact" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">
              Let&apos;s work together
            </h3>
            <p className="text-[#888888] leading-relaxed mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-[#888888]">
                <div className="w-10 h-10 rounded-lg bg-[#FFFFFF]/10 flex items-center justify-center">
                  <Mail size={18} className="text-[#FFFFFF]" />
                </div>
                <span className="text-sm">dhyanesh@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-[#888888]">
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
                    className="w-11 h-11 rounded-full flex items-center justify-center bg-[#111111]/60 border border-white/5 text-[#888888] hover:text-[#FFFFFF] hover:border-[#FFFFFF]/30 transition-colors"
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
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#FFFFFF] mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#000000] border border-[#222222] text-[#FFFFFF] text-sm focus:outline-none focus:border-[#FFFFFF]/50 focus:ring-1 focus:ring-[#FFFFFF]/20 transition-all placeholder:text-[#888888]/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#FFFFFF] mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#000000] border border-[#222222] text-[#FFFFFF] text-sm focus:outline-none focus:border-[#FFFFFF]/50 focus:ring-1 focus:ring-[#FFFFFF]/20 transition-all placeholder:text-[#888888]/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#FFFFFF] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#000000] border border-[#222222] text-[#FFFFFF] text-sm focus:outline-none focus:border-[#FFFFFF]/50 focus:ring-1 focus:ring-[#FFFFFF]/20 transition-all resize-none placeholder:text-[#888888]/50"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                style={{
                  background: sent
                    ? "#059669"
                    : "linear-gradient(135deg, #FFFFFF, #CCCCCC)",
                }}
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
