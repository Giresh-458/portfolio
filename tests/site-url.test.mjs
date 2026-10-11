import assert from "node:assert/strict";
import test from "node:test";
import { resolveSiteUrl } from "../lib/site-url.mjs";

test("uses the configured site origin and ignores a path", () => {
  assert.equal(
    resolveSiteUrl({ NEXT_PUBLIC_SITE_URL: "https://portfolio.example/path?campaign=test" }),
    "https://portfolio.example"
  );
});

test("rejects non-HTTP(S) public site URLs", () => {
  assert.throws(
    () => resolveSiteUrl({ NEXT_PUBLIC_SITE_URL: "javascript:alert(1)" }),
    /must use http or https/
  );
});

test("requires an explicit canonical URL for production deployments", () => {
  assert.throws(
    () => resolveSiteUrl({ NODE_ENV: "production", VERCEL_ENV: "production" }),
    /Set NEXT_PUBLIC_SITE_URL/
  );
});

test("uses Vercel's deployment URL for previews when no canonical URL is set", () => {
  assert.equal(
    resolveSiteUrl({ NODE_ENV: "production", VERCEL_ENV: "preview", VERCEL_URL: "portfolio-git-feature.example.vercel.app" }),
    "https://portfolio-git-feature.example.vercel.app"
  );
});

test("uses localhost for local development when no public URL is set", () => {
  assert.equal(resolveSiteUrl({ NODE_ENV: "development" }), "http://localhost:3000");
});
