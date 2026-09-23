import { useTranslations } from "next-intl";

import { getContent, type Locale } from "@/content";
import { Link } from "@/i18n/navigation";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = useTranslations("nav");
  const tFooter = useTranslations("footer");
  const { site } = getContent(locale);

  return (
    <footer className="border-t border-border bg-muted pb-20 md:pb-0">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <p className="font-serif text-lg">{site.name}</p>
          <p className="mt-2 max-w-[32ch] text-sm text-muted-foreground">{site.tagline}</p>
        </div>
        <div>
          <p className="eyebrow">{tFooter("contactHeading")}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={site.contact.whatsappLink} target="_blank" rel="noreferrer" className="hover:underline">
                WhatsApp — {site.contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:underline">
                {site.contact.email}
              </a>
            </li>
            <li className="text-muted-foreground">{site.contact.address}</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">{tFooter("navHeading")}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/activites" className="hover:underline">
                {t("activities")}
              </Link>
            </li>
            <li>
              <Link href="/infos" className="hover:underline">
                {t("info")}
              </Link>
            </li>
            <li>
              <Link href="/village" className="hover:underline">
                {t("village")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-6 py-4 text-center text-xs text-muted-foreground">
        {tFooter("copyright", { name: site.name, year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}
