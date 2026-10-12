import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL("../" + path, import.meta.url), "utf8");

test("scene registry uses raster photographs and contains no SVG artwork", async () => {
  const registry = await read("lib/anime-art.ts");
  assert.match(registry, /images\.unsplash\.com/);
  assert.match(registry, /Wisteria training grounds/);
  assert.match(registry, /Nichirin swordsmith forge/);
  assert.doesNotMatch(registry, /\.svg|<svg\b|Agatsuma|Kamado|Hashibira|Rengoku|Tomioka|Uzui|Kocho/i);
});

test("AI Lab and skills sections contain no inline SVG artwork", async () => {
  const aiLab = await read("components/sections/ai-lab-section.tsx");
  const skills = await read("components/sections/skills-section.tsx");
  assert.doesNotMatch(aiLab, /<svg\b|<motion\.svg\b/i);
  assert.doesNotMatch(skills, /<svg\b|<motion\.svg\b/i);
});

test("all seven projects use distinct raster image URLs, not SVG assets", async () => {
  const data = await read("lib/data.ts");
  const images = [...data.matchAll(/image:\s*"(https:\/\/images\.unsplash\.com\/[^"]+)"/g)].map((match) => match[1]);
  assert.equal(images.length, 7);
  assert.equal(new Set(images).size, 7);
  assert.doesNotMatch(data, /\/projects\/[^"]+\.svg/i);

  const cards = await read("components/sections/projects-section.tsx");
  const modal = await read("components/project-modal.tsx");
  assert.match(cards, /image:\s*project\.image/);
  assert.match(modal, /AnimeSceneBackdrop/);
  assert.doesNotMatch(modal, /next\/image|<Image\b/i);
});

async function findSvgFiles(directory, relative = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const found = [];
  for (const entry of entries) {
    const path = relative ? relative + "/" + entry.name : entry.name;
    const absolute = new URL("../public/" + path, import.meta.url);
    if (entry.isDirectory()) found.push(...await findSvgFiles(absolute, path));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith(".svg")) found.push(path);
  }
  return found;
}

test("public assets contain no SVG image files", async () => {
  const publicDirectory = new URL("../public/", import.meta.url);
  assert.deepEqual(await findSvgFiles(publicDirectory), []);
});

test("Open Graph metadata uses a raster image URL", async () => {
  const layout = await read("app/layout.tsx");
  assert.match(layout, /images\.unsplash\.com/);
  assert.doesNotMatch(layout, /\/og\.svg/);
});
