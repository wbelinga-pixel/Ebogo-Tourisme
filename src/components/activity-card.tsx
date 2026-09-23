import { useTranslations } from "next-intl";

import type { ActivityContent } from "@/content/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/photo";
import { Link } from "@/i18n/navigation";

export function ActivityCard({ activity }: { activity: ActivityContent }) {
  const t = useTranslations("activities");

  return (
    <Card className="flex h-full flex-col">
      <Photo
        src={`/images/${activity.image}`}
        alt={activity.title}
        ratio="aspect-[4/3]"
        focus={activity.imageFocus}
        className="rounded-b-none"
      />
      <CardHeader>
        <p className="eyebrow">{activity.kicker}</p>
        <CardTitle className="mt-1">{activity.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">{activity.summary}</CardContent>
      <CardFooter className="mt-auto flex items-center justify-between gap-3">
        {activity.priceFrom && (
          <span className="text-sm font-semibold text-muted-foreground">{activity.priceFrom}</span>
        )}
        <Button variant="outline" size="sm" asChild>
          <Link href={`/activites/${activity.slug}`}>{t("viewCta")}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
