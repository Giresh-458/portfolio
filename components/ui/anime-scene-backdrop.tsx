"use client";

import { useEffect, useState } from "react";
import type { AnimeScene } from "@/lib/anime-art";

type AnimeSceneBackdropProps = {
  scene: AnimeScene;
  className?: string;
  priority?: boolean;
  imageClassName?: string;
};

/**
 * Responsive, fallback-aware scene image. All source URLs are tried in order;
 * if a host blocks hotlinking or an asset disappears, a themed gradient remains.
 */
export function AnimeSceneBackdrop({
  scene,
  className = "",
  priority = false,
  imageClassName = ""
}: AnimeSceneBackdropProps) {
  const [attempt, setAttempt] = useState(0);
  const [failed, setFailed] = useState(false);
  const sources = [scene.image, ...scene.fallbacks];

  useEffect(() => {
    setAttempt(0);
    setFailed(false);
  }, [scene.id, scene.image]);

  return (
    <div
      aria-hidden="true"
      className={"anime-scene-backdrop " + className}
      style={{
        ["--scene-position" as string]: scene.position,
        ["--scene-mobile-position" as string]: scene.mobilePosition,
        ["--scene-accent" as string]: scene.accent
      }}
    >
      <div className="anime-scene-fallback" />
      {!failed ? (
        <img
          key={sources[attempt]}
          src={sources[attempt]}
          alt=""
          aria-hidden="true"
          draggable={false}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className={"anime-scene-image " + imageClassName}
          onError={() => {
            if (attempt + 1 < sources.length) {
              setAttempt((current) => current + 1);
            } else {
              setFailed(true);
            }
          }}
        />
      ) : null}
    </div>
  );
}
