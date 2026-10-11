"use client";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { SectionHeader } from "@/components/ui/section-header";
import { SlayerIllustration } from "@/components/ui/slayer-illustration";
import { TechBadge } from "@/components/ui/tech-badge";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import { stats } from "@/lib/data";

const focusAreas = [
  { title: "AI systems", description: "Agents, retrieval and LLM-powered workflows.", mark: "知" },
  { title: "Product engineering", description: "Interfaces, APIs, data models and deployment.", mark: "造" }
];
const skillPreview = ["Python", "PyTorch", "LangGraph", "React", "Node.js", "PostgreSQL"];

export function AboutSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="about" className="section-shell section-about scroll-mt-20">
      <SectionHeader eyebrow="The training arc · 修行" title="Discipline compounds." description="Curiosity starts the journey. Building, testing and improving turns it into engineering." />
      <motion.div variants={reduceMotion ? undefined : stagger} initial={reduceMotion ? undefined : "hidden"} whileInView={reduceMotion ? undefined : "visible"} viewport={viewport} className="grid gap-6 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div variants={reduceMotion ? undefined : fadeUp} className="training-scroll slayer-panel relative flex flex-col justify-between p-7 md:p-10">
          <div className="pointer-events-none absolute inset-3 border border-[#E7C6AF]/10" />
          <div className="pointer-events-none absolute right-6 top-6 font-serif text-4xl text-netflix/55">修</div>
          <div className="relative">
            <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.24em] text-[#E8797B]">Personal field notes / 01</p>
            <p className="max-w-2xl font-display text-3xl uppercase leading-[1.12] text-[#F4E6D4] md:text-4xl">Learn the system. Understand the blade. Make it useful.</p>
            <div className="mt-6 h-px w-24 bg-linear-to-r from-[#D93645] via-[#39D8F3] to-transparent" />
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#C0B4B6]">I’m a fourth-year Computer Science and Engineering student at IIIT Sri City, working across generative AI, machine learning and full-stack development.</p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#A99DA2]">I like taking a system from idea to application: understand the problem, choose the architecture, connect the model and backend, then test the edge cases that a demo can miss.</p>
            <div className="mt-8 flex flex-wrap gap-2">{skillPreview.map((skill) => <TechBadge key={skill}>{skill}</TechBadge>)}</div>
          </div>
          <div className="relative mt-9 flex items-center justify-between gap-4 border-t border-[#E4C4AF]/15 pt-5">
            <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.19em] text-[#DD7778]"><span className="h-px w-8 bg-netflix" /> Learn deliberately. Build honestly.</div>
            <span className="font-serif text-2xl text-netflix/70">心</span>
          </div>
        </motion.div>

        <motion.div variants={reduceMotion ? undefined : fadeUp} className="relative flex flex-col gap-4">
          <div className="training-ground relative min-h-[245px] overflow-hidden border border-[#E7C6AF]/15 bg-[#0A0B12]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 300" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
              <defs><linearGradient id="training-night" x1="0" y1="0" x2="640" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#111827"/><stop offset="1" stopColor="#180C16"/></linearGradient><linearGradient id="training-wisteria" x1="0" y1="0" x2="0" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#B89AEF" stopOpacity=".7"/><stop offset="1" stopColor="#7F4C9E" stopOpacity="0"/></linearGradient></defs>
              <rect width="640" height="300" fill="url(#training-night)"/>
              <circle cx="484" cy="70" r="44" fill="#D93645" fillOpacity=".2"/><circle cx="484" cy="70" r="30" fill="#D93645" fillOpacity=".22" stroke="#F4B3A3" strokeOpacity=".35"/>
              <path d="M0 170L85 126L153 158L219 114L303 167L391 126L467 165L557 112L640 147V300H0Z" fill="#111524"/>
              <path d="M0 208L100 171L170 194L256 157L326 198L418 162L508 204L584 178L640 198V300H0Z" fill="#0B1019"/>
              <path d="M355 183L355 235M344 184L366 184L355 171L344 184M330 235L380 235L355 202Z" stroke="#CF6468" strokeOpacity=".6" strokeWidth="3"/>
              <path d="M0 258C108 235 167 271 270 251S451 229 640 262" stroke="#39D8F3" strokeOpacity=".18" strokeWidth="2"/>
              {[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map((i)=> <g key={i} opacity=".72"><path d={"M"+(i*49-10)+" 0 Q"+(i*49+16)+" 62 "+(i*49+5)+" 117 T"+(i*49+16)+" 174"} stroke="#B59CDD" strokeOpacity=".42" strokeWidth="1.5"/>{[0,1,2,3].map((j)=><ellipse key={j} cx={i*49+2+(j%2)*8} cy={40+j*30+(i%3)*7} rx="4.5" ry="9" transform={"rotate("+(i%2?28:-25)+" "+(i*49+2+(j%2)*8)+" "+(40+j*30+(i%3)*7)+")"} fill="url(#training-wisteria)"/>)}</g>)}
              <path d="M0 274H640" stroke="#D3A88D" strokeOpacity=".22"/>
            </svg>
            <SlayerIllustration variant="tanjiro" label="Water-style Corps swordsman at the training grounds" className="absolute bottom-0 right-0 z-[1] h-[98%] w-[56%] max-w-[250px] opacity-95 drop-shadow-[0_0_25px_rgba(57,216,243,0.18)]" />
            <motion.div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-[#090910]/90 via-transparent to-[#090910]/20" animate={reduceMotion ? undefined : { opacity: [.6, .8, .6] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div><p className="font-mono text-[8px] uppercase tracking-[0.24em] text-[#C2A8E8]">Wisteria training grounds</p><p className="mt-2 font-display text-2xl uppercase text-[#F4E6D4]">Quiet work. Sharp results.</p></div>
              <span className="font-serif text-4xl text-[#E7A4A2]/85">藤</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, index) => <div key={stat.label} className="corps-stat relative overflow-hidden border border-[#E7C6AF]/14 bg-[#0B0B12]/90 p-4 sm:p-5">
              <span className="absolute right-3 top-2 font-serif text-2xl text-netflix/40">{["壱","弐","参","肆"][index]}</span>
              <div className="mb-4 h-1 w-8 bg-linear-to-r from-[#D93645] to-[#39D8F3]" />
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 max-w-[130px] text-xs leading-5 text-[#AFA5A8]">{stat.label}</p>
            </div>)}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {focusAreas.map((area) => <div key={area.title} className="flex gap-3 border border-[#E7C6AF]/12 bg-linear-to-br from-[#20151D] to-[#0A0B10] p-4">
              <span className="font-serif text-2xl text-[#E8797B]">{area.mark}</span>
              <div><p className="font-semibold text-[#F3E4D5]">{area.title}</p><p className="mt-1 text-xs leading-5 text-[#AFA5A8]">{area.description}</p></div>
            </div>)}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
