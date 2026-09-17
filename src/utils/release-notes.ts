import { getCollection, type CollectionEntry } from 'astro:content';

/// One shipped version.
export type ReleaseNote = CollectionEntry<'releases'>['data'];

/// Ascending, one numeric part at a time. Comparing versions as strings puts
/// 3.9.0 above 3.10.0.
const compareVersions = (a: string, b: string): number => {
  const left = a.split('.').map(Number);
  const right = b.split('.').map(Number);

  for (let index = 0; index < Math.max(left.length, right.length); index += 1) {
    const difference = (left[index] ?? 0) - (right[index] ?? 0);
    if (difference !== 0) return difference;
  }

  return 0;
};

/// Newest first. Several versions can share a release date, so the version
/// breaks the tie.
export const getReleaseNotes = async (): Promise<ReleaseNote[]> =>
  (await getCollection('releases'))
    .map((entry) => entry.data)
    .sort((a, b) => b.date.localeCompare(a.date) || compareVersions(b.version, a.version));

/// Dates are bare calendar days. Parsing and formatting in UTC keeps the
/// build runner's timezone from shifting one off by a day.
export const formatReleaseDate = (date: string): string =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
