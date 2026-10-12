import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL("../" + path, import.meta.url), "utf8");

test("the scene registry contains Zenitsu and no other anime character", async () => {
  const registry = await read("lib/anime-art.ts");
  assert.match(registry, /Zenitsu Agatsuma/);
  for (const name of ["Tanjiro", "Nezuko", "Inosuke", "Rengoku", "Giyu Tomioka", "Tengen Uzui", "Shinobu Kocho", "Hashira"]) {
    assert.doesNotMatch(registry, new RegExp(name, "i"));
  }
});

test("the hero has no multi-character breathing-style picker", async () => {
  const hero = await read("components/ui/breathing-scene.tsx");
  assert.match(hero, /Zenitsu Agatsuma/);
  assert.match(hero, /Thunder Breathing/);
  assert.doesNotMatch(hero, /Choose your breathing style|Tanjiro|Nezuko|Inosuke/i);
});

test("secondary scene art is a local, character-free background", async () => {
  const registry = await read("lib/anime-art.ts");
  const background = await read("public/images/zenitsu-thunder-background.svg");
  assert.match(registry, /image: "\/images\/zenitsu-thunder-background\.svg"/);
  assert.match(background, /linearGradient/);
  assert.doesNotMatch(background, /Tanjiro|Nezuko|Inosuke|Zenitsu Agatsuma/i);
});
