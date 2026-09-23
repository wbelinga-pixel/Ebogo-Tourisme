import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { getContent } from "@/content";
import { siteUrl } from "@/lib/seo";

const staticPaths = ["/", "/activites", "/infos", "/village", "/reserver"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of staticPaths) {
    entries.push({
      url: `${siteUrl}/${routing.defaultLocale}${path === "/" ? "" : path}`,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((locale) => [locale, `${siteUrl}/${locale}${path === "/" ? "" : path}`]),
        ),
      },
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.7,
    });
  }

  for (const activity of getContent(routing.defaultLocale).activities) {
    const path = `/activites/${activity.slug}`;
    entries.push({
      url: `${siteUrl}/${routing.defaultLocale}${path}`,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((locale) => [locale, `${siteUrl}/${locale}${path}`]),
        ),
      },
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
