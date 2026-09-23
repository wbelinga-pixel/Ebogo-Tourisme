import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { getContent, type Locale } from "@/content";
import { Eyebrow } from "@/components/eyebrow";
import { ActivityCard } from "@/components/activity-card";
import { alternatesFor } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "activities" });
  return {
    title: t("pageTitle"),
    description: t("pageLead"),
    alternates: alternatesFor("/activites"),
  };
}

export default async function ActivitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { activities } = getContent(locale as Locale);
  const t = await getTranslations("activities");

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <Eyebrow>{t("pageEyebrow")}</Eyebrow>
      <h1 className="mt-2">{t("pageTitle")}</h1>
      <p className="mt-4 max-w-[65ch] text-muted-foreground">{t("pageLead")}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <ActivityCard key={activity.slug} activity={activity} />
        ))}
      </div>
    </div>
  );
}
