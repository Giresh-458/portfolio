"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line, Points, PointMaterial } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/**
 * The agent trace as a live 3D graph.
 *
 * Nodes are the real stages of a stateful agent loop; each edge carries a pulse
 * that travels the path a request takes. Tones are semantic, not decorative:
 * mint = healthy path, amber = corrective loop, orange = human gate.
 */

type Tone = "signal" | "alert" | "amber";

type TraceNode = {
  id: string;
  position: [number, number, number];
  tone: Tone;
  size: number;
};

const NODES: TraceNode[] = [
  { id: "query",    position: [0.1, 1.42, 0.1],    tone: "signal", size: 0.115 },
  { id: "router",   position: [-1.5, 0.52, -0.3],  tone: "signal", size: 0.145 },
  { id: "retrieve", position: [-0.5, -0.48, 0.5],  tone: "signal", size: 0.17  },
  { id: "grade",    position: [0.78, -0.42, 0.02], tone: "amber",  size: 0.13  },
  { id: "rewrite",  position: [1.66, 0.56, 0.36],  tone: "amber",  size: 0.115 },
  { id: "tools",    position: [0.4, 1.28, -0.55],  tone: "signal", size: 0.135 },
  { id: "approve",  position: [-0.3, 0.14, 0.98],  tone: "alert",  size: 0.12  },
  { id: "output",   position: [-1.2, -1.16, 0.3],  tone: "signal", size: 0.15  }
];

const EDGES: Array<[string, string]> = [
  ["query", "router"],
  ["router", "retrieve"],
  ["retrieve", "grade"],
  ["grade", "rewrite"],
  ["rewrite", "retrieve"],
  ["router", "tools"],
  ["tools", "approve"],
  ["grade", "output"],
  ["approve", "output"]
];

const TONE: Record<Tone, string> = {
  signal: "#7bf1a8",
  alert: "#ff8a5b",
  amber: "#ffc861"
};

const byId = Object.fromEntries(NODES.map((n) => [n.id, n])) as Record<string, TraceNode>;

/** Soft radial sprite. A sphere reads as a grey disc; a gradient sprite reads as light. */
function useGlowTexture() {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  useEffect(() => {
    const size = 128;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.18, "rgba(255,255,255,0.72)");
    gradient.addColorStop(0.45, "rgba(255,255,255,0.18)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    setTexture(tex);
  }, []);
  return texture;
}

function Node({
  node,
  active,
  glow,
  onHover
}: {
  node: TraceNode;
  active: boolean;
  glow: THREE.Texture | null;
  onHover: (id: string | null) => void;
}) {
  const core = useRef<THREE.Mesh>(null);
  const halo = useRef<THREE.Sprite>(null);
  const color = TONE[node.tone];

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const breathe = Math.sin(t * 1.3 + node.size * 20) * 0.04;
    if (core.current) {
      core.current.scale.setScalar(node.size * (active ? 1.35 : 1) * (1 + breathe));
      core.current.position.y = Math.sin(t * 0.5 + node.position[0] * 2) * 0.045;
    }
    if (halo.current) {
      const target = node.size * (active ? 6.8 : 3.9) * (1 + breathe * 2);
      halo.current.scale.set(target, target, 1);
      const mat = halo.current.material as THREE.SpriteMaterial;
      mat.opacity = active ? 0.85 : 0.45;
    }
  });

  return (
    <group position={node.position}>
      <mesh
        ref={core}
        onPointerOver={(e) => { e.stopPropagation(); onHover(node.id); }}
        onPointerOut={() => onHover(null)}
      >
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>

      {glow ? (
        <sprite ref={halo} scale={[0.6, 0.6, 1]}>
          <spriteMaterial
            map={glow}
            color={color}
            transparent
            opacity={0.55}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            toneMapped={false}
          />
        </sprite>
      ) : null}
    </group>
  );
}

