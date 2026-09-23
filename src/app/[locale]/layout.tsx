import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing, type Locale } from "@/i18n/routing";
import { alternatesFor, siteUrl } from "@/lib/seo";
import { getContent } from "@/content";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyBookBar } from "@/components/sticky-book-bar";
import "../globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  // Police variable : poids fixé à 400 partout (jamais 600/700), l'axe
  // optical size (opsz) porte seul la présence des grands titres.
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });
  return {
    metadataBase: new URL(siteUrl),
    title: { default: t("name"), template: `%s | ${t("name")}` },
    description: t("tagline"),
    alternates: alternatesFor("/"),
    openGraph: {
      siteName: t("name"),
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: ["/images/culture-river.webp"],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const { site } = getContent(locale as Locale);

  // Données structurées TouristAttraction (Schema.org), demandées par le
  // brief. Coordonnées géo APPROXIMATIVES (centre du village d'Ebogo) — à
  // remplacer par le point GPS exact avant publication, voir BRIEF.md.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: site.name,
    description: site.tagline,
    url: `${siteUrl}/${locale}`,
    image: `${siteUrl}/images/culture-river.webp`,
    telephone: site.contact.whatsappDisplay,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ebogo, Mengueme",
      addressRegion: "Région du Centre",
      addressCountry: "CM",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 3.3167,
      longitude: 11.55,
    },
    sameAs: [site.contact.whatsappLink],
  };

  return (
    <html lang={locale} className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter locale={locale as Locale} />
          <StickyBookBar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
