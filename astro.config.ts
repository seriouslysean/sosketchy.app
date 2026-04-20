import { loadEnv } from 'vite';
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');
const site = env.SITE_URL;
const base = env.BASE_PATH || '/';

if (!site) {
  throw new Error('SITE_URL is required. Set it in .env or your CI environment.');
}

export default defineConfig({
  site,
  base,
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('.txt'),
    }),
  ],
  env: {
    schema: {
      SITE_URL: envField.string({ context: 'client', access: 'public' }),
      BASE_PATH: envField.string({ context: 'client', access: 'public', default: '/' }),
      APP_NAME: envField.string({ context: 'client', access: 'public', default: 'So Sketchy' }),
      BUSINESS_NAME: envField.string({ context: 'client', access: 'public', default: 'Splitleaf, LLC' }),
      BUSINESS_URL: envField.string({ context: 'client', access: 'public', default: 'https://www.splitleaf.net' }),
      SUPPORT_EMAIL: envField.string({ context: 'client', access: 'public', default: 'support@sosketchy.app' }),
    },
  },
});
