import { BASE_PATH, SITE_URL } from 'astro:env/client';

export const getBasePath = (): string => BASE_PATH || '/';

const trimTrailingSlash = (value: string): string =>
  value.endsWith('/') ? value.slice(0, -1) : value;

const hasBasePathSegment = (pathname: string, cleanBasePath: string): boolean =>
  pathname === cleanBasePath || pathname.startsWith(`${cleanBasePath}/`);

export const getPathname = (astroPathname: string): string => {
  const basePath = getBasePath();
  if (basePath === '/') return astroPathname;

  const cleanBasePath = trimTrailingSlash(basePath);
  if (hasBasePathSegment(astroPathname, cleanBasePath)) {
    return astroPathname.slice(cleanBasePath.length) || '/';
  }
  return astroPathname;
};

export const getUrl = (path = '/'): string => {
  const basePath = getBasePath();
  if (basePath === '/') return path;
  if (path === '/') return basePath;

  const cleanBasePath = trimTrailingSlash(basePath);
  if (hasBasePathSegment(path, cleanBasePath)) return path;

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return cleanBasePath + normalizedPath;
};

export const getFullUrl = (path = '/'): string => {
  if (!SITE_URL) {
    throw new Error('SITE_URL is required but missing.');
  }
  return new URL(getUrl(path), SITE_URL).toString();
};

export const stripBasePath = (pathname: string): string => {
  const cleanPath = getPathname(pathname);
  if (cleanPath === '/') return '/';
  return cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
};
