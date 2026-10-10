"use client";
import { motion, useReducedMotion } from "framer-motion";

export function BreathingScene() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="relative mx-auto aspect-[640/690] w-full max-w-[620px] select-none" aria-hidden="true">
      <div className="absolute inset-[11%] rounded-full bg-[#B63D3D]/10 blur-[75px]" />
      <div className="absolute inset-[13%] rounded-full bg-[#38BDCD]/10 blur-[85px]" />
      <svg className="relative z-10 h-full w-full overflow-visible" viewBox="0 0 640 690" fill="none">
        <defs>
          <radialGradient id="breathing-moon" cx="0" cy="0" r="1" gradientTransform="translate(390 235) rotate(90) scale(180)">
            <stop stopColor="#E06A58" stopOpacity=".92" /><stop offset=".7" stopColor="#9F343D" stopOpacity=".86" /><stop offset="1" stopColor="#682633" stopOpacity=".05" />
          </radialGradient>
          <linearGradient id="breathing-water" x1="90" y1="180" x2="560" y2="520" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C7F4EF" /><stop offset=".32" stopColor="#67DCE2" /><stop offset=".72" stopColor="#2393B0" /><stop offset="1" stopColor="#B6E9EF" />
          </linearGradient>
          <linearGradient id="breathing-flame" x1="150" y1="590" x2="475" y2="220" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8D2B39" /><stop offset=".48" stopColor="#E65445" /><stop offset=".82" stopColor="#F5A15F" /><stop offset="1" stopColor="#FFE1A6" />
          </linearGradient>
          <linearGradient id="breathing-blade" x1="190" y1="500" x2="495" y2="190" gradientUnits="userSpaceOnUse">
            <stop stopColor="#528997" /><stop offset=".5" stopColor="#DDF7F4" /><stop offset="1" stopColor="#FFFFFF" />
          </linearGradient>
          <pattern id="breathing-checks" width="24" height="24" patternUnits="userSpaceOnUse">
            <rect width="24" height="24" fill="#0B1718" /><rect width="12" height="12" fill="#214F49" /><rect x="12" y="12" width="12" height="12" fill="#214F49" />
          </pattern>
          <filter id="breathing-soft-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="10" /></filter>
        </defs>
        <circle cx="390" cy="235" r="178" fill="#C94543" fillOpacity=".14" filter="url(#breathing-soft-glow)" />
        <circle cx="390" cy="235" r="157" fill="url(#breathing-moon)" />
        <circle cx="390" cy="235" r="157" stroke="#F5B6A7" strokeOpacity=".26" />
        <path d="M0 427L91 346L151 389L241 284L310 366L382 317L460 383L526 325L640 410V690H0Z" fill="#0B1520" />
        <path d="M0 490L98 422L169 465L258 386L332 455L418 387L511 468L574 421L640 459V690H0Z" fill="#0D1B27" />
        <path d="M0 562L108 506L205 540L302 493L391 548L489 501L573 543L640 517V690H0Z" fill="#10232D" />
        <motion.path
          d="M66 382C100 272 199 165 324 175C441 184 540 288 512 393C491 472 406 526 315 510C222 494 174 427 202 354C224 298 287 278 341 300C386 318 411 361 390 397"
          stroke="url(#breathing-water)" strokeWidth="24" strokeLinecap="round" opacity=".15" filter="url(#breathing-soft-glow)"
        />
        <motion.path
          d="M66 382C100 272 199 165 324 175C441 184 540 288 512 393C491 472 406 526 315 510C222 494 174 427 202 354C224 298 287 278 341 300C386 318 411 361 390 397"
          stroke="url(#breathing-water)" strokeWidth="9" strokeLinecap="round" strokeDasharray="2 1"
          animate={reduceMotion ? undefined : { pathLength: [0.88, 1, 0.88], opacity: [0.54, 1, 0.54] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path d="M83 435C158 555 332 589 440 508C500 463 512 411 486 379" stroke="#DAFBF6" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 11" opacity=".65"
          animate={reduceMotion ? undefined : { strokeDashoffset: [0, -112] }} transition={{ duration: 7.2, repeat: Infinity, ease: "linear" }} />
        <motion.path
          d="M182 594C262 532 280 454 300 389C320 320 373 275 414 224C420 290 473 327 485 388C499 455 457 519 385 556C417 510 404 470 376 450C342 425 310 450 293 489C273 535 241 573 182 594Z"
          stroke="url(#breathing-flame)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" opacity=".88"
          animate={reduceMotion ? undefined : { pathLength: [0.9, 1, 0.9], opacity: [0.48, 0.95, 0.48] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
        <path d="M197 504L495 197" stroke="#071018" strokeWidth="16" strokeLinecap="round" />
        <motion.path d="M197 504L495 197" stroke="url(#breathing-blade)" strokeWidth="6" strokeLinecap="round"
          animate={reduceMotion ? undefined : { opacity: [0.78, 1, 0.78] }} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }} />
        <path d="M181 518L212 487" stroke="#D3B58A" strokeWidth="12" strokeLinecap="round" />
        <path d="M180 486L218 524" stroke="#E1D1B2" strokeWidth="5" strokeLinecap="round" />
        <motion.path d="M158 548L523 172" stroke="#ECFFFC" strokeWidth="1.5" strokeLinecap="round" opacity=".7"
          animate={reduceMotion ? undefined : { pathLength: [0, 1, 0], opacity: [0, 0.7, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }} />
        <path d="M448 476L584 444L615 576L479 608Z" fill="url(#breathing-checks)" opacity=".3" />
        <path d="M448 476L584 444L615 576L479 608Z" stroke="#77BBB0" strokeOpacity=".35" />
      </svg>
      <div className="pointer-events-none absolute bottom-[5%] left-[9%] h-px w-24 bg-gradient-to-r from-[#63D6DE]/80 to-transparent" />
    </div>
  );
}
