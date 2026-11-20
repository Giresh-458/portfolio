import type { ReactNode } from "react";

/**
 * Previously this faded the whole page in on route change, which meant the
 * server rendered `<div style="opacity:0">` around <main>. If hydration ever
 * failed, the entire site was invisible. This is a single-page site, so the
 * wrapper now only provides layout and never hides content.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return <div className="contents">{children}</div>;
}
