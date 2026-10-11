export function resolveSiteUrl(env = process.env) {
  const configuredSiteUrl = env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configuredSiteUrl) {
    const parsed = new URL(configuredSiteUrl);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      throw new Error("NEXT_PUBLIC_SITE_URL must use http or https.");
    }
    return parsed.origin;
  }

  // Production deployments need an explicit canonical origin. Preview builds
  // can use Vercel's unique deployment host, and local development uses localhost.
  if (env.NODE_ENV === "production" && env.VERCEL_ENV !== "preview") {
    throw new Error("Set NEXT_PUBLIC_SITE_URL to the production website origin before building.");
  }

  const vercelHost = env.VERCEL_URL?.trim();
  return vercelHost ? `https://${vercelHost}` : "http://localhost:3000";
}
