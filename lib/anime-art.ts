/**
 * Photographic, character-free backgrounds for the Demon Slayer Corps theme.
 * The scenery uses real raster photographs rather than custom SVG illustrations.
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

const makeScene = (
  id: string,
  label: string,
  style: string,
  image: string,
  accent: string,
  credit: string,
  sourceUrl: string,
  fallbacks: string[] = []
): AnimeScene => ({
  id,
  label,
  character: label,
  style,
  breathing: style,
  image,
  fallbacks,
  position: "center center",
  mobilePosition: "center center",
  accent,
  credit,
  sourceUrl
});

export const corpsScene = makeScene(
  "corps-night",
  "Demon Slayer Corps",
  "Total Concentration",
  "https://images.unsplash.com/photo-1760954076011-d7ba1f26b71c?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=2400",
  "#C83F55",
  "Cai Cai — Torii gate at a Japanese shrine at night (Unsplash)",
  "https://unsplash.com/photos/torii-gate-at-a-japanese-shrine-at-night-bCGZtteFiNs",
  ["https://images.unsplash.com/photo-1770645868981-01ff39b662da?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=2400"]
);

export const wisteriaScene = makeScene(
  "wisteria-grounds",
  "Wisteria training grounds",
  "Corps training",
  "https://images.unsplash.com/photo-1756037020642-54fe3858ad70?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1800",
  "#9F88C8",
  "Leo Okuyama — Purple wisteria flowers hanging from a pergola (Unsplash)",
  "https://unsplash.com/photos/purple-wisteria-flowers-hanging-from-a-pergola-pUqv_nljqMw"
);

export const forgeScene = makeScene(
  "nichirin-forge",
  "Nichirin swordsmith forge",
  "Swordsmith village",
  "https://images.unsplash.com/photo-1777621285361-c99fc0b82adc?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1800",
  "#C9776C",
  "Fabian Kleiser — Blacksmith forge with glowing embers and tools (Unsplash)",
  "https://unsplash.com/photos/blacksmith-forge-with-glowing-embers-and-tools-2mbXuLbudI8"
);

export const corpsScenes = [corpsScene, wisteriaScene, forgeScene] as const;
