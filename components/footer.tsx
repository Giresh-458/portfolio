import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--rule-strong)]">
      <div className="wrap py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-[1.35rem] leading-none text-ink">{siteConfig.name}</p>
            <p className="mono mt-2.5">
              © {new Date().getFullYear()} · set in instrument serif, newsreader and ibm plex mono
            </p>
          </div>

          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="mono link-underline hover:text-ink">
              github
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="mono link-underline hover:text-ink">
              linkedin
            </a>
            <a href={"mailto:" + siteConfig.email} className="mono link-underline hover:text-ink">
              email
            </a>
            <a href="#home" className="mono text-vermilion hover:underline">
              top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
