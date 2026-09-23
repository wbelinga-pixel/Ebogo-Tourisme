import type { ItineraryContent } from "../types";

export const itineraries: ItineraryContent[] = [
  {
    image: "canoe-guide.webp",
    duration: "1h30",
    title: "Première découverte",
    summary: "Balade en pirogue, sous-bois, boisson et première lecture du paysage du Nyong.",
    steps: ["Accueil au site", "Pirogue sur le Nyong", "Petit ou grand sous-bois", "Retour et photos"],
  },
  {
    image: "grotte-refuge.webp",
    duration: "Demi-journée",
    title: "Nature & mémoire",
    summary: "Circuit vers les grands arbres, grottes ou rapides, avec récit du guide et option repas local.",
    steps: ["Départ guidé", "Sous-bois ou pirogue selon saison", "Site remarquable", "Repas ou pause nature"],
  },
  {
    image: "campement.webp",
    duration: "Groupe / entreprise",
    title: "Immersion & team building",
    summary: "Sortie sur mesure avec pirogue, animation culturelle, pique-nique, contes ou activités d'apprentissage.",
    steps: ["Programme personnalisé", "Guides dédiés", "Activités au choix", "Devis groupe"],
  },
];
