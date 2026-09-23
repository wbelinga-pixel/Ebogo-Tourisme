import { z } from "zod";

/**
 * Schéma partagé entre le formulaire (react-hook-form côté client) et la
 * route API (/api/booking) qui envoie l'e-mail — une seule source de
 * vérité pour la validation, jamais dupliquée entre client et serveur.
 */
export const bookingSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  date: z.string().trim().max(20).optional().or(z.literal("")),
  people: z.coerce.number().int().min(1).max(100),
  activity: z.string().trim().min(1).max(200),
  language: z.enum(["fr", "en", "both"]),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

/** Forme des valeurs du formulaire avant validation (ex. "people" est une string saisie, pas encore un number). */
export type BookingFormValues = z.input<typeof bookingSchema>;
/** Forme après validation/coercion Zod — ce que reçoit onSubmit et l'API. */
export type BookingInput = z.output<typeof bookingSchema>;
