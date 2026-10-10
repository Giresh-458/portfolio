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
        <GlassCard className="slayer-panel crow-dispatch flex flex-col justify-between p-6 md:p-8">
          <div>
            <div className="crow-flight-scene relative mb-7 flex h-[205px] items-center justify-center overflow-hidden border-y border-[#E7C6AF]/12">
              <div className="crow-moon absolute right-[14%] top-4 size-28 rounded-full" />
              <div className="crow-haze pointer-events-none absolute inset-0" />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 230" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
                <path d="M0 158C90 136 122 172 212 155S373 128 600 161" stroke="#3CCDE8" strokeOpacity=".24" strokeWidth="1.5"/>
                <path d="M0 180C82 158 160 198 261 177S450 159 600 184" stroke="#D94B57" strokeOpacity=".2" strokeWidth="1.5"/>
                <path d="M0 197L68 174L99 186L137 162L172 184L212 169L244 191L288 174L326 192L373 171L418 189L466 168L515 188L559 174L600 184V230H0Z" fill="#070810" fillOpacity=".8"/>
                <path d="M24 179L87 179L87 206M12 179L99 179L86 162L57 150L27 162Z" stroke="#A84A55" strokeOpacity=".42" strokeWidth="2"/>
                <path d="M467 180L534 180L534 207M455 180L546 180L533 164L500 151L468 164Z" stroke="#A84A55" strokeOpacity=".34" strokeWidth="2"/>
                <path d="M70 72C130 51 168 64 213 84" stroke="#EFC9CB" strokeOpacity=".2" strokeWidth="1.2" strokeDasharray="3 10"/>
                <path d="M364 37C401 18 435 28 460 47" stroke="#EFC9CB" strokeOpacity=".25" strokeWidth="1.2" strokeDasharray="3 10"/>

                <path d="M102 153C151 143 190 150 222 165" stroke="#B88B78" strokeOpacity=".5" strokeWidth="3" strokeLinecap="round"/>
                <path d="M134 150L145 136L160 145L167 153" stroke="#B88B78" strokeOpacity=".48" strokeWidth="2" strokeLinecap="round"/>

                <motion.g animate={reduceMotion ? undefined : { rotate: [0, -7, 2, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "278px 112px" }}>
                  <path d="M254 100C212 56 159 46 125 63C157 65 174 82 195 105C214 126 235 132 260 122Z" fill="#17131C" stroke="#67505B" strokeWidth="2"/>
                  <path d="M238 106C198 80 176 73 151 80C180 91 194 108 219 125" stroke="#3C303E" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M239 111C210 103 193 105 176 116C201 117 217 128 240 130" stroke="#3C303E" strokeWidth="2" strokeLinecap="round"/>
                </motion.g>
                <path d="M246 118C237 90 252 71 279 68C302 66 324 84 328 108C335 137 314 159 281 158C260 157 248 140 246 118Z" fill="#10121A" stroke="#76616A" strokeWidth="2"/>
                <path d="M264 133C275 142 300 145 314 131L330 152L317 164L293 157L278 170L263 154Z" fill="#16141D" stroke="#67505B" strokeWidth="1.5"/>
                <path d="M276 100C278 82 294 73 309 80C319 85 324 97 320 109L304 127L284 121Z" fill="#17141D" stroke="#806470" strokeWidth="1.7"/>
                <path d="M309 93L352 101L321 113L308 107Z" fill="#DDA56E" stroke="#F2D1A0" strokeWidth="1.2"/>
                <path d="M309 94L347 101L321 107" stroke="#8E563F" strokeWidth="1.4" strokeLinecap="round"/>
                <circle cx="307" cy="91" r="5.2" fill="#F4C96B"/>
                <circle cx="308" cy="91" r="2.2" fill="#171018"/>
                <path d="M274 77C260 57 262 42 276 32C297 41 307 54 306 73" fill="#17141D" stroke="#806470" strokeWidth="1.5"/>
                <path d="M280 45C271 30 282 21 292 30L306 48" fill="#211923" stroke="#806470" strokeWidth="1.3"/>
                <path d="M254 122L238 155L261 146" fill="#17141D" stroke="#67505B" strokeWidth="1.5"/>
                <path d="M270 151L264 174M288 156L292 175" stroke="#DDA56E" strokeWidth="3.2" strokeLinecap="round"/>
                <path d="M264 174L255 179M292 175L304 179" stroke="#DDA56E" strokeWidth="2.2" strokeLinecap="round"/>

                <path d="M366 100L396 81L429 88L414 130L390 139L370 119Z" fill="#EEDCC8" stroke="#B89384" strokeWidth="1.8"/>
                <path d="M376 101L400 120L422 90" stroke="#B83949" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M371 112L400 132L430 100" stroke="#A9877D" strokeWidth="1.4" strokeLinecap="round"/>
                <path d="M359 100C349 96 342 98 337 104" stroke="#DDA56E" strokeWidth="2" strokeLinecap="round"/>
                <path d="M359 100L370 119" stroke="#DDA56E" strokeWidth="2" strokeLinecap="round"/>
                <path d="M429 111L449 104L454 124L434 135Z" fill="#761A2C" stroke="#E7B3A0" strokeWidth="1.2"/>
                <path d="M438 113L446 117L439 126" stroke="#F4DDC9" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>

                <motion.path d="M484 60C496 43 513 50 502 65C493 77 477 74 484 60ZM518 83C537 64 555 79 538 93C524 102 510 94 518 83ZM466 103C479 90 495 99 483 110C474 118 461 115 466 103Z" fill="#E96B8B" fillOpacity=".85" animate={reduceMotion ? undefined : { x: [0, 13, -6, 0], y: [0, -8, 7, 0], rotate: [0, 35, -25, 0], opacity: [.35, .95, .5, .35] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}/>
                <motion.path d="M67 109C79 98 89 105 81 114C74 121 63 117 67 109ZM107 35C118 25 130 31 122 40C116 47 103 43 107 35Z" fill="#F3CCD7" fillOpacity=".75" animate={reduceMotion ? undefined : { x: [0, 19, 7, 0], y: [0, 23, 36, 0], rotate: [0, 120, 280, 360], opacity: [0, .9, .6, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "linear" }}/>
              </svg>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07070B] to-transparent" />
              <span className="absolute bottom-2 left-3 font-mono text-[8px] uppercase tracking-[.22em] text-[#C5A9B2]">Kasugai dispatch / urgent message</span>
              <span className="absolute right-3 top-3 border border-[#E7C6AF]/20 bg-[#08080D]/65 px-2 py-1 font-mono text-[8px] uppercase tracking-[.16em] text-[#E0B3A9]">Corps post</span>
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
