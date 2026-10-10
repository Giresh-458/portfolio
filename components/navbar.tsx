"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const links: Array<[string, string]> = [["About", "#about"], ["Projects", "#projects"], ["AI Lab", "#ai-lab"], ["Skills", "#skills"], ["GitHub", "#github"], ["Contact", "#contact"]];

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
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-all duration-300", scrolled ? "border-white/[0.08] bg-[#07090F]/90 shadow-[0_12px_40px_rgba(0,0,0,.3)] backdrop-blur-xl" : "border-transparent bg-gradient-to-b from-[#07090F]/90 to-transparent")}>
      <nav className="container flex h-[72px] items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="group flex items-center gap-3" aria-label="Giresh Velaga — home">
          <span className="grid size-10 place-items-center border border-[#D65350]/55 bg-[#D65350]/10 font-display text-xl text-[#F4E6D7] transition group-hover:border-[#62D6E0]">鬼</span>
          <span><span className="block text-sm font-semibold tracking-tight text-[#F6F0E8]">Giresh Velaga</span><span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.15em] text-[#8B96A6]">AI engineering · Full-stack</span></span>
        </a>
        <div className="hidden items-center gap-6 xl:flex">{links.map(([label, href]) => <a key={href} href={href} className="text-[13px] text-[#A3AFBE] transition-colors hover:text-[#68D8E0]">{label}</a>)}<Button asChild size="sm"><a href="#projects">View work <span aria-hidden>↗</span></a></Button></div>
        <Button variant="ghost" size="icon" className="xl:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
      </nav>
      {open ? <div className="border-t border-white/10 bg-[#07090F]/95 p-4 backdrop-blur-xl xl:hidden"><div className="container grid gap-1 sm:grid-cols-2">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-sm px-4 py-3 text-sm text-[#C5CED9] transition hover:bg-white/[0.04] hover:text-[#68D8E0]">{label} <span className="float-right text-[#D65350]/80">↗</span></a>)}<a href="#projects" onClick={() => setOpen(false)} className="rounded-sm px-4 py-3 text-sm text-[#68D8E0]">View work ↗</a></div></div> : null}
    </header>
  );
}
