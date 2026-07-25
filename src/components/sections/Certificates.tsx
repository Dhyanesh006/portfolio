"use client";

import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { CERTIFICATES } from "@/lib/data";

export default function Certificates() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  return (
    <section id="certificates" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading title="Certificates" subtitle="Achievements" />

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {CERTIFICATES.map((cert, i) => (
                <div
                  key={cert.id}
                  className="flex-none w-full sm:w-1/2 md:w-1/3 pl-4"
                >
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="glass-card rounded-xl p-4 sm:p-6 h-full flex flex-col group block"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#FFFFFF]/20 to-[#CCCCCC]/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Award
                        size={20}
                        className="text-[#FFFFFF] sm:w-6 sm:h-6"
                      />
                    </div>
                    <h3 className="text-[#FFFFFF] font-semibold text-sm sm:text-base mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-[#FFFFFF] text-xs sm:text-sm mb-1">{cert.issuer}</p>
                    <p className="text-[#A3A3A3] text-[10px] sm:text-xs mt-auto">{cert.date}</p>
                  </motion.a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-6 sm:mt-8">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-11 h-11 sm:w-10 sm:h-10 rounded-full border border-[#FFFFFF]/20 flex items-center justify-center text-[#A3A3A3] hover:text-[#FFFFFF] hover:border-[#FFFFFF]/50 transition-all min-w-[44px] min-h-[44px]"
              aria-label="Previous certificate"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-11 h-11 sm:w-10 sm:h-10 rounded-full border border-[#FFFFFF]/20 flex items-center justify-center text-[#A3A3A3] hover:text-[#FFFFFF] hover:border-[#FFFFFF]/50 transition-all min-w-[44px] min-h-[44px]"
              aria-label="Next certificate"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
