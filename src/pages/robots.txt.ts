import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error('Astro site is required to build robots.txt.');
  }

  const sitemap = new URL('/sitemap.xml', site).href;
  const body = `User-agent: *
Disallow: /g

Sitemap: ${sitemap}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
