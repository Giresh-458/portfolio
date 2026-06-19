import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container flex flex-col gap-3 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Engineered for intelligent systems.</p>
        <p className="font-mono text-xs uppercase tracking-widest">Next.js · TypeScript · AI</p>
      </div>
    </footer>
  );
}
