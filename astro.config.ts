import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sosketchy.app',
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  build: {
    inlineStylesheets: 'always',
  },
});
