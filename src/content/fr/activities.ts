import type { ActivityContent } from "../types";

export const activities: ActivityContent[] = [
  {
    slug: "pirogue",
    kicker: "Fleuve Nyong",
    title: "Balades en pirogue",
    summary:
      "Naviguez sur le Nyong avec un guide local, entre reflets, sous-bois et récits du paysage. Le produit phare du site.",
    image: "canoe-guide.webp",
    duration: "30 min à 2 h 45 selon le circuit",
    season: "Sous-bois inondés praticables surtout en saison des pluies",
    priceFrom: "10 000 FCFA par pirogue",
  },
  {
    slug: "arbre-geant",
    kicker: "Forêt",
    title: "Le Gros Arbre Millénaire (Kossipo)",
    summary:
      "Un arbre remarquable au tronc massif, accessible en pirogue puis à pied. Diamètre annoncé de 8 à 12 m selon les sources — à confirmer sur place.",
    image: "giant-tree.webp",
    duration: "Inclus dans un circuit pirogue de 2 h",
    priceFrom: "20 000 FCFA par pirogue (sous-bois + Gros Arbre)",
  },
  {
    slug: "grottes-refuges",
    kicker: "Nature",
    title: "Grottes & refuges",
    summary:
      "Explorez les grottes, les abris rocheux, la grotte à roussettes et les lieux chargés de mémoire du site.",
    image: "grotte-sousbois.webp",
    priceFrom: "5 000 FCFA par personne (visite de grotte)",
  },
  {
    slug: "sentier-botanique",
    kicker: "Forêt",
    title: "Sentier botanique",
    summary:
      "Randonnée pédestre guidée en forêt, entre sous-bois et essences remarquables — jusqu'à 5 personnes par guide.",
    image: "aerial-forest.webp",
    priceFrom: "2 000 FCFA par personne",
  },
  {
    slug: "peche",
    kicker: "Nyong",
    title: "Pêche traditionnelle et sportive",
    summary:
      "Journée de pêche ou pêche au mouliné sur le fleuve, en initiation ou en pratique libre selon le niveau.",
    image: "river-calm.webp",
    duration: "Minimum 2 h",
    priceFrom: "10 000 FCFA par personne",
  },
  {
    slug: "oiseaux-papillons",
    kicker: "Île aux Perroquets",
    title: "Oiseaux, papillons et Île aux Perroquets",
    summary:
      "Observation d'oiseaux et de papillons, avec une étape en pirogue jusqu'à l'Île aux Perroquets et l'embouchure du So'o.",
    image: "nyong-island.webp",
    duration: "1 h",
    priceFrom: "5 000 FCFA par personne",
  },
  {
    slug: "culture",
    kicker: "Culture",
    title: "Immersion culturelle",
    summary:
      "Apprenez la pêche traditionnelle, la cuisine locale, la navigation, les contes et les savoirs du village avec un guide.",
    image: "culture-dance.webp",
    duration: "Sessions courtes, sur demande",
    priceFrom: "5 000 FCFA par personne",
  },
];
