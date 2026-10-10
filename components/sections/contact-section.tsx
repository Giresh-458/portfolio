"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Mail, Send } from "lucide-react";
import Image from "next/image";
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
        <GlassCard className="slayer-panel crow-dispatch flex flex-col justify-between p-6 md:p-8">
          <div>
            <div className="crow-flight-scene relative mb-7 overflow-hidden border-y border-[#E7C6AF]/15">
              <motion.div
                aria-hidden="true"
                className="absolute -inset-[2%]"
                animate={reduceMotion ? undefined : { scale: [1.02, 1.055, 1.02], x: [0, -3, 0], y: [0, -2, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/kasugai-crow-dispatch.webp"
                  alt=""
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="crow-scene-art object-cover object-center"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,12,.25),transparent_30%,rgba(7,7,12,.10)_60%,rgba(7,7,12,.83))]" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,12,.34),transparent_34%,transparent_76%,rgba(7,7,12,.18))]" />
              <motion.span
                className="dispatch-petal absolute left-[18%] top-[28%] h-2.5 w-4"
                animate={reduceMotion ? undefined : { x: [0, 36, 72], y: [0, 24, 43], rotate: [0, 100, 220], opacity: [0, .9, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                className="dispatch-petal absolute right-[18%] top-[21%] h-2 w-3.5"
                animate={reduceMotion ? undefined : { x: [0, -25, -54], y: [0, 30, 58], rotate: [0, -120, -250], opacity: [0, .8, 0] }}
                transition={{ duration: 7.5, delay: 2.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                className="dispatch-petal absolute left-[55%] top-[14%] h-2 w-3"
                animate={reduceMotion ? undefined : { x: [0, 24, 7], y: [0, 42, 78], rotate: [0, 170, 340], opacity: [0, .9, 0] }}
                transition={{ duration: 9, delay: .8, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute left-3 top-3 flex items-center gap-2 border border-[#E8D3C6]/25 bg-[#08080D]/65 px-2.5 py-1.5 backdrop-blur-sm sm:left-4 sm:top-4">
                <span className="size-1.5 rounded-full bg-[#E8595C] shadow-[0_0_12px_rgba(232,89,92,.8)]" />
                <span className="font-mono text-[8px] uppercase tracking-[.2em] text-[#F0DED0]">Kasugai crow / in flight</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 px-3 pb-3 pt-12 sm:px-4 sm:pb-4">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[.23em] text-[#F0AFB8]">Demon Slayer Corps · 鎹鴉</p>
                  <p className="mt-1.5 font-display text-2xl uppercase leading-none text-[#FFF0E1] drop-shadow-lg sm:text-3xl">A message awaits.</p>
                </div>
                <span className="shrink-0 border border-[#E9D5C4]/30 bg-[#08080D]/65 px-2 py-1.5 font-mono text-[8px] uppercase tracking-[.17em] text-[#E8D5C7] backdrop-blur-sm">Dispatch / 01</span>
              </div>
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
