function resolveOrigin(value, variableName) {
  // Reject explicit non-HTTP schemes before URL parsing so configuration
  // errors return a clear message rather than a generic "Invalid URL".
  if (/^[a-z][a-z\d+.-]*:/i.test(value) && !/^https?:\/\//i.test(value)) {
    throw new Error(`${variableName} must use http or https.`);
  }

  const normalizedValue = /^https?:\/\//i.test(value) ? value : `https://${value}`;
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

  // Vercel exposes the project's production domain as a system variable.
  // Prefer it to a deployment-specific hostname to keep canonical metadata stable.
  const productionHost = env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (productionHost) {
    return resolveOrigin(productionHost, "VERCEL_PROJECT_PRODUCTION_URL");
  }

  // VERCEL_URL is a deployment-safe fallback; set NEXT_PUBLIC_SITE_URL for a
  // custom canonical origin or when building outside Vercel.
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
