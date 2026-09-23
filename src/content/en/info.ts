import type { InfoContent } from "../types";

// See src/content/fr/info.ts: exact directions and lodging options are
// still "to gather" per BRIEF.md — kept general on purpose, not invented.
export const info: InfoContent = {
  acces: [
    {
      from: "From Mbalmayo",
      details: "About 18 km. Exact directions and track condition to be confirmed before publication.",
    },
    {
      from: "From Yaoundé",
      details: "About 1 h 30 by road. Exact directions to be confirmed before publication.",
    },
  ],
  saisons:
    "Depending on the season, some routes continue by canoe or on foot: flooded forest paths are mostly navigable during the rainy season. Always confirm your itinerary before departure.",
  quoiEmporter: [
    {
      icon: "🥾",
      title: "Recommended outfit",
      body: "Comfortable shoes, light clothing, rain/sun protection and a suitable walking outfit.",
    },
    {
      icon: "🛶",
      title: "Canoe safety",
      body: "Confirm the number of canoes, expected capacity and follow the guide's instructions.",
    },
    {
      icon: "🍽️",
      title: "Meals & groups",
      body: "Meals, picnics, camping and groups should be confirmed before departure.",
    },
    {
      icon: "🌿",
      title: "Ecotourism",
      body: "Respect the forest, the river, the guides, the memory sites and the site's instructions.",
    },
  ],
  restauration:
    "An on-stilts restaurant serves freshwater fish and chicken; booking meals is recommended. Delivered meals (with or without a drink) are also available by the day — see the price list.",
  hebergement:
    "On-site camping is available (at the site, on Parrot Island or at the Camp Village — see the price list). Off-site lodging options nearby: to be confirmed before publication.",
  faqs: [
    {
      question: "Should I book in advance?",
      answer:
        "Yes. Booking by WhatsApp helps confirm the guide, route, season, number of canoes and final price.",
    },
    {
      question: "How many people per canoe?",
      answer: "The normal capacity indicated is two adults and one child under 6 per canoe.",
    },
    {
      question: "Can groups visit?",
      answer:
        "Yes. Groups, companies and seminars can request a custom offer. A 10% discount may apply from 10 people.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring comfortable shoes, water, sun or rain protection, suitable clothing and your booking confirmation.",
    },
  ],
};
