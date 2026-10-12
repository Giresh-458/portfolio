/**
 * Character-free Demon Slayer Corps scenery for a consistent site-wide visual theme.
 * Each local SVG depicts settings and props only; no anime characters are used.
 */
export type AnimeScene = {
  id: string;
  label: string;
  character: string;
  style: string;
  breathing: string;
  image: string;
  fallbacks: string[];
  position: string;
  mobilePosition: string;
  accent: string;
  credit: string;
  sourceUrl: string;
};

const makeScene = (id: string, label: string, style: string, image: string, accent: string): AnimeScene => ({
  id, label, character: label, style, breathing: style, image, fallbacks: [],
  position: "center center", mobilePosition: "center center", accent,
  credit: "Original character-free Demon Slayer-inspired scenery", sourceUrl: image
});

export const corpsScene = makeScene("corps-night", "Demon Slayer Corps", "Total Concentration", "/images/demon-slayer-corps-background.svg", "#C83F55");
export const wisteriaScene = makeScene("wisteria-grounds", "Wisteria training grounds", "Corps training", "/images/wisteria-training-ground.svg", "#9F88C8");
export const forgeScene = makeScene("nichirin-forge", "Nichirin swordsmith forge", "Swordsmith village", "/images/swordsmith-forge.svg", "#C9776C");
export const corpsScenes = [corpsScene, wisteriaScene, forgeScene] as const;
