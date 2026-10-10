"use client";
import { Boxes, BrainCircuit, Layers3 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { skillCategories } from "@/lib/data";

const categoryIcons = [BrainCircuit, Layers3, Boxes];
const summaries = [
  "Models, retrieval and reasoning workflows.",
  "The interfaces and APIs that turn ideas into products.",
  "Storage, tooling and deployment foundations."
];
const styles = [
  { name: "Water Breathing", japanese: "水の呼吸", color: "#39D8F3", number: "壱" },
  { name: "Hinokami Kagura", japanese: "ヒノカミ神楽", color: "#EC6255", number: "弐" },
  { name: "Stone Foundation", japanese: "土台", color: "#D9B079", number: "参" }
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell section-skills scroll-mt-20">
      <SectionHeader eyebrow="Breathing styles · 技" title="Different disciplines. One craft." description="The toolkit behind my work in AI systems, application engineering and the infrastructure that connects them." />
      <div className="grid gap-4 md:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = categoryIcons[index] ?? Boxes;
          const style = styles[index] ?? styles[2];
          return (
            <article key={category.title} className="slayer-panel group relative p-6 transition-all duration-300 hover:-translate-y-1 md:p-7" style={{ borderColor: style.color + "55" }}>
              <div className="absolute -right-8 -top-8 size-32 rounded-full blur-2xl opacity-[0.08]" style={{ background: style.color }} />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="font-serif text-lg" style={{ color: style.color }}>{style.japanese}</p>
                  <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.2em] text-[#80757B]">STYLE / 0{index + 1}</p>
                </div>
                <span className="font-serif text-4xl opacity-60" style={{ color: style.color }}>{style.number}</span>
              </div>
              <div className="relative mt-5 flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="grid size-10 place-items-center border bg-black/25" style={{ borderColor: style.color + "55", color: style.color }}><Icon className="size-5" /></span>
                <div><h3 className="text-lg font-semibold leading-tight text-[#F4E6D6]">{category.title}</h3><p className="mt-1 text-xs leading-5 text-[#AFA3A7]">{summaries[index]}</p></div>
              </div>
              <div className="relative mt-5 flex flex-wrap gap-2">{category.skills.map((skill) => <span key={skill.name} className="border border-white/[0.1] bg-black/25 px-2.5 py-1.5 text-xs text-[#C9BFC0] transition-colors group-hover:border-white/20">{skill.name}</span>)}</div>
              <div className="relative mt-7 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-[#8D8185]"><span className="h-px w-6" style={{ backgroundColor: style.color }} /> Technique record / {style.name}</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
