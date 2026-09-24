import type { ActivityContent } from "../types";

export const activities: ActivityContent[] = [
  {
    slug: "pirogue",
    kicker: "Fleuve Nyong",
    title: "Balades en pirogue",
    summary:
      "Naviguez sur le Nyong avec un guide local, entre reflets, sous-bois et récits du paysage. Le produit phare du site.",
    image: "canoe-guide.webp",
    // Selfie d'un visiteur : le vrai sujet (guide, pirogues) est en haut de
    // la photo, pas au centre — voir imageFocus dans content/types.ts.
    imageFocus: "center 12%",
    duration: "30 min à 2 h 45 selon le circuit",
    season: "Sous-bois inondés praticables surtout en saison des pluies",
    priceFrom: "10 000 FCFA par pirogue",
    story:
      "La pirogue est la façon la plus directe de comprendre Ebogo : le fleuve mène à la plupart des autres sites (Île aux Perroquets, Gros Arbre, grottes, Village de Campement). Les circuits vont d'un petit sous-bois de 30 minutes à une boucle de près de 3 heures combinant plusieurs étapes.",
    gallery: ["canoe-village.webp", "canoe-reflection.webp"],
    included: ["Pirogue et guide local", "Charge normale : 2 adultes + 1 enfant de moins de 6 ans par pirogue"],
    prepare: ["Tenue légère et protection soleil/pluie", "Confirmer le nombre de pirogues nécessaire avant le départ"],
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
    story:
      "Le Gros Arbre Millénaire, surnommé le Kossipo, se rejoint par une combinaison pirogue puis marche courte en sous-bois. C'est l'un des repères les plus photographiés du site.",
    gallery: ["giant-tree.webp"],
    included: ["Trajet en pirogue jusqu'au sous-bois", "Guide local"],
    prepare: ["Chaussures de marche fermées", "Circuit combiné avec un sous-bois : compter 2 h"],
  },
  {
    slug: "grottes-refuges",
    kicker: "Nature",
    title: "Grottes & refuges",
    summary:
      "Explorez les grottes, les abris rocheux, la grotte à roussettes et les lieux chargés de mémoire du site.",
    image: "grotte-refuge.webp",
    priceFrom: "5 000 FCFA par personne (visite de grotte)",
    story:
      "Plusieurs grottes et abris rocheux ponctuent le site, dont la Grotte d'Akomvié et une grotte à roussettes. Certaines s'atteignent en pirogue (Grotte des pêcheurs), d'autres à pied.",
    gallery: ["grotte-sousbois.webp"],
    included: ["Guide local"],
    prepare: ["Chaussures adaptées à la marche en sous-bois"],
  },
  {
    slug: "sentier-botanique",
    kicker: "Forêt",
    title: "Sentier botanique",
    summary:
      "Randonnée pédestre guidée en forêt, entre sous-bois et essences remarquables — jusqu'à 5 personnes par guide.",
    image: "grotte-sousbois.webp",
    priceFrom: "2 000 FCFA par personne",
    story:
      "Une marche accompagnée dans la forêt d'Ebogo, pour observer les essences locales à un rythme plus lent que les circuits en pirogue. Adaptée aux groupes scolaires et universitaires.",
    gallery: ["grotte-sousbois.webp"],
    included: ["Guide, maximum 5 personnes par guide"],
    prepare: ["Eau et chaussures de marche"],
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
    story:
      "Le Nyong se prête à la pêche traditionnelle comme à la pêche au mouliné. Les sessions durent au minimum deux heures, encadrées par un guide local.",
    gallery: ["river-calm.webp"],
    included: ["Encadrement par un guide local"],
    prepare: ["Protection soleil", "Confirmer le matériel disponible sur place avant de venir"],
  },
  {
    slug: "oiseaux-papillons",
    kicker: "Île aux Perroquets",
    title: "Oiseaux, papillons et Île aux Perroquets",
    summary:
      "Observation d'oiseaux et de papillons, avec une étape en pirogue jusqu'à l'Île aux Perroquets et l'embouchure du So'o.",
    image: "rapids.webp",
    duration: "1 h",
    priceFrom: "5 000 FCFA par personne",
    story:
      "Une sortie plus contemplative, entre observation d'oiseaux, de papillons et une étape en pirogue jusqu'à l'Île aux Perroquets, à l'embouchure du So'o dans le Nyong.",
    gallery: ["rapids.webp"],
    included: ["Trajet en pirogue jusqu'à l'Île aux Perroquets"],
    prepare: ["Jumelles si vous en avez", "Tenue discrète pour l'observation"],
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
    story:
      "Des sessions d'initiation aux savoirs locaux : pêche traditionnelle, cuisine, navigation, cueillette du vin de palme, ou encore fabrication du Haa. Chaque session se réserve séparément, sur demande.",
    gallery: ["culture-dance.webp", "culture-river.webp"],
    included: ["Session avec un praticien ou guide local"],
    prepare: ["Sessions à réserver à l'avance, sur demande"],
  },
];
