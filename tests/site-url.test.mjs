import assert from "node:assert/strict";
import test from "node:test";
import { resolveSiteUrl } from "../lib/site-url.mjs";

test("uses the configured site origin and ignores a path", () => {
  assert.equal(
    resolveSiteUrl({ NEXT_PUBLIC_SITE_URL: "https://portfolio.example/path?campaign=test" }),
    "https://portfolio.example"
  );
});

test("rejects non-HTTP(S) configured URLs", () => {
  assert.throws(
    () => resolveSiteUrl({ NEXT_PUBLIC_SITE_URL: "javascript:alert(1)" }),
    /NEXT_PUBLIC_SITE_URL must use http or https/
  );
});

test("uses the Vercel project production domain for production when no explicit URL is set", () => {
  assert.equal(
    resolveSiteUrl({
      NODE_ENV: "production",
      VERCEL_ENV: "production",
      VERCEL_PROJECT_PRODUCTION_URL: "portfolio.example"
    }),
    "https://portfolio.example"
  );
});

test("uses Vercel's deployment URL for previews when no canonical URL is set", () => {
  assert.equal(
    resolveSiteUrl({
      NODE_ENV: "production",
      VERCEL_ENV: "preview",
      VERCEL_URL: "portfolio-git-feature.example.vercel.app",
      VERCEL_PROJECT_PRODUCTION_URL: "portfolio.example"
    }),
    "https://portfolio-git-feature.example.vercel.app"
  );
});

test("uses VERCEL_URL when the production-domain variable is unavailable", () => {
  assert.equal(
    resolveSiteUrl({
      NODE_ENV: "production",
      VERCEL_ENV: "production",
      VERCEL_URL: "portfolio-abc123.vercel.app"
    }),
    "https://portfolio-abc123.vercel.app"
  );
});

test("requires an explicit URL for non-Vercel production builds", () => {
  assert.throws(
    () => resolveSiteUrl({ NODE_ENV: "production", VERCEL_ENV: "production" }),
    /Set NEXT_PUBLIC_SITE_URL/
  );
});

test("uses localhost for local development when no public URL is set", () => {
  assert.equal(resolveSiteUrl({ NODE_ENV: "development" }), "http://localhost:3000");
});
