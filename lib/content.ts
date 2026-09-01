// ============================================================================
//  CONTENU DU SITE — Angelos Lemire
// ----------------------------------------------------------------------------
//  C'EST LE SEUL FICHIER À MODIFIER pour faire vivre le site.
//  Ajouter un projet = ajouter un objet dans `projets`. La page d'accueil et
//  la fiche de détail se fabriquent toutes seules à partir de là.
//
//  Confidentialité — stage Airbay Data : pas de nom de produit, pas de nom de
//  client, pas de nom de personne, aucune mention de montant. Les volumes
//  (dossiers, gigaoctets, utilisateurs) sont validés comme publiables.
// ============================================================================

export type Lien = { label: string; url: string };
export type Fait = { label: string; valeur: string };

/** Un bloc de contenu d'une fiche. Le rendu est géré par <Blocs />. */
export type Bloc =
  | { type: "para"; texte: string }
  | { type: "titre"; texte: string }
  | { type: "liste"; items: { fort?: string; texte: string }[] }
  // Grille de fonctionnalités : ce que le produit fait, en un coup d'œil.
  | { type: "grille"; items: { titre: string; texte: string }[] }
  | { type: "citation"; texte: string }
  | { type: "image"; src: string; alt: string; legende?: string }
  // Emplacement réservé visible en attendant un vrai visuel.
  | { type: "reserve"; texte: string };

// ----------------------------------------------------------------------------
//  PROFIL
// ----------------------------------------------------------------------------
export const profil = {
  prenom: "Angelos",
  nom: "Lemire",
  kicker: "Données · Full-stack · Thiais (94)",
  chapeau:
    "Je fais tenir des bases qui servent tous les jours. **Quatorze semaines** à migrer et sécuriser deux CRM en production, sans jamais couper le service.",

  // Photo : déposer le fichier dans public/ et mettre son nom ici.
  // Laisser la chaîne vide affiche un emplacement réservé au lieu d'une image cassée.
  photo: "",
  photoAlt: "Angelos Lemire",

  byline: [
    { texte: "BUT3 Informatique — **parcours AGED**" },
    { texte: "IUT de Créteil-Vitry — **UPEC**" },
  ],

  // La bande colorée sous la couverture : le bilan de TOUT le travail, pas
  // celui d'un projet en particulier (les chiffres du stage sont sur sa fiche).
  //
  // Périmètre retenu, décidé par Angelos le 01/09/2026 : TOUS les dépôts sur
  // lesquels il a travaillé, personnels comme professionnels. Une partie de
  // ces commits est signée de collègues ; il en a été informé et a choisi de
  // les inclure, sous le libellé « commits poussés ».
  // NE PAS « corriger » ce chiffre ni ce libellé sans le lui demander.
  //
  //   commits    : 1 173 personnels + 837 en stage et SAÉ
  //   migrations : 310 personnelles + 466 en stage
  //
  // Comment les recalculer, depuis Desktop :
  //   git -C <dépôt> rev-list --count HEAD
  //   find <dépôt> -name '*.sql' | grep -i migration | wc -l
  // Doublons à exclure : « ES-CRM - Copie », « ES-CRM - Copie (2) », « alumnaiOG ».
  // Dernier relevé : 1er septembre 2026.
  chiffres: [
    { valeur: "2 010", label: "commits poussés" },
    { valeur: "776", label: "migrations SQL" },
    { valeur: "11", label: "projets personnels" },
    { valeur: "9", label: "projets en stage" },
  ] satisfies Fait[],

  presentation: [
    "Ce qui m'intéresse, c'est la donnée quand elle est vivante. Pas un jeu d'essai propre dans un devoir noté : une base en production, ouverte à deux cents personnes qui s'en servent pour travailler, et qu'il faut faire évoluer sans perdre une ligne ni couper le service.",
    "J'ai passé mon stage de fin d'études chez **Airbay Data**, éditeur de logiciels de gestion de la relation client, comme référent du volet données de deux produits. Le reste du temps, je mène mes propres projets de bout en bout — du schéma SQL jusqu'au déploiement. Ils ne dorment pas dans un dossier : ils sont en ligne, et des gens s'en servent.",
  ],

  citation:
    "La question n'est jamais : est-ce que mon script marche. C'est : qu'est-ce qui se passe s'il s'arrête au milieu.",

  horsEcran: [
    "Coach de boxe, et professeur de grec à mes heures. Deux façons d'apprendre la même chose : expliquer simplement, et répéter sans s'énerver. Je diffuse aussi mes parties sur TikTok, ce qui m'a appris autant sur la vie d'un produit que sur le code.",
  ],

  majLe: "1er septembre 2026",
  lieu: "Thiais, Île-de-France",
};

