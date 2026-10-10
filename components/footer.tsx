import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-[#E7C6AF]/15 bg-[#050509]/80 py-7">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D93645] to-transparent" />
      <div className="container flex flex-col gap-3 text-sm text-[#8E8285] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}.</p>
        <p className="font-mono text-[9px] uppercase tracking-[.2em]">Discipline <span className="px-2 text-[#D93645]">×</span> Consistency <span className="px-2 text-[#39D8F3]">×</span> Growth</p>
      </div>
    </footer>
  );
}
