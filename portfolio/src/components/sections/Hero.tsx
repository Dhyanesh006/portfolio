"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/lib/brand-icons";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { TYPING_TEXTS } from "@/lib/data";

const SOCIALS = [
  { name: "GitHub", url: "https://github.com/Dhyanesh006", icon: GithubIcon },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/dhyanesh-v-741738274", icon: LinkedinIcon },
  { name: "Mail", url: "mailto:dhyanesh@example.com", icon: null, label: "Mail" },
];

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) % 233280;
  return (x < 0 ? x + 233280 : x) / 233280;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

function generateParticles(): Particle[] {
  return Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: seededRandom(i * 7 + 1) * 100,
    y: seededRandom(i * 13 + 3) * 100,
    size: seededRandom(i * 3 + 5) * 2 + 1,
    delay: seededRandom(i * 11 + 7) * 3,
    duration: seededRandom(i * 17 + 9) * 3 + 2,
  }));
}

export default function Hero() {
  const typedText = useTypingAnimation(TYPING_TEXTS, 100, 50, 2000);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(generateParticles());
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="star-particle"
              style={{
                left: `${p.x.toFixed(4)}%`,
                top: `${p.y.toFixed(4)}%`,
                width: `${p.size.toFixed(2)}px`,
                height: `${p.size.toFixed(2)}px`,
                animationDelay: `${p.delay.toFixed(4)}s`,
                animationDuration: `${p.duration.toFixed(4)}s`,
              }}
          />
        ))}

        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "#FFFFFF", top: "10%", left: "10%" }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ background: "#CCCCCC", top: "50%", right: "10%" }}
          animate={{
            x: [0, -80, 50, 0],
            y: [0, 60, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-gradient mb-6"
        >
          Dhyanesh V
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-12 flex items-center justify-center mb-8"
        >
          <span className="text-xl md:text-2xl text-[#A3A3A3]">
            {typedText}
          </span>
          <span className="typing-cursor ml-1" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-10 flex-wrap"
        >
          {SOCIALS.map((s) => (
            <motion.a
              key={s.name}
              href={s.url}
              target={s.url.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-[#A3A3A3] hover:text-[#FFFFFF] hover:bg-[#FFFFFF]/10 transition-colors"
            >
              {s.icon ? <s.icon className="w-4 h-4" /> : <span className="material-symbols-rounded text-[18px]">mail</span>}
              {s.name}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm border border-[#FFFFFF]/30 text-[#FFFFFF] hover:bg-[#FFFFFF]/10 transition-colors"
          >
            <ArrowDown size={18} />
            Scroll Down
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[#A3A3A3]"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-[#A3A3A3]/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-[#FFFFFF]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
