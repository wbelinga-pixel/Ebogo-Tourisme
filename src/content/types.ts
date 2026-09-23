/**
 * Types partagés du contenu du site. Chaque fichier content/fr/*.ts a un
 * équivalent content/en/*.ts qui doit satisfaire exactement ces types :
 * un champ manquant ou mal nommé dans une langue casse le typecheck,
 * au lieu de se découvrir en production. Les tarifs, horaires et contacts
 * vivent ici, jamais en dur dans un composant.
 */

export interface SiteContent {
  name: string;
  tagline: string;
  contact: {
    whatsappDisplay: string;
    whatsappLink: string;
    email: string;
    address: string;
    mapLink: string;
  };
}

export interface ActivityContent {
  slug: string;
  kicker: string;
  title: string;
  summary: string;
  image: string;
  /**
   * Point de cadrage CSS object-position (ex. "center 15%") quand le sujet
   * intéressant n'est pas centré dans la photo — ex. canoe-guide.webp est un
   * selfie de visiteur où le vrai sujet (le guide, les pirogues) est en haut
   * de l'image, pas au centre. Par défaut : "center".
   */
  imageFocus?: string;
  /** Uniquement rempli quand l'information est vérifiée — jamais devinée. */
  duration?: string;
  season?: string;
  priceFrom?: string;
  /** Contenu de la fiche détaillée /activites/[slug]. */
  story?: string;
  gallery?: string[];
  included?: string[];
  prepare?: string[];
}

export interface PriceRow {
  service: string;
  duration: string;
  price: string;
  /** Base de tarification en texte libre (ex. "par pirogue", "par personne"). */
  basis: string;
}

export interface PricingCategory {
  id: "canoe" | "walking" | "camping" | "culture";
  label: string;
  rows: PriceRow[];
}

export interface PricingNote {
  title: string;
  body: string;
}

export interface PricingContent {
  /**
   * Date ISO de la dernière vérification connue — PAS forcément la date
   * de validité confirmée par l'exploitant (voir derniereMajNote et
   * BRIEF.md, section "Contenu déjà disponible").
   */
  derniereMaj: string;
  derniereMajNote: string;
  categories: PricingCategory[];
  notes: PricingNote[];
}

export interface PackageContent {
  title: string;
  duration: string;
  details: string;
  price: string;
  basis: string;
}

export interface ItineraryContent {
  image: string;
  duration: string;
  title: string;
  summary: string;
  steps: string[];
}

export interface PracticalCardContent {
  icon: string;
  title: string;
  body: string;
}

export interface FaqContent {
  question: string;
  answer: string;
}

export interface GalleryItemContent {
  image: string;
  caption: string;
}

export interface VillageContent {
  porteur: string;
  histoire: string[];
  engagement: string[];
}

export interface InfoAccessContent {
  from: string;
  details: string;
}

export interface InfoContent {
  acces: InfoAccessContent[];
  saisons: string;
  quoiEmporter: PracticalCardContent[];
  restauration: string;
  hebergement: string;
  faqs: FaqContent[];
}

export interface TestimonialContent {
  name: string;
  context: string;
  quote: string;
}

export interface HomeContent {
  heroEyebrow: string;
  heroTitle: string;
  heroCta: string;
  activitiesEyebrow: string;
  activitiesTitle: string;
  activitiesCta: string;
  /** Slugs pointant vers activities.ts (voisin dans le même dossier de langue) — pas de duplication de contenu. */
  featuredActivitySlugs: string[];
  accessEyebrow: string;
  accessTitle: string;
  accessBody: string;
  accessCta: string;
  testimonialsEyebrow: string;
  testimonialsTitle: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  ctaCta: string;
}
