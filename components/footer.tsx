import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[rgba(150,200,195,.1)]">
      <div className="mx-auto w-full max-w-[1360px] px-5 py-10 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink">{siteConfig.name}</p>
            <p className="mt-1.5 font-mono text-[10px] tracking-[0.1em] text-muted">
              © {new Date().getFullYear()} · built with next.js, three.js, and too much care
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition hover:text-signal">
              github
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition hover:text-signal">
              linkedin
            </a>
            <a href={"mailto:" + siteConfig.email} className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition hover:text-signal">
              email
            </a>
            <a href="#home" className="font-mono text-[10px] uppercase tracking-[0.14em] text-signal transition hover:text-[#96ffc0]">
              top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
