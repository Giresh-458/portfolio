export interface SiteEnvironment {
  NEXT_PUBLIC_SITE_URL?: string;
  NODE_ENV?: string;
  VERCEL_ENV?: string;
  VERCEL_URL?: string;
}

export function resolveSiteUrl(env?: SiteEnvironment): string;
