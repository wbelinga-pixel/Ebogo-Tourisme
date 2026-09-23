import type { VillageContent } from "../types";

// Porteur du site tranché avec le commanditaire (voir BRIEF.md) : la Commune
// (collectivité territoriale de Mengueme), pas la communauté villageoise ni
// une association informelle — d'où un ton institutionnel ici.
//
// Volontairement absent : le second arbre géant « atui » documenté en 2025
// (voir BRIEF.md, sources Mongabay). Le brief est explicite : cet angle
// éditorial nécessite l'accord de la communauté sur ce qui peut être raconté
// autour de l'arbre sacré, qui n'a pas été obtenu. Ne pas l'ajouter ici sans
// cet accord.
export const village: VillageContent = {
  porteur:
    "Ebogo est une destination écotouristique portée par la Commune de Mengueme, dans le département du Nyong-et-So'o, Région du Centre.",
  histoire: [
    "Le site est aménagé depuis 1996, avec l'appui de l'État camerounais et de l'Organisation mondiale du tourisme, et accueille de l'ordre de 3 000 visiteurs par an.",
    "Il s'organise autour du fleuve Nyong et de la forêt qui le borde : sous-bois inondables, arbres remarquables, grottes et sites de mémoire locale.",
  ],
  engagement: [
    "Respecter la forêt, le fleuve, les guides et les lieux de mémoire visités.",
    "Suivre les consignes des guides locaux, en particulier sur l'eau et en forêt.",
    "Privilégier les circuits et activités encadrés par le site plutôt qu'une visite non accompagnée.",
  ],
};
