# `components/ui/` — composants écrits à la main

Ces fichiers (`button.tsx`, `card.tsx`, `input.tsx`, `label.tsx`, `select.tsx`,
`textarea.tsx`) sont dans le style shadcn/ui (Radix + `class-variance-authority`
+ Tailwind), mais n'ont **pas** été générés par `npx shadcn add`.

Pourquoi : le CLI `shadcn` doit joindre `ui.shadcn.com` pour son `init` et pour
télécharger chaque composant, et ce domaine est bloqué par la politique réseau
de l'environnement de développement utilisé pour démarrer ce projet. Le code a
donc été écrit directement, à la main — c'est le même résultat (du code que le
projet possède, pas une dépendance runtime), juste sans passer par le CLI.

**Si le réseau est débloqué plus tard et que vous lancez `npx shadcn add
button` (ou `card`, etc.) :** le CLI va **écraser** le fichier existant sans
prévenir qu'il contenait des personnalisations. Avant d'accepter l'écrasement,
vérifiez le diff — en particulier :

- `button.tsx` : le variant `accent` porte une règle d'usage (un seul bouton
  latérite par page, réservé à la réservation) et le variant `ghost` a été
  volontairement retiré — ne pas le laisser revenir sans y repenser.
- Toute classe qui référence les tokens du projet (`bg-primary`,
  `text-muted-foreground`, etc.) définis dans `src/app/globals.css`, à ne pas
  remplacer par les tokens par défaut d'un composant shadcn générique.
