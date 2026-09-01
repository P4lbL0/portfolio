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

  // La bande colorée sous la couverture.
  chiffres: [
    { valeur: "16 000", label: "dossiers migrés" },
    { valeur: "103 Go", label: "de pièces reprises" },
    { valeur: "~200", label: "utilisateurs en prod" },
    { valeur: "0", label: "coupure de service" },
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
        type: "liste",
        items: [
          {
            fort: "Reprendre un historique sale sans rien casser.",
            texte:
              "Faire entrer plus de seize mille dossiers venus d'un ancien outil dans une base déjà en service, avec les cent trois gigaoctets de pièces justificatives qui vont avec. La contrainte : pouvoir relancer la migration autant de fois que nécessaire sans jamais créer de doublon, et savoir dire d'où vient chaque ligne.",
          },
          {
            fort: "Faire dialoguer deux systèmes vivants.",
            texte:
              "Une synchronisation à double sens, avec des contrats de données explicites de part et d'autre : ce que chaque système envoie, ce qu'il accepte, et ce qui se passe quand les deux modifient la même chose au même moment.",
          },
          {
            fort: "Cloisonner les accès.",
            texte:
              "Un même dossier passe entre les mains de six métiers successifs, et chacun ne doit voir que son périmètre. Ce cloisonnement est écrit dans la base elle-même, en Row-Level Security, plutôt que dans l'application — une règle oubliée dans un écran ne peut alors pas ouvrir une porte.",
          },
        ],
      },

      {
        type: "citation",
        texte:
          "Une donnée imparfaite peut entrer, à condition de savoir laquelle et pourquoi.",
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
      "Un site de commande et de réservation pour un restaurant, et le back-office pour le tenir.",
    meta: [
      "Stage de **2ᵉ année**",
      "**Mai — juin 2025**",
      "Rôle : **conception et développement**",
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
        type: "liste",
        items: [
          {
            fort: "Le site public.",
            texte:
              "Présentation du restaurant et de son histoire, carte, événements, commande en ligne et réservation, avec création de compte.",
          },
          {
            fort: "Le back-office.",
            texte:
              "Sept écrans d'administration : plats, sandwiches, recettes, devis, commandes, réservations et comptes. Chaque écran a été pensé pour quelqu'un qui n'a jamais utilisé d'outil de gestion.",
          },
          {
            fort: "L'éditeur de contenu.",
            texte:
              "Un éditeur de texte riche pour que les descriptions et les pages puissent être écrites sans connaître le HTML.",
          },
        ],
      },

      { type: "titre", texte: "Ce que j'en retiens" },
      {
        type: "para",
        texte:
          "C'est le projet qui m'a appris que la partie difficile n'est pas la façade mais l'arrière-boutique. Le site public a pris quelques jours ; les écrans d'administration ont pris le reste du stage, parce qu'à chaque champ il fallait se demander ce qui se passe si on le remplit mal.",
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
  sousTitre?: string;
  meta?: string[];
  chiffres?: Fait[];
  contenu?: Bloc[];
  liens?: Lien[];
};

export const projets: Projet[] = [
  {
    slug: "the-circle",
    nom: "The Circle",
    resume:
      "Plateforme communautaire de cartes à collectionner, menée seul du cahier des charges au déploiement. Plus de 120 migrations SQL versionnées, cloisonnement par Row-Level Security, tournois, monnaie, marché et rendu 3D.",
    statut: "En ligne · the-circle.pro",
    enLigne: true,
    vedette: true,
    sousTitre:
      "Une plateforme où des communautés de joueurs se fabriquent leurs tournois, leur monnaie et leurs cartes à collectionner.",
    meta: [
      "Projet personnel — **seul, de bout en bout**",
      "En ligne : **the-circle.pro**",
      "Depuis **2025** · **en production**",
    ],
    chiffres: [
      { valeur: "120+", label: "migrations SQL" },
      { valeur: "135", label: "routes d'API testées" },
      { valeur: "10", label: "modules activables" },
    ],
    contenu: [
      {
        type: "para",
        texte:
          "Les communautés de jeu vivent sur Discord, où tout finit par se perdre : les résultats de tournois, les classements, qui a gagné quoi. The Circle leur donne un endroit à elles. Chaque communauté a ses membres, sa monnaie, ses tournois, sa collection de cartes, sa boutique et son classement.",
      },
      { type: "reserve", texte: "Capture ou courte vidéo du produit" },

      { type: "titre", texte: "Le difficile" },
      {
        type: "liste",
        items: [
          {
            fort: "Cloisonner sans se tromper.",
            texte:
              "Les points, les cartes et les tournois appartiennent à une communauté ; l'identité et les cosmétiques appartiennent au joueur. Toute la sécurité repose sur des règles écrites dans la base elle-même.",
          },
          {
            fort: "Faire évoluer un schéma en service.",
            texte:
              "Plus de cent vingt migrations SQL versionnées, appliquées une par une, sur une base que des gens utilisent le soir même.",
          },
          {
            fort: "Tenir la charge d'une soirée.",
            texte:
              "Quand deux cents ouvertures de packs tombent en dix minutes, chaque opération bancaire passe par un verrou unique : une boucle d'appels, et tout se met en file.",
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
    ],
    liens: [
      { label: "En ligne", url: "https://www.the-circle.pro" },
      { label: "Code", url: "https://github.com/P4lbL0/the-circle" },
    ],
  },

  {
    slug: "amc-bank",
    nom: "A.M.C Bank",
    resume:
      "Un marché financier simulé : portefeuille, ligne de crédit, ordres limite et stop, cours indexés sur le réel, et quatre salles de casino.",
    statut: "En ligne · amc-bank-five.vercel.app",
    enLigne: true,
    vedette: true,
    sousTitre:
      "Un marché financier simulé, avec de vrais mécanismes d'ordres et une économie qui tient debout.",
    meta: [
      "Projet personnel",
      "En ligne : **amc-bank-five.vercel.app**",
      "Depuis **2026**",
    ],
    chiffres: [
      { valeur: "20", label: "actifs cotés" },
      { valeur: "4", label: "salles de jeu" },
    ],
    contenu: [
      {
        type: "para",
        texte:
          "Le projet est parti d'une envie simple : comprendre comment fonctionne un carnet d'ordres en le construisant. Il est devenu une banque complète — portefeuille, ligne de crédit, ordres limite, stop et OCO, cours qui bougent tout seuls entre deux ticks, et quatre salles de jeu avec leurs propres règles.",
      },
      { type: "reserve", texte: "Capture du marché" },
      { type: "titre", texte: "Le difficile" },
      {
        type: "liste",
        items: [
          {
            fort: "Une économie qui ne s'effondre pas.",
            texte:
              "Un marché simulé dérive vite : soit tout le monde s'enrichit, soit tout le monde est ruiné. L'équilibrage a demandé plus de travail que le moteur d'ordres lui-même.",
          },
          {
            fort: "Des cours qui bougent sans joueur.",
            texte:
              "Le marché doit vivre même quand personne n'est connecté, ce qui suppose une tâche planifiée côté base de données plutôt qu'un calcul déclenché par une visite.",
          },
        ],
      },
    ],
    liens: [
      { label: "En ligne", url: "https://amc-bank-five.vercel.app" },
      { label: "Code", url: "https://github.com/P4lbL0/AMCBank" },
    ],
  },

  {
    slug: "no-code-iga",
    nom: "No-Code IGA",
    resume:
      "Gouvernance des identités et des accès : passerelle de provisionnement vers Active Directory et Odoo, workflows BPMN et CMMN, sécurisation par Keycloak.",
    statut: "Projet tutoré · avec Evidian (Atos) et le laboratoire LISSI",
    enLigne: false,
    vedette: true,
    sousTitre:
      "Une plateforme de gouvernance des identités et des accès, construite avec un partenaire industriel et un laboratoire de recherche.",
    meta: [
      "Projet tutoré — **IUT de Créteil-Vitry**",
      "Avec **Evidian (Atos)** et le **laboratoire LISSI**",
      "**2025 — 2026**",
    ],
    contenu: [
      {
        type: "para",
        texte:
          "Dans une organisation, chaque arrivée, changement de poste ou départ doit se répercuter sur tous les outils : annuaire, messagerie, logiciel de gestion. Fait à la main, c'est long et ça laisse des comptes ouverts derrière. Le projet consistait à construire la passerelle qui automatise ces mouvements, et à la rendre configurable sans écrire de code.",
      },
      { type: "titre", texte: "Ma part" },
      {
        type: "liste",
        items: [
          {
            fort: "La passerelle de provisionnement.",
            texte: "Création et mise à jour automatiques des comptes vers Active Directory et Odoo.",
          },
          {
            fort: "La modélisation des parcours.",
            texte:
              "Les circuits de validation décrits en BPMN et CMMN, pour qu'un administrateur puisse les changer sans toucher au code.",
          },
          {
            fort: "La sécurisation.",
            texte: "Authentification centralisée par Keycloak, jetons signés, et traçabilité des mouvements.",
          },
        ],
      },
    ],
  },

  {
    slug: "pick-sell",
    nom: "Pick Sell",
    resume:
      "Boutique à deux univers, horlogerie et informatique reconditionnée, avec un catalogue entièrement administrable.",
    statut: "En ligne · pick-sell.vercel.app",
    enLigne: true,
    vedette: true,
    sousTitre: "Une vitrine à deux univers : montres modifiées et matériel informatique reconditionné.",
    meta: ["Projet personnel", "En ligne : **pick-sell.vercel.app**"],
    contenu: [
      {
        type: "para",
        texte:
          "Deux activités très différentes qui devaient cohabiter sans se marcher dessus : d'un côté l'horlogerie, de l'autre l'informatique reconditionnée. Le site les sépare visuellement tout en partageant le même catalogue administrable.",
      },
    ],
    liens: [{ label: "En ligne", url: "https://pick-sell.vercel.app" }],
  },

  {
    slug: "kynn",
    nom: "Kynn",
    resume:
      "Tâches, calendrier et budget pour les familles nombreuses. La corvée tourne, l'équité aussi.",
    statut: "En ligne · kynn-brown.vercel.app",
    enLigne: true,
    vedette: true,
    sousTitre:
      "Répartir les corvées, le calendrier et le budget d'une famille nombreuse sans que ça retombe toujours sur les mêmes.",
    meta: ["Projet personnel", "En ligne : **kynn-brown.vercel.app**"],
    contenu: [
      {
        type: "para",
        texte:
          "Dans une famille nombreuse, la charge se répartit rarement toute seule. Kynn fait tourner les corvées, tient le calendrier commun et suit le budget, avec une idée directrice : que la rotation soit visible par tout le monde, pour qu'elle ne se discute plus.",
      },
    ],
    liens: [{ label: "En ligne", url: "https://kynn-brown.vercel.app" }],
  },

  // ---- Niveau 2 : listés en compact, sans fiche ----
  {
    slug: "matchday",
    nom: "MatchDay",
    resume: "Résultats et classements de football",
    statut: "En ligne · apllifoot.vercel.app",
    enLigne: true,
    vedette: false,
    liens: [{ label: "En ligne", url: "https://apllifoot.vercel.app" }],
  },
  {
    slug: "circled-fight",
    nom: "Circled Fight",
    resume: "Tournois, brackets et classements",
    statut: "En ligne",
    enLigne: true,
    vedette: false,
    liens: [{ label: "En ligne", url: "https://p4lbl0.github.io/Circled-Fight/" }],
  },
  {
    slug: "everest",
    nom: "Everest",
    resume: "Visualisation d'ascension",
    statut: "En ligne",
    enLigne: true,
    vedette: false,
    liens: [{ label: "En ligne", url: "https://p4lbl0.github.io/Everest/" }],
  },
  {
    slug: "le-protecteur",
    nom: "Le Protecteur",
    resume: "Roguelike pixel-art, gestion de village",
    statut: "En cours",
    enLigne: false,
    vedette: false,
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
