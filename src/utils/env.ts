import { APP_STORE_ID as configuredAppStoreId } from 'astro:env/server';

export {
  APP_NAME,
  BASE_PATH,
  BUSINESS_NAME,
  BUSINESS_URL,
  SITE_URL,
  SUPPORT_EMAIL,
} from 'astro:env/server';

// An unset GitHub Actions variable expands to an empty string. Astro's env
// plugin maps an empty value to the schema default; this guard repeats that
// here so a bare apps.apple.com/app/id can never render, whichever way the
// value arrives. The literal repeats the default in astro.config.ts: Apple
// issues the numeric App Store ID once, when the listing is created.
export const APP_STORE_ID = configuredAppStoreId || '6770168860';
