import { getTranslations, setRequestLocale } from "next-intl/server";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const swatches = [
  { token: "colorBackground", className: "bg-background border border-border", hex: "#FAF7F2" },
  { token: "colorForeground", className: "bg-foreground", hex: "#12211B" },
  { token: "colorPrimary", className: "bg-primary", hex: "#1F4D3A" },
  { token: "colorAccent", className: "bg-accent", hex: "#B4562A" },
  { token: "colorWater", className: "bg-water", hex: "#6E8F82" },
] as const;

export default async function StyleguidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("styleguide");

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        Ebogo Tourisme
      </p>
      <h1 className="text-4xl md:text-5xl">{t("title")}</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">{t("intro")}</p>

      {/* Couleurs */}
      <section className="mt-16">
        <h2 className="text-2xl">{t("colorsHeading")}</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {swatches.map((s) => (
            <div key={s.token} className="overflow-hidden rounded-lg border border-border">
              <div className={`h-20 w-full ${s.className}`} />
              <div className="p-3">
                <p className="text-sm font-semibold">{t(s.token)}</p>
                <p className="text-xs text-muted-foreground">{s.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typographie */}
      <section className="mt-16">
        <h2 className="text-2xl">{t("typeHeading")}</h2>
        <div className="mt-6 space-y-4 rounded-lg border border-border p-6">
          <h1 className="text-5xl">H1 — Fraunces 700</h1>
          <h2 className="text-3xl">H2 — Fraunces 600</h2>
          <h3 className="text-xl">H3 — Fraunces 600</h3>
          <h4 className="text-lg">H4 — Fraunces 600</h4>
          <p className="max-w-[70ch] font-sans text-base leading-relaxed">
            Corps de texte — Inter 400. Colonne pensée pour rester entre 65 et 75 caractères de
            large, avec un interligne généreux pour une lecture confortable sur mobile comme sur
            desktop.
          </p>
          <p className="max-w-[70ch] font-sans text-sm text-muted-foreground">
            Texte secondaire — Inter 400, couleur atténuée pour les légendes et métadonnées.
          </p>
        </div>
      </section>

      {/* Boutons */}
      <section className="mt-16">
        <h2 className="text-2xl">{t("buttonsHeading")}</h2>
        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-lg border border-border p-6">
          <Button variant="primary">{t("buttonPrimary")}</Button>
          <Button variant="outline">{t("buttonOutline")}</Button>
          <Button variant="accent">{t("buttonAccent")}</Button>
          <Button variant="ghost">{t("buttonGhost")}</Button>
          <Button variant="link">{t("buttonGhost")}</Button>
        </div>
      </section>

      {/* Cartes */}
      <section className="mt-16">
        <h2 className="text-2xl">{t("cardsHeading")}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>{t("sampleCardTitle")}</CardTitle>
              <CardDescription>{t("sampleCardDescription")}</CardDescription>
            </CardHeader>
            <CardContent>{t("sampleCardBody")}</CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                {t("sampleCardCta")}
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-muted">
            <CardHeader>
              <CardTitle>{t("sampleCardTitle")}</CardTitle>
              <CardDescription>{t("sampleCardDescription")}</CardDescription>
            </CardHeader>
            <CardContent>{t("sampleCardBody")}</CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                {t("sampleCardCta")}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}
