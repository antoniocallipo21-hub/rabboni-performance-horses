// Le sei categorie del sotto-menu "Cavalli". `slug` è usato negli indirizzi
// (es. /cavalli/broodmares), `navKey` è la chiave di traduzione già usata nel menu.
export const horseCategories = [
  { slug: 'broodmares', navKey: 'nav.horses.broodmares' },
  { slug: 'show-horses', navKey: 'nav.horses.show' },
  { slug: 'three-years-old', navKey: 'nav.horses.three' },
  { slug: 'two-years-old', navKey: 'nav.horses.two' },
  { slug: 'yearlings', navKey: 'nav.horses.yearlings' },
  { slug: 'weanlings', navKey: 'nav.horses.weanlings' },
] as const;

export type HorseCategorySlug = (typeof horseCategories)[number]['slug'];
