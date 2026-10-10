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
const inputClass = "w-full border border-[#E7C6AF]/20 bg-[#07070B]/80 px-4 py-3.5 text-sm text-white placeholder:text-[#84787D] transition focus:border-[#39D8F3] focus:outline-none focus:ring-2 focus:ring-[#39D8F3]/15";

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
    <section id="contact" className="section-shell section-contact scroll-mt-20">
      <SectionHeader eyebrow="Send a Kasugai crow · 鎹鴉" title="An interesting mission?" description="For AI engineering opportunities, internships, research or product collaboration—send the details and let’s talk about the work." />
      <motion.div initial={reduceMotion ? undefined : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} className="grid gap-5 lg:grid-cols-[.7fr_1.3fr]">
        <GlassCard className="slayer-panel crow-dispatch flex flex-col justify-between p-7 md:p-9">
          <div>
            <div className="relative mb-7 flex h-[124px] items-center justify-center overflow-hidden border-b border-[#E7C6AF]/12">
              <div className="crow-moon absolute right-[18%] top-1 size-24 rounded-full" />
              <motion.svg className="relative z-10 h-[125px] w-full max-w-[330px]" viewBox="0 0 360 140" fill="none" aria-label="Kasugai crow messenger illustration" role="img" animate={reduceMotion ? undefined : { y: [0, -3, 0], rotate: [0, .5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                <path d="M66 113C113 96 147 86 179 89C202 89 224 102 249 103" stroke="#8E6870" strokeOpacity=".55" strokeWidth="2"/>
                <path d="M108 100C87 84 80 61 98 42C117 24 149 34 162 52C175 69 171 84 153 91L144 108Z" fill="#090A10" stroke="#6B555E" strokeWidth="1.5"/>
                <path d="M115 57C96 38 96 20 111 13C135 25 147 37 148 52L165 64L147 82L132 78Z" fill="#17141E" stroke="#705460" strokeWidth="1.5"/>
                <path d="M145 47L194 57L166 69L148 62Z" fill="#D9A36F"/>
                <circle cx="144" cy="48" r="3.5" fill="#F3C96B"/><circle cx="145" cy="48" r="1.5" fill="#08080E"/>
                <path d="M112 75C78 84 69 106 89 117C107 126 137 116 149 95" fill="#10121A" stroke="#6B555E" strokeWidth="1.3"/>
                <path d="M97 96L80 116L110 107L125 92" fill="#211B27" stroke="#6B555E" strokeWidth="1.3"/>
                <path d="M126 102L124 121M143 101L149 119" stroke="#D9A36F" strokeWidth="3" strokeLinecap="round"/>
                <path d="M200 75L242 51L261 74L233 101Z" fill="#EEDCC8" stroke="#A9877D" strokeWidth="1.4"/>
                <path d="M211 75L232 91L251 63" stroke="#B73B47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M203 76L233 91L260 72" stroke="#A9877D" strokeWidth="1.3" strokeLinecap="round"/>
                <motion.path d="M274 42C292 22 311 33 300 48C291 60 272 56 274 42ZM302 57C326 38 342 55 325 68C311 78 296 70 302 57Z" fill="#E96B8B" fillOpacity=".75" animate={reduceMotion ? undefined : { x: [0, 8, -2, 0], y: [0, -5, 4, 0], opacity: [.45, .95, .55, .45] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}/>
              </motion.svg>
              <span className="absolute bottom-2 left-0 font-mono text-[8px] uppercase tracking-[.22em] text-[#8E7B83]">Crow dispatch / outgoing message</span>
            </div>
            <p className="font-mono text-[9px] uppercase tracking-[.22em] text-[#F17477]">Direct channels / 01</p>
            <h3 className="mt-4 font-display text-3xl uppercase leading-tight text-[#F2E3D2] md:text-4xl">Let’s talk about the work.</h3>
            <p className="mt-4 leading-7 text-[#B3A8AB]">For a role, a technical question or an ambitious idea, email is the simplest way to reach me.</p>
          </div>
          <div className="mt-10 grid gap-3">{[{ label: "Email", href: "mailto:" + siteConfig.email, icon: Mail }, { label: "GitHub", href: siteConfig.github, icon: Github }].map((link) => <a key={link.label} href={link.href} className="flex items-center gap-3 border border-[#E7C6AF]/15 bg-black/25 px-4 py-3.5 text-sm text-[#D6C9C7] transition hover:border-[#D93645]/60 hover:text-white"><link.icon className="size-4 text-[#44D5ED]" /> {link.label}<span className="ml-auto font-mono text-[8px] uppercase tracking-[.18em] text-[#83747A]">Open ↗</span></a>)}</div>
        </GlassCard>
        <GlassCard className="slayer-panel p-7 md:p-9">
          <div className="mb-6 flex items-center justify-between"><p className="font-mono text-[9px] uppercase tracking-[.2em] text-[#F17477]">Message scroll / 02</p><span className="font-serif text-2xl text-[#D93645]">文</span></div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-[#D6C9C7]">Name<input {...register("name")} className={inputClass} placeholder="Your name" aria-invalid={Boolean(errors.name)} />{errors.name ? <span className="text-xs text-rose-300">{errors.name.message}</span> : null}</label>
              <label className="grid gap-2 text-sm font-medium text-[#D6C9C7]">Email<input {...register("email")} type="email" className={inputClass} placeholder="you@company.com" aria-invalid={Boolean(errors.email)} />{errors.email ? <span className="text-xs text-rose-300">{errors.email.message}</span> : null}</label>
            </div>
            <label className="grid gap-2 text-sm font-medium text-[#D6C9C7]">Subject<input {...register("subject")} className={inputClass} placeholder="Internship, role or collaboration" aria-invalid={Boolean(errors.subject)} />{errors.subject ? <span className="text-xs text-rose-300">{errors.subject.message}</span> : null}</label>
            <label className="grid gap-2 text-sm font-medium text-[#D6C9C7]">Message<textarea {...register("message")} rows={5} className={inputClass} placeholder="Tell me what you’re building and where I can contribute." aria-invalid={Boolean(errors.message)} />{errors.message ? <span className="text-xs text-rose-300">{errors.message.message}</span> : null}</label>
            <div className="flex flex-wrap items-center gap-4"><Button type="submit" size="lg"><Send className="size-4" /> Send message</Button>{sent ? <p role="status" className="text-sm text-emerald-300">Your email client is ready.</p> : null}</div>
          </form>
        </GlassCard>
      </motion.div>
    </section>
  );
}
