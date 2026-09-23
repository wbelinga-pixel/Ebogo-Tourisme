import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

type PhotoProps = Omit<ImageProps, "fill" | "className"> & {
  /** Classe Tailwind de ratio, ex. "aspect-[4/3]", "aspect-[3/4]". Ignoré si `bleed`. */
  ratio?: string;
  /**
   * Mode plein cadre : l'image occupe tout son parent (`absolute inset-0`,
   * sans coins arrondis) — pour un hero plein écran. Le parent doit être
   * `position: relative`.
   */
  bleed?: boolean;
  /** Voile de contraste dégradé (bas → transparent), pour poser du texte dessus. */
  overlay?: boolean;
  /** Légende posée en bas de l'image, au-dessus du voile. */
  caption?: string;
  /** object-position CSS, pour recadrer sur le vrai sujet quand il n'est pas centré. */
  focus?: string;
  className?: string;
  sizes?: string;
};

/**
 * Traitement photo standard du site : ratio contrôlé, coins arrondis
 * (rayon du design system), voile de contraste optionnel, légende
 * optionnelle. Utilisé pour le hero, les cartes activité et la galerie —
 * un seul composant, pour ne jamais improviser un nouveau traitement page
 * par page.
 */
export function Photo({
  ratio = "aspect-[4/3]",
  bleed = false,
  overlay = false,
  caption,
  focus,
  className,
  sizes = "(min-width: 768px) 50vw, 100vw",
  alt,
  ...props
}: PhotoProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden bg-muted",
        bleed ? "absolute inset-0" : cn("relative rounded-lg", ratio),
        className,
      )}
    >
      <Image
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
        style={focus ? { objectPosition: focus } : undefined}
        {...props}
      />
      {overlay && (
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
        />
      )}
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 px-4 py-3 text-sm font-medium text-white">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
