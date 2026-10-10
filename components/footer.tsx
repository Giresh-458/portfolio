import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#879C7C]/20 py-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E85D47]/60 to-transparent" />
      <div className="container flex flex-col gap-3 text-sm text-[#90978D] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Engineered with intent.</p>
        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#9EB394]">AI systems <span className="text-[#E85D47]">·</span> Full-stack <span className="text-[#E85D47]">·</span> Keep learning</p>
      </div>
    </footer>
  );
}
