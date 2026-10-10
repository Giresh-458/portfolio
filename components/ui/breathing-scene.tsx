"use client";

import { motion, useReducedMotion } from "framer-motion";

const embers = [
  { x: 153, y: 254, r: 2.2, delay: 0.2 },
  { x: 600, y: 180, r: 1.8, delay: 1.1 },
  { x: 557, y: 500, r: 2.4, delay: 0.8 },
  { x: 222, y: 585, r: 1.6, delay: 1.5 },
  { x: 462, y: 107, r: 1.7, delay: 0.5 },
  { x: 646, y: 374, r: 2, delay: 1.8 },
  { x: 295, y: 163, r: 1.5, delay: 1.3 },
  { x: 123, y: 441, r: 1.8, delay: 0.4 },
  { x: 522, y: 626, r: 1.5, delay: 0.9 },
  { x: 360, y: 90, r: 1.4, delay: 1.7 },
];

export function BreathingScene() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[760/780] w-full max-w-[700px] select-none" aria-hidden="true">
      <div className="absolute inset-[13%] rounded-full bg-[#C94332]/20 blur-[80px]" />
      <div className="absolute inset-[4%] rounded-full bg-[#243D2B]/35 blur-[54px]" />
      <svg className="relative z-10 h-full w-full overflow-visible" viewBox="0 0 760 780" fill="none">
        <defs>
          <radialGradient id="slayer-moon" cx="0" cy="0" r="1" gradientTransform="translate(473 245) rotate(90) scale(187)">
            <stop stopColor="#F5A36A" />
            <stop offset=".68" stopColor="#BE4537" />
            <stop offset="1" stopColor="#7D2529" stopOpacity=".18" />
          </radialGradient>
          <linearGradient id="slayer-water" x1="108" y1="190" x2="623" y2="565" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D8F5DC" />
            <stop offset=".3" stopColor="#87CFA1" />
            <stop offset=".68" stopColor="#3A8E83" />
            <stop offset="1" stopColor="#C9F2DB" />
          </linearGradient>
          <linearGradient id="slayer-flame" x1="263" y1="656" x2="625" y2="249" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B82D32" />
            <stop offset=".44" stopColor="#F25F3D" />
            <stop offset=".77" stopColor="#F9A24D" />
            <stop offset="1" stopColor="#FFE2A0" />
          </linearGradient>
          <linearGradient id="slayer-blade" x1="287" y1="515" x2="574" y2="210" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6F9E9B" />
            <stop offset=".52" stopColor="#F4F0DE" />
            <stop offset="1" stopColor="#FFFFFF" />
          </linearGradient>
          <linearGradient id="slayer-haori" x1="285" y1="347" x2="421" y2="535" gradientUnits="userSpaceOnUse">
            <stop stopColor="#345E40" />
            <stop offset="1" stopColor="#16291D" />
          </linearGradient>
          <pattern id="slayer-checks" width="28" height="28" patternUnits="userSpaceOnUse">
            <rect width="28" height="28" fill="#17251B" />
            <rect width="14" height="14" fill="#47794B" />
            <rect x="14" y="14" width="14" height="14" fill="#47794B" />
          </pattern>
          <filter id="slayer-glow" x="-45%" y="-45%" width="190%" height="190%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <clipPath id="haori-clip">
            <path d="M337 364L301 387L267 450L320 474L351 425L350 523L421 523L411 399L439 438L478 405L430 360L397 350Z" />
          </clipPath>
        </defs>

        {/* Blood moon and Taisho-night mountain silhouettes */}
        <circle cx="473" cy="245" r="194" fill="#D94A39" fillOpacity=".08" filter="url(#slayer-glow)" />
        <circle cx="473" cy="245" r="174" fill="url(#slayer-moon)" fillOpacity=".9" />
        <circle cx="473" cy="245" r="174" stroke="#F8D2A0" strokeOpacity=".26" strokeWidth="1.5" />
        <g stroke="#FFE1BA" strokeOpacity=".18" strokeWidth="1">
          <path d="M330 145L400 186L468 132L530 183L615 144" />
          <path d="M342 212L411 243L462 207L527 247L596 212" />
          <path d="M352 281L416 310L481 274L543 312L593 290" />
        </g>
        <path d="M0 485L98 379L154 428L248 320L323 407L405 352L502 440L591 354L760 481V780H0Z" fill="#0B1711" />
        <path d="M0 538L111 454L191 509L289 416L371 504L479 420L590 517L683 438L760 492V780H0Z" fill="#101F17" />
        <path d="M0 607L132 547L240 584L335 525L453 602L555 539L681 595L760 552V780H0Z" fill="#13251A" />

        {/* Water Breathing: broad, painted arcs */}
        <motion.path
          d="M58 425C104 252 249 163 382 210C502 253 573 378 520 472C468 566 314 592 221 514C144 449 190 333 288 314C372 297 449 346 419 408C401 447 362 456 330 428"
          stroke="url(#slayer-water)" strokeWidth="36" strokeLinecap="round" opacity=".24" filter="url(#slayer-glow)"
        />
        <motion.path
          d="M58 425C104 252 249 163 382 210C502 253 573 378 520 472C468 566 314 592 221 514C144 449 190 333 288 314C372 297 449 346 419 408"
          stroke="url(#slayer-water)" strokeWidth="13" strokeLinecap="round"
          animate={reduceMotion ? undefined : { pathLength: [0.18, 1, 0.22], opacity: [0.4, 1, 0.42] }}
          transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut", times: [0, 0.52, 1] }}
        />
        <motion.path
          d="M93 473C169 593 340 648 470 564C562 504 545 419 482 393C425 369 368 402 388 443"
          stroke="#E0F7E3" strokeWidth="2.8" strokeLinecap="round" strokeDasharray="3 12" opacity=".8"
          animate={reduceMotion ? undefined : { strokeDashoffset: [0, -105] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Hinokami Kagura: flame ribbon, kept distinct from the water arc */}
        <motion.path
          d="M231 656C312 593 342 512 353 432C364 356 425 311 465 260C472 341 540 365 556 432C578 520 509 590 438 625C482 565 481 516 448 482C414 448 375 464 356 507C336 553 309 610 231 656Z"
          stroke="url(#slayer-flame)" strokeWidth="29" strokeLinejoin="round" strokeLinecap="round" opacity=".19" filter="url(#slayer-glow)"
        />
        <motion.path
          d="M231 656C312 593 342 512 353 432C364 356 425 311 465 260C472 341 540 365 556 432C578 520 509 590 438 625C482 565 481 516 448 482C414 448 375 464 356 507C336 553 309 610 231 656Z"
          stroke="url(#slayer-flame)" strokeWidth="6.5" strokeLinejoin="round" strokeLinecap="round"
          animate={reduceMotion ? undefined : { pathLength: [0.08, 1, 0.12], opacity: [0.24, 0.92, 0.28] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.6, times: [0, 0.44, 1] }}
        />

        {/* Original stylized swordsman silhouette with checkered haori */}
        <path d="M353 340L327 315L336 287L354 299L360 271L380 292L401 268L411 300L438 287L432 320L412 346Z" fill="#111713" />
        <ellipse cx="385" cy="319" rx="29" ry="35" fill="#D5AE91" />
        <path d="M356 313L351 296L364 301L372 282L390 296L408 279L413 302L431 300L419 324L404 310L392 318L380 307L368 323Z" fill="#151A16" />
        <path d="M371 319L381 322M394 319L403 316" stroke="#432B28" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M377 338L391 340" stroke="#7D463A" strokeWidth="2" strokeLinecap="round" />
        <path d="M367 351L368 367L401 367L402 349" fill="#C59579" />
        <path d="M337 363L301 387L267 450L320 474L351 425L350 523L421 523L411 399L439 438L478 405L430 360L397 350Z" fill="url(#slayer-haori)" stroke="#7DAA78" strokeOpacity=".55" strokeWidth="2" />
        <path d="M337 364L301 387L267 450L320 474L351 425L350 523L421 523L411 399L439 438L478 405L430 360L397 350Z" fill="url(#slayer-checks)" clipPath="url(#haori-clip)" opacity=".94" />
        <path d="M365 361L384 376L401 359L417 389L403 414L406 489L363 489L360 413L346 391Z" fill="#131914" />
        <path d="M349 520L368 520L350 591L320 641L298 633L327 565Z" fill="#111713" />
        <path d="M399 520L419 520L432 576L462 619L442 636L407 593Z" fill="#111713" />
        <path d="M292 632L321 638L312 654L276 654Q268 646 281 637Z" fill="#080C09" />
        <path d="M438 634L462 617L478 635L469 650L435 650Z" fill="#080C09" />
        <path d="M308 400L275 444L302 458L329 414M427 391L461 402L448 425L424 410" stroke="#D4B89B" strokeWidth="9" strokeLinecap="round" />

        {/* Nichirin blade: one bright, diagonal slash */}
        <path d="M291 468L551 204" stroke="#070C09" strokeWidth="17" strokeLinecap="round" />
        <path d="M291 468L551 204" stroke="url(#slayer-blade)" strokeWidth="7" strokeLinecap="round" />
        <path d="M278 479L303 456" stroke="#B74839" strokeWidth="15" strokeLinecap="round" />
        <path d="M271 457L310 494" stroke="#D9BD8D" strokeWidth="6" strokeLinecap="round" />
        <path d="M278 449L310 482" stroke="#4A3028" strokeWidth="3" strokeLinecap="round" />
        <motion.path d="M238 513L577 168" stroke="#FFF4DA" strokeWidth="2.3" strokeLinecap="round"
          animate={reduceMotion ? { opacity: 0.3 } : { pathLength: [0, 1, 0], opacity: [0, 0.9, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1.2, times: [0, 0.35, 1] }}
        />

        {embers.map((ember) => (
          <motion.circle key={`${ember.x}-${ember.y}`} cx={ember.x} cy={ember.y} r={ember.r}
            fill={ember.x % 2 === 0 ? "#F6A15A" : "#D9F2D4"}
            animate={reduceMotion ? { opacity: 0.55 } : { cy: [ember.y, ember.y - 25, ember.y + 4], cx: [ember.x, ember.x + 8, ember.x - 2], opacity: [0.15, 0.95, 0.15] }}
            transition={{ duration: 3.4 + ember.delay, repeat: Infinity, ease: "easeInOut", delay: ember.delay }}
          />
        ))}
      </svg>
      <div className="pointer-events-none absolute bottom-[4%] left-[8%] z-20 border-l-2 border-[#E85D47] pl-3">
        <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#D9F2D4]">Water Breathing</p>
        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.24em] text-[#F29A60]">Hinokami Kagura</p>
      </div>
    </div>
  );
}
