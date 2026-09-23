import type { PricingContent } from "../types";

export const pricing: PricingContent = {
  // Voir BRIEF.md, section "Contenu déjà disponible" : aucune date n'accompagne
  // la grille tarifaire dans les documents source. Ceci est la date la plus
  // ancienne vérifiable (première apparition dans l'historique du dépôt),
  // pas une date de validité confirmée par l'exploitant.
  derniereMaj: "2026-08-19",
  derniereMajNote:
    "Date d'intégration constatée dans ce projet, pas une date de validité confirmée par l'exploitant du site. À reconfirmer avant publication.",
  categories: [
    {
      id: "canoe",
      label: "Pirogue",
      rows: [
        { service: "Petit sous-bois", duration: "30 min", price: "10 000 FCFA", basis: "par pirogue" },
        { service: "Grand sous-bois", duration: "01 h", price: "15 000 FCFA", basis: "par pirogue" },
        { service: "Île aux Perroquets", duration: "01 h 30", price: "13 000 FCFA", basis: "par pirogue" },
        { service: "Sous-bois + Arbre de la Fécondité", duration: "01 h", price: "15 000 FCFA", basis: "par pirogue" },
        { service: "Sous-bois + Baobab mythique", duration: "01 h", price: "20 000 FCFA", basis: "par pirogue" },
        { service: "Sous-bois + Gros Arbre Millénaire", duration: "02 h", price: "20 000 FCFA", basis: "par pirogue" },
        { service: "Sous-bois + Village de Campement", duration: "02 h", price: "25 000 FCFA", basis: "par pirogue" },
        { service: "Sous-bois + Gros Arbre + Grotte des pêcheurs", duration: "02 h 10", price: "25 000 FCFA", basis: "par pirogue" },
        { service: "Embouchure Nyong et Sôô + Rapides + retour à pied", duration: "02 h 30", price: "30 000 FCFA", basis: "par pirogue" },
        { service: "Baobab mythique + Gros Arbre + Village de campement", duration: "02 h 45", price: "40 000 FCFA", basis: "par pirogue" },
      ],
    },
    {
      id: "walking",
      label: "Pédestre",
      rows: [
        { service: "Simple marche à pied dans le village", duration: "Variable", price: "≥ 2 000 FCFA", basis: "par personne" },
        { service: "Visite de la Grotte d'Akomvié", duration: "Variable", price: "5 000 FCFA", basis: "par personne" },
        { service: "Visite du Baobab de Bilig", duration: "Variable", price: "5 000 FCFA", basis: "par personne" },
        { service: "Chasse et observation des papillons", duration: "01 h", price: "5 000 FCFA + achat", basis: "par heure" },
        { service: "Observation d'oiseaux", duration: "01 h", price: "5 000 FCFA", basis: "par heure" },
        { service: "Visite des champs", duration: "01 h", price: "5 000 FCFA", basis: "par heure" },
        { service: "Journée de pêche", duration: "Minimum 02 h", price: "10 000 FCFA", basis: "par personne" },
        { service: "Pêche au Mouliné", duration: "Minimum 02 h", price: "10 000 FCFA", basis: "par personne" },
      ],
    },
    {
      id: "camping",
      label: "Camping",
      rows: [
        { service: "Séjour dans l'enceinte du site ou du village sans repas", duration: "03 h", price: "10 000 FCFA", basis: "pour 10 personnes" },
        { service: "Camping sans repas pourvu", duration: "Nuitée", price: "20 000 FCFA", basis: "par personne" },
        { service: "Repas livré sans boisson", duration: "Repas", price: "≥ 7 000 FCFA", basis: "par personne" },
        { service: "Camping à l'île aux Perroquets", duration: "Nuitée", price: "25 000 FCFA", basis: "par personne" },
        { service: "Camping au Village de Campement, grottes, gros arbre, etc.", duration: "Nuitée", price: "30 000 FCFA", basis: "par personne" },
        { service: "Trois repas livrés sans boisson", duration: "Journée", price: "≥ 12 000 FCFA", basis: "par personne" },
      ],
    },
    {
      id: "culture",
      label: "Culture",
      rows: [
        { service: "Initiation aux méthodes traditionnelles de pêche", duration: "Session", price: "5 000 FCFA", basis: "par personne" },
        { service: "Initiation aux techniques culinaires traditionnelles", duration: "Session", price: "5 000 FCFA", basis: "par personne" },
        { service: "Initiation à la nage en plein cours d'eau", duration: "Session", price: "5 000 FCFA", basis: "par personne" },
        { service: "Initiation à la navigation traditionnelle", duration: "Session", price: "5 000 FCFA", basis: "par personne" },
        { service: "Initiation à la cueillette de vin de palme", duration: "Session", price: "5 000 FCFA", basis: "par personne" },
        { service: "Initiation à la fabrication du Haa", duration: "Session", price: "5 000 FCFA", basis: "par personne" },
        { service: "Cure traditionnelle par les produits de la forêt", duration: "Sur demande", price: "5 000 FCFA", basis: "par maladie" },
        { service: "Voyance et consultation spirituelle", duration: "Sur demande", price: "10 000 FCFA", basis: "par personne" },
        { service: "Biwaren — lavage traditionnel avec produits de la forêt", duration: "Sur demande", price: "10 000 FCFA", basis: "par personne" },
      ],
    },
  ],
  notes: [
    { title: "Pirogue", body: "Charge normale : 2 adultes + 1 enfant de moins de 6 ans par pirogue." },
    { title: "Guide", body: "Les activités pédestres se font avec un maximum de 5 personnes par guide." },
    { title: "Groupes", body: "Réduction possible de 10 % pour les groupes de plus de 10 personnes." },
  ],
};
