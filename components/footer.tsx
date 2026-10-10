import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] py-7">
      <div className="container flex flex-col gap-3 text-sm text-[#8491A2] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}.</p>
        <p className="tracking-wide">AI engineering <span className="px-1.5 text-[#54CBD4]">·</span> Full-stack development <span className="px-1.5 text-[#54CBD4]">·</span> Always learning</p>
      </div>
    </footer>
  );
}
