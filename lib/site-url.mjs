function resolveOrigin(value, variableName) {
  const normalizedValue = value.includes("://") ? value : `https://${value}`;
  const parsed = new URL(normalizedValue);

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error(`${variableName} must use http or https.`);
  }

  return parsed.origin;
}

export function resolveSiteUrl(env = process.env) {
  const configuredSiteUrl = env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configuredSiteUrl) {
    return resolveOrigin(configuredSiteUrl, "NEXT_PUBLIC_SITE_URL");
  }

  // Preview deployments should stay self-contained instead of pointing metadata
  // at the production domain while reviewers are testing a preview.
  const vercelHost = env.VERCEL_URL?.trim();
  if (env.VERCEL_ENV === "preview" && vercelHost) {
    return resolveOrigin(vercelHost, "VERCEL_URL");
  }

  // Vercel always supplies the project's production domain when system
  // environment variables are exposed. Prefer it so a missing custom
  // NEXT_PUBLIC_SITE_URL doesn't block production deploys or create a
  // deployment-specific canonical URL.
  const productionHost = env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (productionHost) {
    return resolveOrigin(productionHost, "VERCEL_PROJECT_PRODUCTION_URL");
  }

  // VERCEL_URL is available during normal Vercel builds. This is a final
  // deployment-safe fallback; set NEXT_PUBLIC_SITE_URL for a custom canonical
  // origin or when building outside Vercel.
  if (vercelHost) {
    return resolveOrigin(vercelHost, "VERCEL_URL");
  }

  if (env.NODE_ENV === "production" && env.VERCEL_ENV !== "preview") {
    throw new Error(
      "Set NEXT_PUBLIC_SITE_URL for production builds outside Vercel, or expose Vercel system environment variables."
    );
  }

  return "http://localhost:3000";
}
