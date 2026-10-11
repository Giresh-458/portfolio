"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import { BreathingScene } from "@/components/ui/breathing-scene";
import { siteConfig } from "@/lib/data";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="portfolio-hero relative isolate flex min-h-[760px] scroll-mt-20 items-center overflow-hidden bg-background pt-[72px] md:min-h-[820px]">
      <BreathingScene />
      <div className="portfolio-hero-wash pointer-events-none absolute inset-0 z-[1]" />
      <div className="container relative z-10 w-full py-20 md:py-28">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[660px]"
        >
          <p className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#F1C75B]">
            <span className="h-px w-7 bg-[#F1C75B]" />
            Portfolio <span className="text-white/35">/</span> AI & Full-Stack Engineering
          </p>
          <h1 className="max-w-[700px] text-balance text-5xl font-semibold leading-[1.03] tracking-[-0.055em] text-[#F6F5F0] sm:text-6xl md:text-7xl">
            Building useful AI systems and thoughtful products.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#C5C4BF] sm:text-lg sm:leading-8">
            I’m {siteConfig.name}, a Computer Science student at IIIT Sri City focused on generative AI, backend systems, and full-stack development.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#F1C75B] px-5 py-3 text-sm font-semibold text-[#19170F] transition hover:bg-[#FFDA76]">
              Explore projects <ArrowUpRight className="size-4" />
            </a>
            <a href="#about" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.035] px-5 py-3 text-sm font-medium text-[#F0EFE8] transition hover:border-white/30 hover:bg-white/[0.07]">
              About me <ArrowDown className="size-4" />
            </a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="inline-flex size-12 items-center justify-center rounded-lg border border-white/15 text-[#E8E7E1] transition hover:border-[#F1C75B]/70 hover:text-[#F1C75B]">
              <Github className="size-5" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-sm text-[#A7A6A0]">
            <span>Generative AI</span><span className="size-1 rounded-full bg-[#F1C75B]" />
            <span>Backend engineering</span><span className="size-1 rounded-full bg-[#F1C75B]" />
            <span>Full-stack development</span>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-8 right-8 z-10 hidden items-center gap-2 text-xs text-white/45 lg:flex">
        <span className="h-px w-8 bg-[#F1C75B]/70" /> Zenitsu · Thunder Breathing
      </div>
    </section>
  );
}
