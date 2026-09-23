import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { getContent, type Locale } from "@/content";
import { Eyebrow } from "@/components/eyebrow";
import { Photo } from "@/components/photo";
import { alternatesFor, siteUrl } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "village" });
  const { village } = getContent(locale as Locale);
  return {
    title: t("pageTitle"),
    description: village.porteur,
    alternates: alternatesFor("/village"),
    openGraph: {
      title: t("pageTitle"),
      description: village.porteur,
      url: `${siteUrl}/${locale}/village`,
      images: ["/images/aerial-forest.webp"],
    },
  };
}

export default async function VillagePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { village } = getContent(locale as Locale);
  const t = await getTranslations("village");

  return (
    <div>
      <section className="relative flex min-h-[45vh] items-end overflow-hidden">
        <Photo src="/images/aerial-forest.webp" alt="" bleed overlay priority sizes="100vw" />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-12 pt-24 text-white">
          <Eyebrow className="!text-white/80">{t("pageEyebrow")}</Eyebrow>
          <h1 className="mt-3 text-white">{t("pageTitle")}</h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="max-w-[65ch] text-lg leading-relaxed">{village.porteur}</p>

        <h2 className="mt-12">{t("historyHeading")}</h2>
        <div className="mt-4 space-y-4">
          {village.histoire.map((p) => (
            <p key={p} className="max-w-[65ch] leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>

        <h2 className="mt-12">{t("engagementHeading")}</h2>
        <ul className="mt-4 space-y-2">
          {village.engagement.map((item) => (
            <li key={item} className="max-w-[65ch] leading-relaxed text-muted-foreground">
              — {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
