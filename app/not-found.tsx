import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-[80vh] place-items-center px-5">
      <div className="max-w-md text-center">
        <p className="mono mb-4">error 404</p>
        <h1 className="display text-[clamp(2.4rem,7vw,4rem)] text-ink">This page is not in the record.</h1>
        <p className="body-text mt-4">
          The route you asked for does not exist in this portfolio. The work itself is one page back.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 border border-ink px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          <ArrowLeft className="size-3.5" /> return home
        </Link>
      </div>
    </main>
  );
}
