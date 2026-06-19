"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";
import { ParticleBackground } from "@/components/ui/particle-background";
import { stagger, fadeUp } from "@/lib/motion";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-cinematic-radial pt-20">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-background to-transparent" />
      <motion.div
        variants={reduceMotion ? undefined : stagger}
        initial={reduceMotion ? undefined : "hidden"}
        animate={reduceMotion ? undefined : "visible"}
        className="container relative z-10 py-24"
      >
        <motion.div variants={reduceMotion ? undefined : fadeUp} className="mb-7 flex items-center gap-3">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-netflix opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-netflix" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-400">Available for AI engineering opportunities</span>
        </motion.div>
        <motion.h1
          variants={reduceMotion ? undefined : fadeUp}
          className="text-balance max-w-5xl font-display text-5xl font-black leading-[0.94] tracking-[-0.065em] text-white sm:text-6xl md:text-8xl"
        >
          Building Intelligent Systems with <span className="text-netflix">Generative AI</span>
        </motion.h1>
        <motion.p variants={reduceMotion ? undefined : fadeUp} className="mt-7 text-lg font-medium text-zinc-300 md:text-2xl">
          Computer Science Student <span className="text-netflix">|</span> GenAI Engineer <span className="text-netflix">|</span> Researcher
        </motion.p>
        <motion.p variants={reduceMotion ? undefined : fadeUp} className="mt-5 max-w-2xl text-base leading-7 text-zinc-500 md:text-lg">
          I design multimodal models, retrieval systems, and production-grade applications that turn frontier AI research into dependable user experiences.
        </motion.p>
        <motion.div variants={reduceMotion ? undefined : fadeUp} className="mt-10 flex flex-wrap gap-3">
          <GlowButton href="#projects" variant="secondary">View projects <ArrowRight className="size-4" /></GlowButton>
          <GlowButton href="/api/download/resume" download><Download className="size-4" /> Download resume</GlowButton>
          <GlowButton href="#contact" variant="outline"><Mail className="size-4" /> Contact me</GlowButton>
        </motion.div>
      </motion.div>
      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce rounded-full border border-white/10 p-3 text-zinc-500 hover:text-white md:block">
        <ArrowDown className="size-5" />
      </a>
    </section>
  );
}
