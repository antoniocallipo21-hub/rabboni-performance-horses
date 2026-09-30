import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type NewsEntry = CollectionEntry<'news'>;

/** L'id è "<lingua>/<slug>": ricavo le due parti. */
export const newsLang = (entry: NewsEntry) => entry.id.split('/')[0] as Lang;
export const newsSlug = (entry: NewsEntry) => entry.id.split('/').slice(1).join('/');

/** Notizie di una lingua, dalla più recente. Se manca la traduzione la notizia non compare. */
export async function getNews(lang: Lang) {
  const all = await getCollection('news', (entry) => newsLang(entry) === lang);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date, lang: Lang) {
  return date.toLocaleDateString(lang === 'it' ? 'it-IT' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export const newsPath = (lang: Lang, slug?: string) =>
  `${lang === 'it' ? '' : '/en'}/news${slug ? `/${slug}` : ''}`;
