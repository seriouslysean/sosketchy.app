import type { APIRoute } from 'astro';

const routes = ['/', '/privacy', '/support'];

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error('Astro site is required to build sitemap.xml.');
  }

  const urls = routes
    .map((path) => {
      const href = new URL(path, site).href.replace(/\/$/, path === '/' ? '/' : '');
      return `  <url><loc>${href}</loc></url>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
