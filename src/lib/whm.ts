import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type WhmEntry = CollectionEntry<'whm'>;

export const whmLang = (entry: WhmEntry) => entry.id.split('/')[0] as Lang;
export const whmSlug = (entry: WhmEntry) => entry.id.split('/').slice(1).join('/');

/** Annunci di una lingua, più recenti (per anno) prima. */
export async function getWhmListings(lang: Lang) {
  const all = await getCollection('whm', (entry) => whmLang(entry) === lang);
  return all.sort((a, b) => (b.data.year ?? 0) - (a.data.year ?? 0) || a.data.name.localeCompare(b.data.name));
}

export const whmPath = (lang: Lang, slug?: string) => `${lang === 'it' ? '' : '/en'}/whm${slug ? `/${slug}` : ''}`;
