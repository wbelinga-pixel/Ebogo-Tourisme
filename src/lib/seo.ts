import { routing } from "@/i18n/routing";

/**
 * Domaine provisoire — à remplacer par le vrai nom de domaine une fois
 * acheté (voir BRIEF.md, section Stack et contraintes).
 */
export const siteUrl = "https://www.ebogo-tourisme.cm";

/**
 * Construit les balises hreflang pour une route donnée (sans préfixe de
 * langue), ex. alternatesFor("/") ou alternatesFor("/activites/pirogue").
 * Le référencement bilingue dépend de ces balises bien plus que de la
 * détection automatique du navigateur : chaque page doit annoncer ses
 * équivalents FR/EN explicitement.
 */
export function alternatesFor(pathname: string) {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, `/${locale}${pathname}`]),
  );
  return {
    languages: {
      ...languages,
      "x-default": `/${routing.defaultLocale}${pathname}`,
    },
  };
}
