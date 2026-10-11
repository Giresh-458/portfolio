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
    }, 1350);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}
          className="fixed inset-0 z-200 grid place-items-center bg-[#080A09]" aria-label="Opening portfolio" role="status">
          <div className="w-64 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.82, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "0.24em" }} transition={{ duration: 0.7 }}
              className="font-display text-5xl font-black text-[#F3EEE3]">
              GV
            </motion.div>
            <div className="haori-stamp mx-auto mt-4 h-1.5 w-20 border border-[#879C7C]/30" />
            <div className="mt-7 h-1 overflow-hidden bg-white/10">
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.05, ease: [0.65, 0, 0.35, 1] }}
                className="h-full origin-left bg-linear-to-r from-[#557D4F] via-[#E85D47] to-[#F3B56D] shadow-glow" />
            </div>
            <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.28em] text-[#9EA596]">Total concentration · Focus · Build</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
