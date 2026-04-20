import { loadEnv } from 'vite';
import { defineConfig, envField } from 'astro/config';

const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');
const site = env.SITE_URL || process.env.SITE_URL;

if (!site) {
  throw new Error('SITE_URL is required. Set it in .env or your CI environment.');
}

export default defineConfig({
  site,
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  build: {
    inlineStylesheets: 'always',
  },
  env: {
    schema: {
      PUBLIC_APP_NAME: envField.string({ context: 'client', access: 'public' }),
      PUBLIC_BUSINESS_NAME: envField.string({ context: 'client', access: 'public' }),
      PUBLIC_BUSINESS_URL: envField.string({ context: 'client', access: 'public' }),
      PUBLIC_SUPPORT_EMAIL: envField.string({ context: 'client', access: 'public' }),
    },
  },
});