// ----------------------------------------------------------------------------
//  CONTACT
// ----------------------------------------------------------------------------
export const contacts: { label: string; valeur: string; url: string }[] = [
  { label: "Email", valeur: "lemire.angelos@gmail.com", url: "mailto:lemire.angelos@gmail.com" },
  { label: "Téléphone", valeur: "06 36 16 21 93", url: "tel:+33636162193" },
  { label: "GitHub", valeur: "P4lbL0", url: "https://github.com/P4lbL0" },
  { label: "LinkedIn", valeur: "angelos-lemire", url: "https://www.linkedin.com/in/angelos-lemire-577532275/" },
  { label: "TikTok", valeur: "@angelos_codm", url: "https://www.tiktok.com/@angelos_codm" },
  { label: "Discord", valeur: "Alcatraz", url: "https://discord.gg/nMtQ74uQcF" },
];

// ----------------------------------------------------------------------------
//  FORMATION
// ----------------------------------------------------------------------------
export const formation = [
  {
    periode: "2023–26",
    intitule: "BUT Informatique, parcours AGED",
    lieu: "IUT de Créteil-Vitry",
    detail:
      "Administration, gestion et exploitation des données. Bases de données, sécurité, développement full-stack, conduite de projet en agile.",
  },
  {
    periode: "2021–23",
    intitule: "Baccalauréat STI2D, option SIN",
    lieu: "Lycée Chérioux, Vitry",
    detail: "Systèmes d'information et numérique. Mention bien.",
  },
];

// ----------------------------------------------------------------------------
//  COMPÉTENCES
// ----------------------------------------------------------------------------
export const competences: { titre: string; contenu: string }[] = [
  {
    titre: "Données",
    contenu:
      "PostgreSQL · Supabase · SQL · Row-Level Security · migrations versionnées · qualité et déduplication _— mon cœur de métier_",
  },
  { titre: "Développement", contenu: "TypeScript · Next.js · React · Python · Java" },
  { titre: "Outils", contenu: "Git · Docker · Vercel · Keycloak" },
  { titre: "Langues", contenu: "Français _natif_ · Grec _bilingue_ · Anglais _B1_" },
];

// ----------------------------------------------------------------------------
//  EXPÉRIENCES
// ----------------------------------------------------------------------------
export type Experience = {
  slug: string;
  entreprise: string;
  tag: string;
  periode: string;
  /** Paragraphe affiché sur la page d'accueil. */
  resume: string;
  /** Tableau de faits affiché sur la page d'accueil (facultatif). */
  faits?: Fait[];
  /** Chapeau de la fiche. */
  sousTitre: string;
  /** Lignes de contexte sous le titre de la fiche. */
  meta: string[];
  /** Technologies, affichées en étiquettes sur la fiche. */
  stack?: string[];
  /** Bande colorée de la fiche (facultatif). */
  chiffres?: Fait[];
  contenu: Bloc[];
};

