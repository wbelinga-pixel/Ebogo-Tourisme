"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

import { bookingSchema, type BookingFormValues, type BookingInput } from "@/lib/booking-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "success" | "error";

export function BookingForm({
  whatsappNumber,
  activityOptions,
}: {
  /** Numéro international sans "+" ni espaces, ex. "237677379697". */
  whatsappNumber: string;
  activityOptions: string[];
}) {
  const t = useTranslations("reserver");
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues, unknown, BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      people: 2,
      language: "fr",
      activity: activityOptions[0] ?? "",
    },
  });

  function openWhatsApp(data: BookingInput) {
    const languageLabel = { fr: "Français", en: "Anglais", both: "Français ou anglais" }[data.language];
    const text = [
      `Bonjour, je souhaite réserver une visite à Ebogo.`,
      ``,
      `Nom : ${data.name}`,
      `Nombre de personnes : ${data.people}`,
      `Date souhaitée : ${data.date || "à confirmer"}`,
      `Activité : ${data.activity}`,
      `Langue du guide : ${languageLabel}`,
      `Message : ${data.message || "Aucune précision supplémentaire"}`,
      ``,
      `Merci de me confirmer les disponibilités, le point de rendez-vous et le tarif final.`,
    ].join("\n");
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  async function onSubmit(data: BookingInput) {
    setStatus("submitting");
    openWhatsApp(data);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">{t("formName")}</Label>
          <Input id="name" placeholder={t("formNamePlaceholder")} {...register("name")} />
          {errors.name && <p className="text-xs text-red-700">{t("formRequired")}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">{t("formEmail")}</Label>
          <Input id="email" type="email" placeholder={t("formEmailPlaceholder")} {...register("email")} />
          {errors.email && <p className="text-xs text-red-700">{t("formInvalidEmail")}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="date">{t("formDate")}</Label>
          <Input id="date" type="date" {...register("date")} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="people">{t("formPeople")}</Label>
          <Input id="people" type="number" min={1} {...register("people")} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="activity">{t("formActivity")}</Label>
          <Select id="activity" {...register("activity")}>
            {activityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="language">{t("formLanguage")}</Label>
          <Select id="language" {...register("language")}>
            <option value="fr">{t("formLanguageFr")}</option>
            <option value="en">{t("formLanguageEn")}</option>
            <option value="both">{t("formLanguageBoth")}</option>
          </Select>
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor="message">{t("formMessage")}</Label>
          <Textarea id="message" placeholder={t("formMessagePlaceholder")} {...register("message")} />
        </div>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? t("formSubmitting") : t("formSubmit")}
      </Button>

      <p aria-live="polite" className="min-h-5 text-sm">
        {status === "success" && (
          <span className="font-semibold text-primary">
            {t("formSuccessTitle")} {t("formSuccessBody")}
          </span>
        )}
        {status === "error" && (
          <span className="font-semibold text-accent">
            {t("formErrorTitle")} — {t("formErrorBody")}
          </span>
        )}
      </p>
    </form>
  );
}
