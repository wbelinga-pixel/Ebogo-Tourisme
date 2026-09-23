import type { ActivityContent } from "../types";

export const activities: ActivityContent[] = [
  {
    slug: "pirogue",
    kicker: "Nyong River",
    title: "Canoe tours",
    summary:
      "Navigate the Nyong with a local guide, between reflections, forest banks and stories of the landscape. The site's flagship experience.",
    image: "canoe-guide.webp",
    // Visitor selfie: the real subject (guide, canoes) sits near the top of
    // the photo, not the center — see imageFocus in content/types.ts.
    imageFocus: "center 12%",
    duration: "30 min to 2 h 45 depending on the route",
    season: "Flooded forest paths are mostly navigable during the rainy season",
    priceFrom: "10,000 FCFA per canoe",
    story:
      "The canoe is the most direct way to understand Ebogo: the river leads to most of the other sites (Parrot Island, the Giant Tree, caves, the Camp Village). Routes range from a 30-minute short forest path to a near-3-hour loop combining several stops.",
    gallery: ["canoe-village.webp", "canoe-reflection.webp", "aerial-nyong.webp"],
    included: ["Canoe and local guide", "Normal capacity: 2 adults + 1 child under 6 per canoe"],
    prepare: ["Light clothing and sun/rain protection", "Confirm the number of canoes needed before departure"],
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
    story:
      "The Giant Ancient Tree, nicknamed the Kossipo, is reached by a combination of canoe and a short forest walk. It's one of the site's most photographed landmarks.",
    gallery: ["giant-tree.webp"],
    included: ["Canoe ride to the forest path", "Local guide"],
    prepare: ["Closed walking shoes", "Combined with a forest path: allow 2 h"],
  },
  {
    slug: "grottes-refuges",
    kicker: "Nature",
    title: "Caves & shelters",
    summary: "Explore caves, rock shelters, the bat cave and places filled with local memory.",
    image: "grotte-sousbois.webp",
    priceFrom: "5,000 FCFA per person (cave visit)",
    story:
      "Several caves and rock shelters punctuate the site, including Akomvié Cave and a bat cave. Some are reached by canoe (Fishermen's Cave), others on foot.",
    gallery: ["grotte-sousbois.webp", "grotte-refuge.webp", "rock-refuge.webp"],
    included: ["Local guide"],
    prepare: ["Shoes suited to walking on forest paths"],
  },
  {
    slug: "sentier-botanique",
    kicker: "Forest",
    title: "Botanical trail",
    summary:
      "Guided walking tour through the forest, among forest paths and remarkable species — up to 5 people per guide.",
    image: "aerial-forest.webp",
    priceFrom: "2,000 FCFA per person",
    story:
      "A guided walk through Ebogo's forest, to observe local plant species at a slower pace than the canoe routes. Well suited to school and university groups.",
    gallery: ["aerial-forest.webp"],
    included: ["Guide, maximum 5 people per guide"],
    prepare: ["Water and walking shoes"],
  },
  {
    slug: "peche",
    kicker: "Nyong",
    title: "Traditional and sport fishing",
    summary: "A fishing day or spinning fishing on the river, as an introduction or free practice depending on level.",
    image: "river-calm.webp",
    duration: "Minimum 2 h",
    priceFrom: "10,000 FCFA per person",
    story:
      "The Nyong lends itself to both traditional fishing and spinning fishing. Sessions last at least two hours, led by a local guide.",
    gallery: ["river-calm.webp"],
    included: ["Guidance from a local guide"],
    prepare: ["Sun protection", "Confirm available equipment on site before you come"],
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
    story:
      "A more contemplative outing, combining birdwatching, butterfly watching and a canoe stop at Parrot Island, where the So'o meets the Nyong.",
    gallery: ["nyong-island.webp", "aerial-nyong.webp"],
    included: ["Canoe ride to Parrot Island"],
    prepare: ["Binoculars if you have them", "Muted clothing for observation"],
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
    story:
      "Introductory sessions into local knowledge: traditional fishing, cooking, navigation, palm wine harvesting, or traditional Haa making. Each session is booked separately, on request.",
    gallery: ["culture-dance.webp", "culture-river.webp"],
    included: ["Session with a local practitioner or guide"],
    prepare: ["Sessions to be booked in advance, on request"],
  },
];