export const experiences: Experience[] = [
  {
    slug: "airbay-data",
    entreprise: "Airbay Data",
    tag: "Stage de fin d'études — 14 semaines",
    periode: "Du 3 mars au 6 juin 2026",
    resume:
      "Référent du volet données et intégration sur deux CRM métier. J'ai conçu et exécuté les migrations sur des bases de production, défini les contrats d'échange entre les deux systèmes, et cloisonné les accès directement dans la base plutôt que dans l'application.",
    faits: [
      { label: "Dossiers repris d'un ancien outil", valeur: "16 000" },
      { label: "Pièces justificatives migrées", valeur: "103 Go" },
      { label: "Utilisateurs en production", valeur: "~200" },
      { label: "CRM synchronisés à double sens", valeur: "2" },
    ],
    sousTitre:
      "Administrer, migrer et sécuriser les données de deux logiciels métier utilisés tous les jours.",
    meta: [
      "Stage de fin d'études — **14 semaines**",
      "Du **3 mars** au **6 juin 2026**",
      "Rôle : **référent données et intégration**",
    ],
    stack: ["PostgreSQL", "Supabase", "Row-Level Security", "Edge Functions", "SQL", "TypeScript"],
    chiffres: [
      { valeur: "16 000", label: "dossiers migrés" },
      { valeur: "103 Go", label: "de pièces reprises" },
      { valeur: "~200", label: "utilisateurs impactés" },
      { valeur: "0", label: "interruption" },
    ],
    contenu: [
      { type: "titre", texte: "Le contexte" },
      {
        type: "para",
        texte:
          "L'entreprise édite des logiciels de gestion de la relation client sur mesure. Plusieurs produits partagent un socle technique commun, servent des métiers différents, et doivent se parler. Chacun est une base de production vivante : le principal est utilisé au quotidien par environ deux cents personnes, réparties sur six métiers aux besoins très différents.",
      },
      {
        type: "para",
        texte:
          "Le socle applicatif existait avant moi. J'ai été intégré sur le volet données : c'est moi qui ai conçu et exécuté les migrations, défini les contrats d'échange entre les deux logiciels, et durci les règles d'accès.",
      },

      { type: "titre", texte: "Ce que j'ai fait" },
      {
        type: "grille",
        items: [
          {
            titre: "Migration de l'historique",
            texte:
              "Seize mille dossiers et cent trois gigaoctets de pièces, repris d'un ancien outil vers une base déjà en service.",
          },
          {
            titre: "Synchronisation à double sens",
            texte:
              "Un pont entre les deux logiciels, avec des contrats de données explicites de part et d'autre.",
          },
          {
            titre: "Qualité des données",
            texte:
              "Déduplication, contrôles de cohérence, et traçabilité de l'origine de chaque ligne reprise.",
          },
          {
            titre: "Sécurité d'accès",
            texte:
              "Cloisonnement multi-acteurs écrit dans la base, en Row-Level Security, et modèle de permissions par rôle.",
          },
        ],
      },

      { type: "titre", texte: "Ce qui était difficile" },
      {
        type: "liste",
        items: [
          {
            fort: "Reprendre un historique sale sans rien casser.",
            texte:
              "Les données venaient d'un outil où rien n'était contraint : doublons, champs vides, formats incohérents. Il fallait pouvoir relancer la migration autant de fois que nécessaire sans jamais créer de doublon, et savoir dire d'où vient chaque ligne. Une opération qu'on peut rejouer vaut mieux qu'une opération qu'on croit parfaite.",
          },
          {
            fort: "Faire dialoguer deux systèmes vivants.",
            texte:
              "Le plus délicat n'est pas d'envoyer la donnée, c'est de décider ce qui gagne quand les deux systèmes modifient la même chose au même moment. Chaque échange a donc un contrat écrit : ce qui part, ce qui est accepté, et ce qui se passe en cas de conflit.",
          },
          {
            fort: "Cloisonner sans se tromper.",
            texte:
              "Un même dossier passe entre les mains de six métiers successifs, et chacun ne doit voir que son périmètre. Ce cloisonnement est écrit dans la base elle-même plutôt que dans l'application — une règle oubliée dans un écran ne peut alors pas ouvrir une porte.",
          },
          {
            fort: "Travailler sans fenêtre d'arrêt.",
            texte:
              "Personne ne pouvait me donner une nuit d'interruption : les utilisateurs travaillent en journée et le service devait rester debout. Les migrations ont donc été découpées et jouées par lots, avec un point de reprise après chaque lot.",
          },
        ],
      },

      {
        type: "citation",
        texte: "Une donnée imparfaite peut entrer, à condition de savoir laquelle et pourquoi.",
      },

      { type: "titre", texte: "Les missions en appui" },
      {
        type: "para",
        texte:
          "À côté du projet principal, j'ai contribué à plusieurs chantiers plus courts, tous centrés sur la donnée : un pipeline d'extraction documentaire, la transformation d'appels enregistrés en données exploitables, deux automates de saisie comptable, et l'audit de sécurité de deux autres applications de la maison.",
      },

      { type: "titre", texte: "Ce que j'en retiens" },
      {
        type: "para",
        texte:
          "Sur une base de production, la question n'est jamais « est-ce que mon script marche » mais « qu'est-ce qui se passe s'il s'arrête au milieu ». J'ai appris à écrire des opérations qu'on peut relancer sans dégât, à vérifier avant d'écrire plutôt qu'à réparer après, et à accepter qu'une donnée imparfaite entre quand même — à condition de la marquer comme telle.",
      },
      {
        type: "para",
        texte:
          "J'ai aussi appris à travailler sous contrainte de continuité : une migration ne se juge pas à sa vitesse mais à ce qu'elle laisse derrière elle quand les utilisateurs se reconnectent le lendemain matin.",
      },
    ],
  },

  {
    slug: "la-grece",
    entreprise: "La Grèce",
    tag: "Stage de 2ᵉ année",
    periode: "Mai — juin 2025 · restaurant",
    resume:
      "Site de commande et de réservation, avec tout le back-office qui va avec : gestion des plats, des sandwiches, des recettes, des devis, des commandes et des réservations. Sept écrans d'administration, construits pour être tenus par quelqu'un qui n'est pas informaticien.",
    faits: [
      { label: "Écrans d'administration", valeur: "7" },
      { label: "Socle technique", valeur: "Next.js + Supabase" },
    ],
    sousTitre:
      "Un site de commande et de réservation pour un restaurant, et le back-office pour le tenir au quotidien.",
    meta: ["Stage de **2ᵉ année**", "**Mai — juin 2025**", "Rôle : **conception et développement**"],
    stack: ["Next.js", "React", "Supabase", "Material UI", "TipTap", "Framer Motion"],
    chiffres: [
      { valeur: "7", label: "écrans d'administration" },
      { valeur: "10", label: "pages publiques" },
    ],
    contenu: [
      { type: "titre", texte: "Le besoin" },
      {
        type: "para",
        texte:
          "Le restaurant prenait ses commandes et ses réservations au téléphone, et tenait ses cartes sur des documents qu'il fallait refaire à chaque changement. L'objectif n'était pas seulement d'avoir un site : c'était que le patron puisse changer une carte, un prix ou un horaire lui-même, sans rappeler personne.",
      },

      { type: "titre", texte: "Ce que j'ai construit" },
      {
        type: "grille",
        items: [
          {
            titre: "Le site public",
            texte:
              "Présentation, histoire de la maison, carte, événements, commande en ligne et réservation, avec création de compte.",
          },
          {
            titre: "Le back-office",
            texte:
              "Sept écrans : plats, sandwiches, recettes, devis, commandes, réservations et comptes.",
          },
          {
            titre: "L'éditeur de contenu",
            texte:
              "Un éditeur de texte riche, pour écrire les descriptions et les pages sans connaître le HTML.",
          },
          {
            titre: "Les comptes clients",
            texte:
              "Inscription, connexion, mots de passe chiffrés, et suppression de compte à la demande.",
          },
        ],
      },

      { type: "titre", texte: "Ce qui était difficile" },
      {
        type: "liste",
        items: [
          {
            fort: "Écrire pour quelqu'un qui n'est pas informaticien.",
            texte:
              "Chaque champ demandait de se poser la question : que se passe-t-il s'il est mal rempli, ou pas rempli du tout ? Un écran d'administration qui suppose que l'utilisateur fait bien les choses ne tient pas une semaine.",
          },
          {
            fort: "Un modèle de carte qui bouge.",
            texte:
              "Un plat, un sandwich et une formule n'ont pas la même forme, et le restaurant change sa carte souvent. Le modèle de données devait accepter ces variations sans qu'on ait à me rappeler à chaque saison.",
          },
        ],
      },

      { type: "titre", texte: "Ce que j'en retiens" },
      {
        type: "para",
        texte:
          "C'est le projet qui m'a appris que la partie difficile n'est pas la façade mais l'arrière-boutique. Le site public a pris quelques jours ; les écrans d'administration ont pris le reste du stage. C'est aussi là que j'ai compris qu'un outil livré sans que le client sache s'en servir n'est pas livré.",
      },
    ],
  },
];

