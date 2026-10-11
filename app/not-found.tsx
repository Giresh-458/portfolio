import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <p className="font-display text-8xl text-netflix">404</p>
        <h1 className="mt-4 text-3xl font-black text-white">This scene does not exist.</h1>
        <p className="mt-3 text-zinc-500">The requested route is outside the current portfolio cut.</p>
        <Button asChild className="mt-7"><Link href="/"><ArrowLeft className="size-4" /> Return home</Link></Button>
      </div>
    </main>
  );
}
