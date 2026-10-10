"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Mail, Send } from "lucide-react";
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
const inputClass = "w-full rounded-xl border border-white/10 bg-[#080B12]/70 px-4 py-3.5 text-sm text-white placeholder:text-[#687487] transition focus:border-netflix focus:outline-none focus:ring-2 focus:ring-netflix/20";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const reduceMotion = useReducedMotion();
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({ resolver: zodResolver(schema) });
  const onSubmit = (values: ContactFormValues) => {
    const body = encodeURIComponent(values.message + "\n\nFrom: " + values.name + " (" + values.email + ")");
    window.location.href = "mailto:" + siteConfig.email + "?subject=" + encodeURIComponent(values.subject) + "&body=" + body;
    setSent(true);
  };

  return (
    <section id="contact" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="Get in touch" title="Have a problem worth solving?" description="For AI engineering opportunities, internships, research and product collaborations, send a message and tell me what you’re building." />
      <motion.div initial={reduceMotion ? undefined : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="grid gap-5 lg:grid-cols-[.7fr_1.3fr]">
        <GlassCard className="flex flex-col justify-between rounded-2xl border border-white/[0.085] bg-[#0D131E] p-7 md:p-9">
          <div><p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#62D5DE]">Direct links</p><h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">Let’s talk about the work.</h3><p className="mt-4 leading-7 text-[#929EAF]">For a role, a technical question or an ambitious idea, email is the simplest way to reach me.</p></div>
          <div className="mt-10 grid gap-3">{[{ label: "Email", href: "mailto:" + siteConfig.email, icon: Mail }, { label: "GitHub", href: siteConfig.github, icon: Github }].map((link) => <a key={link.label} href={link.href} className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3.5 text-sm text-[#C5CED9] transition hover:border-[#54CBD4]/35 hover:text-white"><link.icon className="size-4 text-[#62D5DE]" /> {link.label}</a>)}</div>
        </GlassCard>
        <GlassCard className="rounded-2xl border border-white/[0.085] bg-[#0D131E] p-7 md:p-9">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-[#CDD5DF]">Name<input {...register("name")} className={inputClass} placeholder="Your name" aria-invalid={Boolean(errors.name)} />{errors.name ? <span className="text-xs text-rose-400">{errors.name.message}</span> : null}</label>
              <label className="grid gap-2 text-sm font-medium text-[#CDD5DF]">Email<input {...register("email")} type="email" className={inputClass} placeholder="you@company.com" aria-invalid={Boolean(errors.email)} />{errors.email ? <span className="text-xs text-rose-400">{errors.email.message}</span> : null}</label>
            </div>
            <label className="grid gap-2 text-sm font-medium text-[#CDD5DF]">Subject<input {...register("subject")} className={inputClass} placeholder="Internship, role or collaboration" aria-invalid={Boolean(errors.subject)} />{errors.subject ? <span className="text-xs text-rose-400">{errors.subject.message}</span> : null}</label>
            <label className="grid gap-2 text-sm font-medium text-[#CDD5DF]">Message<textarea {...register("message")} rows={6} className={inputClass} placeholder="Tell me what you’re building and where I can contribute." aria-invalid={Boolean(errors.message)} />{errors.message ? <span className="text-xs text-rose-400">{errors.message.message}</span> : null}</label>
            <div className="flex flex-wrap items-center gap-4"><Button type="submit" size="lg"><Send className="size-4" /> Send message</Button>{sent ? <p role="status" className="text-sm text-emerald-300">Your email client is ready.</p> : null}</div>
          </form>
        </GlassCard>
      </motion.div>
    </section>
  );
}