// ----------------------------------------------------------------------------
//  PROJETS
//  `vedette: true`  → fiche détaillée, listé en grand sur l'accueil.
//  `vedette: false` → simple ligne dans « Et aussi ».
// ----------------------------------------------------------------------------
export type Projet = {
  slug: string;
  nom: string;
  /** Phrase affichée sur la page d'accueil. */
  resume: string;
  /** Libellé de statut : « En ligne · domaine » ou autre. */
  statut: string;
  enLigne: boolean;
  vedette: boolean;
  /** Adresse publique du projet, mise en avant en haut de la fiche. */
  urlLive?: string;
  /** Adresse du dépôt, mise en avant en haut de la fiche. */
  urlCode?: string;
  sousTitre?: string;
  meta?: string[];
  /** Technologies, affichées en étiquettes sur la fiche. */
  stack?: string[];
  chiffres?: Fait[];
  contenu?: Bloc[];
  /** Liens supplémentaires, en pied de fiche. */
  liens?: Lien[];
};

export const projets: Projet[] = [
  // --------------------------------------------------------------------------
  {
    slug: "the-circle",
    nom: "The Circle",
    resume:
      "Plateforme communautaire de cartes à collectionner, menée seul du cahier des charges au déploiement. Tournois, monnaie interne, studio de création de cartes, marché entre joueurs et diffusion en direct.",
    statut: "En ligne · the-circle.pro",
    enLigne: true,
    vedette: true,
    urlLive: "https://www.the-circle.pro",
    urlCode: "https://github.com/P4lbL0/the-circle",
    sousTitre:
      "Une plateforme où chaque communauté de joueurs se fabrique ses tournois, sa monnaie et ses cartes à collectionner.",
    meta: [
      "Projet personnel — **seul, de bout en bout**",
      "Depuis **2025** · **en production**",
      "Conception, développement, exploitation",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Row-Level Security",
      "Three.js",
      "PixiJS",
      "Vercel",
    ],
    chiffres: [
      { valeur: "236", label: "migrations SQL" },
      { valeur: "142", label: "routes d'API" },
      { valeur: "98", label: "tables" },
      { valeur: "135", label: "écrans" },
    ],
    contenu: [
      {
        type: "para",
        texte:
          "Les communautés de jeu vivent sur Discord, où tout finit par se perdre : les résultats de tournois, les classements, qui a gagné quoi, ce qu'on s'était promis la semaine dernière. The Circle leur donne un endroit à elles. Chaque communauté arrive avec ses membres, et repart avec sa monnaie, ses tournois, sa collection de cartes, sa boutique et son classement — le tout cloisonné : ce qui se passe chez l'une n'existe pas chez l'autre.",
      },
      { type: "reserve", texte: "Capture ou courte vidéo du produit" },

      { type: "titre", texte: "Ce que la plateforme fait" },
      {
        type: "grille",
        items: [
          {
            titre: "Tournois",
            texte:
              "Brackets, double élimination, matchs 1v1, formation d'équipes équilibrées par niveau historique, journal des matchs et classement par taux de victoire.",
          },
          {
            titre: "Économie",
            texte:
              "Une monnaie par communauté, une banque qui sérialise chaque opération, des quêtes, et un journal d'audit de toutes les actions du staff.",
          },
          {
            titre: "Cartes à collectionner",
            texte:
              "Un studio de création de cartes avec pinceaux et calques, des raretés, des matériaux (verre brisé, effets animés), des packs, et un marché d'échange entre joueurs.",
          },
          {
            titre: "Diffusion",
            texte:
              "Des overlays pour OBS, montés dans un éditeur de blocs, que les streamers branchent sur leur direct pour afficher scores et ouvertures de packs en temps réel.",
          },
          {
            titre: "Discord",
            texte:
              "Salons et rôles créés et synchronisés depuis la plateforme, annonces et candidatures relayées automatiquement.",
          },
          {
            titre: "Modération",
            texte:
              "Analyse des images à l'arrivée, signalements discrets, quotas, et un espace superadmin pour les cas qui remontent.",
          },
        ],
      },

      { type: "titre", texte: "Ce qui était difficile" },
      {
        type: "liste",
        items: [
          {
            fort: "Cloisonner sans se tromper.",
            texte:
              "Les points, les cartes et les tournois appartiennent à une communauté ; l'identité et les objets cosmétiques appartiennent au joueur, partout. Cette frontière traverse quatre-vingt-dix-huit tables, et elle est tenue par des règles écrites dans la base, pas par des conditions dans les écrans.",
          },
          {
            fort: "Faire évoluer un schéma pendant qu'on s'en sert.",
            texte:
              "Deux cent trente-six migrations SQL versionnées, appliquées une par une, sur une base que des gens utilisent le soir même. Aucun fichier déjà appliqué n'est jamais modifié : un correctif est une nouvelle migration, avec sa raison écrite en commentaire.",
          },
          {
            fort: "Tenir la charge d'une soirée.",
            texte:
              "Toutes les opérations bancaires d'une communauté passent par un seul verrou. Un soir de lancement, une boucle qui créditait les joueurs un par un a mis toute la soirée en file d'attente. La règle depuis : un ajustement de masse est une transaction, jamais une boucle d'appels.",
          },
          {
            fort: "Les fuseaux horaires.",
            texte:
              "La saisie se fait dans le fuseau de la communauté, l'affichage dans celui du visiteur, et une journée de quête se termine à minuit chez le joueur. Trois horloges différentes pour une même ligne de base.",
          },
        ],
      },

      { type: "citation", texte: "Une base que des gens utilisent le soir même." },

      { type: "titre", texte: "Ce que j'en retiens" },
      {
        type: "para",
        texte:
          "Construire pour d'autres que soi change tout : une règle de jeu mal expliquée coûte plus cher qu'un bug. J'ai appris à écrire la documentation en même temps que la fonctionnalité, et à considérer qu'une feature qu'on doit expliquer en message privé n'est pas finie.",
      },
      {
        type: "para",
        texte:
          "C'est aussi le projet qui m'a fait prendre au sérieux la sécurité : quand la monnaie a une valeur aux yeux des joueurs, une faille n'est plus théorique. Les règles d'accès vivent dans la base, et une suite de tests vérifie que chacune des routes refuse bien ce qu'elle doit refuser.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  {
    slug: "amc-bank",
    nom: "A.M.C Bank",
    resume:
      "Un marché financier simulé avec un vrai carnet d'ordres : marché, limite, stop, stop-limite, ligne de crédit, classement, et quatre salles de jeu à équité vérifiable.",
    statut: "En ligne · amc-bank-five.vercel.app",
    enLigne: true,
    vedette: true,
    urlLive: "https://amc-bank-five.vercel.app",
    urlCode: "https://github.com/P4lbL0/AMCBank",
    sousTitre:
      "Un marché simulé, un portefeuille et une ligne de crédit. Dix mille euros virtuels au départ, aucun argent réel — ni en entrée, ni en sortie.",
    meta: [
      "Projet personnel",
      "Depuis **2026** · **en production**",
      "Conception, développement, exploitation",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase Realtime",
      "pg_cron",
      "Vercel",
    ],
    chiffres: [
      { valeur: "20", label: "actifs cotés" },
      { valeur: "4", label: "salles de jeu" },
      { valeur: "17", label: "écrans" },
    ],
    contenu: [
      {
        type: "para",
        texte:
          "Le projet est parti d'une envie simple : comprendre comment fonctionne un carnet d'ordres en le construisant. Il est devenu une banque complète, avec des cours qui bougent tout seuls entre deux passages, une ligne de crédit, un classement par patrimoine net, et un casino dont chaque tirage peut être vérifié après coup par le joueur.",
      },
      { type: "reserve", texte: "Capture du marché" },

      { type: "titre", texte: "Ce que la banque fait" },
      {
        type: "grille",
        items: [
          {
            titre: "Le marché",
            texte:
              "Vingt actifs cotés, une courbe par actif, et un ticket d'ordre complet : marché, limite, stop, stop-limite et ordre de protection.",
          },
          {
            titre: "Le portefeuille",
            texte:
              "Positions revalorisées en direct, ordres en attente, et distinction stricte entre le solde total et ce qui est réellement disponible.",
          },
          {
            titre: "Le crédit",
            texte:
              "Une capacité d'emprunt calculée sur le patrimoine, avec emprunt et remboursement suivis au centime.",
          },
          {
            titre: "Le classement",
            texte:
              "Un classement par patrimoine net, et un journal paginé de tous les ordres passés.",
          },
          {
            titre: "Le casino",
            texte:
              "Quatre salles — crash, plinko, roulette, blackjack — avec une page d'équité qui explique et permet de vérifier chaque tirage.",
          },
          {
            titre: "Des cours réels",
            texte:
              "Les prix sont indexés en euros sur un marché réel, avec un mécanisme qui rapproche le cours simulé du cours réel à chaque tick.",
          },
        ],
      },

      { type: "titre", texte: "Le parti pris technique" },
      {
        type: "liste",
        items: [
          {
            fort: "Le serveur, c'est Postgres.",
            texte:
              "Il n'y a pas de serveur applicatif de confiance. Toute écriture à conséquence économique passe par une fonction en base : le client dit ce qu'il veut faire, la base décide de ce qui se passe. Aucun écran n'envoie jamais un prix, un solde ou une quantité à créditer.",
          },
          {
            fort: "Une clé d'idempotence par action.",
            texte:
              "Chaque opération économique porte un identifiant généré côté client et conservé tant qu'elle n'a pas abouti. Un double clic ou une reconnexion ne passe pas deux ordres : la base rend le résultat d'origine.",
          },
          {
            fort: "Un seul abonnement temps réel pour toute l'application.",
            texte:
              "Le ruban de cotation, la liste du marché et la fiche d'actif lisent la même table de diffusion. Faire interroger les prix par chaque client, c'est soixante-douze mille requêtes à l'heure pour cent joueurs — la facture est déjà tombée une fois, sur un autre projet.",
          },
        ],
      },

      { type: "titre", texte: "Ce qui était difficile" },
      {
        type: "liste",
        items: [
          {
            fort: "Une économie qui ne s'effondre pas.",
            texte:
              "Un marché simulé dérive vite : soit tout le monde s'enrichit et l'argent ne vaut plus rien, soit tout le monde est ruiné en une soirée et ne revient pas. L'équilibrage a demandé plus de travail que le moteur d'ordres lui-même.",
          },
          {
            fort: "Un marché qui vit sans joueur.",
            texte:
              "Les cours doivent bouger même quand personne n'est connecté, ce qui suppose une tâche planifiée dans la base plutôt qu'un calcul déclenché par une visite.",
          },
        ],
      },

      { type: "titre", texte: "Ce que j'en retiens" },
      {
        type: "para",
        texte:
          "C'est le projet où j'ai appris à ne faire confiance à rien de ce qui vient du navigateur. Poser cette règle dès le début a coûté du temps au départ et en a fait gagner ensuite : aucune fonctionnalité n'a eu besoin d'être reprise pour cause de faille économique.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  {
    slug: "kynn",
    nom: "Kynn",
    resume:
      "Tâches, calendrier et budget pour les familles nombreuses. La corvée tourne, l'équité aussi — et les tests vérifient qu'un enfant ne peut pas valider sa propre corvée.",
    statut: "En ligne · kynn-brown.vercel.app",
    enLigne: true,
    vedette: true,
    urlLive: "https://kynn-brown.vercel.app",
    sousTitre:
      "Répartir les corvées, le calendrier et le budget d'une famille nombreuse, avec une rotation que personne ne peut contester.",
    meta: [
      "Projet à deux — **fondateur**, avec une co-fondatrice",
      "Depuis **2026** · **en ligne**",
      "Conception, modèle de données, développement",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Row-Level Security", "PWA"],
    chiffres: [
      { valeur: "25", label: "écrans" },
      { valeur: "4", label: "suites de tests" },
    ],
    contenu: [
      {
        type: "para",
        texte:
          "Dans une famille nombreuse, la charge ne se répartit pas toute seule : elle retombe sur ceux qui ne discutent pas. Kynn fait tourner les corvées selon une règle écrite une fois pour toutes, tient le calendrier commun et suit le budget. L'idée directrice est que la rotation soit visible par tout le monde — quand chacun voit son tour arriver, il n'y a plus rien à négocier.",
      },
      { type: "reserve", texte: "Capture de l'écran du jour" },

      { type: "titre", texte: "Ce que l'application fait" },
      {
        type: "grille",
        items: [
          {
            titre: "Aujourd'hui",
            texte:
              "L'écran d'accueil de chaque membre : ce qu'il a à faire maintenant, et rien d'autre.",
          },
          {
            titre: "Rotation des corvées",
            texte:
              "Un moteur de rotation qui distribue les tâches à tour de rôle, avec passage de tour et validation par un parent.",
          },
          {
            titre: "Points et récompenses",
            texte:
              "Des points gagnés en accomplissant les tâches, échangeables dans une boutique paramétrée par les parents.",
          },
          {
            titre: "Calendrier",
            texte: "Le calendrier commun du foyer, avec les événements de chacun.",
          },
          {
            titre: "Budget",
            texte: "Le suivi des dépenses du foyer, tenu côté parents.",
          },
          {
            titre: "Espace parent",
            texte:
              "Membres, tâches, boutique, budget, réglages et export des données, séparés de l'espace enfant.",
          },
        ],
      },

      { type: "titre", texte: "Ce qui m'a demandé le plus de soin" },
      {
        type: "liste",
        items: [
          {
            fort: "Les données de mineurs.",
            texte:
              "L'application est utilisée par des enfants, ce qui impose un consentement parental, des pages dédiées expliquant ce qui est collecté, et la possibilité de tout effacer. Ce n'est pas une couche juridique posée à la fin : ça a façonné le modèle de données depuis le début.",
          },
          {
            fort: "Prouver que le cloisonnement tient.",
            texte:
              "La suite de tests de bout en bout crée un vrai foyer avec trois enfants, exerce un passage de corvée, puis vérifie surtout ce qui doit échouer : un enfant ne valide pas sa propre corvée, ne s'attribue pas de points, ne lit pas le grand livre d'un autre, et un foyer ne voit rien d'un autre foyer.",
          },
          {
            fort: "Une rotation qui reste juste dans le temps.",
            texte:
              "Un tour passé, un enfant qui rejoint le foyer en cours de route, une tâche supprimée : chacun de ces cas peut déséquilibrer la rotation pour des mois. Le moteur est testé en SQL, séparément de l'interface.",
          },
        ],
      },

      { type: "titre", texte: "Ce que j'en retiens" },
      {
        type: "para",
        texte:
          "Le sujet paraissait léger, il ne l'était pas : dès qu'un produit s'adresse à des enfants, les questions de consentement, de conservation et d'accès arrivent avant les fonctionnalités. C'est le projet qui m'a fait écrire des tests qui vérifient les refus autant que les réussites.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  {
    slug: "no-code-iga",
    nom: "No-Code IGA",
    resume:
      "Gouvernance des identités et des accès : passerelle de provisionnement vers Active Directory et Odoo, circuits de validation modélisés en BPMN et CMMN, sécurisation par Keycloak.",
    statut: "Projet tutoré · avec Evidian (Atos) et le laboratoire LISSI",
    enLigne: false,
    vedette: true,
    sousTitre:
      "Une plateforme de gouvernance des identités et des accès, construite avec un partenaire industriel et un laboratoire de recherche.",
    meta: [
      "Projet tutoré — **IUT de Créteil-Vitry**",
      "Avec **Evidian (Atos)** et le **laboratoire LISSI**",
      "**2025 — 2026** · en équipe",
    ],
    stack: ["Python", "FastAPI", "Keycloak", "Active Directory", "Odoo", "MidPoint", "Docker"],
    contenu: [
      {
        type: "para",
        texte:
          "Dans une organisation, chaque arrivée, changement de poste ou départ doit se répercuter sur tous les outils : annuaire, messagerie, logiciel de gestion. Fait à la main, c'est long, et surtout ça laisse des comptes ouverts derrière — un ancien salarié qui garde son accès est une faille qui ne se voit pas. Le projet consistait à construire la passerelle qui automatise ces mouvements, et à la rendre configurable sans écrire de code.",
      },

      { type: "titre", texte: "Ce que la plateforme fait" },
      {
        type: "grille",
        items: [
          {
            titre: "Provisionnement",
            texte:
              "Création, mise à jour et fermeture automatiques des comptes vers Active Directory et vers le logiciel de gestion.",
          },
          {
            titre: "Circuits de validation",
            texte:
              "Les parcours d'approbation décrits en BPMN et CMMN, modifiables par un administrateur sans toucher au code.",
          },
          {
            titre: "Authentification centralisée",
            texte: "Session unique par Keycloak, jetons signés, et contrôle des rôles à chaque appel.",
          },
          {
            titre: "Traçabilité",
            texte:
              "Chaque mouvement de compte est journalisé, avec une recherche sémantique sur l'historique.",
          },
        ],
      },

      { type: "titre", texte: "Ce que j'y ai appris" },
      {
        type: "para",
        texte:
          "C'est mon premier contact avec un contexte industriel : des contraintes qui ne viennent pas d'un énoncé, un partenaire qui a ses propres standards, et un existant qu'on ne remplace pas. J'y ai découvert la gestion des identités, un domaine où la question n'est jamais « comment donner un accès » mais « comment être sûr de savoir le reprendre ».",
      },
    ],
  },

  // --------------------------------------------------------------------------
  {
    slug: "pick-sell",
    nom: "Pick Sell",
    resume:
      "Boutique à deux univers, horlogerie et informatique reconditionnée, avec neuf écrans d'administration et un parti pris assumé : pas de paiement en ligne.",
    statut: "En ligne · pick-sell.vercel.app",
    enLigne: true,
    vedette: true,
    urlLive: "https://pick-sell.vercel.app",
    sousTitre:
      "Une vitrine à deux univers : montres modifiées et matériel informatique reconditionné, dans un seul site qui ne se marche pas dessus.",
    meta: ["Projet personnel", "Depuis **2026** · **en ligne**", "Conception et développement"],
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    chiffres: [
      { valeur: "2", label: "univers séparés" },
      { valeur: "9", label: "écrans d'administration" },
    ],
    contenu: [
      {
        type: "para",
        texte:
          "Deux activités très différentes devaient cohabiter sans se marcher dessus : d'un côté l'horlogerie — montres modifiées, reconditionnées, réparation et personnalisation — de l'autre l'informatique reconditionnée, avec reprise de matériel. Le site les sépare visuellement dès la page d'accueil, tout en partageant le même catalogue et le même back-office.",
      },
      { type: "reserve", texte: "Capture des deux univers" },

      { type: "titre", texte: "Ce que le site fait" },
      {
        type: "grille",
        items: [
          {
            titre: "Deux catalogues",
            texte:
              "Produits, fiches détaillées et services propres à chaque univers, avec leurs codes visuels distincts.",
          },
          {
            titre: "Les services",
            texte:
              "Réparation et personnalisation côté horlogerie, réparation et reprise côté informatique, chacun avec sa page et sa demande de devis.",
          },
          {
            titre: "Le back-office",
            texte:
              "Neuf écrans : produits, services, contenus, bandeaux d'accueil, couleurs, contacts, devis et statistiques.",
          },
          {
            titre: "Pas de panier",
            texte:
              "Un choix assumé : la vente se conclut sur Vinted, par WhatsApp ou par mail. Pas de paiement à sécuriser, pas de stock à tenir à jour.",
          },
        ],
      },

      { type: "titre", texte: "Ce que j'en retiens" },
      {
        type: "para",
        texte:
          "Ne pas construire le panier était la bonne décision, et c'est celle qui m'a demandé le plus de conviction. Un tunnel de paiement, c'est de la conformité, des remboursements et un stock juste — pour une activité qui se fait très bien sur des plateformes existantes. Le site fait ce qu'il doit faire : donner envie, et mettre en relation.",
      },
    ],
  },

  // ---- Niveau 2 : listés en compact, sans fiche ----
  {
    slug: "matchday",
    nom: "MatchDay",
    resume: "Résultats et classements de football",
    statut: "En ligne · apllifoot.vercel.app",
    enLigne: true,
    vedette: false,
    urlLive: "https://apllifoot.vercel.app",
    liens: [{ label: "En ligne", url: "https://apllifoot.vercel.app" }],
  },
  {
    slug: "circled-fight",
    nom: "Circled Fight",
    resume: "Tournois, brackets et classements",
    statut: "En ligne",
    enLigne: true,
    vedette: false,
    urlLive: "https://p4lbl0.github.io/Circled-Fight/",
    liens: [{ label: "En ligne", url: "https://p4lbl0.github.io/Circled-Fight/" }],
  },
  {
    slug: "everest",
    nom: "Everest",
    resume: "Visualisation d'ascension",
    statut: "En ligne",
    enLigne: true,
    vedette: false,
    urlLive: "https://p4lbl0.github.io/Everest/",
    liens: [{ label: "En ligne", url: "https://p4lbl0.github.io/Everest/" }],
  },
  {
    slug: "le-protecteur",
    nom: "Le Protecteur",
    resume: "Roguelike pixel-art, gestion de village",
    statut: "En cours",
    enLigne: false,
    vedette: false,
    urlCode: "https://github.com/P4lbL0/jeux",
    liens: [{ label: "Code", url: "https://github.com/P4lbL0/jeux" }],
  },
  {
    slug: "ocr-resultat",
    nom: "ocr-resultat",
    resume: "Lecture de scoreboards par OCR, en équipe",
    statut: "Projet collaboratif",
    enLigne: false,
    vedette: false,
  },
];

// ----------------------------------------------------------------------------
//  ACCÈS
// ----------------------------------------------------------------------------
export const projetsVedettes = projets.filter((p) => p.vedette);
export const projetsSecondaires = projets.filter((p) => !p.vedette);

export function getProjet(slug: string) {
  return projets.find((p) => p.slug === slug && p.vedette);
}

export function getExperience(slug: string) {
  return experiences.find((e) => e.slug === slug);
}

/** « https://www.the-circle.pro » → « the-circle.pro » */
export function domaine(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}
