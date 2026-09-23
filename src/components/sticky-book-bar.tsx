"use client";

import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

/**
 * Le brief est explicite : le bouton de réservation doit rester visible en
 * permanence sur mobile. Le cacher dans le menu hamburger ne suffit pas —
 * cette barre fixe en bas est LE bouton accent de la page sur mobile ; le
 * bouton accent du SiteHeader (desktop) reste caché sur mobile pour ne
 * jamais en montrer deux à la fois.
 */
export function StickyBookBar() {
  const t = useTranslations("nav");

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <Button variant="accent" size="lg" asChild className="w-full">
        <Link href="/reserver">{t("book")}</Link>
      </Button>
    </div>
  );
}
