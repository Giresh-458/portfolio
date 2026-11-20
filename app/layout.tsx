import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource-variable/newsreader/index.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name + " — Agentic AI Engineer",
    template: "%s — " + siteConfig.name
  },
  description:
    "Agentic AI engineer building stateful LLM agents, hybrid retrieval pipelines, and the reliability layer around them. Python, LangGraph, FastAPI, PostgreSQL.",
  keywords: [
    "agentic AI engineer",
    "LLM agents",
    "LangGraph",
    "corrective RAG",
    "hybrid retrieval",
    "abstention",
    "FastAPI",
    "PostgreSQL"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: siteConfig.name + " — Agentic AI Engineer",
    description: siteConfig.description,
    siteName: siteConfig.name + " Portfolio",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: siteConfig.name + ", agentic AI engineer" }]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name + " — Agentic AI Engineer",
    description: siteConfig.description,
    images: ["/og.svg"]
  },
  alternates: { canonical: "/" }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2eee3",
  colorScheme: "light"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="page">
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[300] -translate-y-24 border border-ink bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.13em] text-paper transition focus:translate-y-0"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="relative z-[1]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
