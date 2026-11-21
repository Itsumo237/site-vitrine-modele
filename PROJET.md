# PROJET — fiche à donner à Claude

Je construis un site vitrine dans un projet Next.js existant, ouvert dans GitHub Codespaces.
Je suis débutant : explique simplement et donne des instructions précises.

## 1. Stack installée (ne pas changer)

- Next.js 16.4.6 (App Router, Turbopack)
- React 19.3.0
- TypeScript 5.9.3
- Tailwind CSS 4.3.3 (via @tailwindcss/turbopack)
- ESLint 9 avec eslint-config-next 16.4.6
- Node.js 22 LTS
- Aucune autre dépendance : pas d'UI kit, pas d'animation, pas de CMS

## 2. Arborescence

```
app/layout.tsx               Mise en page commune à toutes les pages (langue fr, police Inter, métadonnées par défaut)
app/page.tsx                 Page d'accueil (adresse /)
app/globals.css              Import de Tailwind + variables de couleurs du site
components/.gitkeep          Dossier vide prêt pour les composants réutilisables
public/images/README.md      Dossier des photos du site (mode d'emploi)
.devcontainer/devcontainer.json  Configuration de Codespaces (installation et démarrage automatiques)
.nvmrc                       Version de Node.js (22)
.gitignore                   Fichiers à ne pas enregistrer dans Git
eslint.config.mjs            Règles de vérification du code
next.config.ts               Configuration de Next.js (branchement de Tailwind)
tsconfig.json                Configuration de TypeScript (alias @/*)
package.json                 Liste des dépendances et des commandes (dev, build, start, lint)
package-lock.json            Versions exactes installées, ne pas modifier à la main
PROJET.md                    Cette fiche
README.md                    Mode d'emploi du modèle
LICENSE                      Licence MIT
```

## 3. Conventions

- Une page = un dossier dans `app/` contenant un `page.tsx`.
  Exemple : `app/services/page.tsx` donne la page `/services`.
- Les composants réutilisables (en-tête, pied de page, carte…) vont dans `components/`
  et s'importent avec l'alias `@/`, par exemple `import Header from "@/components/Header";`.
- Les images vont dans `public/images/` et s'utilisent avec le chemin `/images/nom.jpg`.
- Le style se fait uniquement avec les classes Tailwind. Les couleurs du site sont
  définies dans `app/globals.css` (classes `bg-background`, `text-foreground`,
  `text-muted`, `bg-surface`, `border-border`).
- Chaque page définit son titre et sa description avec `export const metadata`.

## 4. Règles pour toi, Claude

- Ne recrée pas le projet et ne change pas la stack.
- N'ajoute aucune dépendance (npm install …) sans me demander mon accord.
- Donne toujours le fichier COMPLET, jamais un extrait, avec son chemin exact
  (par exemple `app/contact/page.tsx`).
- N'invente jamais de contenu : prix, avis clients, coordonnées, horaires, chiffres.
  Si une information manque, écris `[À COMPLÉTER]` à sa place.
- Si une demande est floue, pose-moi une question avant d'écrire du code.
