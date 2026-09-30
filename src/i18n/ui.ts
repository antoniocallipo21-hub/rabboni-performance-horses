export const languages = {
  it: 'Italiano',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'it';

export const ui = {
  it: {
    'nav.home': 'Home',
    'nav.about': 'Chi siamo',
    'nav.stallions': 'Stalloni',
    'nav.horses': 'Cavalli',
    'nav.horses.broodmares': 'Broodmares',
    'nav.horses.show': 'Show Horses',
    'nav.horses.three': 'Three Years Old',
    'nav.horses.two': 'Two Years Old',
    'nav.horses.yearlings': 'Yearlings',
    'nav.horses.weanlings': 'Weanlings',
    'nav.news': 'News',
    'nav.gallery': 'Gallery',
    'nav.whm': 'WHM',
    'nav.contact': 'Contatti',
    'nav.menu': 'Menu',
    'hero.tagline': 'Performance Horses',
    'hero.title': 'Eccellenza equestre, dal box al campo gara',
    'hero.cta': 'Scopri i nostri cavalli',
    'site.description':
      'Rabboni Performance Horses: allevamento, addestramento e selezione di cavalli sportivi.',

    'pillars.selling.title': 'Vendita',
    'pillars.selling.text': 'Cavalli selezionati e pronti a dare il massimo.',
    'pillars.breeding.title': 'Allevamento',
    'pillars.breeding.text': 'Linee di sangue scelte con cura e passione.',
    'pillars.training.title': 'Addestramento',
    'pillars.training.text': 'Un percorso su misura per ogni cavallo.',
    'pillars.showing.title': 'Competizione',
    'pillars.showing.text': 'Dal lavoro quotidiano ai grandi campi gara.',

    'about.eyebrow': 'La nostra storia',
    'about.title': 'Fissiamo lo standard fin dall’inizio',
    'about.text':
      'Testo di esempio: qui racconteremo la storia di Rabboni, i valori, l’esperienza e i risultati ottenuti in tanti anni di lavoro con i cavalli.',
    'about.cta': 'Chi siamo',

    'breeding.eyebrow': 'Allevamento',
    'breeding.title': 'Allevare con uno scopo',
    'breeding.text':
      'Testo di esempio: qui descriveremo la filosofia di allevamento, la scelta dei riproduttori e la cura dei puledri fin dai primi giorni.',
    'breeding.cta': 'Vieni a trovarci',

    'aboutpage.title': 'Chi siamo',
    'aboutpage.intro.eyebrow': 'La nostra storia',
    'aboutpage.intro.text':
      'Testo di esempio: da anni lavoriamo con passione e dedizione nel mondo dei cavalli sportivi. Qui racconteremo come è nata Rabboni Performance Horses, chi siamo e che cosa ci guida ogni giorno, dal box al campo gara.',
    'aboutpage.s1.eyebrow': 'Passione',
    'aboutpage.s1.title': 'Una vita con i cavalli',
    'aboutpage.s1.text':
      'Testo di esempio: lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'aboutpage.s2.eyebrow': 'Metodo',
    'aboutpage.s2.title': 'Lavoro, pazienza, rispetto',
    'aboutpage.s2.text':
      'Testo di esempio: duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
    'aboutpage.cta.title': 'Vuoi conoscerci di persona?',
    'aboutpage.cta.text': 'Vieni a trovarci in azienda: ti mostreremo i nostri cavalli e il nostro modo di lavorare.',
    'aboutpage.cta.button': 'Contattaci',

    'news.title': 'News',
    'news.eyebrow': 'Dalla nostra scuderia',
    'news.featured': 'In evidenza',
    'news.all': 'Tutte',
    'news.filters': 'Filtra per categoria',
    'news.nomatch': 'Nessuna news in questa categoria.',
    'news.read': 'Leggi la notizia',
    'news.back': 'Tutte le news',
    'news.more': 'Altre news',
    'news.empty': 'Nessuna news al momento. Torna presto a trovarci!',
    'cat.gare': 'Gare',
    'cat.allevamento': 'Allevamento',
    'cat.eventi': 'Eventi',

    'horses.related': 'Altri cavalli in questa categoria',
    'horses.empty': 'Nessun cavallo in questa categoria al momento.',
    'horses.cta.text': 'Vuoi saperne di più su questo cavallo? Siamo a tua disposizione.',
    'horses.pedigree': 'Pedigree',
    'horses.gallery': 'Gallery',

    'stallions.title': 'Stalloni',
    'stallions.eyebrow': 'I nostri riproduttori',
    'stallions.empty': 'Nessuno stallone disponibile al momento.',
    'stallions.passport': 'Scheda tecnica',
    'stallions.registry': 'Razza / Registro',
    'stallions.height': 'Altezza',
    'stallions.owner': 'Proprietario',
    'stallions.location': 'Residenza',
    'stallions.earnings': 'Vincite NRHA',
    'stallions.titles': 'Risultati e titoli',
    'stallions.breeding': 'Informazioni di monta',
    'stallions.status.standing': 'In monta',
    'stallions.status.deceased': 'Deceduto',
    'stallions.status.retired': 'Ritirato dalla riproduzione',
    'stallions.more': 'Scopri di più',
    'stallions.sire': 'Padre',
    'stallions.firstdam': 'Madre',
    'stallions.genetics': 'Test genetici',
    'stallions.video': 'Video in arena',

    'whm.title': 'Western Horse Market',
    'whm.eyebrow': 'Cavalli da reining in vendita',
    'whm.empty': 'Nessun cavallo in vendita al momento.',
    'whm.price': 'Prezzo',
    'whm.priceOnRequest': 'Prezzo su richiesta',
    'whm.seller': 'Venditore',
    'whm.contactSeller': 'Contatta il venditore',
    'whm.back': 'Tutti i cavalli in vendita',
    'whm.sell.title': 'Vuoi vendere il tuo cavallo?',
    'whm.sell.text':
      'Il Western Horse Market non è riservato ai cavalli di Rabboni: chiunque può richiedere di inserire il proprio cavallo in vendita, con scheda dettagliata, foto e video.',
    'whm.sell.cta': 'Richiedi una scheda',

    'gallery.title': 'Gallery',
    'gallery.eyebrow': 'Uno sguardo a Rabboni',
    'gallery.open': 'Ingrandisci la foto',
    'gallery.close': 'Chiudi',
    'gallery.prev': 'Foto precedente',
    'gallery.next': 'Foto successiva',

    'contact.title': 'Contatti',
    'contact.intro': 'Siamo a tua disposizione per informazioni sui nostri cavalli, visite in azienda e richieste di ogni tipo.',
    'contact.phone': 'Telefono',
    'contact.email': 'Email',
    'contact.address': 'Indirizzo',
    'contact.openmap': 'Apri in Google Maps',
    'contact.follow': 'Seguici sui social',

    'form.title': 'Scrivici',
    'form.intro': 'Compila il modulo e ti risponderemo il prima possibile.',
    'form.name': 'Nome e cognome',
    'form.email': 'Email',
    'form.phone': 'Telefono (facoltativo)',
    'form.message': 'Messaggio',
    'form.consent.pre': 'Ho letto e accetto la ',
    'form.consent.post': '.',
    'form.send': 'Invia messaggio',
    'form.sending': 'Invio in corso…',
    'form.success': 'Grazie! Il tuo messaggio è stato inviato. Ti risponderemo il prima possibile.',
    'form.error': 'Qualcosa è andato storto. Riprova tra poco oppure scrivici direttamente via email.',
    'form.notconfigured': 'Il modulo non è ancora attivo. Scrivici direttamente via email.',

    'backtotop': 'Torna su',
    'footer.contact': 'Contatti',
    'footer.follow': 'Seguici',
    'footer.findus': 'Come trovarci',
    'footer.privacy': 'Privacy Policy',
    'footer.cookie': 'Cookie Policy',
    'footer.madeby': 'Made by',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About us',
    'nav.stallions': 'Stallions',
    'nav.horses': 'Horses',
    'nav.horses.broodmares': 'Broodmares',
    'nav.horses.show': 'Show Horses',
    'nav.horses.three': 'Three Years Old',
    'nav.horses.two': 'Two Years Old',
    'nav.horses.yearlings': 'Yearlings',
    'nav.horses.weanlings': 'Weanlings',
    'nav.news': 'News',
    'nav.gallery': 'Gallery',
    'nav.whm': 'WHM',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'hero.tagline': 'Performance Horses',
    'hero.title': 'Equestrian excellence, from the stable to the show ring',
    'hero.cta': 'Discover our horses',
    'site.description':
      'Rabboni Performance Horses: breeding, training and selection of sport horses.',

    'pillars.selling.title': 'Selling',
    'pillars.selling.text': 'Carefully selected horses, ready to perform.',
    'pillars.breeding.title': 'Breeding',
    'pillars.breeding.text': 'Bloodlines chosen with care and passion.',
    'pillars.training.title': 'Training',
    'pillars.training.text': 'A tailored path for every horse.',
    'pillars.showing.title': 'Showing',
    'pillars.showing.text': 'From daily work to the biggest show rings.',

    'about.eyebrow': 'Our story',
    'about.title': 'Setting the standard from the start',
    'about.text':
      'Sample text: this is where we will tell the story of Rabboni, our values, our experience and the results achieved over many years of working with horses.',
    'about.cta': 'About us',

    'breeding.eyebrow': 'Breeding',
    'breeding.title': 'Breeding with purpose',
    'breeding.text':
      'Sample text: this is where we will describe our breeding philosophy, how we choose our sires and dams, and how we care for foals from day one.',
    'breeding.cta': 'Come visit us',

    'aboutpage.title': 'About us',
    'aboutpage.intro.eyebrow': 'Our story',
    'aboutpage.intro.text':
      'Sample text: for years we have worked with passion and dedication in the world of sport horses. Here we will tell how Rabboni Performance Horses was born, who we are and what drives us every day, from the stable to the show ring.',
    'aboutpage.s1.eyebrow': 'Passion',
    'aboutpage.s1.title': 'A lifetime with horses',
    'aboutpage.s1.text':
      'Sample text: lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'aboutpage.s2.eyebrow': 'Method',
    'aboutpage.s2.title': 'Work, patience, respect',
    'aboutpage.s2.text':
      'Sample text: duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
    'aboutpage.cta.title': 'Would you like to meet us in person?',
    'aboutpage.cta.text': 'Come and visit us at the farm: we will show you our horses and the way we work.',
    'aboutpage.cta.button': 'Contact us',

    'news.title': 'News',
    'news.eyebrow': 'From our stable',
    'news.featured': 'Featured',
    'news.all': 'All',
    'news.filters': 'Filter by category',
    'news.nomatch': 'No news in this category.',
    'news.read': 'Read the story',
    'news.back': 'All news',
    'news.more': 'More news',
    'news.empty': 'No news at the moment. Please check back soon!',
    'cat.gare': 'Competitions',
    'cat.allevamento': 'Breeding',
    'cat.eventi': 'Events',

    'horses.related': 'More horses in this category',
    'horses.empty': 'No horses in this category at the moment.',
    'horses.cta.text': 'Would you like to know more about this horse? We are happy to help.',
    'horses.pedigree': 'Pedigree',
    'horses.gallery': 'Gallery',

    'stallions.title': 'Stallions',
    'stallions.eyebrow': 'Our sires',
    'stallions.empty': 'No stallion available at the moment.',
    'stallions.passport': 'Stallion passport',
    'stallions.registry': 'Breed / Registry',
    'stallions.height': 'Height',
    'stallions.owner': 'Owner',
    'stallions.location': 'Standing at',
    'stallions.earnings': 'NRHA earnings',
    'stallions.titles': 'Results and titles',
    'stallions.breeding': 'Breeding information',
    'stallions.status.standing': 'Standing',
    'stallions.status.deceased': 'Deceased',
    'stallions.status.retired': 'Retired from breeding',
    'stallions.more': 'Learn more',
    'stallions.sire': 'Sire',
    'stallions.firstdam': 'First Dam',
    'stallions.genetics': 'Genetic tests',
    'stallions.video': 'Arena video',

    'whm.title': 'Western Horse Market',
    'whm.eyebrow': 'Reining horses for sale',
    'whm.empty': 'No horses for sale at the moment.',
    'whm.price': 'Price',
    'whm.priceOnRequest': 'Price on request',
    'whm.seller': 'Seller',
    'whm.contactSeller': 'Contact the seller',
    'whm.back': 'All horses for sale',
    'whm.sell.title': 'Want to sell your horse?',
    'whm.sell.text':
      "Western Horse Market isn't limited to Rabboni's own horses: anyone can request to list their horse for sale, with a detailed profile, photos and video.",
    'whm.sell.cta': 'Request a listing',

    'gallery.title': 'Gallery',
    'gallery.eyebrow': 'A look at Rabboni',
    'gallery.open': 'Enlarge photo',
    'gallery.close': 'Close',
    'gallery.prev': 'Previous photo',
    'gallery.next': 'Next photo',

    'contact.title': 'Contact',
    'contact.intro': 'We are happy to help with information about our horses, farm visits and any other request.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.openmap': 'Open in Google Maps',
    'contact.follow': 'Follow us',

    'form.title': 'Write to us',
    'form.intro': 'Fill in the form and we will get back to you as soon as possible.',
    'form.name': 'Full name',
    'form.email': 'Email',
    'form.phone': 'Phone (optional)',
    'form.message': 'Message',
    'form.consent.pre': 'I have read and accept the ',
    'form.consent.post': '.',
    'form.send': 'Send message',
    'form.sending': 'Sending…',
    'form.success': 'Thank you! Your message has been sent. We will get back to you as soon as possible.',
    'form.error': 'Something went wrong. Please try again shortly or write to us directly by email.',
    'form.notconfigured': 'The form is not active yet. Please write to us directly by email.',

    'backtotop': 'Back to top',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow us',
    'footer.findus': 'Find us',
    'footer.privacy': 'Privacy Policy',
    'footer.cookie': 'Cookie Policy',
    'footer.madeby': 'Made by',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first in languages ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function localePath(lang: Lang, path = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '/' : clean}`;
}
