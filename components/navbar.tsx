"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links: Array<[string, string]> = [
  ["About", "#about"], ["Projects", "#projects"], ["AI systems", "#ai-lab"],
  ["Skills", "#skills"], ["GitHub", "#github"], ["Contact", "#contact"]
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-all duration-300", scrolled ? "border-white/10 bg-[#0A0A0C]/90 shadow-[0_8px_30px_rgba(0,0,0,.18)] backdrop-blur-xl" : "border-white/10 bg-[#0A0A0C]/45 backdrop-blur-md")}>
      <nav className="container flex h-[72px] items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="group flex items-center gap-3" aria-label="Giresh Velaga — home">
          <span className="grid size-10 place-items-center rounded-lg bg-[#F1C75B] text-sm font-bold tracking-tight text-[#17160F] transition group-hover:bg-[#FFDA76]">GV</span>
          <span>
            <span className="block text-sm font-semibold tracking-tight text-[#F5F4EF]">GIRESH VELAGA</span>
            <span className="mt-0.5 block text-xs text-[#9B9A94]">AI Engineer · Full-Stack Developer</span>
          </span>
        </a>
        <div className="hidden items-center gap-5 lg:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-sm text-[#B8B7B1] transition-colors hover:text-[#F1C75B]">{label}</a>)}
          <a href="#projects" className="ml-1 inline-flex items-center rounded-lg border border-[#F1C75B]/40 px-4 py-2 text-sm font-medium text-[#F1C75B] transition hover:bg-[#F1C75B]/10">View work</a>
        </div>
        <button type="button" className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-[#F3F2EC] lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open ? <div className="border-t border-white/10 bg-[#0A0A0C]/98 p-4 backdrop-blur-xl lg:hidden"><div className="container grid gap-1 sm:grid-cols-2">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm text-[#D9D8D2] transition hover:bg-white/[0.05] hover:text-[#F1C75B]">{label}</a>)}<a href="#projects" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-semibold text-[#F1C75B]">View projects ↗</a></div></div> : null}
    </header>
  );
}
