import { BASE_PATH, SITE_URL } from 'astro:env/server';

export const getBasePath = (): string => BASE_PATH;

const trimTrailingSlash = (value: string): string =>
  value.endsWith('/') ? value.slice(0, -1) : value;

const hasBasePathSegment = (pathname: string, cleanBasePath: string): boolean =>
  pathname === cleanBasePath || pathname.startsWith(`${cleanBasePath}/`);

export const getUrl = (path = '/'): string => {
  const basePath = getBasePath();
  if (basePath === '/') return path;
  if (path === '/') return basePath;

  const cleanBasePath = trimTrailingSlash(basePath);
  if (hasBasePathSegment(path, cleanBasePath)) return path;

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return cleanBasePath + normalizedPath;
};

export const getFullUrl = (path = '/'): string =>
  new URL(getUrl(path), SITE_URL).toString();
