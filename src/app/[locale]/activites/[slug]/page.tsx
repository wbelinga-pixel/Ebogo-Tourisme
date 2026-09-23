import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { getContent, type Locale } from "@/content";
import { routing } from "@/i18n/routing";
import { Eyebrow } from "@/components/eyebrow";
import { Photo } from "@/components/photo";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { alternatesFor, siteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getContent(locale).activities.map((activity) => ({ locale, slug: activity.slug })),
  );
}

async function getActivity(locale: string, slug: string) {
  const { activities } = getContent(locale as Locale);
  return activities.find((a) => a.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const activity = await getActivity(locale, slug);
  if (!activity) return {};
  return {
    title: activity.title,
    description: activity.summary,
    alternates: alternatesFor(`/activites/${slug}`),
    openGraph: {
      title: activity.title,
      description: activity.summary,
      url: `${siteUrl}/${locale}/activites/${slug}`,
      images: [`/images/${activity.image}`],
    },
  };
}

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const activity = await getActivity(locale, slug);
  if (!activity) notFound();

  const t = await getTranslations("activities");
  const tDetail = await getTranslations("activityDetail");

  return (
    <div>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden">
        <Photo
          src={`/images/${activity.image}`}
          alt={activity.title}
          focus={activity.imageFocus}
          bleed
          overlay
          priority
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-12 pt-28 text-white">
          <Eyebrow className="!text-white/80">{activity.kicker}</Eyebrow>
          <h1 className="mt-3 max-w-2xl text-white">{activity.title}</h1>
        </div>
      </section>

      <div className="mx-auto grid max-w-4xl gap-12 px-6 py-16 md:grid-cols-[1fr_280px] md:py-24">
        <div>
          <p className="max-w-[70ch] text-lg leading-relaxed">{activity.summary}</p>
          {activity.story && (
            <>
              <h2 className="mt-10">{t("storyHeading")}</h2>
              <p className="mt-3 max-w-[70ch] leading-relaxed text-muted-foreground">{activity.story}</p>
            </>
          )}

          {activity.gallery && activity.gallery.length > 0 && (
            <>
              <h2 className="mt-10">{t("galleryHeading")}</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {activity.gallery.map((img) => (
                  <Photo key={img} src={`/images/${img}`} alt="" ratio="aspect-square" />
                ))}
              </div>
            </>
          )}

          {activity.included && activity.included.length > 0 && (
            <>
              <h2 className="mt-10">{t("includedHeading")}</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {activity.included.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </>
          )}

          {activity.prepare && activity.prepare.length > 0 && (
            <>
              <h2 className="mt-10">{t("prepareHeading")}</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {activity.prepare.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        <aside className="h-fit space-y-4 rounded-lg border border-border p-6">
          {activity.priceFrom && (
            <div>
              <p className="eyebrow">{tDetail("priceLabel")}</p>
              <p className="mt-1 font-semibold">{activity.priceFrom}</p>
            </div>
          )}
          {activity.duration && (
            <div>
              <p className="eyebrow">{tDetail("durationLabel")}</p>
              <p className="mt-1 font-semibold">{activity.duration}</p>
            </div>
          )}
          {activity.season && (
            <div>
              <p className="eyebrow">{tDetail("seasonLabel")}</p>
              <p className="mt-1 text-sm text-muted-foreground">{activity.season}</p>
            </div>
          )}
          <Button variant="primary" className="w-full" asChild>
            <Link href="/reserver">{t("bookCta")}</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/activites">← {t("backCta")}</Link>
          </Button>
        </aside>
      </div>
    </div>
  );
}
