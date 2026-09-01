# Portfolio — Angelos Lemire

Mon site personnel : parcours, stages et projets. Il est fait pour grossir —
chaque fois que je livre quelque chose, j'ajoute un bloc et c'est en ligne.

Next.js 16 (App Router) · TypeScript · CSS maison · déployé sur Vercel.

---

## Tout le contenu est dans un seul fichier

**`lib/content.ts`.** C'est le seul fichier à ouvrir pour faire vivre le site.
La page d'accueil et les fiches de détail se fabriquent toutes seules à partir
de là. Aucun besoin de toucher au design.

### Ajouter un projet

Ajouter un objet dans le tableau `projets` :

```ts
{
  slug: "mon-projet",          // l'adresse sera /projets/mon-projet
  nom: "Mon Projet",
  resume: "La phrase qui s'affiche sur la page d'accueil.",
  statut: "En ligne · mon-projet.vercel.app",
  enLigne: true,               // met la pastille corail
  vedette: true,               // true = fiche détaillée ; false = simple ligne

  // Les deux boutons d'accès en haut de la fiche, et le lien direct
  // depuis la page d'accueil.
  urlLive: "https://mon-projet.vercel.app",
  urlCode: "https://github.com/P4lbL0/mon-projet",

  sousTitre: "Le chapeau de la fiche.",
  meta: ["Projet personnel", "Depuis **2026**"],
  stack: ["Next.js", "TypeScript", "Supabase"],
  chiffres: [{ valeur: "12", label: "quelque chose" }],
  contenu: [
    { type: "para", texte: "Un paragraphe." },
    { type: "titre", texte: "Ce que ça fait" },
    { type: "grille", items: [{ titre: "Une fonction", texte: "Ce qu'elle fait." }] },
    { type: "titre", texte: "Ce qui était difficile" },
    { type: "liste", items: [{ fort: "Un point.", texte: "Son explication." }] },
    { type: "citation", texte: "Une phrase qui résume." },
    { type: "reserve", texte: "Capture à venir" },
  ],
}
```

`urlLive` et `urlCode` sont ce qui rend le projet **accessible** : ils fabriquent
les deux boutons en haut de la fiche, le lien cliquable sur la page d'accueil, et
les liens de fin de fiche. Un projet sans `urlLive` affiche simplement son statut,
sans lien.

`vedette: false` suffit pour un petit projet : il apparaîtra dans « Et aussi »
sans fiche dédiée. Seuls `slug`, `nom`, `resume`, `statut`, `enLigne` et
`vedette` sont obligatoires.

### Ajouter une expérience

Même principe, dans le tableau `experiences`. L'adresse sera
`/experiences/le-slug`.

### Mettre sa photo

1. Déposer le fichier dans `public/` (par exemple `public/angelos.jpg`).
2. Dans `lib/content.ts`, renseigner `profil.photo: "/angelos.jpg"`.

Tant que `photo` est une chaîne vide, la couverture affiche un emplacement
réservé au lieu d'une image cassée.

### Les types de blocs disponibles

| Type       | À quoi ça sert                                                    |
| ---------- | ----------------------------------------------------------------- |
| `para`     | Un paragraphe de texte courant                                     |
| `titre`    | Un sous-titre dans la fiche                                        |
| `grille`   | Les fonctionnalités en colonnes, pour ce qui se scanne au lieu de se lire |
| `liste`    | Une liste à puces, chaque point avec un début en gras              |
| `citation` | La phrase mise en exergue, filet corail à gauche                   |
| `image`    | Une image avec légende (`src`, `alt`, `legende`)                   |
| `reserve`  | Un cadre en pointillés, en attendant un vrai visuel                |

Dans les textes, `**gras**` et `_italique_` fonctionnent.

---

## Faire tourner le site

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # vérifie les types et fabrique la version de production
```

## Mettre en ligne

Le site est déployé sur Vercel : **pousser sur `main` suffit**, le déploiement
part tout seul. Pas de manipulation à faire à la main.

---

## Comment c'est fait

```
app/
  layout.tsx                  polices, barre haute, thème
  page.tsx                    la page d'accueil
  globals.css                 tout le design
  projets/[slug]/page.tsx     une fiche projet
  experiences/[slug]/page.tsx une fiche expérience
components/
  Actions.tsx                 les boutons d'accès en tête de fiche
  Bande.tsx                   la bande corail de chiffres
  Blocs.tsx                   le rendu des blocs de contenu
  Pied.tsx                    le pied de page
  ThemeToggle.tsx             la bascule clair / sombre
lib/
  content.ts                  TOUT le contenu
  riche.tsx                   le rendu de **gras** et _italique_
docs/screens/                 captures d'écran
```

### Le parti pris visuel

La couverture d'une affiche, les pages d'une revue. **Anton** pour frapper de
loin (les titres, les chiffres), **Newsreader** pour lire de près (le texte
courant), **Archivo** pour les étiquettes. Bleu de nuit, papier, et le corail
comme seule couleur d'accent du site.

Le thème suit le réglage système du visiteur, avec une bascule en haut à droite
et son choix mémorisé.

### Deux règles à ne pas casser

- **Les polices sont chargées une seule fois**, dans `app/layout.tsx` via
  `next/font`. Ne jamais rajouter d'`@import` de police dans le CSS.
- **Pas de `toLocaleDateString`** dans le rendu : les dates sont écrites en clair
  dans `lib/content.ts`, sinon le serveur et le navigateur ne sont pas d'accord.

---

## Confidentialité

La fiche du stage chez Airbay Data est volontairement dépourvue de noms de
produits, de noms de clients, de noms de personnes et de tout montant. Les
volumes (dossiers, gigaoctets, utilisateurs) sont publiables. Garder cette règle
si la fiche est enrichie.
