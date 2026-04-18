import { loadEnv } from 'vite';
import { defineConfig } from 'astro/config';

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
});
