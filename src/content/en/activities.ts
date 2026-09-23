import type { ActivityContent } from "../types";

export const activities: ActivityContent[] = [
  {
    slug: "pirogue",
    kicker: "Nyong River",
    title: "Canoe tours",
    summary:
      "Navigate the Nyong with a local guide, between reflections, forest banks and stories of the landscape. The site's flagship experience.",
    image: "canoe-guide.webp",
    duration: "30 min to 2 h 45 depending on the route",
    season: "Flooded forest paths are mostly navigable during the rainy season",
    priceFrom: "10,000 FCFA per canoe",
  },
  {
    slug: "arbre-geant",
    kicker: "Forest",
    title: "The Giant Ancient Tree (Kossipo)",
    summary:
      "A remarkable tree with a massive trunk, reached by canoe then on foot. Diameter reported between 8 and 12 m depending on sources — to confirm on site.",
    image: "giant-tree.webp",
    duration: "Included in a 2h canoe route",
    priceFrom: "20,000 FCFA per canoe (forest path + Giant Tree)",
  },
  {
    slug: "grottes-refuges",
    kicker: "Nature",
    title: "Caves & shelters",
    summary: "Explore caves, rock shelters, the bat cave and places filled with local memory.",
    image: "grotte-sousbois.webp",
    priceFrom: "5,000 FCFA per person (cave visit)",
  },
  {
    slug: "sentier-botanique",
    kicker: "Forest",
    title: "Botanical trail",
    summary:
      "Guided walking tour through the forest, among forest paths and remarkable species — up to 5 people per guide.",
    image: "aerial-forest.webp",
    priceFrom: "2,000 FCFA per person",
  },
  {
    slug: "peche",
    kicker: "Nyong",
    title: "Traditional and sport fishing",
    summary: "A fishing day or spinning fishing on the river, as an introduction or free practice depending on level.",
    image: "river-calm.webp",
    duration: "Minimum 2 h",
    priceFrom: "10,000 FCFA per person",
  },
  {
    slug: "oiseaux-papillons",
    kicker: "Parrot Island",
    title: "Birds, butterflies and Parrot Island",
    summary:
      "Birdwatching and butterfly watching, with a canoe stop at Parrot Island and the mouth of the So'o.",
    image: "nyong-island.webp",
    duration: "1 h",
    priceFrom: "5,000 FCFA per person",
  },
  {
    slug: "culture",
    kicker: "Culture",
    title: "Cultural immersion",
    summary:
      "Learn traditional fishing, local cooking, navigation, storytelling and village knowledge with a guide.",
    image: "culture-dance.webp",
    duration: "Short sessions, on request",
    priceFrom: "5,000 FCFA per person",
  },
];
