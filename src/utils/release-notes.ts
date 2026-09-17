import notes from '../data/release-notes.json';

/// One shipped version, newest first.
export interface ReleaseNote {
  version: string;
  date: string;
  highlights: string[];
}

// Mirrors SoSketchyMessagesExtension/Resources/release-notes.json in the app
// repo, which the app bundles for its own Release Notes screen and which the
// GitHub Releases and the App Store "What's New" text are both built from.
// That repo is private, so the site cannot fetch it at build time: the app
// repo's release step writes this copy instead, and the push deploys it. Never
// hand-edited.
export const releaseNotes: ReleaseNote[] = notes;

/// Dates are bare calendar days. Parsing and formatting in UTC keeps the
/// build runner's timezone from shifting one off by a day.
export const formatReleaseDate = (date: string): string =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
