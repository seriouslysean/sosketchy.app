import type { APIRoute } from 'astro';
import { PUBLIC_APP_NAME } from 'astro:env/client';
import { getUrl } from '../utils/url-utils';

export const GET: APIRoute = () => {
  const manifest = {
    name: PUBLIC_APP_NAME,
    short_name: PUBLIC_APP_NAME,
    description: `${PUBLIC_APP_NAME}, an iMessage game.`,
    start_url: getUrl('/'),
    scope: getUrl('/'),
    display: 'browser',
    orientation: 'portrait',
    theme_color: '#C75B6A',
    background_color: '#FAF9F7',
    lang: 'en',
    icons: [
      { src: getUrl('/icon-192.png'), sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: getUrl('/icon-512.png'), sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: getUrl('/apple-touch-icon.png'), sizes: '180x180', type: 'image/png', purpose: 'any' },
    ],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' },
  });
};
