"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  tone: "water" | "ember";
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    let frame = 0;
    let points: Point[] = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      window.cancelAnimationFrame(frame);
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(finePointer ? 64 : 28, Math.max(18, Math.floor(width / 23)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        radius: Math.random() * 1.5 + 0.5,
        tone: Math.random() > 0.72 ? "ember" : "water"
      }));
      draw();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (const point of points) {
        if (!reduceMotion) {
          point.x += point.vx;
          point.y += point.vy;
          if (point.x < -4 || point.x > width + 4) point.vx *= -1;
          if (point.y < -4 || point.y > height + 4) point.vy *= -1;
        }
        context.beginPath();
        context.fillStyle = point.tone === "water" ? "rgba(126,236,229,.78)" : "rgba(255,145,105,.78)";
        context.shadowBlur = point.radius > 1.5 ? 10 : 4;
        context.shadowColor = point.tone === "water" ? "rgba(87,221,213,.6)" : "rgba(255,121,83,.5)";
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fill();
      }
      context.shadowBlur = 0;

      if (finePointer) {
        for (let index = 0; index < points.length; index += 1) {
          for (let target = index + 1; target < points.length; target += 1) {
            const first = points[index];
            const second = points[target];
            const distance = Math.hypot(first.x - second.x, first.y - second.y);
            if (distance < 112) {
              context.beginPath();
              context.strokeStyle = `rgba(112,227,220,${(1 - distance / 112) * 0.085})`;
              context.lineWidth = 0.7;
              context.moveTo(first.x, first.y);
              context.lineTo(second.x, second.y);
              context.stroke();
            }
          }
        }
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

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 size-full opacity-75" />;
}
