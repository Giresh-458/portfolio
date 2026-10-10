"use client";
import { Boxes, BrainCircuit, Layers3 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { skillCategories } from "@/lib/data";

const categoryIcons = [BrainCircuit, Layers3, Boxes];
const summaries = ["Models, retrieval and reasoning workflows.", "The interfaces and APIs that turn ideas into products.", "Storage, tooling and deployment foundations."];

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="Technical toolkit" title="A practical stack across AI and software." description="The tools I use to experiment, build applications and connect the pieces into a working system." />
      <div className="grid gap-4 md:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = categoryIcons[index] ?? Boxes;
          return (
            <article key={category.title} className="group rounded-2xl border border-white/[0.085] bg-[#0D131E] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#54CBD4]/35 md:p-7">
              <div className="flex items-center justify-between gap-4"><span className="grid size-11 place-items-center rounded-xl border border-[#54CBD4]/20 bg-[#54CBD4]/[0.07] text-[#67D8E0]"><Icon className="size-5" /></span><span className="font-mono text-[10px] text-[#607183]">0{index + 1}</span></div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-[#E9EDF2]">{category.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-[#929EAF]">{summaries[index]}</p>
              <div className="mt-5 flex flex-wrap gap-2">{category.skills.map((skill) => <span key={skill.name} className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 text-xs text-[#B9C5D2] transition-colors group-hover:border-white/[0.12]">{skill.name}</span>)}</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
