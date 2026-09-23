import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { getContent, type Locale } from "@/content";
import { Eyebrow } from "@/components/eyebrow";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/booking-form";
import { alternatesFor } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "reserver" });
  return {
    title: t("pageTitle"),
    description: t("pageLead"),
    alternates: alternatesFor("/reserver"),
  };
}

export default async function ReserverPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { site, activities } = getContent(locale as Locale);
  const t = await getTranslations("reserver");

  const whatsappNumber = site.contact.whatsappLink.replace(/\D/g, "");

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <Eyebrow>{t("pageEyebrow")}</Eyebrow>
      <h1 className="mt-2">{t("pageTitle")}</h1>
      <p className="mt-4 max-w-[60ch] text-muted-foreground">{t("pageLead")}</p>

      <div className="mt-8 flex flex-col items-start gap-3 rounded-lg border border-border bg-muted p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="eyebrow">{t("whatsappHeading")}</p>
          <p className="mt-1 font-semibold">{site.contact.whatsappDisplay}</p>
        </div>
        {/* Pas "accent" ici : le header (desktop) et la barre fixe (mobile)
            portent déjà l'unique bouton accent de la page. */}
        <Button variant="primary" asChild>
          <a href={site.contact.whatsappLink} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> {t("whatsappCta")}
          </a>
        </Button>
      </div>

      <h2 className="mt-12">{t("formHeading")}</h2>
      <div className="mt-6">
        <BookingForm
          whatsappNumber={whatsappNumber}
          activityOptions={activities.map((a) => a.title)}
        />
      </div>
    </div>
  );
}
