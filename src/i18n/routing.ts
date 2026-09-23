import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localePrefix: "always",
  // Le public visé (Cameroun + diaspora) a souvent un navigateur réglé en
  // anglais tout en préférant lire en français : on ignore l'en-tête
  // Accept-Language et on affiche toujours le français par défaut. La
  // langue reste un choix explicite via le sélecteur, jamais deviné.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
