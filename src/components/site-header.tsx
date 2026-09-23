"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "home", href: "/" },
  { key: "activities", href: "/activites" },
  { key: "info", href: "/infos" },
  { key: "village", href: "/village" },
] as const;

/**
 * En-tête du site : logo, navigation et sélecteur de langue. Le bouton
 * accent (latérite) de réservation n'apparaît ici QUE sur desktop — sur
 * mobile, c'est StickyBookBar (barre fixe en bas, toujours visible) qui en
 * porte l'unique exemplaire, pas un bouton caché dans ce menu.
 */
export function SiteHeader({
  forceMobile = false,
  defaultOpen = false,
}: {
  /** Ignore le point de rupture md: pour prévisualiser la version mobile sur desktop (/styleguide). */
  forceMobile?: boolean;
  /** Ouvre le panneau mobile par défaut, pour capture d'écran / démonstration. */
  defaultOpen?: boolean;
}) {
  const t = useTranslations("nav");
  const tSite = useTranslations("site");
  const [open, setOpen] = useState(defaultOpen);
  const desktopVisibility = forceMobile ? "hidden" : "hidden md:flex";
  const mobileVisibility = forceMobile ? "flex" : "flex md:hidden";

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-serif text-lg" style={{ fontVariationSettings: '"opsz" 32' }}>
          {tSite("name")}
        </Link>

        <nav className={cn("items-center gap-6 text-sm font-medium", desktopVisibility)}>
          {navItems.map(({ key, href }) => (
            <Link key={key} href={href} className="text-foreground/80 transition-colors hover:text-foreground">
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className={cn("items-center gap-3", desktopVisibility)}>
          <LocaleSwitcher />
          <Button variant="accent" size="sm" asChild>
            <Link href="/reserver">{t("book")}</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn("inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border", mobileVisibility)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className={cn("border-t border-border bg-background px-6 py-4", mobileVisibility.replace("flex", "block"))}>
          <nav className="flex flex-col gap-1 text-base font-medium">
            {navItems.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-foreground/80 hover:bg-muted hover:text-foreground"
              >
                {t(key)}
              </Link>
            ))}
          </nav>
          <div className="mt-4">
            <LocaleSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
