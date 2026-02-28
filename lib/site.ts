const DEFAULT_SITE_URL = "https://example.com";

function normalizeSiteUrl(value?: string): string {
  if (!value) {
    return DEFAULT_SITE_URL;
  }

  try {
    const url = new URL(value);
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export function absoluteUrl(pathname: string = "/"): string {
  return new URL(pathname, siteUrl).toString();
}

