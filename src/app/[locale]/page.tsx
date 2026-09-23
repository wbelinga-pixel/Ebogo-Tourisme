import { getTranslations, setRequestLocale } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("site");
  const tHome = await getTranslations("home");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-serif text-4xl">{t("name")}</p>
      <p className="max-w-md text-muted-foreground">{t("tagline")}</p>
      <p className="text-sm text-muted-foreground">{tHome("placeholder")}</p>
      <Button asChild>
        <Link href="/styleguide">{tHome("styleguideLink")}</Link>
      </Button>
    </main>
  );
}
