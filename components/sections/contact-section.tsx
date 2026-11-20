"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { siteConfig } from "@/lib/data";
import type { ContactFormValues } from "@/types";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Add a subject"),
  message: z.string().min(20, "Message should be at least 20 characters").max(1200, "Message is too long")
});

const inputClass =
  "w-full rounded-[2px] border border-[rgba(150,200,195,.18)] bg-[#070a0e] px-3.5 py-3 text-[14px] text-ink placeholder:text-[#4a5a5e] transition focus:border-signal/60 focus:outline-none";
const labelClass = "grid gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const reduceMotion = useReducedMotion();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactFormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: ContactFormValues) => {
    const body = encodeURIComponent(values.message + "\n\nFrom: " + values.name + " (" + values.email + ")");
    window.location.href =
      "mailto:" + siteConfig.email + "?subject=" + encodeURIComponent(values.subject) + "&body=" + body;
    setSent(true);
  };

  const channels = [
    { label: "email", value: siteConfig.email, href: "mailto:" + siteConfig.email, icon: Mail },
    { label: "github", value: "Giresh-458", href: siteConfig.github, icon: Github },
    { label: "linkedin", value: "giresh-komal-velaga", href: siteConfig.linkedin, icon: Linkedin }
  ];

  return (
    <section id="contact" className="shell scroll-mt-16 border-t border-[rgba(150,200,195,.08)]">
      <div className="shell-inner">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="mono-label mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-signal/60" /> contact
            </p>
            <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ink">
              Building agents?
              <br /> Let&rsquo;s talk.
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-[1.75] text-ink-dim">
              Open to agent engineering and AI backend roles. If you are working on retrieval,
              evaluation or agent reliability, I would like to hear about it.
            </p>

            <div className="mt-8 grid gap-px border-t border-[rgba(150,200,195,.1)]">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group flex items-center gap-3 border-b border-[rgba(150,200,195,.1)] py-3.5"
                  >
                    <Icon className="size-4 shrink-0 text-muted transition group-hover:text-signal" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#3d4d51] transition group-hover:text-signal">
                      {channel.label}
                    </span>
                    <span className="ml-auto truncate text-[13px] text-ink-dim transition group-hover:text-ink">
                      {channel.value}
                    </span>
                    <ArrowUpRight className="size-3.5 shrink-0 text-[#3d4d51] transition group-hover:text-signal" />
                  </a>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="ticked panel p-6 md:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="mono-label">send a message</p>
              <span className="mono-label flex items-center gap-2">
                <span className="signal-dot" /> direct
              </span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className={labelClass}>
                  name
                  <input {...register("name")} className={inputClass} placeholder="Your name" aria-invalid={Boolean(errors.name)} />
                  {errors.name ? <span className="text-[11px] normal-case tracking-normal text-alert">{errors.name.message}</span> : null}
                </label>
                <label className={labelClass}>
                  email
                  <input {...register("email")} type="email" className={inputClass} placeholder="you@company.com" aria-invalid={Boolean(errors.email)} />
                  {errors.email ? <span className="text-[11px] normal-case tracking-normal text-alert">{errors.email.message}</span> : null}
                </label>
              </div>
              <label className={labelClass}>
                subject
                <input {...register("subject")} className={inputClass} placeholder="Role, internship, or collaboration" aria-invalid={Boolean(errors.subject)} />
                {errors.subject ? <span className="text-[11px] normal-case tracking-normal text-alert">{errors.subject.message}</span> : null}
              </label>
              <label className={labelClass}>
                message
                <textarea {...register("message")} rows={5} className={inputClass} placeholder="What are you building, and where would I fit?" aria-invalid={Boolean(errors.message)} />
                {errors.message ? <span className="text-[11px] normal-case tracking-normal text-alert">{errors.message.message}</span> : null}
              </label>

              <div className="mt-1 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-[3px] bg-signal px-5 py-3 text-sm font-semibold text-[#04100a] transition hover:bg-[#96ffc0]"
                >
                  <Send className="size-4" /> Send message
                </button>
                {sent ? (
                  <p role="status" className="font-mono text-[10px] uppercase tracking-[0.14em] text-signal">
                    email client opened
                  </p>
                ) : null}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
