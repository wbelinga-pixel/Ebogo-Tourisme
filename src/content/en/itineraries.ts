import type { ItineraryContent } from "../types";

export const itineraries: ItineraryContent[] = [
  {
    image: "canoe-guide.webp",
    duration: "1h30",
    title: "First discovery",
    summary: "Canoe ride, forest path, a drink and a first read of the Nyong landscape.",
    steps: ["Site welcome", "Canoe on the Nyong", "Small or large forest path", "Return and photos"],
  },
  {
    image: "grotte-refuge.webp",
    duration: "Half day",
    title: "Nature & memory",
    summary: "Route to giant trees, caves or rapids, with guide storytelling and an optional local meal.",
    steps: ["Guided departure", "Forest path or canoe depending on season", "Remarkable site", "Meal or nature break"],
  },
  {
    image: "campement.webp",
    duration: "Group / company",
    title: "Immersion & team building",
    summary: "Custom outing with canoe, cultural animation, picnic, storytelling or learning activities.",
    steps: ["Custom program", "Dedicated guides", "Activities of choice", "Group quote"],
  },
];
