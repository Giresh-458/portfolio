"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { researchTopics } from "@/lib/data";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export function AILabSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="ai-lab" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="The training ground" title="Study the technique. Engineer the system." description="A closer look at the building blocks behind agent workflows, retrieval systems, and multimodal applications." />
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={viewport}
          className="mission-card relative grid min-h-[440px] place-items-center overflow-hidden border border-[#879C7C]/20"
        >
          <div className="haori-stamp absolute right-0 top-0 size-12 border-b border-l border-[#879C7C]/30 opacity-60" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E85D47]/65 to-transparent" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 440 440" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="lab-water" x1="50" y1="65" x2="350" y2="350" gradientUnits="userSpaceOnUse">
                <stop stopColor="#CFE6C8"/><stop offset=".52" stopColor="#7FB486"/><stop offset="1" stopColor="#397D73"/>
              </linearGradient>
              <linearGradient id="lab-flame" x1="100" y1="400" x2="360" y2="60" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A92D32"/><stop offset=".55" stopColor="#E85D47"/><stop offset="1" stopColor="#F4BF6B"/>
              </linearGradient>
            </defs>
            <circle cx="220" cy="212" r="150" stroke="#9FB795" strokeOpacity=".14" strokeDasharray="3 10"/>
            <circle cx="220" cy="212" r="115" stroke="#E85D47" strokeOpacity=".16"/>
            <motion.path d="M42 207C69 105 159 70 239 99C307 123 345 192 314 243C284 296 199 306 151 262C108 222 128 163 183 156C231 150 271 180 255 213"
              stroke="url(#lab-water)" strokeWidth="12" strokeLinecap="round"
              animate={reduceMotion ? undefined : { pathLength: [0.2, 1, 0.2], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}/>
            <motion.path d="M118 363C165 328 184 281 194 239C204 199 236 173 259 145C263 189 300 204 308 242C319 291 281 330 241 348C268 315 266 289 248 270C229 251 205 261 195 285C184 310 161 343 118 363Z"
              stroke="url(#lab-flame)" strokeWidth="6" strokeLinejoin="round"
              animate={reduceMotion ? undefined : { pathLength: [0.12, 1, 0.12], opacity: [0.3, 0.95, 0.3] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}/>
            <path d="M95 333L325 95" stroke="#F3EEE3" strokeOpacity=".45" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <div className="relative z-10 mt-24 text-center">
            <span className="haori-stamp mx-auto grid size-16 place-items-center border border-[#9EB394]/45 font-display text-2xl font-black text-[#F3EEE3]">AI</span>
            <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.25em] text-[#A6C69E]">The system breathing cycle</p>
          </div>
          <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 border-y border-[#879C7C]/20 py-3">
            {["Retrieve", "Reason", "Act"].map((label, index) => (
              <div key={label} className={index === 1 ? "border-x border-[#879C7C]/20 text-center" : index === 0 ? "text-left" : "text-right"}>
                <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#AAB6A2] sm:text-[9px]">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={reduceMotion ? undefined : stagger}
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewport}
          className="grid gap-4 sm:grid-cols-2"
        >
          {researchTopics.map((topic) => (
            <motion.div key={topic.name} variants={reduceMotion ? undefined : fadeUp}>
              <GlassCard className="mission-card group relative h-full border border-[#879C7C]/15 p-6 transition hover:border-[#E85D47]/40">
                <topic.icon className="size-7 text-[#A4C69A] transition group-hover:scale-110 group-hover:text-[#E98565]" />
                <h3 className="mt-5 text-lg font-bold text-[#F3EEE3]">{topic.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#A5AA9D]">{topic.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
