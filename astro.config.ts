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
      filter: (page) => !page.endsWith('.txt') && !/\/g\/?$/.test(page),
    }),
  ],
  env: {
    schema: {
      SITE_URL: envField.string({ context: 'server', access: 'public' }),
      BASE_PATH: envField.string({ context: 'server', access: 'public', default: '/' }),
      APP_NAME: envField.string({ context: 'server', access: 'public', default: '' }),
      BUSINESS_NAME: envField.string({ context: 'server', access: 'public', default: '' }),
      BUSINESS_URL: envField.string({ context: 'server', access: 'public', default: '' }),
      SUPPORT_EMAIL: envField.string({ context: 'server', access: 'public', default: '' }),
      APP_STORE_URL: envField.string({ context: 'server', access: 'public', default: '' }),
    },
  },
});
