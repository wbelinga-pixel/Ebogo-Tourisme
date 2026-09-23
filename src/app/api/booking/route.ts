import { NextResponse } from "next/server";
import { Resend } from "resend";

import { bookingSchema } from "@/lib/booking-schema";

const languageLabel: Record<string, string> = {
  fr: "Français",
  en: "Anglais",
  both: "Français ou anglais",
};

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = bookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_input", issues: parsed.error.issues }, { status: 400 });
  }
  const data = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.BOOKING_TO_EMAIL;
  const fromEmail = process.env.BOOKING_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    // Configuration manquante (ex. pas encore de clé Resend en dev) : on le
    // dit clairement plutôt que de prétendre avoir envoyé l'e-mail.
    return NextResponse.json({ error: "email_not_configured" }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const lines = [
    `Nom : ${data.name}`,
    `E-mail : ${data.email}`,
    `Nombre de personnes : ${data.people}`,
    `Date souhaitée : ${data.date || "à confirmer"}`,
    `Activité : ${data.activity}`,
    `Langue du guide : ${languageLabel[data.language] ?? data.language}`,
    `Message : ${data.message || "Aucune précision supplémentaire"}`,
  ];

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `Demande de réservation — ${data.name}`,
      text: lines.join("\n"),
    });
    if (error) {
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
