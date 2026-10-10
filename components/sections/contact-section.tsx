"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/lib/data";
import type { ContactFormValues } from "@/types";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Add a subject"),
  message: z.string().min(20, "Message should be at least 20 characters").max(1200, "Message is too long")
});

const inputClass = "w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white placeholder:text-zinc-700 transition focus:border-netflix focus:outline-none focus:ring-2 focus:ring-netflix/20";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const reduceMotion = useReducedMotion();
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: ContactFormValues) => {
    const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(values.subject)}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="Open channel" title="Let’s build the difficult thing." description="I’m interested in AI engineering internships, research collaborations, and product teams working on technically ambitious systems." />
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr]"
      >
        <GlassCard className="flex flex-col justify-between p-7 md:p-9">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-netflix">Direct links</p>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-white">Available for conversations that go somewhere.</h3>
            <p className="mt-4 leading-7 text-zinc-500">For internships, engineering roles, and technical collaborations, the simplest route is a direct message.</p>
          </div>
          <div className="mt-10 grid gap-3">
            {[
              { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
              { label: "GitHub", href: siteConfig.github, icon: Github },
            ].map((link) => (
              <a key={link.label} href={link.href} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300 transition hover:border-netflix/40 hover:bg-netflix/[0.05] hover:text-white">
                <link.icon className="size-4 text-netflix" /> {link.label}
              </a>
            ))}
          </div>
        </GlassCard>
        <GlassCard className="p-7 md:p-9">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-zinc-300">
                Name
                <input {...register("name")} className={inputClass} placeholder="Your name" aria-invalid={Boolean(errors.name)} />
                {errors.name ? <span className="text-xs text-netflix">{errors.name.message}</span> : null}
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-300">
                Email
                <input {...register("email")} type="email" className={inputClass} placeholder="you@company.com" aria-invalid={Boolean(errors.email)} />
                {errors.email ? <span className="text-xs text-netflix">{errors.email.message}</span> : null}
              </label>
            </div>
            <label className="grid gap-2 text-sm font-medium text-zinc-300">
              Subject
              <input {...register("subject")} className={inputClass} placeholder="Research, internship, or product collaboration" aria-invalid={Boolean(errors.subject)} />
              {errors.subject ? <span className="text-xs text-netflix">{errors.subject.message}</span> : null}
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-300">
              Message
              <textarea {...register("message")} rows={6} className={inputClass} placeholder="Tell me what you’re building and where I can contribute." aria-invalid={Boolean(errors.message)} />
              {errors.message ? <span className="text-xs text-netflix">{errors.message.message}</span> : null}
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <Button type="submit" size="lg"><Send className="size-4" /> Send message</Button>
              {sent ? <p role="status" className="text-sm text-emerald-400">Your email client is ready.</p> : null}
            </div>
          </form>
        </GlassCard>
      </motion.div>
    </section>
  );
}
