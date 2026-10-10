"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["AI Lab", "#ai-lab"],
  ["Research", "#research"],
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
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all", scrolled ? "glass-strong shadow-lg" : "bg-gradient-to-b from-black/85 to-transparent")}>
      <nav className="container flex h-20 items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="font-display text-2xl font-black tracking-[-0.08em] text-netflix" aria-label="Go to home">
          AM<span className="text-white">.</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-zinc-400 transition hover:text-white">
              {label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#contact">Let’s talk</a>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </Button>
      </nav>
      {open ? (
        <div className="glass-strong border-t border-white/10 p-5 lg:hidden">
          <div className="container grid gap-1">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-zinc-300 hover:bg-white/5 hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
