import { loadEnv } from 'vite';
import { defineConfig } from 'astro/config';

const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');
const site = env.SITE_URL ?? process.env.SITE_URL ?? 'https://sosketchy.app';

export default defineConfig({
  site,
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  build: {
    inlineStylesheets: 'always',
  },
});
