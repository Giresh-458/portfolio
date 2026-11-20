"use client";

import { skillCategories } from "@/lib/data";

const groupNotes = [
  "the models and the retrieval around them",
  "the interfaces and APIs that ship it",
  "storage, tooling, and how it runs"
];

export function SkillsSection() {
  return (
    <section id="stack" className="section">
      <div className="wrap">
        <p className="section-index">04 — apparatus</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="display text-[clamp(2.1rem,4.4vw,3.4rem)] text-ink">
              What I reach
              <br />
              for, and why.
            </h2>
            <p className="body-text mt-7 max-w-[24rem] text-ink-faint">
              Tools I have shipped with, grouped by the job they do rather than by how they look on
              a résumé.
            </p>
          </div>

          <div>
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="reveal grid gap-3 border-t border-[var(--rule)] py-6 sm:grid-cols-[11rem_1fr] sm:gap-8"
                style={{ ["--d" as string]: `${index * 60}ms` }}
              >
                <div>
                  <span className="mono">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1.5 font-serif text-[1.2rem] leading-tight text-ink">{category.title}</h3>
                  <p className="mt-1 text-[0.8rem] leading-[1.5] text-ink-faint">{groupNotes[index]}</p>
                </div>
                <ul className="flex flex-wrap content-start gap-x-3 gap-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="font-mono text-[11px] tracking-[0.02em] text-ink-soft"
                    >
                      {skill.name}
                      <span className="ml-3 text-ink-faint/50">·</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="border-t border-[var(--rule-strong)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
