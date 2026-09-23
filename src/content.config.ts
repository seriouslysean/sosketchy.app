import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

// src/data/release-notes.json mirrors
// SoSketchyMessagesExtension/Resources/release-notes.json in the app repo,
// which the app bundles for its own Release Notes screen and which the GitHub
// Releases and the App Store "What's New" text are both built from. That repo
// is private, so the site cannot fetch it at build time: the app repo's release
// step overwrites this copy in place, and the push deploys it. Never
// hand-edited, and never given the id the file loader wants, so the parser
// derives one from the version each entry already carries. `appStore` is the
// UTC day a version went live on the App Store; the app repo's release tool
// writes it after Apple's iTunes Lookup confirms the live version. An entry
// without it has no App Store release recorded.
const releases = defineCollection({
  loader: file('src/data/release-notes.json', {
    parser: (text) =>
      (JSON.parse(text) as Array<Record<string, unknown>>).map((note) => ({
        id: String(note.version),
        ...note,
      })),
  }),
  schema: z.object({
    version: z.string(),
    date: z.string(),
    appStore: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    highlights: z.array(z.string()),
  }),
});

export const collections = { releases };
