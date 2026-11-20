"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
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
  "w-full border-0 border-b border-[var(--rule-strong)] bg-transparent px-0 py-2.5 font-mono text-[12px] text-ink placeholder:text-ink-faint/60 transition-colors focus:border-vermilion focus:outline-none";
const labelClass = "grid gap-1 font-mono text-[9.5px] uppercase tracking-[0.15em] text-ink-faint";

export function ContactSection() {
  const [sent, setSent] = useState(false);
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
    { label: "email", value: siteConfig.email, href: "mailto:" + siteConfig.email },
    { label: "github", value: "github.com/Giresh-458", href: siteConfig.github },
    { label: "linkedin", value: "in/giresh-komal-velaga", href: siteConfig.linkedin }
  ];

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <p className="section-index">06 — correspondence</p>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div>
            <h2 className="display max-w-[16ch] text-[clamp(2.1rem,4.4vw,3.4rem)] text-ink">
              Building agents? Let&rsquo;s talk.
            </h2>
            <p className="body-text mt-7 max-w-[26rem]">
              Open to agent engineering and AI backend roles. If you work on retrieval, evaluation,
              or agent reliability, I would like to hear about it.
            </p>

            <dl className="mt-9 border-t border-[var(--rule-strong)]">
              {channels.map((channel) => (
                <div key={channel.label} className="border-b border-[var(--rule)]">
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group flex items-baseline justify-between gap-4 py-3.5"
                  >
                    <dt className="mono">{channel.label}</dt>
                    <dd className="flex items-center gap-2 font-mono text-[11.5px] text-ink-soft transition-colors group-hover:text-vermilion">
                      {channel.value}
                      <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </dd>
                  </a>
                </div>
              ))}
            </dl>
          </div>

          <div className="reveal">
            <p className="mono mb-6">or send a note</p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className={labelClass}>
                  name
                  <input {...register("name")} className={inputClass} placeholder="your name" aria-invalid={Boolean(errors.name)} />
                  {errors.name ? <span className="mt-1 font-mono text-[10px] normal-case tracking-normal text-vermilion">{errors.name.message}</span> : null}
                </label>
                <label className={labelClass}>
                  email
                  <input {...register("email")} type="email" className={inputClass} placeholder="you@company.com" aria-invalid={Boolean(errors.email)} />
                  {errors.email ? <span className="mt-1 font-mono text-[10px] normal-case tracking-normal text-vermilion">{errors.email.message}</span> : null}
                </label>
              </div>
              <label className={labelClass}>
                subject
                <input {...register("subject")} className={inputClass} placeholder="role, internship, or collaboration" aria-invalid={Boolean(errors.subject)} />
                {errors.subject ? <span className="mt-1 font-mono text-[10px] normal-case tracking-normal text-vermilion">{errors.subject.message}</span> : null}
              </label>
              <label className={labelClass}>
                message
                <textarea {...register("message")} rows={4} className={inputClass} placeholder="what are you building, and where would I fit?" aria-invalid={Boolean(errors.message)} />
                {errors.message ? <span className="mt-1 font-mono text-[10px] normal-case tracking-normal text-vermilion">{errors.message.message}</span> : null}
              </label>

              <div className="mt-2 flex flex-wrap items-center gap-5">
                <button
                  type="submit"
                  className="border border-ink px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  send
                </button>
                {sent ? (
                  <p role="status" className="mono text-vermilion">
                    email client opened
                  </p>
                ) : (
                  <p className="mono">no tracking, no forms server</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
