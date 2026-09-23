"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { cn } from "@/lib/utils";

const navItems = ["home", "activities", "info", "village"] as const;

/**
 * En-tête du site : logo, navigation, sélecteur de langue et le SEUL
 * bouton en accent (latérite) de la page — la réservation. Aperçu utilisé
 * dans /styleguide ; réutilisé tel quel dans la mise en page réelle aux
 * étapes 3-4.
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
    <header className="relative border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-serif text-lg" style={{ fontVariationSettings: '"opsz" 32' }}>
          {tSite("name")}
        </Link>

        <nav className={cn("items-center gap-6 text-sm font-medium", desktopVisibility)}>
          {navItems.map((key) => (
            <Link key={key} href="/" className="text-foreground/80 transition-colors hover:text-foreground">
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className={cn("items-center gap-3", desktopVisibility)}>
          <LocaleSwitcher />
          <Button variant="accent" size="sm" asChild>
            <Link href="/">{t("book")}</Link>
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
            {navItems.map((key) => (
              <Link
                key={key}
                href="/"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-foreground/80 hover:bg-muted hover:text-foreground"
              >
                {t(key)}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3">
            <LocaleSwitcher />
            <Button variant="accent" size="sm" asChild className="flex-1">
              <Link href="/">{t("book")}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
