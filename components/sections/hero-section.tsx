"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Github } from "lucide-react";
import { BreathingScene } from "@/components/ui/breathing-scene";
import { GlowButton } from "@/components/ui/glow-button";

const rise = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="home" className="relative isolate min-h-[min(860px,100svh)] overflow-hidden bg-[#080B12] pt-[72px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_76%_40%,rgba(27,117,140,0.19),transparent_44%),radial-gradient(ellipse_at_10%_85%,rgba(151,46,52,0.08),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-3 opacity-45 md:block haori-checker" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#080B12] to-transparent" />
      <div className="container relative z-10 grid items-center gap-3 py-10 md:py-14 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.04fr_.96fr] lg:gap-2">
        <motion.div
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } } }}
          className="relative z-20 py-8 md:py-12 lg:py-16"
        >
          <motion.div variants={reduceMotion ? undefined : rise} className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2">
            <span className="size-2 rounded-full bg-[#60D6DE] shadow-[0_0_15px_rgba(96,214,222,.65)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C8D2DE]">AI engineering <span className="px-1 text-white/25">/</span> full-stack</span>
          </motion.div>
          <motion.h1 variants={reduceMotion ? undefined : rise} className="max-w-[760px] text-balance font-sans text-[clamp(3.15rem,6.2vw,6.2rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-[#F4F5F7]">
            <span className="block">AI, engineered.</span>
            <span className="hero-gradient-text mt-2 block">Products, shipped.</span>
          </motion.h1>
          <motion.p variants={reduceMotion ? undefined : rise} className="mt-7 max-w-xl text-base leading-7 text-[#A8B1C0] sm:text-lg sm:leading-8">
            I’m Giresh, a fourth-year CSE student at IIIT Sri City. I build AI agents, retrieval systems and full-stack applications that go beyond a model demo.
          </motion.p>
          <motion.div variants={reduceMotion ? undefined : rise} className="mt-6 flex flex-wrap gap-2">
            {["LLMs & RAG", "Applied ML", "React & APIs"].map((item) => (
              <span key={item} className="rounded-md border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-xs text-[#B9C4D0]">{item}</span>
            ))}
          </motion.div>
          <motion.div variants={reduceMotion ? undefined : rise} className="mt-8 flex flex-wrap gap-3">
            <GlowButton href="#projects" variant="default">Explore projects <ArrowRight className="size-4" /></GlowButton>
            <GlowButton href="https://github.com/Giresh-458" variant="outline"><Github className="size-4" /> GitHub</GlowButton>
          </motion.div>
          <motion.div variants={reduceMotion ? undefined : rise} className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-sm text-[#8995A5]">
            <span>IIIT Sri City</span><span className="hidden size-1 rounded-full bg-[#5FD1DA]/70 sm:block" />
            <span>Computer Science & Engineering</span>
            <a href="#about" className="group ml-auto inline-flex items-center gap-2 text-[#CAD4DE] transition hover:text-[#69D8E0]">More about me <ArrowDown className="size-4 transition group-hover:translate-y-1" /></a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.97, x: 10 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto -mt-2 w-full max-w-[620px] lg:-ml-5 lg:mt-0"
        ><BreathingScene /></motion.div>
      </div>
    </section>
  );
}
