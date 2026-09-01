# Contexte à donner à une nouvelle session

Ce fichier existe pour qu'une session Claude qui n'a rien vu de la précédente
puisse reprendre le travail sans repartir de zéro et sans reposer des questions
déjà tranchées.

**À coller au début de la conversation :**

> Je veux continuer le travail sur mon portfolio, dans
> `C:\Users\lemir\Desktop\Projet\portfolio`. Lis d'abord
> `docs/CONTEXTE-SESSION.md` : tout y est. Il reste les visuels des fiches
> (mes captures et ma photo), puis le responsive à finir.

---

## 1. Ce qu'est ce projet

Le site personnel d'Angelos Lemire : parcours, stages, projets. Ce n'est **pas**
un site de recherche d'emploi. C'est son CV amélioré, qu'il montre à l'école, à
des amis et à de futurs employeurs, et qu'il **enrichit à chaque nouveau
travail livré**. Toute décision doit servir cet usage-là : durable, extensible,
sans ton « je cherche un stage » qui périme en trois mois.

- **Dossier** : `C:\Users\lemir\Desktop\Projet\portfolio`
- **Dépôt** : https://github.com/P4lbL0/portfolio (branche `main`)
- **Stack** : Next.js 16 (App Router), TypeScript, CSS maison, prévu pour Vercel
- Pas encore déployé. Le dépôt existe, l'import Vercel reste à faire.

Deux anciens portfolios existent encore et **seront supprimés par Angelos** :
`Desktop\Projet\portfolio_but3` et `Desktop\CV\Portofolio-ameliorer\portfolio`.
Ne pas y toucher, ne pas s'en inspirer.

---

## 2. Les règles de travail

Les règles générales sont dans `C:\Users\lemir\.claude\CLAUDE.md` et
s'appliquent ici. Les points qui reviennent le plus souvent :

- **Français**, partout : code, commentaires, commits, réponses.
- **Dans le doute, poser la question** avec `AskUserQuestion`, options
  concrètes, recommandation en premier. Ne jamais deviner sur un choix produit.
- **Récapitulatif obligatoire en fin de chaque message**, en deux parties :
  « ce que j'ai fait » et « ce que tu as de nouveau ».
- **Aucun emoji dans l'interface.** Du texte, du SVG, ou rien.
- **Commit + push automatiques** à la fin de chaque chantier abouti, sans
  attendre qu'on le demande. Fichiers nommés explicitement au `git add`, jamais
  `git add -A`. Messages en `feat(scope): …` / `fix(scope): …`, en français.
  **Jamais de trailer `Co-Authored-By`.**
- **Vérifier que ça compile avant de committer** (`npm run build`).
- **Captures d'écran dans `docs/screens/`** du dépôt, jamais dans un dossier
  temporaire.
- **Avant une refonte visuelle importante : maquette (Artifact) et validation.**

---

## 3. Ce qui est déjà tranché — ne pas rouvrir

La direction visuelle a coûté trois allers-retours. Elle est validée.

**« Affiche × revue »** : l'impact typographique d'une affiche, la lisibilité
d'une revue. Concrètement :

- **Anton** pour frapper de loin (nom, titres de section, chiffres),
  **Newsreader** (serif) pour le texte courant, **Archivo** pour les étiquettes.
  C'est l'inverse du réflexe habituel — display sans empattement, lecture avec —
  et c'est volontaire.
- **Bleu de nuit** (`--navy`) pour les couvertures et le pied de page,
  **papier** (`--paper`) pour les pages, **corail** (`--acc`) comme **seule**
  couleur d'accent de tout le site.
- Structure de magazine : couverture sombre → bande corail de chiffres → pages
  claires → dos sombre. Chaque fiche reprend le même système.
- Thème clair par défaut, suit le réglage système, bascule en haut à droite,
  choix mémorisé dans le navigateur.

Directions **écartées** par Angelos : l'encre monochrome type terminal (jugée
trop froide et administrative), la carte de collection, le terminal.

---

## 4. Comment le contenu est organisé

**Tout est dans `lib/content.ts`.** C'est le seul fichier à modifier pour faire
vivre le site. La page d'accueil et les fiches se fabriquent à partir de là.
`README.md` documente les champs avec un exemple à copier.

- `projets[]` — `vedette: true` donne une fiche à `/projets/[slug]` ;
  `vedette: false` met une simple ligne dans « Et aussi ».
