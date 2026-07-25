"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/lib/brand-icons";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { TYPING_TEXTS } from "@/lib/data";

const SOCIALS = [
  { name: "GitHub", url: "https://github.com/Dhyanesh006", icon: GithubIcon },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/dhyanesh-v-741738274", icon: LinkedinIcon },
  { name: "Mail", url: "mailto:dhyanesh006@gmail.com", icon: null, label: "Mail" },
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
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const count = isMobile ? 20 : 50;
  return Array.from({ length: count }, (_, i) => ({
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setParticles(generateParticles());
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroHeight = typeof window !== "undefined" ? window.innerHeight : 900;
  const progress = Math.min(scrollY / (heroHeight * 0.6), 1);

  const centerImgOpacity = 1 - progress * 1.5;
  const centerImgScale = 1 - progress * 0.4;
  const rightImgOpacity = progress > 0.3 ? Math.min((progress - 0.3) / 0.35, 1) : 0;
  const rightImgScale = progress > 0.3 ? Math.min((progress - 0.3) / 0.35, 1) : 0;

  return (
    <>
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
        <motion.img
          src="/images/profile.jpg"
          alt="Dhyanesh V"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: Math.max(centerImgOpacity, 0), scale: centerImgScale }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="object-contain mx-auto mb-6 mt-8 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
        />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-gradient mb-4 sm:mb-6"
        >
          Dhyanesh V
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-10 sm:h-12 flex items-center justify-center mb-6 sm:mb-8"
        >
          <span className="text-base sm:text-xl md:text-2xl text-[#A3A3A3]">
            {typedText}
          </span>
          <span className="typing-cursor ml-1" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 flex-wrap"
        >
          {SOCIALS.map((s) => (
            <motion.a
              key={s.name}
              href={s.url}
              target={s.url.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-4 py-2.5 sm:py-2 rounded-lg text-sm font-medium text-[#A3A3A3] hover:text-[#FFFFFF] hover:bg-[#FFFFFF]/10 transition-colors min-h-[44px]"
            >
              {s.icon ? <s.icon className="w-4 h-4" /> : <span className="material-symbols-rounded text-[18px]">mail</span>}
              {s.name}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
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

    <div
      className="fixed pointer-events-none z-50 hidden md:block"
      style={{
        top: "50%",
        right: "3%",
        transform: `translateY(-50%) scale(${rightImgScale})`,
        opacity: rightImgOpacity,
        transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease-out",
      }}
    >
      <div className="bubble-frame">
        <img
          src="/images/profile.jpg"
          alt="Dhyanesh V"
          className="object-contain rounded-full"
          style={{ width: "13rem", height: "13rem" }}
        />
        <div className="bubble-tail" />
      </div>
    </div>
  </>
  );
}
