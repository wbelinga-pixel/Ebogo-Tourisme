import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { getContent, type Locale } from "@/content";
import { Eyebrow } from "@/components/eyebrow";
import { alternatesFor } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "infos" });
  return {
    title: t("pageTitle"),
    description: t("pageLead"),
    alternates: alternatesFor("/infos"),
  };
}

export default async function InfosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { info } = getContent(locale as Locale);
  const t = await getTranslations("infos");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Eyebrow>{t("pageEyebrow")}</Eyebrow>
      <h1 className="mt-2">{t("pageTitle")}</h1>
      <p className="mt-4 max-w-[65ch] text-muted-foreground">{t("pageLead")}</p>

      <h2 className="mt-12">{t("accessHeading")}</h2>
      <dl className="mt-4 space-y-4">
        {info.acces.map((a) => (
          <div key={a.from}>
            <dt className="font-semibold">{a.from}</dt>
            <dd className="mt-1 text-muted-foreground">{a.details}</dd>
          </div>
        ))}
      </dl>

      <h2 className="mt-12">{t("seasonsHeading")}</h2>
      <p className="mt-3 max-w-[65ch] text-muted-foreground">{info.saisons}</p>

      <h2 className="mt-12">{t("bringHeading")}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {info.quoiEmporter.map((card) => (
          <div key={card.title} className="rounded-lg border border-border p-5">
            <div className="text-2xl" aria-hidden>
              {card.icon}
            </div>
            <p className="mt-3 font-semibold">{card.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{card.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12">{t("foodHeading")}</h2>
      <p className="mt-3 max-w-[65ch] text-muted-foreground">{info.restauration}</p>

      <h2 className="mt-12">{t("stayHeading")}</h2>
      <p className="mt-3 max-w-[65ch] text-muted-foreground">{info.hebergement}</p>

      <h2 className="mt-12">{t("faqHeading")}</h2>
      <div className="mt-4 divide-y divide-border rounded-lg border border-border">
        {info.faqs.map((faq) => (
          <div key={faq.question} className="p-5">
            <p className="font-semibold">{faq.question}</p>
            <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