- `experiences[]` — même principe, sur `/experiences/[slug]`.
- `urlLive` / `urlCode` fabriquent les boutons d'accès en haut de fiche, le lien
  cliquable sur l'accueil, et les liens de fin de fiche.
- Les blocs de contenu : `para`, `titre`, `grille` (fonctionnalités en
  colonnes), `liste`, `citation`, `image`, `reserve` (cadre en pointillés en
  attendant un visuel).
- Dans les textes, `**gras**` et `_italique_` fonctionnent (voir `lib/riche.tsx`).

---

## 5. Confidentialité — non négociable

Angelos a signé un accord de confidentialité avec **Airbay Data**, son entreprise
de stage de fin d'études. Il a explicitement autorisé :

- le **nom de l'entreprise** ;
- les **volumes** : 16 000 dossiers, 103 Go de pièces, ~200 utilisateurs,
  14 semaines, 2 CRM, 0 interruption.

Il a explicitement **interdit** :

- tout **nom** — produits de l'entreprise, clients, personnes (tuteurs compris) ;
- toute **mention d'argent** — montants, primes, chiffre d'affaires.

**Mise à jour du 1er septembre 2026.** Angelos a tranché deux points restés
ouverts, en connaissance de cause :

- le **secteur est publiable** : rénovation énergétique et dispositif des
  Certificats d'Économie d'Énergie. Sans lui, impossible d'expliquer les fiches
  standardisées, l'éligibilité ou les calculs normés — la moitié du détail
  technique tombait ;
- les **produits internes ne sont jamais nommés**. On les désigne par ce qu'ils
  font : « le CRM d'audit », « le CRM commercial », « l'entrepôt de données
  foncières ». Si l'entreprise donne un jour son accord, il suffira de changer
  les `titre` dans `projetsStage`.

Le reste de la règle est inchangé : ni client, ni personne, ni montant. En cas
de doute sur un élément, **demander**.

---

## 6. Chantier n°1 — enrichir les fiches

**Fait le 1er septembre 2026, pour la fiche de stage.** Elle ne parlait que du
volet migration des deux CRM et expédiait tout le reste en un paragraphe. Elle
couvre désormais **les neuf chantiers du stage**, chacun sur sa propre page,
avec un sommaire en grille à l'entrée de la fiche :

| # | Chantier | Adresse |
| --- | --- | --- |
| 01 | La reprise de l'historique | `/experiences/airbay-data/reprise-historique` |
| 02 | La passerelle entre deux CRM | `…/passerelle-crm` |
| 03 | Le moteur de recherche de profils | `…/recherche-profils` |
| 04 | Du prototype à la plateforme | `…/prototype-plateforme` |
| 05 | Des appels aux données | `…/appels-donnees` |
| 06 | Le bot de facturation | `…/bot-facturation` |
| 07 | Le bot de notes de frais | `…/bot-notes-de-frais` |
| 08 | Le CRM commercial | `…/crm-commercial` |
| 09 | L'entrepôt de données foncières | `…/donnees-foncieres` |

Toute la matière vient du rapport de stage, filtrée selon la section 5. Rien
n'a été inventé : chaque chiffre est celui du rapport, y compris ceux de son
annexe A (volumes traités). Le mécanisme pour en ajouter un est documenté dans
le `README.md`.

**Fait le 1er septembre 2026, pour les projets personnels.** Quatre projets qui
n'étaient qu'une ligne ont maintenant leur fiche, et les deux plus minces ont
été étoffées :

- **Le Protecteur** — la plus grosse fiche du site. Écrite depuis le `README.md`
  et les 36 fiches de `design/` du dépôt `Desktop\Projet\jeux` : la règle des
  20 %, le cycle jour/nuit, les ordres, l'aménagement, la porte, le port, le
  stress, et le système de défaite qui fabrique l'antagoniste de la partie
  suivante. Deux captures du jeu, prises dans `jeux/captures/`.
- **Lecture de scoreboards** (ex-`ocr-resultat`) — l'angle est la *frontière* :
  le service ne touche jamais la base de The Circle. Sa part du travail y est
  dite honnêtement (19 commits du binôme, 10 de lui).
- **MatchDay** et **Circled Fight** — ce dernier raconté comme le prédécesseur
  de The Circle, avec ce que ses limites lui ont appris.
- **Pick Sell** et **No-Code IGA** ont reçu leurs sections techniques manquantes.

**Everest reste volontairement une simple ligne** : 3 commits et 6 fichiers, une
fiche se verrait vide. Ne pas lui en faire une sans nouvelle matière.

