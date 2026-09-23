import type { Metadata } from "next";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Eyebrow } from "@/components/eyebrow";
import { Photo } from "@/components/photo";
import { SiteHeader } from "@/components/site-header";
import { alternatesFor } from "@/lib/seo";

// Page interne de travail : jamais indexée par les moteurs de recherche.
export const metadata: Metadata = {
  title: "Guide de style",
  robots: { index: false, follow: false },
  alternates: alternatesFor("/styleguide"),
};

const swatches = [
  { token: "colorBackground", className: "bg-background border border-border", hex: "#FAF7F2" },
  { token: "colorForeground", className: "bg-foreground", hex: "#12211B" },
  { token: "colorPrimary", className: "bg-primary", hex: "#1F4D3A" },
  { token: "colorAccent", className: "bg-accent", hex: "#B4562A" },
  { token: "colorWater", className: "bg-water", hex: "#6E8F82" },
] as const;

const spacingScale = [4, 8, 12, 16, 24, 32, 48, 64];

export default async function StyleguidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("styleguide");

  return (
    <div>
      {/* Le header et le footer réels viennent du layout global — cette
          page en affiche des APERÇUS plus bas, dans "En-tête & navigation". */}

      {/* Hero — la pièce qui décide du look */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <Photo
          src="/images/giant-tree.webp"
          alt="Le grand arbre millénaire d'Ebogo, dans la forêt au bord du Nyong"
          bleed
          overlay
          priority
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 pt-32 text-white">
          <Eyebrow className="!text-white/80">{t("heroEyebrow")}</Eyebrow>
          <h1 className="mt-3 max-w-2xl text-white">{t("heroTitle")}</h1>
          <Button variant="accent" size="lg" className="mt-8">
            {t("heroCta")}
          </Button>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Ebogo Tourisme
        </p>
        <h1 className="text-4xl md:text-5xl">{t("title")}</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">{t("intro")}</p>

        {/* Navigation mobile */}
        <section className="mt-16">
          <h2>{t("navHeading")}</h2>
          {/*
            Les deux aperçus ne peuvent pas être côte à côte dans cette
            colonne de 896px : le point de rupture md: du SiteHeader répond
            à la largeur RÉELLE du viewport, pas à celle de son conteneur.
            Empilés en pleine largeur, chacun s'affiche fidèlement.
          */}
          <div className="mt-6 space-y-6">
            <div className="overflow-hidden rounded-lg border border-border">
              <p className="border-b border-border bg-muted px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {t("navDesktopLabel")}
              </p>
              <SiteHeader />
            </div>
            <div className="w-[380px] max-w-full overflow-hidden rounded-lg border border-border">
              <p className="border-b border-border bg-muted px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {t("navMobileLabel")}
              </p>
              <SiteHeader forceMobile defaultOpen />
            </div>
            <div className="relative h-24 w-[380px] max-w-full overflow-hidden rounded-lg border border-border">
              <p className="absolute inset-x-0 top-0 z-10 border-b border-border bg-muted px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {t("navStickyBarLabel")}
              </p>
              <div className="absolute inset-x-0 bottom-0 border-t border-border bg-background p-3">
                <Button variant="accent" size="lg" className="w-full">
                  {t("buttonAccent")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Couleurs */}
        <section className="mt-16">
          <h2>{t("colorsHeading")}</h2>
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
          <h2>{t("typeHeading")}</h2>
          <div className="mt-6 space-y-5 rounded-lg border border-border p-6">
            <Eyebrow>{t("heroEyebrow")}</Eyebrow>
            <h1>H1 — Fraunces 400, opsz 144 (36→56px)</h1>
            <h2>H2 — Fraunces 400, opsz 144 (~28px)</h2>
            <h3>H3 — Fraunces 400 (22px)</h3>
            <h4>H4 — Fraunces 400 (18px)</h4>
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
          <h2>{t("buttonsHeading")}</h2>
          <p className="mt-2 max-w-[60ch] text-sm text-muted-foreground">{t("buttonsNote")}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-lg border border-border p-6">
            <Button variant="primary">{t("buttonPrimary")}</Button>
            <Button variant="outline">{t("buttonOutline")}</Button>
            <Button variant="link">{t("buttonLink")}</Button>
            <Button variant="accent">{t("buttonAccent")}</Button>
          </div>
        </section>

        {/* Cartes */}
        <section className="mt-16">
          <h2>{t("cardsHeading")}</h2>
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

            <Card>
              <Photo
                src="/images/canoe-guide.webp"
                alt="Guide local pagayant en pirogue sur le Nyong"
                ratio="aspect-[4/3]"
                className="rounded-b-none"
              />
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

        {/* Traitement des images */}
        <section className="mt-16">
          <h2>{t("imagesHeading")}</h2>
          <p className="mt-2 max-w-[60ch] text-sm text-muted-foreground">{t("imagesNote")}</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <Photo
                src="/images/grotte-sousbois.webp"
                alt="Sous-bois inondé près des grottes d'Ebogo"
                ratio="aspect-[4/3]"
              />
              <p className="mt-2 text-xs text-muted-foreground">{t("imagePlainLabel")}</p>
            </div>
            <div>
              <Photo
                src="/images/campement.webp"
                alt="Campement au bord du Nyong"
                ratio="aspect-[4/3]"
                overlay
                caption="Village de Campement"
              />
              <p className="mt-2 text-xs text-muted-foreground">{t("imageOverlayLabel")}</p>
            </div>
            <div>
              <Photo
                src="/images/canoe-reflection.webp"
                alt="Reflets du soir sur le Nyong"
                ratio="aspect-[3/4]"
              />
              <p className="mt-2 text-xs text-muted-foreground">{t("imagePortraitLabel")}</p>
            </div>
          </div>
        </section>

        {/* Espacement & colonne de texte */}
        <section className="mt-16">
          <h2>{t("spacingHeading")}</h2>
          <p className="mt-2 max-w-[60ch] text-sm text-muted-foreground">{t("spacingNote")}</p>
          <div className="mt-6 space-y-3 rounded-lg border border-border p-6">
            {spacingScale.map((px) => (
              <div key={px} className="flex items-center gap-4">
                <span className="w-10 shrink-0 text-right text-xs font-semibold text-muted-foreground">
                  {px}
                </span>
                <div className="h-3 rounded-sm bg-primary" style={{ width: `${px * 3}px` }} />
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-border p-6">
            <div className="max-w-[70ch] border-x border-dashed border-water/50 px-4">
              <p className="text-base leading-relaxed">{t("columnSample")}</p>
            </div>
          </div>
        </section>

        {/* Champs de formulaire */}
        <section className="mt-16">
          <h2>{t("formHeading")}</h2>
          <p className="mt-2 max-w-[60ch] text-sm text-muted-foreground">{t("formNote")}</p>
          <div className="mt-6 grid gap-5 rounded-lg border border-border p-6 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sg-name">{t("formName")}</Label>
              <Input id="sg-name" placeholder={t("formNamePlaceholder")} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sg-date">{t("formDate")}</Label>
              <Input id="sg-date" type="date" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sg-people">{t("formPeople")}</Label>
              <Input id="sg-people" type="number" min={1} defaultValue={2} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sg-activity">{t("formActivity")}</Label>
              <Select id="sg-activity" defaultValue="pirogue">
                <option value="pirogue">{t("sampleCardTitle")}</option>
              </Select>
            </div>
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="sg-message">{t("formMessage")}</Label>
              <Textarea id="sg-message" placeholder={t("formMessagePlaceholder")} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
