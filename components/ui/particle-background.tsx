"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  tone: "petal" | "ember";
  rotation: number;
  spin: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      window.cancelAnimationFrame(frame);
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(42, Math.max(17, Math.floor(width / 30)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: -(Math.random() * 0.25 + 0.08),
        size: Math.random() * 2.8 + 1,
        tone: Math.random() > 0.68 ? "ember" : "petal",
        rotation: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.012
      }));
      draw();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      for (const particle of particles) {
        if (!reduceMotion) {
          particle.x += particle.vx + Math.sin(particle.y * 0.012) * 0.12;
          particle.y += particle.vy;
          particle.rotation += particle.spin;
          if (particle.y < -12) {
            particle.y = height + 8;
            particle.x = Math.random() * width;
          }
          if (particle.x < -10) particle.x = width + 8;
          if (particle.x > width + 10) particle.x = -8;
        }
        context.save();
        context.translate(particle.x, particle.y);
        context.rotate(particle.rotation);
        if (particle.tone === "petal") {
          context.fillStyle = "rgba(162,196,144,0.48)";
          context.beginPath();
          context.ellipse(0, 0, particle.size * 1.9, particle.size * 0.8, 0, 0, Math.PI * 2);
          context.fill();
        } else {
          context.fillStyle = "rgba(239,112,69,0.82)";
          context.shadowBlur = 8;
          context.shadowColor = "rgba(232,93,71,0.55)";
          context.beginPath();
          context.ellipse(0, 0, particle.size * 0.55, particle.size * 1.7, 0, 0, Math.PI * 2);
          context.fill();
        }
        context.restore();
      }
      if (!reduceMotion) frame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 size-full opacity-80" />;
}
