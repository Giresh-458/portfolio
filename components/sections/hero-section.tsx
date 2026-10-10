"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Flame, Github, Mail, Waves } from "lucide-react";
import { BreathingScene } from "@/components/ui/breathing-scene";
import { GlowButton } from "@/components/ui/glow-button";
import { ParticleBackground } from "@/components/ui/particle-background";

const rise = {
  hidden: { opacity: 0, y: 24, filter: "blur(7px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative isolate min-h-[min(940px,100svh)] overflow-hidden bg-cinematic-radial pt-[72px]">
      <ParticleBackground />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#080A09_0%,rgba(8,10,9,.98)_26%,rgba(8,10,9,.72)_52%,rgba(8,10,9,.14)_78%,rgba(8,10,9,.55)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/65 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-2 haori-checker opacity-75" />
      <div className="pointer-events-none absolute right-0 top-0 h-48 w-2 bg-gradient-to-b from-[#E85D47] via-[#E85D47]/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(243,238,227,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(243,238,227,.18)_1px,transparent_1px)] [background-size:82px_82px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

      <div className="container relative z-10 grid items-center gap-0 py-8 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.02fr_.98fr] lg:gap-0">
        <motion.div
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
          className="relative z-20 py-12 lg:py-16"
        >
          <motion.div variants={reduceMotion ? undefined : rise} className="mb-8 flex flex-wrap items-center gap-3">
            <span className="grid size-9 place-items-center border border-[#E85D47]/45 bg-[#E85D47]/10 font-display text-lg font-bold text-[#FFAD85]">GV</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.23em] text-[#C8C7BA] sm:text-xs">Corps file 001 <span className="text-[#E85D47]">//</span> Giresh Velaga</span>
          </motion.div>

          <motion.p variants={reduceMotion ? undefined : rise} className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-[#9BC59A] sm:text-xs">
            Demon Slayer-inspired · AI engineering portfolio
          </motion.p>

          <motion.h1
            variants={reduceMotion ? undefined : rise}
            className="max-w-4xl font-display text-[clamp(3.55rem,7.2vw,7.05rem)] font-black leading-[.88] tracking-[-.065em] text-[#F3EEE3]"
          >
            <span className="block">BREATHE IN.</span>
            <span className="hero-gradient-text mt-2 block">BUILD BOLD.</span>
          </motion.h1>

          <motion.p variants={reduceMotion ? undefined : rise} className="mt-7 max-w-xl text-base leading-7 text-[#B8B8AC] sm:text-lg sm:leading-8">
            I’m Giresh, a fourth-year CSE student at IIIT Sri City building AI agents, retrieval systems and full-stack products—from the first experiment to the working application.
          </motion.p>

          <motion.div variants={reduceMotion ? undefined : rise} className="mt-6 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-2 border border-[#4F7955]/60 bg-[#29452F]/30 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#CDE4C6] sm:text-xs"><Waves className="size-3.5" /> Water Breathing · AI / RAG</span>
            <span className="inline-flex items-center gap-2 border border-[#A94336]/60 bg-[#662B25]/25 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#FFB395] sm:text-xs"><Flame className="size-3.5" /> Hinokami · Build / Ship</span>
          </motion.div>

          <motion.div variants={reduceMotion ? undefined : rise} className="mt-8 flex flex-wrap gap-3">
            <GlowButton href="#projects" variant="secondary">Open mission files <ArrowRight className="size-4" /></GlowButton>
            <GlowButton href="https://github.com/Giresh-458" variant="outline"><Github className="size-4" /> GitHub</GlowButton>
            <GlowButton href="#contact" variant="outline"><Mail className="size-4" /> Contact</GlowButton>
          </motion.div>

          <motion.div variants={reduceMotion ? undefined : rise} className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 sm:mt-12">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-[#E85D47]">Current arc · 04</p>
              <p className="mt-1 text-xs text-[#AAAFA4]">Computer Science & Engineering · IIIT Sri City</p>
            </div>
            <a href="#about" className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#C8C7BA] transition hover:text-[#F3EEE3]">
              Enter the story <ArrowDown className="size-4 transition group-hover:translate-y-1" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.94, x: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 -mt-3 flex min-h-[330px] items-center justify-center lg:-ml-8 lg:mt-0"
        >
          <BreathingScene />
          <div className="pointer-events-none absolute right-[3%] top-[19%] hidden border border-[#D6E8CF]/20 bg-[#0C120E]/75 px-3 py-2 backdrop-blur-md sm:block">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#E8E1D1]">Discipline</p>
            <p className="mt-1 font-display text-sm text-[#9BC59A]">Focus × Curiosity</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
