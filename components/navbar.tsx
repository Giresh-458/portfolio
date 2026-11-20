"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links: Array<[string, string]> = [
  ["systems", "#work"],
  ["approach", "#approach"],
  ["about", "#about"],
  ["stack", "#stack"],
  ["contact", "#contact"]
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-[rgba(150,200,195,.12)] bg-[#05070a]/88 backdrop-blur-xl" : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-[1360px] items-center justify-between px-5 md:px-8" aria-label="Primary">
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Giresh Velaga, back to top">
          <span className="grid size-7 place-items-center rounded-[3px] border border-signal/40 bg-[rgba(123,241,168,.08)] font-mono text-[11px] font-semibold text-signal">
            GV
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim transition group-hover:text-ink sm:block">
            giresh velaga
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="group relative font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
            >
              {label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-signal transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-[3px] border border-signal/40 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-signal transition hover:bg-[rgba(123,241,168,.1)]"
          >
            get in touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-9 place-items-center rounded-[3px] border border-[rgba(150,200,195,.16)] text-ink-dim md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[rgba(150,200,195,.12)] bg-[#05070a]/97 backdrop-blur-xl md:hidden">
          <div className="grid gap-1 px-5 py-3">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-[rgba(150,200,195,.08)] py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-ink-dim transition hover:text-signal"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
