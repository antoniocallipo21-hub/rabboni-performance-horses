import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';
import type { HorseCategorySlug } from '../data/horseCategories';

export type HorseEntry = CollectionEntry<'horses'>;

/** L'id è "<lingua>/<slug>": ricavo le due parti. */
export const horseLang = (entry: HorseEntry) => entry.id.split('/')[0] as Lang;
export const horseSlug = (entry: HorseEntry) => entry.id.split('/').slice(1).join('/');

/** Cavalli di una lingua e, se indicata, di una sola categoria. Più recenti (per anno) prima. */
export async function getHorses(lang: Lang, category?: HorseCategorySlug) {
  const all = await getCollection(
    'horses',
    (entry) => horseLang(entry) === lang && (!category || entry.data.category === category),
  );
  return all.sort((a, b) => (b.data.year ?? 0) - (a.data.year ?? 0) || a.data.name.localeCompare(b.data.name));
}

export const horsePath = (lang: Lang, category: string, slug?: string) =>
  `${lang === 'it' ? '' : '/en'}/cavalli/${category}${slug ? `/${slug}` : ''}`;
