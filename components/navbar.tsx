"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links: Array<[string, string]> = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["AI Lab", "#ai-lab"],
  ["Stack", "#skills"],
  ["Build loop", "#timeline"],
  ["GitHub", "#github"],
  ["Contact", "#contact"]
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "glass-strong shadow-lg" : "bg-gradient-to-b from-[#070A0E]/90 to-transparent")}>
      <nav className="container flex h-[72px] items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Giresh Velaga — home">
          <span className="grid size-9 place-items-center rounded-xl border border-[#75E0D9]/30 bg-[#75E0D9]/[0.08] font-mono text-xs font-bold text-[#8AF2EA] transition duration-300 group-hover:rotate-[-6deg] group-hover:border-[#FF9169]/50 group-hover:text-[#FFAD8B]">GV</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">Build with intent<span className="text-[#75E0D9]">.</span></span>
        </a>
        <div className="hidden items-center gap-6 xl:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-xs font-medium text-zinc-400 transition-colors duration-300 hover:text-[#A6FFF7]">
              {label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#contact">Let’s talk <span aria-hidden>↗</span></a>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="xl:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </Button>
      </nav>
      {open ? (
        <div className="glass-strong border-t border-white/10 p-4 xl:hidden">
          <div className="container grid gap-1 sm:grid-cols-2">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm text-zinc-300 transition hover:bg-[#75E0D9]/[0.07] hover:text-white">
                {label} <span className="float-right text-[#75E0D9]/55">↗</span>
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm text-[#75E0D9]">Let’s talk ↗</a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
