"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, CheckCheck, Code2, Route } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { viewport } from "@/lib/motion";

const stages = [
  { number: "01", title: "Understand", subtitle: "Start with the real problem.", detail: "Clarify the user, constraints, and what a useful result should look like before choosing a framework or model.", icon: BrainCircuit },
  { number: "02", title: "Design", subtitle: "Choose a system that fits.", detail: "Break the work into components, map the data flow, and make failure paths visible—not just the happy path.", icon: Route },
  { number: "03", title: "Build", subtitle: "Connect the pieces.", detail: "Bring models, APIs, interfaces, and persistence together into something people can actually use.", icon: Code2 },
  { number: "04", title: "Validate", subtitle: "Test the important edges.", detail: "Check assumptions, handle errors, document trade-offs, and report only results that can be supported.", icon: CheckCheck }
];

export function TimelineSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="approach" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="Approach" title="How I approach a build." description="A repeatable engineering process, from an initial question through implementation, testing, and iteration." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <motion.article
              key={stage.number}
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.06 }}
              className="portfolio-panel rounded-2xl p-5 sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-lg bg-[#F1C75B]/10 text-[#F1C75B]"><Icon className="size-5" /></span>
                <span className="text-xs tabular-nums text-[#77766F]">{stage.number}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-[#F0EFE9]">{stage.title}</h3>
              <p className="mt-1 text-sm font-medium text-[#D7D6CF]">{stage.subtitle}</p>
              <p className="mt-3 text-sm leading-6 text-[#A7A69F]">{stage.detail}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
