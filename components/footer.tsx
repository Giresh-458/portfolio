import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08080A] py-8">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold tracking-tight text-[#F1F0EA]">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-[#8F8F89]">© {new Date().getFullYear()} · Built with curiosity and care.</p>
        </div>
        <p className="text-sm text-[#9B9A94]">AI engineering · Full-stack development</p>
        <a href="#home" className="inline-flex items-center gap-2 text-sm text-[#BDBCB5] transition hover:text-[#F1C75B]">Back to top <ArrowUpRight className="size-4" /></a>
      </div>
    </footer>
  );
}
