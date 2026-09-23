"use client";

import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

/**
 * Sélecteur de langue explicite. La détection automatique du navigateur
 * est désactivée (voir src/i18n/routing.ts) : c'est ce composant, visible
 * en permanence dans l'en-tête, qui fait office de choix de langue.
 */
export function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const activeLocale = useLocale();

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border p-1">
      {routing.locales.map((locale) => (
        <button
          key={locale}
          type="button"
          aria-current={locale === activeLocale ? "true" : undefined}
          onClick={() => router.replace(pathname, { locale })}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide transition-colors",
            locale === activeLocale
              ? "bg-primary text-primary-foreground"
              : "text-foreground hover:bg-muted",
          )}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}
