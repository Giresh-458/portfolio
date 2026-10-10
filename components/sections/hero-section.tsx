"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Github } from "lucide-react";
import { BreathingScene } from "@/components/ui/breathing-scene";
import { GlowButton } from "@/components/ui/glow-button";

const rise = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="home" className="relative isolate min-h-[min(900px,100svh)] overflow-hidden bg-[#07090F] pt-[72px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_79%_30%,rgba(169,49,53,.2),transparent_38%),radial-gradient(ellipse_at_68%_76%,rgba(35,140,167,.13),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D65350]/65 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-2 haori-checker opacity-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07090F] to-transparent" />
      <div className="container relative z-10 grid items-center gap-8 py-10 md:py-14 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[.82fr_1.18fr] lg:gap-5">
        <motion.div initial={reduceMotion ? undefined : "hidden"} animate={reduceMotion ? undefined : "visible"} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }} className="relative z-20 py-7 md:py-10 lg:py-16">
          <motion.div variants={reduceMotion ? undefined : rise} className="mb-7 flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center border border-[#D65350]/60 bg-[#D65350]/10 font-display text-xl text-[#F4D9C9]">鬼</span>
            <div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F08E79]">Demon Slayer inspired</p><p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[#8290A2]">AI / ML / Full-stack portfolio</p></div>
          </motion.div>
          <motion.h1 variants={reduceMotion ? undefined : rise} className="max-w-3xl font-display text-[clamp(3.5rem,7vw,6.5rem)] leading-[.86] tracking-[.01em] text-[#F6F0E8]">
            <span className="block">TOTAL</span><span className="hero-gradient-text mt-2 block">CONCENTRATION.</span><span className="mt-3 block text-[.48em] leading-[1.1] tracking-[.02em] text-[#E2E7ED]">AI ENGINEERING.</span>
          </motion.h1>
          <motion.p variants={reduceMotion ? undefined : rise} className="mt-7 max-w-xl text-base leading-7 text-[#A9B4C3] sm:text-lg sm:leading-8">
            I’m Giresh, a fourth-year CSE student at IIIT Sri City. I build AI agents, retrieval systems and full-stack products—from model experiments to useful applications.
          </motion.p>
          <motion.div variants={reduceMotion ? undefined : rise} className="mt-6 flex flex-wrap gap-2">{["LLMs & RAG", "Applied ML", "React & APIs"].map((item) => <span key={item} className="rounded-sm border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-[#CBD4DF]">{item}</span>)}</motion.div>
          <motion.div variants={reduceMotion ? undefined : rise} className="mt-8 flex flex-wrap gap-3">
            <GlowButton href="#projects" variant="default">Enter the project archive <ArrowRight className="size-4" /></GlowButton>
            <GlowButton href="https://github.com/Giresh-458" variant="outline"><Github className="size-4" /> GitHub</GlowButton>
          </motion.div>
          <motion.div variants={reduceMotion ? undefined : rise} className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-5 text-sm text-[#8390A0]">
            <span>IIIT Sri City</span><span className="size-1 rounded-full bg-[#D65350]" /><span>Computer Science & Engineering</span>
            <a href="#about" className="group ml-auto inline-flex items-center gap-2 text-[#C7D2DE] transition hover:text-[#65D7E0]">The story <ArrowDown className="size-4 transition group-hover:translate-y-1" /></a>
          </motion.div>
        </motion.div>
        <motion.div initial={reduceMotion ? undefined : { opacity: 0, y: 14, scale: 0.98 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }} className="relative z-10 mx-auto w-full max-w-[620px] lg:max-w-none">
          <BreathingScene />
        </motion.div>
      </div>
    </section>
  );
}
