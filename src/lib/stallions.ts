import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type StallionEntry = CollectionEntry<'stallions'>;

export const stallionLang = (entry: StallionEntry) => entry.id.split('/')[0] as Lang;
export const stallionSlug = (entry: StallionEntry) => entry.id.split('/').slice(1).join('/');

/** Stalloni di una lingua, in piedi prima, poi per anno di nascita più recente. */
export async function getStallions(lang: Lang) {
  const all = await getCollection('stallions', (entry) => stallionLang(entry) === lang);
  return all.sort((a, b) => {
    const standing = (s?: string) => (s === 'standing' || !s ? 0 : 1);
    return standing(a.data.status) - standing(b.data.status) || (b.data.year ?? 0) - (a.data.year ?? 0);
  });
}

export const stallionPath = (lang: Lang, slug?: string) => `${lang === 'it' ? '' : '/en'}/stalloni${slug ? `/${slug}` : ''}`;
