import type { Locale } from "@/i18n/routing";
import * as fr from "./fr";
import * as en from "./en";

/**
 * Point d'entrée unique du contenu : `getContent(locale).activities`,
 * `.pricing`, etc. `fr` sert de forme de référence — si `en` (ou l'inverse)
 * s'écarte de sa forme (clé en trop, en moins, mal typée), TypeScript le
 * signale ici, avant le build.
 */
const byLocale: Record<Locale, typeof fr> = { fr, en };

export function getContent(locale: Locale) {
  return byLocale[locale];
}

export type { Locale };
export type * from "./types";