function Edge({ from, to, active }: { from: TraceNode; to: TraceNode; active: boolean }) {
  const curve = useMemo(() => {
    const a = new THREE.Vector3(...from.position);
    const b = new THREE.Vector3(...to.position);
    const mid = a.clone().add(b).multiplyScalar(0.5);
    mid.z += 0.3;
    mid.y += 0.12;
    return new THREE.QuadraticBezierCurve3(a, mid, b);
  }, [from, to]);

  const points = useMemo(() => curve.getPoints(28), [curve]);
  const pulse = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!pulse.current) return;
    const t = (state.clock.getElapsedTime() * 0.26 + from.position[0] * 0.11 + 1) % 1;
    pulse.current.position.copy(curve.getPoint(t));
  });

  return (
    <group>
      <Line
        points={points}
        color={active ? "#d6ffe6" : "#57a08c"}
        lineWidth={active ? 1.8 : 1}
        transparent
        opacity={active ? 1 : 0.52}
      />
      <mesh ref={pulse}>
        <sphereGeometry args={[0.032, 8, 8]} />
        <meshBasicMaterial color="#eafff2" transparent opacity={0.85} depthWrite={false} toneMapped={false} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
}

/** Deterministic hash PRNG: keeps the dust field stable across renders. */
function hash(i: number): number {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function Dust() {
  const count = 380;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (hash(i * 3 + 1) - 0.5) * 12;
      arr[i * 3 + 1] = (hash(i * 3 + 2) - 0.5) * 8;
      arr[i * 3 + 2] = (hash(i * 3 + 3) - 0.5) * 7 - 1.5;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.getElapsedTime() * 0.014;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#8fe6c0" size={0.02} sizeAttenuation depthWrite={false} opacity={0.42} />
    </Points>
  );
}

function Rig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x += (0.55 + pointer.x * 0.6 - camera.position.x) * 0.03;
    camera.position.y += (0.95 + pointer.y * 0.4 - camera.position.y) * 0.03;
    camera.lookAt(0.05, 0.05, 0);
  });
  return null;
}

function Graph({
  hovered,
  setHovered,
  glow
}: {
  hovered: string | null;
  setHovered: (id: string | null) => void;
  glow: THREE.Texture | null;
}) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.1) * 0.3;
    group.current.rotation.x = Math.sin(t * 0.07) * 0.05;
  });

  const edged = (a: string, b: string) => hovered === a || hovered === b;

  return (
    <group ref={group} scale={0.92} position={[1.85, 0.15, 0]}>
      {EDGES.map(([a, b]) => (
        <Edge key={a + b} from={byId[a]} to={byId[b]} active={edged(a, b)} />
      ))}
      {NODES.map((node) => (
        <Node key={node.id} node={node} active={hovered === node.id} glow={glow} onHover={setHovered} />
      ))}
    </group>
  );
}

function Fallback() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <svg viewBox="0 0 560 400" className="h-full w-full max-w-2xl opacity-70" aria-hidden="true">
        {EDGES.map(([a, b]) => {
          const A = byId[a].position, B = byId[b].position;
          return (
            <line
              key={a + b}
              x1={280 + A[0] * 108} y1={210 - A[1] * 92}
              x2={280 + B[0] * 108} y2={210 - B[1] * 92}
              stroke="#4d8f7e" strokeWidth="1" strokeDasharray="4 6" className="trace-line"
            />
          );
        })}
        {NODES.map((n) => (
          <circle key={n.id} cx={280 + n.position[0] * 108} cy={210 - n.position[1] * 92} r={5} fill={TONE[n.tone]} />
        ))}
      </svg>
    </div>
  );
}

export function AgentGraph({ className = "" }: { className?: string }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const glow = useGlowTexture();
  const activeNode = hovered ? byId[hovered] : null;

  if (failed) {
    return (
      <div className={`relative ${className}`}>
        <Fallback />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Canvas
        dpr={[1, 1.8]}
        camera={{ position: [0.55, 0.95, 4.6], fov: 44 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => { gl.setClearColor(0x000000, 0); }}
        onError={() => setFailed(true)}
      >
        <Dust />
        <Graph hovered={hovered} setHovered={setHovered} glow={glow} />
        <Rig />
        <fog attach="fog" args={["#05070a", 7, 12]} />
      </Canvas>

      <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-end justify-between gap-4">
        <div className="mono-label flex items-center gap-2">
          <span className="signal-dot" />
          {activeNode ? (
            <span className="text-signal">node/{activeNode.id}</span>
          ) : (
            <span>agent trace · idle</span>
          )}
        </div>
        <span className="mono-label hidden sm:block">8 nodes · 9 edges</span>
      </div>
    </div>
  );
}
