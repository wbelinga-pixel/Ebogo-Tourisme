import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { getContent, type Locale } from "@/content";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";
import { Eyebrow } from "@/components/eyebrow";
import { ActivityCard } from "@/components/activity-card";
import { Link } from "@/i18n/navigation";
import { alternatesFor, siteUrl } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });
  return {
    title: t("name"),
    description: t("tagline"),
    alternates: alternatesFor("/"),
    openGraph: {
      title: t("name"),
      description: t("tagline"),
      url: `${siteUrl}/${locale}`,
      images: ["/images/culture-river.webp"],
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getContent(locale as Locale);
  const { home, activities, info, testimonials } = content;

  const featured = home.featuredActivitySlugs
    .map((slug) => activities.find((a) => a.slug === slug))
    .filter((a): a is (typeof activities)[number] => Boolean(a));

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden">
        <Photo
          src="/images/culture-river.webp"
          alt=""
          bleed
          overlay
          priority
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 pt-32 text-white">
          <Eyebrow className="!text-white/80">{home.heroEyebrow}</Eyebrow>
          <h1 className="mt-3 max-w-2xl text-white">{home.heroTitle}</h1>
          <Button variant="primary" size="lg" className="mt-8" asChild>
            <Link href="/activites">{home.heroCta}</Link>
          </Button>
        </div>
      </section>

      {/* Activités phares */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>{home.activitiesEyebrow}</Eyebrow>
            <h2 className="mt-2">{home.activitiesTitle}</h2>
          </div>
          <Button variant="link" asChild>
            <Link href="/activites">{home.activitiesCta} →</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((activity) => (
            <ActivityCard key={activity.slug} activity={activity} />
          ))}
        </div>
      </section>

      {/* Comment venir */}
      <section className="border-t border-border bg-muted">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <Eyebrow>{home.accessEyebrow}</Eyebrow>
          <h2 className="mt-2 max-w-2xl">{home.accessTitle}</h2>
          <p className="mt-4 max-w-[65ch] text-muted-foreground">{home.accessBody}</p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium">
            {info.acces.map((a) => (
              <span key={a.from}>
                <strong className="text-foreground">{a.from}</strong>{" "}
                <span className="text-muted-foreground">— {a.details}</span>
              </span>
            ))}
          </div>
          <Button variant="outline" className="mt-8" asChild>
            <Link href="/infos">{home.accessCta}</Link>
          </Button>
        </div>
      </section>

      {/* Témoignages — masqué tant qu'aucun témoignage réel n'est disponible */}
      {testimonials.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <Eyebrow>{home.testimonialsEyebrow}</Eyebrow>
          <h2 className="mt-2">{home.testimonialsTitle}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="rounded-lg border border-border p-6">
                <blockquote className="text-sm leading-relaxed">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold">
                  {testimonial.name}
                  <span className="block font-normal text-muted-foreground">{testimonial.context}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Appel à réserver */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <Eyebrow className="mx-auto">{home.ctaEyebrow}</Eyebrow>
          <h2 className="mt-2">{home.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-[55ch] text-muted-foreground">{home.ctaBody}</p>
          <Button variant="primary" size="lg" className="mt-8" asChild>
            <Link href="/reserver">{home.ctaCta}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
