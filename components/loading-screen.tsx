"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const seen = sessionStorage.getItem("portfolio-intro-seen");
    if (seen || reduceMotion) return;
    setVisible(true);
    const timeout = window.setTimeout(() => {
      sessionStorage.setItem("portfolio-intro-seen", "true");
      setVisible(false);
    }, 1900);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] grid place-items-center bg-black"
          aria-label="Loading portfolio"
          role="status"
        >
          <div className="w-64 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.82, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "0.24em" }}
              transition={{ duration: 0.7 }}
              className="font-display text-5xl font-black text-netflix"
            >
              AM
            </motion.div>
            <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/10">
              <div className="h-full origin-left animate-loading-bar bg-netflix shadow-glow" />
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-600">Initializing intelligence</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