**Attention — Pick Sell.** Son `CONTEXTE_PROJET.md` liste des failles connues
(dont un back-office sans authentification). Ces informations **ne doivent pas
finir sur le portfolio** : c'est un site en ligne. La fiche parle de ce qui
marche et de l'architecture, jamais des trous.

**La fiche No-Code IGA reste la plus mince du site**, faute de matière
vérifiable : le dossier `Desktop\Projet\iam_plateforme` est vide, et
`Desktop\SAE-IAM` ne contient qu'un squelette Flask et les environnements
Docker. Tout ce qui a été ajouté est vérifiable sur le disque. Pour aller plus
loin, **lui demander** — ne rien inventer.

Ce qui manque encore :

1. **Des visuels.** Le Protecteur a ses deux captures et A.M.C Bank son film.
   Les autres fiches ont encore un bloc `reserve` en attente : The Circle, Kynn,
   Pick Sell. **Lui demander avant de prendre les captures soi-même** — il a dit
   vouloir tourner une vidéo pour chaque projet, donc ne pas se précipiter sur
   des captures qu'un film remplacera.
2. **Sa photo.** `profil.photo` est une chaîne vide, ce qui affiche un
   emplacement réservé. Dès qu'il fournit le fichier : le déposer dans
   `public/`, renseigner `profil.photo: "/nom.jpg"`.
3. **Plus de matière technique** sur Pick Sell et No-Code IGA, les deux fiches
   les plus minces. Le dossier local `iam_plateforme` est vide ; l'essentiel
   vient de son ancien CV. Lui demander des précisions plutôt qu'inventer.

### Où trouver la matière (ne rien inventer)

| Projet | Où regarder |
| --- | --- |
| The Circle | `Desktop\Projet\the_circle` — `CLAUDE.md`, `supabase/migrations/`, `src/app/api/` |
| A.M.C Bank | `Desktop\Projet\A.M.C Bank` — le `README.md` est excellent (modèle de sécurité, idempotence, egress) et `docs/` |
| Kynn | `Desktop\Projet\projet famille` — `README.md` et `ARCHITECTURE.md` ; les tests de bout en bout sont un très bon argument |
| Pick Sell | `Desktop\Projet\Site vitrine montre\pick-sell` — attention, le README dit Strapi, mais les dépendances disent Supabase : **les dépendances ont raison** |
| La Grèce | dépôt distant `https://github.com/P4lbL0/la-grece` (rien en local à part une sauvegarde SQL) |
| Airbay Data | `Desktop\Projet\the_circle\Rapport_de_stage_Angelos_Lemire.docx` — **filtrer selon la section 5** |

Lire un `.docx` : c'est un zip, extraire `word/document.xml` et retirer les
balises.

### Les chiffres globaux de la page d'accueil

La bande corail de l'accueil montre le bilan de **tout** son travail, pas d'un
projet. Relevé le 1er septembre 2026 : **2 010 commits**, **776 migrations
SQL**, **11 projets personnels**, **9 projets en stage**.

**Périmètre décidé par Angelos, en connaissance de cause :** tous les dépôts sur
lesquels il a travaillé, personnels (`Desktop\Projet`, plus `la-grece` en
distant) comme professionnels (`Desktop\STAGE`, `Desktop\SAE-IAM`). Une partie
de ces commits est signée de collègues — Raphael Bensamoun et Vincent Couturier.
Il a été averti à deux reprises et a choisi de les inclure, sous le libellé
« **commits poussés** » qu'il a lui-même redemandé. **Ne pas « corriger » ce
chiffre ni ce libellé sans le lui demander** : le voir signé d'autres auteurs
n'est pas une erreur, c'est sa décision.

Répartition : 1 173 commits personnels + 837 en stage et SAÉ ; 310 migrations
personnelles + 466 en stage. Pour recalculer, depuis `Desktop` :

```bash
git -C <dépôt> rev-list --count HEAD
find <dépôt> -name '*.sql' | grep -i migration | wc -l
```

Doublons à exclure du compte : `ES-CRM - Copie`, `ES-CRM - Copie (2)`,
`alumnaiOG`. Le dossier `E3S-CRM` n'a pas de dépôt git : ses 209 migrations sont
comptées sur la foi d'Angelos, qui était référent données sur ce périmètre.

---

## 7. Chantier n°2 — le responsive

Ce qui a déjà été corrigé, à ne pas défaire :

