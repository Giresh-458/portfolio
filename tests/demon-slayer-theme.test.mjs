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

async function findInlineSvgFiles(directory, relative = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const found = [];
  for (const entry of entries) {
    const path = relative ? relative + "/" + entry.name : entry.name;
    const absolute = new URL("../" + path, import.meta.url);
    if (entry.isDirectory()) found.push(...await findInlineSvgFiles(absolute, path));
    else if (entry.isFile() && /\.(tsx|jsx)$/i.test(entry.name)) {
      const source = await readFile(absolute, "utf8");
      if (/<(?:motion\.)?svg\b/i.test(source)) found.push(path);
    }
  }
  return found;
}

test("application components contain no inline SVG artwork", async () => {
  const files = [];
  for (const directory of ["app", "components"]) {
    files.push(...await findInlineSvgFiles(new URL("../" + directory + "/", import.meta.url), directory));
  }
  assert.deepEqual(files, []);
});

test("project thumbnails use live screenshots for deployed apps and raster photos otherwise", async () => {
  const data = await read("lib/data.ts");
  const images = [...data.matchAll(/image:\s*"(https?:\/\/[^"]+)"/g)].map((match) => match[1]);
  assert.equal(images.length, 7);
  assert.equal(new Set(images).size, 7);
  assert.doesNotMatch(data, /\/projects\/[^"]+\.svg/i);

  assert.match(data, /id: "mood-tracker",[\s\S]*?liveUrl: "https:\/\/mood-tracker-1-h1l8\.onrender\.com\/",[\s\S]*?image: "https:\/\/image\.thum\.io\/get\/noanimate\/maxAge\/24\/width\/1200\/crop\/800\/https:\/\/mood-tracker-1-h1l8\.onrender\.com\/"?/);
  assert.match(data, /id: "cgpa-calculator",[\s\S]*?liveUrl: "https:\/\/iiits-cgpa-calculator\.onrender\.com\/",[\s\S]*?image: "https:\/\/image\.thum\.io\/get\/noanimate\/maxAge\/24\/width\/1200\/crop\/800\/https:\/\/iiits-cgpa-calculator\.onrender\.com\/"?/);
  assert.equal(images.filter((url) => url.startsWith("https://image.thum.io/get/")).length, 2);
  assert.equal(images.filter((url) => url.startsWith("https://images.unsplash.com/")).length, 5);

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
  let svgFiles = [];
  try {
    svgFiles = await findSvgFiles(publicDirectory);
  } catch (error) {
    if (!error || typeof error !== "object" || !("code" in error) || error.code !== "ENOENT") throw error;
  }
  assert.deepEqual(svgFiles, []);
});

test("Open Graph metadata uses a raster image URL", async () => {
  const layout = await read("app/layout.tsx");
  assert.match(layout, /images\.unsplash\.com/);
  assert.doesNotMatch(layout, /\/og\.svg/);
});


test("homepage focuses on portfolio essentials and avoids redundant sections", async () => {
  const page = await read("app/page.tsx");
  assert.match(page, /HeroSection/);
  assert.match(page, /ProjectsSection/);
  assert.match(page, /SkillsSection/);
  assert.doesNotMatch(page, /CorpsShowcaseSection|TimelineSection|GitHubAnalyticsSection/);
  const projectCards = await read("components/sections/projects-section.tsx");
  assert.doesNotMatch(projectCards, /mission-archive-banner|mission-slash|Record \/ open/);

  const navbar = await read("components/navbar.tsx");
  assert.match(navbar, /\["Projects", "#projects"\]/);
  assert.match(navbar, /\["About", "#about"\]/);
  assert.doesNotMatch(navbar, /"Records"|#github|Breathing styles|Training/);

  const about = await read("components/sections/about-section.tsx");
  assert.doesNotMatch(about, /AnimatedCounter|\bstats\b/);

  const hero = await read("components/sections/hero-section.tsx");
  assert.doesNotMatch(hero, /min-h-\[1000px\]/);
  assert.match(hero, /min-h-\[760px\]/);

  const contact = await read("components/sections/contact-section.tsx");
  assert.doesNotMatch(contact, /<form|react-hook-form|zodResolver|useForm/);
  assert.match(contact, /mailto:/);
  assert.match(contact, /siteConfig\.github/);

  const data = await read("lib/data.ts");
  const topicBlock = data.slice(data.indexOf("export const researchTopics"), data.indexOf("export const skillCategories"));
  assert.equal((topicBlock.match(/\{ name:/g) ?? []).length, 4);
});


test("profile avatar and direct profile link are visible in the portfolio", async () => {
  const navbar = await read("components/navbar.tsx");
  const about = await read("components/sections/about-section.tsx");
  assert.match(navbar, /https:\/\/avatars\.githubusercontent\.com\/u\/194811970\?v=4/);
  assert.match(about, /alt="Giresh Komal Velaga"/);
  assert.match(about, /https:\/\/github\.com\/Giresh-458/);
  assert.match(about, /The person behind the projects/);
});
