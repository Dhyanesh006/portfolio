"use client";

import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";
import CustomCursor from "@/components/layout/CustomCursor";
import CommandPalette from "@/components/ui/CommandPalette";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import GitHubSection from "@/components/sections/GitHub";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <CommandPalette />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <GitHubSection />
        <Certificates />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