- Le nom de la couverture est passé de `clamp(52px, 13vw, 148px)` à
  `clamp(58px, 23vw, 148px)` : sur un téléphone il restait bloqué à 52px et
  avait l'air timide alors qu'une affiche doit remplir la largeur.
- Les coordonnées (`.byline`) passent en colonne sous 780px.
- La bande de chiffres passe en 2×2 sous 780px, au lieu de 3 + 1 orphelin.

Ce qui reste à faire :

- **Tester les largeurs intermédiaires**, 600 à 1000px : c'est la zone la moins
  vérifiée, tablette et fenêtre réduite.
- **La grille de fonctionnalités** (`.grille`) passe en une colonne assez tard ;
  vérifier qu'elle respire à 700px.
- **Les tableaux de faits** (`.facts`) dans les cadres d'expérience : un libellé
  long et une valeur sur la même ligne peuvent se serrer.
- **Le paysage sur téléphone**, jamais testé.
- **La lettrine** (`.lettrine`) sur les très petits écrans (320px).

---

## 8. Pièges déjà payés — ne pas les repayer

- **`.band div` écrasait `.wrap`.** Le conteneur `.wrap` est lui-même un `div` :
  le sélecteur `.band div` (spécificité 0,1,1) battait `.wrap` (0,1,0) et lui
  retirait ses marges latérales, collant les chiffres au bord de l'écran.
  C'est corrigé en `.band .wrap > div`. **Se méfier de tout sélecteur
  descendant sur un nom d'élément générique** dans ce fichier CSS.
- **`&nearr;` n'est pas décodé par JSX** et s'affiche en toutes lettres.
  Utiliser le caractère `↗` directement. (`&larr;` et `&rarr;` fonctionnent.)
- **`resize_page` de Chrome DevTools ne redimensionne pas vraiment** ici. Pour
  tester le mobile, utiliser `emulate` avec
  `viewport: "390x844x3,mobile,touch"`.
- **Les captures ne peuvent pas être écrites hors des dossiers de travail
  autorisés.** Les enregistrer avec un chemin relatif (elles atterrissent dans
  le dossier courant, souvent `the_circle`), puis les déplacer dans
  `portfolio/docs/screens/`.
- **`npx next start` garde le port occupé** entre deux essais : changer de port
  ou arrêter la tâche de fond avant de relancer. Mesuré le 01/09 : **neuf**
  serveurs zombies occupaient 3210 à 3218, et l'un d'eux servait un ancien
  build — d'où des 404 sur des pages qui existaient pourtant. Vérifier le port
  libre avant de conclure quoi que ce soit :
  `netstat -ano | grep LISTENING | grep -oE ':32[0-9]{2}' | sort -u`.
- **Le navigateur de Chrome DevTools MCP se verrouille** s'il tourne déjà
  ailleurs (« browser is already running »). Contournement utilisé : un script
  Puppeteer avec son propre `userDataDir`, en important `puppeteer-core` par
  chemin absolu depuis `the_circle/node_modules` — le portfolio ne l'a pas.
- **`npm run lint` est cassé** : `next lint` a disparu de Next 16. Le contrôle
  qui compte reste `npm run build`, qui fait le typecheck.
- **Vérifier le rendu par mesure, pas à l'œil.** Une capture compressée fait
  lire des choses fausses. `evaluate_script` avec `getBoundingClientRect()` et
  `scrollWidth - clientWidth` donne la réponse en une fois.

---

## 9. Vérifier son travail

```bash
cd C:\Users\lemir\Desktop\Projet\portfolio
npm run build            # types + génération statique, 23 pages depuis le 01/09
npx next start -p 3261   # puis ouvrir http://localhost:3261
```

Contrôles utiles avant de committer :

- aucun débordement horizontal : `document.scrollingElement.scrollWidth -
  clientWidth` doit valoir `0`, en 390px comme en 1440px ;
- les deux thèmes, clair et sombre, sur l'accueil **et** sur une fiche ;
- la console du navigateur vide ;
- les liens externes répondent (`curl -o /dev/null -w "%{http_code}"`) —
  **vérifier le titre de la page**, pas seulement le code 200 : `kynn.vercel.app`
  et `amcbank.vercel.app` répondent 200 mais **ne sont pas ses sites**.

---

## 10. Ce qui reste ouvert, côté Angelos

1. Sa photo.
2. Les captures de ses projets.
3. L'import du dépôt sur Vercel.
4. La suppression de ses deux anciens portfolios.
