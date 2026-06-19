"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
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
    let points: Point[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(72, Math.max(32, Math.floor(rect.width / 20)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        radius: Math.random() * 1.3 + 0.6
      }));
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      context.clearRect(0, 0, width, height);

      for (const point of points) {
        if (!reduceMotion) {
          point.x += point.vx;
          point.y += point.vy;
          if (point.x < 0 || point.x > width) point.vx *= -1;
          if (point.y < 0 || point.y > height) point.vy *= -1;
        }
        context.beginPath();
        context.fillStyle = "rgba(229,9,20,.75)";
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fill();
      }

      for (let index = 0; index < points.length; index += 1) {
        for (let target = index + 1; target < points.length; target += 1) {
          const distance = Math.hypot(points[index].x - points[target].x, points[index].y - points[target].y);
          if (distance < 110) {
            context.beginPath();
            context.strokeStyle = `rgba(229,9,20,${(1 - distance / 110) * 0.16})`;
            context.moveTo(points[index].x, points[index].y);
            context.lineTo(points[target].x, points[target].y);
            context.stroke();
          }
        }
      }

      if (!reduceMotion) frame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 size-full opacity-80" />;
}
