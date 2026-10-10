"use client";

import { motion, useReducedMotion } from "framer-motion";

const sparks = [
  { x: 112, y: 260, r: 2.2, delay: 0.2 },
  { x: 560, y: 170, r: 1.8, delay: 1.1 },
  { x: 522, y: 510, r: 2.4, delay: 0.8 },
  { x: 220, y: 590, r: 1.6, delay: 1.5 },
  { x: 422, y: 112, r: 1.7, delay: 0.5 },
  { x: 604, y: 370, r: 2, delay: 1.8 },
  { x: 305, y: 178, r: 1.5, delay: 1.3 },
  { x: 165, y: 430, r: 1.8, delay: 0.4 }
];

export function BreathingScene() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative aspect-square w-full select-none" aria-hidden="true">
      <div className="absolute inset-[18%] rounded-full bg-[#4FD8D0]/10 blur-3xl" />
      <div className="absolute inset-[12%] rounded-full border border-[#80E5DF]/15" />
      <motion.div
        className="absolute inset-[7%] rounded-full border border-dashed border-[#F28A68]/20"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 54, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-[24%] rounded-full border border-[#80E5DF]/20"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
      />

      <svg
        className="absolute inset-0 h-full w-full overflow-visible drop-shadow-[0_0_30px_rgba(81,220,213,0.12)]"
        viewBox="0 0 700 700"
        fill="none"
      >
        <defs>
          <linearGradient id="breath-water" x1="108" y1="150" x2="584" y2="540" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B5FFFA" />
            <stop offset=".28" stopColor="#5FE3DE" />
            <stop offset=".63" stopColor="#388AD9" />
            <stop offset="1" stopColor="#A2F8F3" />
          </linearGradient>
          <linearGradient id="breath-sun" x1="208" y1="590" x2="495" y2="246" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF5A45" />
            <stop offset=".48" stopColor="#FF9D64" />
            <stop offset="1" stopColor="#FFE6A0" />
          </linearGradient>
          <linearGradient id="breath-blade" x1="205" y1="540" x2="526" y2="218" gradientUnits="userSpaceOnUse">
            <stop stopColor="#79E6E1" stopOpacity="0" />
            <stop offset=".5" stopColor="#ECFFFF" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity=".18" />
          </linearGradient>
          <filter id="breath-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        <motion.path
          d="M86 340C141 190 286 103 421 157C557 212 626 347 555 443C489 533 333 565 238 481C143 397 210 280 315 260C408 242 500 307 462 385C439 433 382 441 344 410"
          stroke="url(#breath-water)"
          strokeWidth="27"
          strokeLinecap="round"
          opacity=".16"
          filter="url(#breath-glow)"
        />
        <motion.path
          d="M86 340C141 190 286 103 421 157C557 212 626 347 555 443C489 533 333 565 238 481C143 397 210 280 315 260C408 242 500 307 462 385C439 433 382 441 344 410"
          stroke="url(#breath-water)"
          strokeWidth="5.5"
          strokeLinecap="round"
          animate={reduceMotion ? { opacity: 0.65 } : { pathLength: [0.18, 1, 0.18], opacity: [0.2, 0.94, 0.26] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.48, 1] }}
        />
        <motion.path
          d="M142 460C217 577 398 626 527 502C609 424 555 327 469 315C392 304 332 356 357 407C375 443 413 438 439 419"
          stroke="#70E8E0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 11"
          animate={reduceMotion ? undefined : { strokeDashoffset: [0, -90] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          opacity=".8"
        />
        <motion.path
          d="M154 565C227 507 271 454 286 378C300 306 352 269 389 226C392 300 462 324 477 388C497 468 431 528 365 559C416 505 420 455 391 422C362 390 318 402 301 438C284 477 248 526 154 565Z"
          stroke="url(#breath-sun)"
          strokeWidth="8"
          strokeLinejoin="round"
          strokeLinecap="round"
          animate={reduceMotion ? { opacity: 0.48 } : { pathLength: [0.05, 1, 0.08], opacity: [0.14, 0.8, 0.2] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 0.8, times: [0, 0.42, 1] }}
        />
        <motion.path
          d="M184 561L534 211"
          stroke="url(#breath-blade)"
          strokeWidth="3"
          strokeLinecap="round"
          animate={reduceMotion ? { opacity: 0.4 } : { pathLength: [0, 1, 0], opacity: [0, 0.95, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.4, times: [0, 0.34, 1] }}
        />
        <motion.path
          d="M169 574L203 584L224 563"
          stroke="#FFB180"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={reduceMotion ? undefined : { opacity: [0.25, 0.85, 0.25] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        />
        {sparks.map((spark) => (
          <motion.circle
            key={String(spark.x) + "-" + String(spark.y)}
            cx={spark.x}
            cy={spark.y}
            r={spark.r}
            fill={spark.x % 2 === 0 ? "#FFAC7A" : "#D3FFFA"}
            animate={reduceMotion ? { opacity: 0.4 } : { y: [0, -22, 4, 0], x: [0, 8, -3, 0], opacity: [0.12, 0.95, 0.18], scale: [0.7, 1.3, 0.7] }}
            transition={{ duration: 3.6 + spark.delay, delay: spark.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>

      <div className="absolute bottom-[12%] right-[4%] rounded-full border border-white/10 bg-[#080C11]/70 px-4 py-2 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-[#73E4DC] shadow-[0_0_12px_#73E4DC]" />
          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/75">Focus · Build · Evolve</span>
        </div>
      </div>
    </div>
  );
}
