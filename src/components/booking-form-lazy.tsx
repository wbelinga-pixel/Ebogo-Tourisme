"use client";

import dynamic from "next/dynamic";

/**
 * react-hook-form + zod ne doivent peser que sur /reserver, pas sur le
 * reste du site. Un import direct de BookingForm depuis la page (server
 * component) laissait Turbopack regrouper ces libs dans un chunk partagé
 * chargé par TOUTES les pages (mesuré : accueil, activités et réserver
 * chargeaient le même paquet JS de 970 Ko, alors que seule /reserver en a
 * besoin). `ssr: false` force un point de coupure que le bundler ne peut
 * pas fondre dans un chunk commun — ce composant existe uniquement pour
 * ça, un Server Component ne peut pas passer ssr:false directement.
 */
export const BookingFormLazy = dynamic(
  () => import("@/components/booking-form").then((m) => m.BookingForm),
  {
    ssr: false,
    loading: () => <div className="h-96 animate-pulse rounded-lg bg-muted" aria-hidden />,
  },
);
