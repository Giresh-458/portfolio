"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links: Array<[string, string]> = [
  ["work", "#work"],
  ["approach", "#approach"],
  ["about", "#about"],
  ["stack", "#stack"],
  ["contact", "#contact"]
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "border-b border-[var(--rule)] bg-paper/94 backdrop-blur-md"
          : "border-b border-transparent bg-transparent")
      }
    >
      <nav className="wrap flex h-14 items-center justify-between" aria-label="Primary">
        <a href="#home" className="group flex items-baseline gap-2.5" aria-label="Giresh Velaga, back to top">
          <span className="font-serif text-[19px] leading-none text-ink">Giresh Velaga</span>
          <span className="mono hidden text-ink-faint transition-colors group-hover:text-vermilion sm:inline">
            / agent engineering
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, href], index) => (
            <a
              key={href}
              href={href}
              className="mono link-underline hover:text-ink"
              aria-label={`Jump to ${label}`}
            >
              <span className="mr-1.5 text-vermilion/70">{String(index + 1).padStart(2, "0")}</span>
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-8 place-items-center border border-[var(--rule-strong)] text-ink-soft md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[var(--rule)] bg-paper md:hidden">
          <div className="wrap py-2">
            {links.map(([label, href], index) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 border-b border-[var(--rule)] py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft last:border-b-0"
              >
                <span className="text-vermilion/70">{String(index + 1).padStart(2, "0")}</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
