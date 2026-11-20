"use client";

import { useCallback, useRef, useState } from "react";

/**
 * An isometric architecture drawing you can turn.
 *
 * Each plane is one layer of the system, stacked in real 3D on the Z axis:
 * interface on top, orchestration, retrieval, storage at the base. Dragging
 * rotates the whole stack; the layers stay legible because they are printed
 * drawings, not floating decoration.
 */

type Layer = {
  id: string;
  label: string;
  caption: string;
  z: number;
  inset: number;
  accent?: boolean;
};

const LAYERS: Layer[] = [
  { id: "ui", label: "01 / interface", caption: "streamlit · fastapi", z: 0, inset: 0 },
  { id: "orch", label: "02 / orchestration", caption: "langgraph · routing · retries", z: 58, inset: 14, accent: true },
  { id: "retrieval", label: "03 / retrieval", caption: "bm25 + dense · rrf", z: 116, inset: 28 },
  { id: "store", label: "04 / store", caption: "postgresql · pgvector", z: 174, inset: 42 }
];

const BASE_TILT = 56;
const BASE_SPIN = -38;

export function IsoStack() {
  const [rot, setRot] = useState({ spin: BASE_SPIN, tilt: BASE_TILT });
  const [active, setActive] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{ x: number; y: number; spin: number; tilt: number } | null>(null);
  const [hint, setHint] = useState(true);

  const onDown = useCallback(
    (event: React.PointerEvent) => {
      (event.target as Element).setPointerCapture?.(event.pointerId);
      drag.current = { x: event.clientX, y: event.clientY, spin: rot.spin, tilt: rot.tilt };
      setDragging(true);
      setHint(false);
    },
    [rot]
  );

  const onMove = useCallback((event: React.PointerEvent) => {
    if (!drag.current) return;
    const dx = event.clientX - drag.current.x;
    const dy = event.clientY - drag.current.y;
    setRot({
      spin: drag.current.spin + dx * 0.42,
      tilt: Math.max(12, Math.min(84, drag.current.tilt - dy * 0.32))
    });
  }, []);

  const onUp = useCallback(() => {
    drag.current = null;
    setDragging(false);
  }, []);

  const reset = () => setRot({ spin: BASE_SPIN, tilt: BASE_TILT });

  return (
    <div className="relative">
      <div
        className="iso-stage relative h-[clamp(320px,44vw,470px)] w-full select-none"
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onPointerLeave={onUp}
        role="img"
        aria-label="Isometric architecture drawing: interface, orchestration, retrieval and store layers stacked in depth. Drag to rotate."
      >
        <div
          className={dragging ? "iso-scene" : "iso-scene iso-idle"}
          style={{
            "--spin": `${rot.spin}deg`,
            "--tilt": `${rot.tilt}deg`,
            transition: dragging ? "none" : "transform 0.6s cubic-bezier(0.22,1,0.36,1)"
          } as React.CSSProperties}
        >
          {LAYERS.map((layer) => {
            const isActive = active === layer.id;
            return (
              <div
                key={layer.id}
                className="iso-plane"
                style={{
                  inset: `${layer.inset * 0.55}px`,
                  transform: `translateZ(${layer.z}px)`,
                  borderColor: isActive
                    ? "rgba(200,64,29,0.85)"
                    : layer.accent
                      ? "rgba(200,64,29,0.4)"
                      : undefined,
                  boxShadow: isActive
                    ? "0 18px 34px -22px rgba(22,19,14,.7), 0 0 0 1px rgba(200,64,29,.35)"
                    : undefined
                }}
                onPointerEnter={() => setActive(layer.id)}
                onPointerLeave={() => setActive(null)}
              >
                <span className="iso-plate-label">
                  {layer.accent ? <span className="vermilion-dot mr-2 align-middle" /> : null}
                  {layer.label}
                </span>

                {/* Printed contents differ per layer so the stack is readable. */}
                {layer.id === "retrieval" ? (
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 120" fill="none" aria-hidden="true">
                    <path d="M14 30 H86 Q104 30 112 52" stroke="#16130e" strokeOpacity=".4" strokeWidth="0.7" />
                    <path d="M14 90 H86 Q104 90 112 68" stroke="#16130e" strokeOpacity=".4" strokeWidth="0.7" />
                    <path d="M112 60 H186" stroke="#c8401d" strokeWidth="0.9" />
                    {[0, 1, 2, 3].map((i) => (
                      <line key={i} x1="124" y1={52 + i * 5} x2="180" y2={52 + i * 5} stroke="#c8401d" strokeOpacity={0.7 - i * 0.14} strokeWidth="0.7" />
                    ))}
                    <circle cx="112" cy="60" r="2.6" fill="#c8401d" />
                  </svg>
                ) : null}

                {layer.id === "orch" ? (
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 120" fill="none" aria-hidden="true">
                    <path d="M24 78 C38 42 62 40 76 58 S104 82 120 56 S148 34 170 50" stroke="#c8401d" strokeWidth="0.9" strokeLinecap="round" />
                    <path d="M170 50 C150 86 92 92 60 74" stroke="#16130e" strokeOpacity=".35" strokeWidth="0.7" strokeDasharray="3 3" />
                    {[[24, 78], [76, 58], [120, 56], [170, 50]].map(([x, y], i) => (
                      <circle key={i} cx={x} cy={y} r={i === 1 ? 2.6 : 1.7} fill="#16130e" fillOpacity={i === 0 ? 0.85 : 0.5} />
                    ))}
                  </svg>
                ) : null}

                {layer.id === "store" ? (
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 120" fill="none" aria-hidden="true">
                    {[0, 1, 2].map((i) => (
                      <g key={i}>
                        <rect x="42" y={40 + i * 16} width="116" height="11" fill="none" stroke="#16130e" strokeOpacity=".32" strokeWidth="0.6" />
                        <line x1="48" y1={45.5 + i * 16} x2={96} y2={45.5 + i * 16} stroke="#16130e" strokeOpacity=".3" strokeWidth="0.6" />
                      </g>
                    ))}
                  </svg>
                ) : null}

                {layer.id === "ui" ? (
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 120" fill="none" aria-hidden="true">
                    <rect x="46" y="34" width="108" height="54" fill="none" stroke="#16130e" strokeOpacity=".3" strokeWidth="0.7" />
                    <line x1="46" y1="46" x2="154" y2="46" stroke="#16130e" strokeOpacity=".25" strokeWidth="0.7" />
                    <circle cx="53" cy="40" r="1.6" fill="#c8401d" />
                    <line x1="56" y1="60" x2="112" y2="60" stroke="#16130e" strokeOpacity=".35" strokeWidth="0.8" />
                    <line x1="56" y1="70" x2="94" y2="70" stroke="#16130e" strokeOpacity=".22" strokeWidth="0.8" />
                  </svg>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between gap-4">
        <span className="mono">
          {active ? LAYERS.find((l) => l.id === active)?.caption : hint ? "drag to rotate" : "isometric · 4 layers"}
        </span>
        <button type="button" onClick={reset} className="mono link-underline hover:text-ink">
          reset view
        </button>
      </div>
    </div>
  );
}
