import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
const read = (path) => readFile(new URL("../" + path, import.meta.url), "utf8");

test("scene registry uses raster photographs instead of SVG scenery", async () => {
  const registry = await read("lib/anime-art.ts");
  assert.match(registry, /images\.unsplash\.com/);
  assert.match(registry, /Wisteria training grounds/);
  assert.match(registry, /Nichirin swordsmith forge/);
  assert.doesNotMatch(registry, /\.svg|Agatsuma|Kamado|Hashibira|Rengoku|Tomioka|Uzui|Kocho/i);
});

test("hero uses the Corps image with CSS-based breathing trails", async () => {
  const hero = await read("components/ui/breathing-scene.tsx");
  assert.match(hero, /corpsScene/);
  assert.match(hero, /breathing-trail-water/);
  assert.match(hero, /breathing-trail-flame/);
  assert.match(hero, /breathing-trail-wisteria/);
  assert.doesNotMatch(hero, /<svg|Agatsuma|Kamado|Hashibira/i);
});

test("Open Graph artwork uses a raster image, not the custom SVG card", async () => {
  const layout = await read("app/layout.tsx");
  assert.match(layout, /images\.unsplash\.com/);
  assert.doesNotMatch(layout, /\/og\.svg/);
});
