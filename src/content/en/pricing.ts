import type { PricingContent } from "../types";

export const pricing: PricingContent = {
  derniereMaj: "2026-08-19",
  derniereMajNote:
    "Known integration date for this project, not a validity date confirmed by the site operator. To be reconfirmed before publication.",
  categories: [
    {
      id: "canoe",
      label: "Canoe",
      rows: [
        { service: "Small forest path", duration: "30 min", price: "10,000 FCFA", basis: "per canoe" },
        { service: "Large forest path", duration: "01 h", price: "15,000 FCFA", basis: "per canoe" },
        { service: "Parrot Island", duration: "01 h 30", price: "13,000 FCFA", basis: "per canoe" },
        { service: "Forest path + Fertility Tree", duration: "01 h", price: "15,000 FCFA", basis: "per canoe" },
        { service: "Forest path + Mythical Baobab", duration: "01 h", price: "20,000 FCFA", basis: "per canoe" },
        { service: "Forest path + Giant Ancient Tree", duration: "02 h", price: "20,000 FCFA", basis: "per canoe" },
        { service: "Forest path + Camp Village", duration: "02 h", price: "25,000 FCFA", basis: "per canoe" },
        { service: "Forest path + Giant Tree + Fishermen's Cave", duration: "02 h 10", price: "25,000 FCFA", basis: "per canoe" },
        { service: "Nyong and Sôô mouth + rapids + walk back", duration: "02 h 30", price: "30,000 FCFA", basis: "per canoe" },
        { service: "Mythical Baobab + Giant Tree + Camp Village", duration: "02 h 45", price: "40,000 FCFA", basis: "per canoe" },
      ],
    },
    {
      id: "walking",
      label: "Walking",
      rows: [
        { service: "Simple walk in the village", duration: "Variable", price: "≥ 2,000 FCFA", basis: "per person" },
        { service: "Akomvié Cave visit", duration: "Variable", price: "5,000 FCFA", basis: "per person" },
        { service: "Bilig Baobab visit", duration: "Variable", price: "5,000 FCFA", basis: "per person" },
        { service: "Butterfly watching and collection", duration: "01 h", price: "5,000 FCFA + purchase", basis: "per hour" },
        { service: "Birdwatching", duration: "01 h", price: "5,000 FCFA", basis: "per hour" },
        { service: "Fields visit", duration: "01 h", price: "5,000 FCFA", basis: "per hour" },
        { service: "Fishing day", duration: "Minimum 02 h", price: "10,000 FCFA", basis: "per person" },
        { service: "Spinning fishing", duration: "Minimum 02 h", price: "10,000 FCFA", basis: "per person" },
      ],
    },
    {
      id: "camping",
      label: "Camping",
      rows: [
        { service: "Stay within the site or village without meals", duration: "03 h", price: "10,000 FCFA", basis: "for 10 people" },
        { service: "Camping without meals", duration: "Overnight", price: "20,000 FCFA", basis: "per person" },
        { service: "Delivered meal without drink", duration: "Meal", price: "≥ 7,000 FCFA", basis: "per person" },
        { service: "Camping on Parrot Island", duration: "Overnight", price: "25,000 FCFA", basis: "per person" },
        { service: "Camping at the Camp Village, caves, giant tree, etc.", duration: "Overnight", price: "30,000 FCFA", basis: "per person" },
        { service: "Three delivered meals without drinks", duration: "Day", price: "≥ 12,000 FCFA", basis: "per person" },
      ],
    },
    {
      id: "culture",
      label: "Culture",
      rows: [
        { service: "Introduction to traditional fishing methods", duration: "Session", price: "5,000 FCFA", basis: "per person" },
        { service: "Introduction to traditional cooking techniques", duration: "Session", price: "5,000 FCFA", basis: "per person" },
        { service: "Introduction to open-river swimming", duration: "Session", price: "5,000 FCFA", basis: "per person" },
        { service: "Introduction to traditional navigation", duration: "Session", price: "5,000 FCFA", basis: "per person" },
        { service: "Introduction to palm wine harvesting", duration: "Session", price: "5,000 FCFA", basis: "per person" },
        { service: "Introduction to traditional Haa making", duration: "Session", price: "5,000 FCFA", basis: "per person" },
        { service: "Traditional forest-remedy session", duration: "On request", price: "5,000 FCFA", basis: "per case" },
        { service: "Spiritual consultation", duration: "On request", price: "10,000 FCFA", basis: "per person" },
        { service: "Biwaren — traditional cleansing with forest products", duration: "On request", price: "10,000 FCFA", basis: "per person" },
      ],
    },
  ],
  notes: [
    { title: "Canoe", body: "Normal capacity: 2 adults + 1 child under 6 per canoe." },
    { title: "Guide", body: "Walking activities are organized with a maximum of 5 people per guide." },
    { title: "Groups", body: "A 10% discount may apply for groups of more than 10 people." },
  ],
};
