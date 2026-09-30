import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Le news stanno in src/content/news/<lingua>/<slug>.md
// (es. it/nuovo-puledro.md e en/nuovo-puledro.md: stesso nome = stessa notizia).
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['gare', 'allevamento', 'eventi']),
    excerpt: z.string(),
    cover: z.string(),
    coverAlt: z.string().optional(),
  }),
});

// I cavalli stanno in src/content/horses/<lingua>/<slug>.md
// La categoria (broodmares, show-horses, ...) decide in quale pagina compare la scheda.
// sire/dam/.../damDamDam formano il pedigree su 3 generazioni: genitori, nonni, bisnonni.
const horses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/horses' }),
  schema: z.object({
    name: z.string(),
    category: z.enum(['broodmares', 'show-horses', 'three-years-old', 'two-years-old', 'yearlings', 'weanlings']),
    breed: z.string().optional(),
    year: z.number().int().optional(),
    sex: z.enum(['stallion', 'mare', 'colt', 'filly', 'gelding']).optional(),
    color: z.string().optional(),
    excerpt: z.string(),
    cover: z.string(),
    coverAlt: z.string().optional(),
    gallery: z.array(z.string()).optional(),

    // Generazione 1 — genitori
    sire: z.string().optional(),
    dam: z.string().optional(),
    // Generazione 2 — nonni
    sireSire: z.string().optional(),
    sireDam: z.string().optional(),
    damSire: z.string().optional(),
    damDam: z.string().optional(),
    // Generazione 3 — bisnonni
    sireSireSire: z.string().optional(),
    sireSireDam: z.string().optional(),
    sireDamSire: z.string().optional(),
    sireDamDam: z.string().optional(),
    damSireSire: z.string().optional(),
    damSireDam: z.string().optional(),
    damDamSire: z.string().optional(),
    damDamDam: z.string().optional(),
  }),
});

// Gli stalloni stanno in src/content/stallions/<lingua>/<slug>.md
const stallions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stallions' }),
  schema: z.object({
    name: z.string(),
    nickname: z.string().optional(),
    year: z.number().int().optional(),
    deathYear: z.number().int().optional(),
    color: z.string().optional(),
    registry: z.string().optional(),
    height: z.string().optional(),
    owner: z.string().optional(),
    location: z.string().optional(),
    earnings: z.string().optional(),
    /** LTE (Lifetime Total Earnings): cifra breve per la card, es. "$119,606" */
    lte: z.string().optional(),
    titles: z.array(z.string()).optional(),
    status: z.enum(['standing', 'deceased', 'retired']).optional(),
    headline: z.string().optional(),
    sireBio: z.string().optional(),
    damBio: z.string().optional(),
    geneticTests: z.array(z.object({ name: z.string(), result: z.string() })).optional(),
    fee: z.string().optional(),
    semenType: z.string().optional(),
    geneticStatus: z.string().optional(),
    semenAvailability: z.string().optional(),
    breedingLinks: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
    foalsEligible: z.string().optional(),
    breedingNote: z.string().optional(),
    video: z.string().optional(),
    offspringEarnings: z.string().optional(),
    offspringExample: z.object({ name: z.string(), lte: z.string().optional(), note: z.string() }).optional(),
    excerpt: z.string(),
    cover: z.string(),
    coverAlt: z.string().optional(),
    /** Foto per la card (verticale): se assente si usa `cover`. La card la mostra intera, l'hero la taglierebbe troppo. */
    cardCover: z.string().optional(),
    cardCoverAlt: z.string().optional(),
    /** Logo/monogramma dello stallone, mostrato a destra nell'hero. Facoltativo. */
    logo: z.string().optional(),
    logoAlt: z.string().optional(),
    gallery: z.array(z.string()).optional(),

    // Pedigree su 3 generazioni, stessa forma usata per i cavalli
    sire: z.string().optional(),
    dam: z.string().optional(),
    sireSire: z.string().optional(),
    sireDam: z.string().optional(),
    damSire: z.string().optional(),
    damDam: z.string().optional(),
    sireSireSire: z.string().optional(),
    sireSireDam: z.string().optional(),
    sireDamSire: z.string().optional(),
    sireDamDam: z.string().optional(),
    damSireSire: z.string().optional(),
    damSireDam: z.string().optional(),
    damDamSire: z.string().optional(),
    damDamDam: z.string().optional(),
  }),
});

// Il Western Horse Market (WHM) è il mercatino di cavalli da reining in vendita gestito da Rabboni:
// non solo cavalli di proprietà Rabboni, chiunque può richiedere di inserire il proprio.
const whm = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/whm' }),
  schema: z.object({
    name: z.string(),
    year: z.number().int().optional(),
    sex: z.enum(['stallion', 'mare', 'colt', 'filly', 'gelding']).optional(),
    breed: z.string().optional(),
    color: z.string().optional(),
    height: z.string().optional(),
    price: z.string().optional(),
    seller: z.string().optional(),
    sellerPhone: z.string().optional(),
    sellerEmail: z.string().optional(),
    excerpt: z.string(),
    cover: z.string(),
    coverAlt: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    video: z.string().optional(),

    // Pedigree su 3 generazioni, stessa forma usata per cavalli e stalloni
    sire: z.string().optional(),
    dam: z.string().optional(),
    sireSire: z.string().optional(),
    sireDam: z.string().optional(),
    damSire: z.string().optional(),
    damDam: z.string().optional(),
    sireSireSire: z.string().optional(),
    sireSireDam: z.string().optional(),
    sireDamSire: z.string().optional(),
    sireDamDam: z.string().optional(),
    damSireSire: z.string().optional(),
    damSireDam: z.string().optional(),
    damDamSire: z.string().optional(),
    damDamDam: z.string().optional(),
  }),
});

export const collections = { news, horses, stallions, whm };
