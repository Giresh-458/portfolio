import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/bebas-neue/400.css";
import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/providers/page-transition";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: siteConfig.name + " — " + siteConfig.role, template: "%s — " + siteConfig.name },
  description: siteConfig.description,
  keywords: ["Generative AI engineer", "LLM engineer", "machine learning", "multimodal AI", "Next.js developer", "AI research portfolio"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: { type: "website", locale: "en_US", url: siteConfig.siteUrl, title: siteConfig.name + " — " + siteConfig.role, description: siteConfig.description, siteName: siteConfig.name + " Portfolio", images: [{ url: "https://images.unsplash.com/photo-1760954076011-d7ba1f26b71c?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=2400", width: 1200, height: 630, alt: siteConfig.name + " AI engineering portfolio" }] },
  twitter: { card: "summary_large_image", title: siteConfig.name + " — " + siteConfig.role, description: siteConfig.description, images: ["https://images.unsplash.com/photo-1760954076011-d7ba1f26b71c?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=2400"] },
  alternates: { canonical: "/" }
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0A0B14", colorScheme: "dark" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark"><body>
    <a href="#main-content" className="fixed left-4 top-4 z-300 -translate-y-24 rounded-md bg-netflix px-4 py-2 text-sm font-semibold text-[#061014] transition focus:translate-y-0">Skip to content</a>
    <Navbar /><PageTransition><main id="main-content">{children}</main></PageTransition><Footer />
  </body></html>;
}
