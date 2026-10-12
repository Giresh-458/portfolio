"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links: Array<[string, string]> = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["AI Focus", "#ai-lab"],
  ["Skills", "#skills"],
  ["Contact", "#contact"]
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
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-all duration-300", scrolled ? "border-[#E0B7A4]/15 bg-background/92 shadow-[0_12px_44px_rgba(0,0,0,.45)] backdrop-blur-xl" : "border-white/10 bg-linear-to-b from-[#050609]/80 to-transparent")}>
      <nav className="container flex h-[72px] items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="group flex items-center gap-3" aria-label="Giresh Velaga — home">
          <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-full border border-[#D83B47]/75 bg-[#120A10] shadow-[0_0_22px_rgba(211,62,82,.18)] transition group-hover:border-[#E9A51A]">
            <img src="https://avatars.githubusercontent.com/u/194811970?v=4" alt="Giresh Velaga profile" className="size-full object-cover" width="40" height="40" />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-[0.04em] text-[#F6EBDD]">GIRESH VELAGA</span>
            <span className="mt-0.5 block font-mono text-[8px] uppercase tracking-[0.2em] text-[#A8A1A3]">AI Engineer · Full-Stack Developer</span>
          </span>
        </a>
        <div className="hidden items-center gap-5 xl:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="relative text-[12px] uppercase tracking-[0.13em] text-[#C1B9B9] transition-colors hover:text-[#FFF0DB]">{label}<span className="absolute -bottom-2 left-0 h-px w-0 bg-[#E43D48] transition-all hover:w-full" /></a>)}
          <Button asChild size="sm"><a href="#projects">View work <span aria-hidden>↗</span></a></Button>
        </div>
        <Button variant="ghost" size="icon" className="xl:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
      </nav>
      {open ? <div className="border-t border-white/10 bg-[#08080D]/95 p-4 backdrop-blur-xl xl:hidden"><div className="container grid gap-1 sm:grid-cols-2">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/[0.07] px-4 py-3 text-sm uppercase tracking-widest text-[#CFC4C2] transition hover:text-[#FFEBDA]">{label} <span className="float-right text-[#E43D48]">↗</span></a>)}<a href="#projects" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-semibold text-[#F3767A]">View projects ↗</a></div></div> : null}
    </header>
  );
}
