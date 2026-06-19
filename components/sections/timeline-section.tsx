"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { timeline } from "@/lib/data";

export function TimelineSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="timeline" className="section-shell overflow-hidden scroll-mt-20">
      <SectionHeader eyebrow="Trajectory" title="Building toward frontier engineering." />
      <div className="no-scrollbar overflow-x-auto pb-8">
        <div className="relative flex min-w-[980px] gap-5 pt-10">
          <div className="absolute left-5 right-5 top-[3.25rem] h-px bg-white/10" />
          <motion.div
            initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 1.4, ease: "easeOut" }}
            className="absolute left-5 right-5 top-[3.25rem] h-px origin-left bg-netflix shadow-glow"
          />
          {timeline.map((item, index) => (
            <motion.article
              key={item.title}
              initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduceMotion ? 0 : index * 0.16 }}
              className="relative w-[180px] flex-1 pt-10"
            >
              <span className="absolute left-2 top-0 grid size-7 place-items-center rounded-full border-4 border-background bg-netflix font-mono text-[9px] text-white shadow-glow">
                {index + 1}
              </span>
              <p className="font-mono text-xs text-netflix">{item.period}</p>
              <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
