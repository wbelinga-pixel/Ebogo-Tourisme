import type { InfoContent } from "../types";

// Itinéraire exact et options d'hébergement : "à réunir" selon BRIEF.md
// (checklist "Ce qu'il faut réunir"). Le champ `details` reste volontairement
// général tant que l'itinéraire précis et l'état de la piste ne sont pas
// confirmés — ne pas inventer de trajet ou d'adresse.
export const info: InfoContent = {
  acces: [
    {
      from: "Depuis Mbalmayo",
      details: "Environ 18 km. Itinéraire précis et état de la piste à confirmer avant publication.",
    },
    {
      from: "Depuis Yaoundé",
      details: "Environ 1 h 30 de route. Itinéraire précis à confirmer avant publication.",
    },
  ],
  saisons:
    "Selon la saison, certains trajets se poursuivent en pirogue ou à pied : les sous-bois inondés sont surtout praticables en saison des pluies. Confirmez toujours votre circuit avant le départ.",
  quoiEmporter: [
    {
      icon: "🥾",
      title: "Tenue conseillée",
      body: "Chaussures confortables, vêtements légers, protection pluie/soleil et tenue adaptée à la marche.",
    },
    {
      icon: "🛶",
      title: "Sécurité pirogue",
      body: "Confirmez le nombre de pirogues, la charge prévue et suivez les consignes du guide.",
    },
    {
      icon: "🍽️",
      title: "Repas & groupes",
      body: "Les repas, pique-niques, campings et groupes doivent être confirmés avant le départ.",
    },
    {
      icon: "🌿",
      title: "Écotourisme",
      body: "Respectez la forêt, le fleuve, les guides, les lieux de mémoire et les consignes du site.",
    },
  ],
  restauration:
    "Un restaurant sur pilotis propose poisson d'eau douce et poulet ; la réservation des repas est conseillée. Des repas livrés (avec ou sans boisson) sont aussi proposés à la journée, voir la grille tarifaire.",
  hebergement:
    "Le camping sur place est proposé (au site, à l'Île aux Perroquets ou au Village de Campement — voir la grille tarifaire). Options d'hébergement en dur à proximité : à confirmer avant publication.",
  faqs: [
    {
      question: "Faut-il réserver ?",
      answer:
        "Oui. La réservation par WhatsApp permet de confirmer le guide, le circuit, la saison, le nombre de pirogues et le tarif final.",
    },
    {
      question: "Combien de personnes par pirogue ?",
      answer: "La charge normale indiquée est de deux adultes et un enfant de moins de 6 ans par pirogue.",
    },
    {
      question: "Peut-on venir en groupe ?",
      answer:
        "Oui. Les groupes, entreprises et séminaires peuvent demander une offre personnalisée. Une réduction de 10 % peut s'appliquer dès 10 personnes.",
    },
    {
      question: "Que faut-il prévoir ?",
      answer:
        "Prévoir chaussures confortables, eau, protection contre le soleil ou la pluie, vêtements adaptés et confirmation de votre réservation.",
    },
  ],
};
