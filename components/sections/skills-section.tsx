"use client";

import { skillCategories } from "@/lib/data";

const groupNotes = [
  "the models and the retrieval around them",
  "the interfaces and APIs that ship it",
  "storage, tooling and how it runs"
];

export function SkillsSection() {

  return (
    <section id="stack" className="shell scroll-mt-16">
      <div className="shell-inner">
        <div className="mb-12 max-w-xl">
          <p className="mono-label mb-4 flex items-center gap-3">
            <span className="h-px w-7 bg-signal/60" /> toolchain
          </p>
          <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ink">
            What I reach for,
            <br /> and what I use it for.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="reveal ticked panel panel-hover flex flex-col p-6"
              style={{ ["--d" as string]: `${index * 60}ms` }}
            >
              <span className="font-mono text-[10px] tracking-[0.16em] text-[#3d4d51]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[15px] font-medium text-ink">{category.title}</h3>
              <p className="mt-1.5 text-[12.5px] leading-[1.6] text-muted">{groupNotes[index]}</p>

              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-[rgba(150,200,195,.1)] pt-5">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-[2px] border border-[rgba(150,200,195,.14)] bg-[rgba(123,241,168,.03)] px-2.5 py-1 font-mono text-[10.5px] text-ink-dim transition-colors hover:border-signal/40 hover:text-signal"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
