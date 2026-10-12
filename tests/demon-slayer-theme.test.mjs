import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
const read = (path) => readFile(new URL("../" + path, import.meta.url), "utf8");

test("scene registry uses local character-free Demon Slayer scenery", async () => {
  const registry = await read("lib/anime-art.ts");
  assert.match(registry, /demon-slayer-corps-background\.svg/);
  assert.match(registry, /wisteria-training-ground\.svg/);
  assert.match(registry, /swordsmith-forge\.svg/);
  assert.doesNotMatch(registry, /Agatsuma|Kamado|Hashibira|Rengoku|Tomioka|Uzui|Kocho/i);
  assert.doesNotMatch(registry, /https?:\/\//);
});

test("hero atmosphere uses Corps scenery and multiple breathing-style trails", async () => {
  const hero = await read("components/ui/breathing-scene.tsx");
  assert.match(hero, /Demon Slayer Corps/);
  assert.match(hero, /breathingForms/);
  assert.doesNotMatch(hero, /Agatsuma|Kamado|Hashibira|Choose your breathing style/i);
});

test("local art is atmosphere and props only, not character portraits", async () => {
  for (const path of ["public/images/demon-slayer-corps-background.svg", "public/images/wisteria-training-ground.svg", "public/images/swordsmith-forge.svg"]) {
    const art = await read(path);
    assert.match(art, /<svg/);
    assert.doesNotMatch(art, /Agatsuma|Kamado|Hashibira|Rengoku|Tomioka|Uzui|Kocho/i);
  }
});
