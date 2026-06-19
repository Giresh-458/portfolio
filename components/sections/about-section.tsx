"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { SectionHeader } from "@/components/ui/section-header";
import { TechBadge } from "@/components/ui/tech-badge";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import { stats } from "@/lib/data";

const skillPreview = ["Generative AI", "Multimodal Learning", "RAG", "MLOps", "Next.js", "System Design"];

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="Featured profile" title="Research mindset. Product discipline." description="I work where machine learning research meets the constraints of real software: noisy data, latency budgets, evaluation gaps, and users who expect the system to simply work." />
      <motion.div
        variants={reduceMotion ? undefined : stagger}
        initial={reduceMotion ? undefined : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={viewport}
        className="grid overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-card lg:grid-cols-[0.85fr_1.15fr]"
      >
        <motion.div variants={reduceMotion ? undefined : fadeUp} className="relative min-h-[420px] overflow-hidden">
          <Image src="/profile.svg" alt="Profile portrait placeholder for Aryan Mehta" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-netflix">Now building</p>
            <p className="mt-2 text-xl font-bold text-white">Reliable multimodal intelligence</p>
          </div>
        </motion.div>
        <motion.div variants={reduceMotion ? undefined : fadeUp} className="flex flex-col justify-center p-7 md:p-12">
          <h3 className="text-3xl font-black tracking-tight text-white md:text-4xl">Engineering AI beyond the demo.</h3>
          <p className="mt-5 leading-8 text-zinc-400">
            I am a third-year Computer Science student specializing in generative AI, LLM systems, computer vision, and full-stack engineering. My work spans multimodal emotion recognition, geospatial learning, agentic workflows, and production web platforms.
          </p>
          <p className="mt-4 leading-8 text-zinc-400">
            My goal is to join a team solving ambitious intelligence problems at scale—contributing equal parts experimental rigor, systems thinking, and a sharp instinct for the product experience.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {skillPreview.map((skill) => <TechBadge key={skill}>{skill}</TechBadge>)}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-xs leading-5 text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
