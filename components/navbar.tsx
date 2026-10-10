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
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "glass-strong shadow-lg" : "bg-gradient-to-b from-[#080A09]/95 to-transparent")}>
      <nav className="container flex h-[72px] items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="group flex items-center gap-3" aria-label="Giresh Velaga — home">
          <span className="haori-stamp grid size-10 place-items-center border border-[#A0B894]/45 font-display text-sm font-bold text-[#F6EBDC] transition duration-300 group-hover:rotate-[-6deg] group-hover:border-[#E85D47]">GV</span>
          <span className="hidden sm:block">
            <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-[#EDE6D7]">Field journal</span>
            <span className="mt-0.5 block font-mono text-[8px] uppercase tracking-[0.18em] text-[#A5B59C]">Giresh Velaga <span className="text-[#E85D47]">·</span> AI / Full-stack</span>
          </span>
        </a>
        <div className="hidden items-center gap-6 xl:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-xs font-medium text-[#A5A89C] transition-colors duration-300 hover:text-[#F3EEE3]">
              {label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#contact">Let’s build <span aria-hidden>↗</span></a>
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
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-sm px-4 py-3 text-sm text-[#D5D2C6] transition hover:bg-[#A5B59C]/[0.07] hover:text-white">
                {label} <span className="float-right text-[#E85D47]/70">↗</span>
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-sm px-4 py-3 text-sm text-[#F08A62]">Let’s build ↗</a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
