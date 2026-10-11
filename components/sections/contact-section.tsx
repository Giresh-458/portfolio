"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Github, Mail, Send } from "lucide-react";
import { z } from "zod";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/lib/data";
import type { ContactFormValues } from "@/types";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Add a subject"),
  message: z.string().min(20, "Message should be at least 20 characters").max(1200, "Message is too long")
});

const inputClass = "w-full rounded-lg border border-white/12 bg-[#111113] px-4 py-3.5 text-sm text-[#F2F1EB] placeholder:text-[#77766F] transition focus:border-[#F1C75B]/70 focus:outline-none focus:ring-2 focus:ring-[#F1C75B]/10";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: ContactFormValues) => {
    const body = encodeURIComponent(values.message + "\n\nFrom: " + values.name + " (" + values.email + ")");
    window.location.href = "mailto:" + siteConfig.email + "?subject=" + encodeURIComponent(values.subject) + "&body=" + body;
    setSent(true);
  };

  return (
    <section id="contact" className="section-shell scroll-mt-20">
      <SectionHeader eyebrow="Contact" title="Let’s talk about what you’re building." description="For AI engineering opportunities, internships, research, or product collaboration, send a note with a little context." />
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="portfolio-panel rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-semibold tracking-tight text-[#F1F0EA]">Get in touch</h3>
          <p className="mt-3 text-sm leading-6 text-[#A7A69F]">I’m interested in thoughtful engineering problems and teams that care about building reliable software.</p>
          <div className="mt-7 space-y-3">
            <a href={"mailto:" + siteConfig.email} className="flex items-center gap-3 rounded-lg border border-white/10 p-4 text-sm text-[#D8D7D0] transition hover:border-[#F1C75B]/40 hover:text-[#F1C75B]"><Mail className="size-4" /><span className="break-all">{siteConfig.email}</span></a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-white/10 p-4 text-sm text-[#D8D7D0] transition hover:border-[#F1C75B]/40 hover:text-[#F1C75B]"><Github className="size-4" /> GitHub profile <span className="ml-auto text-xs text-[#77766F]">↗</span></a>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="portfolio-panel grid gap-5 rounded-2xl p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-[#D8D7D0]">Name<input {...register("name")} className={inputClass} placeholder="Your name" aria-invalid={Boolean(errors.name)} />{errors.name ? <span className="text-xs text-rose-300">{errors.name.message}</span> : null}</label>
            <label className="grid gap-2 text-sm font-medium text-[#D8D7D0]">Email<input {...register("email")} type="email" className={inputClass} placeholder="you@company.com" aria-invalid={Boolean(errors.email)} />{errors.email ? <span className="text-xs text-rose-300">{errors.email.message}</span> : null}</label>
          </div>
          <label className="grid gap-2 text-sm font-medium text-[#D8D7D0]">Subject<input {...register("subject")} className={inputClass} placeholder="Role, research, or collaboration" aria-invalid={Boolean(errors.subject)} />{errors.subject ? <span className="text-xs text-rose-300">{errors.subject.message}</span> : null}</label>
          <label className="grid gap-2 text-sm font-medium text-[#D8D7D0]">Message<textarea {...register("message")} rows={5} className={inputClass} placeholder="A few details about what you have in mind…" aria-invalid={Boolean(errors.message)} />{errors.message ? <span className="text-xs text-rose-300">{errors.message.message}</span> : null}</label>
          <div className="flex flex-wrap items-center gap-4"><button type="submit" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#F1C75B] px-5 py-3 text-sm font-semibold text-[#17160F] transition hover:bg-[#FFDA76]"><Send className="size-4" /> Open email draft</button>{sent ? <p role="status" className="text-sm text-[#F1C75B]">Your email app should open with the message prepared.</p> : null}</div>
        </form>
      </div>
    </section>
  );
}
