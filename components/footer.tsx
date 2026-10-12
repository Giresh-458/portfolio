import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="corps-footer relative overflow-hidden border-t border-[#E7C6AF]/15 bg-[#050509]/90 py-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#C83F55] to-transparent" />
      <div className="pointer-events-none absolute -right-8 -top-10 size-40 rounded-full border border-netflix/10 shadow-[0_0_80px_rgba(217,54,69,.08)]" />
      <div className="container relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div><p className="font-semibold tracking-[.04em] text-[#F2E3D2]">{siteConfig.name}</p><p className="mt-1 text-xs text-[#8E8285]">© {new Date().getFullYear()} · Built with curiosity and discipline.</p></div>
        <p className="font-mono text-[9px] uppercase tracking-[.2em] text-[#AFA0A1]">Discipline <span className="px-2 text-netflix">×</span> Consistency <span className="px-2 text-[#C33B50]">×</span> Growth</p>
        <a href="#home" className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.16em] text-[#D6C9C7] transition hover:text-[#C33B50]">Return to the Corps archive <span className="text-netflix">↑</span></a>
      </div>
    </footer>
  );
}
