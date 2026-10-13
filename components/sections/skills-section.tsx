"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Boxes, BrainCircuit, Layers3 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { corpsScenes } from "@/lib/anime-art";
import { AnimeSceneBackdrop } from "@/components/ui/anime-scene-backdrop";
import { skillCategories } from "@/lib/data";

const categoryIcons = [BrainCircuit, Layers3, Boxes];
const summaries = [
  "Models, retrieval and reasoning workflows.",
  "The interfaces and APIs that turn ideas into products.",
  "Storage, tooling and deployment foundations."
];
const styles = [
  { name: "Water Breathing", japanese: "水の呼吸", color: "#659FC5", number: "壱", paths: ["M-20 105L42 44L29 87L106 15L91 66L172 30L156 78L232 43L215 89L362 12", "M-12 48L52 78L88 38L145 93L191 54L248 103L304 62L362 91"] },
  { name: "Flame Breathing", japanese: "炎の呼吸", color: "#D34A59", number: "弐", paths: ["M8 131L70 91L58 70L125 24L112 65L197 40L180 79L264 54L247 91L343 33", "M-5 24L73 58L104 36L159 77L201 51L249 87L310 57L365 75"] },
  { name: "Insect Breathing", japanese: "蟲の呼吸", color: "#9F88C8", number: "参", paths: ["M-5 24L50 58L86 12L125 73L166 25L212 75L254 34L299 86L356 41", "M-10 109L47 83L93 119L142 80L195 118L240 84L291 120L362 96"] }
];

export function SkillsSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="skills" className="section-shell section-skills scroll-mt-20">
      <SectionHeader eyebrow="Breathing styles · 呼吸" title="Different disciplines. One craft." description="The tools behind my AI systems, full-stack products and reliable infrastructure." />
      <div className="grid gap-4 md:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = categoryIcons[index] ?? Boxes;
          const style = styles[index] ?? styles[2];
          return (
            <motion.article key={category.title} initial={reduceMotion ? undefined : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .45, delay: reduceMotion ? 0 : index * .08 }} whileHover={reduceMotion ? undefined : { y: -6 }} className="breathing-style-card group relative overflow-hidden border p-6 md:p-7" style={{ borderColor: style.color + "55", ["--style-color" as string]: style.color }}>
              <div className="style-art pointer-events-none absolute inset-x-0 top-0 h-48 overflow-hidden">
                <AnimeSceneBackdrop scene={corpsScenes[index] ?? corpsScenes[0]} className="absolute inset-0" />
                <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-black/10 via-black/35 to-[#080A10]/95" />
                <div aria-hidden="true" className="absolute inset-x-5 bottom-3 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              </div>
              <div className="relative flex items-start justify-between gap-4">
                <div><p className="font-serif text-xl" style={{ color: style.color }}>{style.japanese}</p><p className="mt-2 font-mono text-[8px] uppercase tracking-[0.2em] text-[#80757B]">STYLE / 0{index + 1}</p></div>
                <span className="font-serif text-4xl opacity-65" style={{ color: style.color }}>{style.number}</span>
              </div>
              <div className="relative mt-20 flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="grid size-10 shrink-0 place-items-center border bg-black/35" style={{ borderColor: style.color + "55", color: style.color }}><Icon className="size-5" /></span>
                <div><h3 className="text-lg font-semibold leading-tight text-[#F4E6D6]">{category.title}</h3><p className="mt-1 text-xs leading-5 text-[#AFA3A7]">{summaries[index]}</p></div>
              </div>
              <div className="relative mt-5 flex flex-wrap gap-2">{category.skills.map((skill) => <span key={skill.name} className="border border-white/10 bg-black/35 px-2.5 py-1.5 text-xs text-[#C9BFC0] transition-colors group-hover:border-white/20">{skill.name}</span>)}</div>
              <div className="relative mt-7 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-[#8D8185]"><span className="h-px w-6" style={{ backgroundColor: style.color }} /> Corps record / {style.name}</div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
