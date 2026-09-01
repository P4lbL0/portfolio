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
  /** Les chantiers menés pendant cette expérience, chacun sur sa propre page. */
  projets?: ProjetStage[];
};

// ----------------------------------------------------------------------------
//  LES PROJETS DU STAGE
// ----------------------------------------------------------------------------
//  Les neuf chantiers menés chez Airbay Data. Chacun a sa propre page, à
//  l'adresse /experiences/airbay-data/<slug>, et sa carte dans le sommaire de
//  la fiche d'expérience.
//
//  CONFIDENTIALITÉ — décidé avec Angelos le 1er septembre 2026 :
//   · les produits ne sont JAMAIS nommés (pas de nom de code interne). On les
//     désigne par ce qu'ils font : « le CRM d'audit », « le CRM commercial ».
//     Si l'entreprise donne son accord un jour, il suffira de changer les
//     `titre` ci-dessous.
//   · les clients et les personnes ne sont jamais nommés non plus ;
//   · aucun montant, aucune prime, aucun chiffre d'affaires ;
//   · le secteur (rénovation énergétique, dispositif CEE) est autorisé, ainsi
//     que les volumes. Tous les chiffres viennent du rapport de stage.
// ----------------------------------------------------------------------------
export type ProjetStage = {
  slug: string;
  /** Numéro d'ordre affiché en gros, façon sommaire de revue. */
  numero: string;
  titre: string;
  /** Étiquette au-dessus du titre : la place du projet dans le stage. */
  tag: string;
  periode: string;
  /** Chiffre ou formule courte affichée sur la carte du sommaire. */
  accroche: string;
  /** Paragraphe de la carte du sommaire. */
  resume: string;
  /** Chapeau de la page du projet. */
  sousTitre: string;
  meta: string[];
  stack?: string[];
  chiffres?: Fait[];
  contenu: Bloc[];
};

export const projetsStage: ProjetStage[] = [
  // ==========================================================================
  //  01 — La reprise de l'historique
  // ==========================================================================
  {
    slug: "reprise-historique",
    numero: "01",
    titre: "La reprise de l'historique",
    tag: "Projet phare — premier volet",
    periode: "Mi-avril à juin 2026",
    accroche: "16 402 dossiers repris",
    resume:
      "Faire entrer seize mille dossiers et cent trois gigaoctets de pièces, venus d'un outil où rien n'était contraint, dans une base déjà utilisée tous les jours par deux cents personnes.",
    sousTitre:
      "Migrer l'historique d'un ancien CRM vers une base de production, sans perdre une ligne et sans couper le service.",
    meta: [
      "Projet phare — **premier volet sur deux**",
      "**Mi-avril à juin 2026**",
      "Rôle : **conception et exécution intégrales**",
    ],
    stack: ["PostgreSQL", "Supabase", "Edge Functions", "Deno", "SQL", "TypeScript"],
    chiffres: [
      { valeur: "16 402", label: "enregistrements repris" },
      { valeur: "103 Go", label: "de pièces rattachées" },
      { valeur: "9 900", label: "dossiers actifs retrouvés" },
      { valeur: "0", label: "doublon créé" },
    ],
    contenu: [
      { type: "titre", texte: "Le problème" },
      {
        type: "para",
        texte:
          "Le client gérait jusque-là son activité dans un ancien CRM low-code. Cet outil ne suivait plus : rigide, sans cartographie, avec un modèle de bien immobilier trop pauvre et l'impossibilité de rattacher plusieurs fiches de financement à un même dossier. Un nouveau CRM sur mesure avait donc été construit — mais un CRM sans son historique n'a **aucune valeur opérationnelle**. Il fallait tout faire entrer.",
      },
      {
        type: "para",
        texte:
          "Le volume vérifié : **16 402 enregistrements** et environ **12 185 archives de documents**, soit près de **103 Go**. Des données hétérogènes, de qualité inégale, et un ancien outil qui exposait ses champs sous des noms génériques illisibles — impossible de deviner la structure, il fallait l'inspecter enregistrement par enregistrement.",
      },

      { type: "titre", texte: "Pourquoi pas un simple export / import" },
      {
        type: "para",
        texte:
          "La solution évidente — un gros fichier exporté, transformé, réinjecté d'un coup — a deux défauts rédhibitoires quand la cible est une base vivante : elle est **tout-ou-rien**, et elle est difficile à rejouer. Si elle casse au dossier 9 000, on ne sait ni où on en est, ni comment reprendre sans dupliquer.",
      },
      {
        type: "para",
        texte:
          "J'ai préféré une approche **par flux, et idempotente** : l'ancien outil émettait un appel réseau par dossier au moment de son passage au statut « migré », et chaque dossier était reçu, stocké, puis traité indépendamment des autres.",
      },
      {
        type: "grille",
        items: [
          {
            titre: "Une porte d'entrée",
            texte:
              "Une fonction serveur reçoit le dossier et son archive de documents, et les dépose tels quels — sans aucune transformation.",
          },
          {
            titre: "Une table tampon",
            texte:
              "La donnée brute atterrit dans une table d'attente et un stockage privé. La source n'est jamais perdue, quoi qu'il arrive ensuite.",
          },
          {
            titre: "Un traitement par lots",
            texte:
              "Un second passage lit la structure réelle de chaque dossier et crée les entités du nouveau CRM : dossier, client, bien, fiche, documents.",
          },
          {
            titre: "Une clé stable",
            texte:
              "L'idempotence tient à une clé issue de la référence d'origine. Rejouer un dossier déjà importé le met à jour, ne le duplique jamais.",
          },
        ],
      },

      { type: "titre", texte: "Tolérer les données sales sans renoncer à la rigueur" },
      {
        type: "para",
        texte:
          "Le vrai défi n'était pas le volume, c'était la **qualité de la source**. Exiger des données parfaites avant de migrer aurait été irréaliste : rien n'aurait jamais migré. J'ai donc adopté une posture de **tolérance traçable** — importer le dossier incomplet, mais marquer explicitement ses manques.",
      },
      {
        type: "liste",
        items: [
          {
            fort: "Marquer les champs comblés.",
            texte:
              "Un champ obligatoire manquant était rempli par une valeur par défaut reconnaissable, et le dossier recevait un drapeau. La donnée n'a jamais été inventée en silence : elle reste identifiable et corrigeable après coup.",
          },
          {
            fort: "Prévoir une unité de repli.",
            texte:
              "Quand l'unité opérationnelle d'un dossier était introuvable, plutôt que de bloquer l'import, je le rattachais à une unité de repli dédiée. La migration continue, et les cas à réexaminer restent isolés au même endroit.",
          },
          {
            fort: "Séparer le vivant du mort.",
            texte:
              "Tous les dossiers n'avaient pas la même valeur opérationnelle. À partir d'une date butoir métier, j'ai distingué les dossiers réellement actifs de l'historique mort — et retrouvé ainsi près de **9 900 dossiers** au cœur de l'activité d'audit, qu'il était hors de question de laisser se diluer dans la masse archivée.",
          },
        ],
      },
      {
        type: "para",
        texte:
          "Ce dernier point cachait le risque le plus grave du chantier. Le statut d'un dossier n'est pas un libellé mais l'état d'une **machine à états** — on en comptait vingt-sept, avec des transitions autorisées selon le rôle. Un dictionnaire de correspondance incomplet aurait transformé silencieusement ces 9 900 dossiers actifs en dossiers « clôturés », donc invisibles. La frontière entre une migration réussie et un sinistre fonctionnel tenait à la complétude d'une table de traduction.",
      },
      {
        type: "citation",
        texte: "Une donnée imparfaite peut entrer, à condition de savoir laquelle et pourquoi.",
      },

      { type: "titre", texte: "Dédoublonner sans jamais supprimer" },
      {
        type: "para",
        texte:
          "L'import répété et l'historique de l'ancien outil avaient produit des fiches clients en double. J'ai conçu un traitement de fusion guidé par un principe non négociable : **jamais de suppression**.",
      },
      {
        type: "liste",
        items: [
          {
            fort: "Regrouper.",
            texte:
              "Les doublons sont rassemblés en grappes selon une clé combinant prénom, nom, téléphone, ville et unité opérationnelle.",
          },
          {
            fort: "Élire une fiche de référence.",
            texte:
              "Dans chaque grappe, on garde la plus riche, selon une priorité claire : le plus de dossiers, puis le plus de documents, puis l'ancienneté.",
          },
          {
            fort: "Repointer, puis archiver.",
            texte:
              "Les dossiers, documents, contacts et propriétés de société sont repointés vers la fiche de référence ; les fiches perdantes sont archivées, jamais effacées, avec une trace de la fusion qui permet le retour arrière. Le tout dans une transaction atomique, pour n'avoir aucun état intermédiaire incohérent.",
          },
          {
            fort: "Ne pas tout automatiser.",
            texte:
              "Un garde-fou interdisait toute fusion entre deux unités opérationnelles différentes. Et les cas ambigus — deux conjoints partageant un même numéro, une grappe hétérogène — ont été laissés à l'arbitrage humain. Une fusion automatique incertaine est plus dangereuse qu'un reliquat manuel.",
          },
        ],
      },
      {
        type: "para",
        texte:
          "Résultat : **104 fiches fusionnées** et **108 dossiers repointés**, sans créer un seul orphelin — intégrité vérifiée par requête après coup.",
      },

      { type: "titre", texte: "Cinq pièges payés en production" },
      {
        type: "liste",
        items: [
          {
            fort: "Des caractères que PostgreSQL refuse.",
            texte:
              "Certains enregistrements contenaient des caractères binaires nuls. L'ingestion échouait dessus **en silence**. Il a fallu les nettoyer avant toute insertion.",
          },
          {
            fort: "Un faux négatif massif.",
            texte:
              "Une requête d'analyse renvoyait zéro partout, laissant croire que des champs étaient absents de toute la base. En réalité, le chemin d'accès au champ était faux. Sur des données opaques, il faut inspecter un enregistrement réel avant de conclure, jamais se fier à une recherche par nom de champ.",
          },
          {
            fort: "Des requêtes qui dépassent le délai.",
            texte:
              "Filtrer les 16 402 lignes de la table tampon sur des champs profondément imbriqués dépassait le temps maximal autorisé. La parade : filtrer d'abord sur un critère simple et indexé, trier ensuite — plutôt que demander à la base un tri coûteux sur l'ensemble.",
          },
          {
            fort: "Un retour en arrière silencieux.",
            texte:
              "Une procédure stockée centrale, redéfinie intégralement à chaque évolution, est un jour repartie d'une version trop ancienne : elle a annulé sans bruit des changements intermédiaires. J'ai réconcilié une version de référence unique et ajouté un contrôle préalable des colonnes attendues.",
          },
          {
            fort: "Un quota de stockage à 103 %.",
            texte:
              "Le volume de documents dépassait le quota, avec une taille moyenne par archive bien supérieure à ce que le métier laissait attendre. Plutôt que réagir à l'aveugle, j'ai écrit un script d'échantillonnage pour chercher des doublons internes aux archives avant de décider quoi que ce soit. Mesurer avant d'agir.",
          },
        ],
      },

      { type: "titre", texte: "Ce que j'en retiens" },
      {
        type: "para",
        texte:
          "Le principe directeur de cette migration tient en une phrase : **ne jamais perdre la donnée d'origine, et rendre chaque étape rejouable**. La table tampon et l'idempotence sont les deux mécanismes qui ont transformé un chantier risqué en opération contrôlable. Une opération qu'on peut rejouer vaut mieux qu'une opération qu'on croit parfaite.",
      },
      {
        type: "para",
        texte:
          "La tolérance a eu un coût, que j'assume : une part de nettoyage manuel est restée nécessaire, et la question du coût de stockage est restée ouverte — je ne l'ai pas tranchée seul.",
      },
    ],
  },

  // ==========================================================================
  //  02 — La passerelle entre deux CRM
  // ==========================================================================
  {
    slug: "passerelle-crm",
    numero: "02",
    titre: "La passerelle entre deux CRM",
    tag: "Projet phare — second volet",
    periode: "Mi-avril à juin 2026",
    accroche: "2 bases de production synchronisées",
    resume:
      "Faire dialoguer en continu deux CRM vivants, sur deux bases physiquement séparées, sans jamais créer un doublon ni perdre un dossier — et fermer au passage une fuite d'isolation entre clients.",
    sousTitre:
      "Synchroniser deux bases de production dans les deux sens, et cloisonner qui voit quoi au niveau de la base elle-même.",
    meta: [
      "Projet phare — **second volet sur deux**",
      "**Mi-avril à juin 2026**",
      "Rôle : **contrats d'échange, sécurité, mise en production**",
    ],
    stack: ["PostgreSQL", "Row-Level Security", "Edge Functions", "Deno", "SQL", "TypeScript"],
    chiffres: [
      { valeur: "308", label: "dossiers poussés, 0 échec" },
      { valeur: "770", label: "contrôlés en miroir" },
      { valeur: "38", label: "comptes réconciliés" },
      { valeur: "1", label: "fuite d'isolation fermée" },
    ],
    contenu: [
      { type: "titre", texte: "Le problème" },
      {
        type: "para",
        texte:
          "Le CRM d'audit ne vit pas seul. Un CRM commercial d'une marque sœur partage une grande partie du même modèle métier et doit échanger des dossiers avec lui, en continu : le commercial qualifie un dossier puis l'envoie en audit ; l'audit réalise son travail et renvoie le résultat ; et les changements de statut doivent rester visibles des deux côtés.",
      },
      {
        type: "para",
        texte:
          "Les deux CRM reposent sur **deux bases PostgreSQL physiquement séparées** — ce qui constitue déjà un premier niveau de cloisonnement, mais interdit toute jointure. L'échange devait donc passer par des appels réseau entre deux systèmes indépendants, avec tout ce que cela implique de contrats d'interface et de gestion d'erreurs.",
      },

      { type: "titre", texte: "Les contrats de payload" },
      {
        type: "para",
        texte:
          "J'ai conçu, de chaque côté, un ensemble de fonctions serveur d'intégration : des points d'entrée qui reçoivent les dossiers, les résultats d'audit et les mises à jour de statut, et des fonctions sortantes qui notifient l'autre système. Le travail de fond a été de définir les **contrats de payload** — la forme exacte de ce qui part, de ce qui est accepté, et ce qui se passe en cas de conflit.",
      },
      {
        type: "para",
        texte:
          "Car le plus délicat n'est pas d'envoyer la donnée. C'est de décider **ce qui gagne** quand les deux systèmes modifient la même chose au même moment. Chaque échange est idempotent par une clé stable : un message rejoué met à jour l'existant au lieu de le dupliquer. Pour les entités enfant — biens, documents, notes — j'ai adopté une logique « insérer si absent », qui préserve les éditions faites côté destinataire.",
      },

      { type: "titre", texte: "Le lot qu'on ne pouvait pas rater" },
      {
        type: "para",
        texte:
          "Un second lot de dossiers, tertiaire celui-là, présentait un risque maximal : au moment de le traiter, **le client n'avait plus accès à l'ancien outil**. Les quelque 313 dossiers concernés n'existaient plus que dans la table tampon. Toute erreur signifiait une perte définitive.",
      },
      {
        type: "para",
        texte:
          "J'ai figé et sauvegardé la donnée brute, puis construit un traitement reconnaissant cette structure particulière. Surtout, il a fallu établir une règle métier de répartition en trois groupes, selon que le dossier devait être créé d'un côté, exister des deux, ou n'aller que vers l'autre système.",
      },
      {
        type: "liste",
        items: [
          {
            fort: "Jamais présent côté audit.",
            texte: "Pont direct vers le CRM commercial, sans création côté audit.",
          },
          {
            fort: "Statut réel à refléter des deux côtés.",
            texte: "Création côté audit, puis synchronisation vers le commercial.",
          },
          {
            fort: "Clôturé d'un côté, actif de l'autre.",
            texte:
              "Conservation du statut métier réel côté commercial — plutôt qu'un statut uniforme qui aurait été faux.",
          },
        ],
      },
      {
        type: "para",
        texte:
          "Le CRM d'audit servait ici de **seule autorité de traduction des statuts**, l'autre système ne sachant pas interpréter le format de l'ancien outil. Cette discrimination par groupes a évité l'erreur la plus grossière — faire atterrir des centaines de dossiers dans un statut faux, sur une source irrécupérable. Bilan : **308 dossiers poussés sans un seul échec**, 136 créés côté audit, les enregistrements de test correctement exclus, et le résultat vérifié des deux côtés.",
      },
      {
        type: "citation",
        texte:
          "La valeur d'une migration ne se mesure pas à sa rapidité mais à la preuve qu'aucune donnée n'a été perdue.",
      },

      { type: "titre", texte: "Prouver que les deux bases disent la même chose" },
      {
        type: "para",
        texte:
          "Affirmer que deux bases sont « en miroir » ne vaut rien sans preuve. J'ai donc systématisé des **contrôles d'intégrité bilatéraux** : pour chaque lot, vérifier que chaque dossier d'un côté a son correspondant de l'autre — **et l'inverse**, afin de détecter aussi bien les manques que les orphelins. Ces grilles (totaux par unité, par statut, absence de doublons) étaient jouées des deux côtés puis comparées. Environ **770 dossiers** ont été contrôlés ainsi, sans perte connue, et un lot de 204 dossiers poussé sans un doublon.",
      },
      {
        type: "para",
        texte:
          "Un incident a montré que la qualité des **données de référence** est aussi critique que celle des dossiers. Des comptes d'utilisateurs avaient été rattachés à la mauvaise unité lors de leur migration ; conséquence, la règle de sécurité — qui compare l'unité de l'utilisateur à celle du dossier — les rendait aveugles à leurs propres dossiers. Le réflexe naturel aurait été d'accuser la règle. En réalité la règle était juste, c'était **la donnée qui était fausse**. J'ai repointé 38 comptes vers leur véritable unité et corrigé le script fautif.",
      },

      { type: "titre", texte: "Cloisonner dans la base, pas dans l'écran" },
      {
        type: "para",
        texte:
          "Un CRM multi-acteurs ne doit jamais laisser une agence voir les dossiers d'une autre. J'ai construit ce cloisonnement sur la **Row-Level Security** de PostgreSQL : la règle d'accès vit dans la base, au plus près de la donnée, et s'applique même à une requête directe — un bug d'interface ne peut pas la contourner.",
      },
      {
        type: "para",
        texte:
          "La difficulté tenait aux **rôles transverses** : un planificateur, un inspecteur ou un thermicien doivent légitimement voir des dossiers hors de leur propre unité. Je les ai traités par des fonctions d'aide déterminant l'appartenance à un rôle ou l'assignation à un dossier, plutôt que par des exceptions codées en dur — pour garder des politiques lisibles. Au-dessus, une table de permissions par rôle pilote finement les droits, de l'ordre de **soixante droits distincts**.",
      },

      { type: "titre", texte: "L'incident le plus marquant du stage" },
      {
        type: "para",
        texte:
          "Une fuite d'isolation a été détectée : pendant un temps, **n'importe quel compte pouvait voir les dossiers de toutes les agences**. La cause était subtile. Une migration avait recréé une vue enrichie sans réappliquer l'option qui force la vue à s'exécuter avec les droits de l'appelant. Privée de cette option, la vue tournait avec les droits de son propriétaire et **court-circuitait toute la sécurité au niveau ligne**.",
      },
      {
        type: "para",
        texte:
          "Durcir la politique de la table ne suffisait pas : l'interface lit la vue, pas la table. J'ai corrigé en deux temps — durcissement de la politique, puis réassertion de l'option sur les vues concernées — avant de mener un audit complet de la base. Cet audit a révélé une **seconde faille** : une table de prospects contenant des données personnelles dont la sécurité au niveau ligne était purement et simplement désactivée. Fermée en urgence.",
      },
      {
        type: "para",
        texte:
          "J'en ai tiré une règle d'or : toute migration touchant une vue enrichie doit **impérativement** se terminer par la réassertion de cette option. Et un enseignement plus large : en sécurité des données, le maillon faible n'est pas toujours la règle qu'on écrit, mais l'effet de bord d'une opération en apparence anodine.",
      },

      { type: "titre", texte: "Livrer sur deux bases vivantes à la fois" },
      {
        type: "liste",
        items: [
          {
            fort: "Migrations de schéma en trois temps.",
            texte:
              "Additif d'abord — la nouvelle colonne est nullable, l'ancienne et la nouvelle structure coexistent. Double écriture ensuite, le temps de vérifier sur des données réelles. Nettoyage en dernier, jamais avant. Chaque migration précédée d'une sauvegarde des deux bases, et jouée manuellement après relecture : c'est lent, mais ça force la vigilance.",
          },
          {
            fort: "Un piège d'authentification serveur-à-serveur.",
            texte:
              "Les fonctions d'intégration s'authentifient par secret partagé, pas par jeton utilisateur. Un redéploiement sans l'option qui désactive la vérification du jeton réactivait une barrière et faisait échouer tous les appels **avant même** l'exécution du code. Un refus sur un appel par secret signale presque toujours une option de déploiement oubliée, pas un mauvais secret.",
          },
          {
            fort: "Activation progressive.",
            texte:
              "Jamais de bascule générale d'un coup sur les changements risqués : un utilisateur de test, puis une agence, puis l'ensemble. On détecte le problème sur un périmètre réduit avant qu'il ne touche deux cents personnes.",
          },
          {
            fort: "Une trentaine de notes de coordination.",
            texte:
              "Chaque changement touchant les deux systèmes faisait l'objet d'une note écrite servant de contrat partagé : quelle unité pré-créer de l'autre côté, quelle fiche autoriser, quel correctif redéployer et quand. Rétrospectivement, une forme légère de gestion de configuration distribuée.",
          },
        ],
      },
      {
        type: "para",
        texte:
          "Une limite que j'assume : il n'existait **pas d'alerte automatique** sur la cohérence des données. Le suivi reposait sur des contrôles manuels après opération et sur le journal d'audit en base. La vigilance humaine restait indispensable.",
      },
    ],
  },

  // ==========================================================================
  //  03 — Le moteur de recherche de profils
  // ==========================================================================
  {
    slug: "recherche-profils",
    numero: "03",
    titre: "Le moteur de recherche de profils",
    tag: "Mission en appui — prise en main",
    periode: "Début mars 2026",
    accroche: "Chercher par intention",
    resume:
      "Un moteur qui retrouve des profils professionnels à partir d'une question posée en français, dans une grande base d'anciens élèves. Mon premier contact avec les bases vectorielles.",
    sousTitre:
      "Rendre une base de profils interrogeable par le sens plutôt que par mots-clés, et mesurer ce qu'elle vaut vraiment.",
    meta: [
      "Mission en appui — **premier projet du stage**",
      "**Début mars 2026**",
      "Rôle : **persistance et qualité des données**",
    ],
    stack: ["Python", "Base vectorielle", "Embeddings", "Analyse de données"],
    contenu: [
      { type: "titre", texte: "Le besoin" },
      {
        type: "para",
        texte:
          "Mon tout premier projet du stage. À partir d'une question posée en langage naturel, le système devait retrouver les profils les plus pertinents au sein d'une grande base d'anciens élèves. C'est par nature un projet d'administration de données : la valeur ne vient pas de l'interface, mais de la chaîne de traitement qui transforme des profils bruts en **données interrogeables**.",
      },

      { type: "titre", texte: "Ce que j'ai fait" },
      {
        type: "para",
        texte:
          "Le moteur préexistait à mon arrivée. Ma contribution a porté sur deux aspects, tous deux centrés sur la donnée. D'une part, j'ai intégré une **couche de persistance** pour stocker et recharger les jeux de données préparés, avec un mécanisme de cache — sans quoi chaque exécution repartait de zéro.",
      },
      {
        type: "para",
        texte:
          "D'autre part, et c'est le plus formateur, j'ai mené un travail d'**exploration et de qualité** : analyse statistique du jeu de données — répartition par pays, par secteur, taux de remplissage des champs, doublons, profils sans expérience exploitable — et production d'une documentation technique. Ce travail a mis au jour les forces et les faiblesses réelles du jeu, ce qui est indispensable pour juger si les réponses du moteur sont bonnes ou seulement plausibles.",
      },

      { type: "titre", texte: "Ce que j'y ai appris" },
      {
        type: "para",
        texte:
          "Du point de vue de l'architecture des données, ce pipeline est un bon exemple de chaîne moderne : collecte depuis des sources externes, structuration en tables exploitables, enrichissement automatique de métadonnées, génération de **représentations vectorielles**, puis indexation dans une base vectorielle permettant une recherche par similarité plutôt que par mots-clés exacts.",
      },
      {
        type: "para",
        texte:
          "J'y ai découvert concrètement les notions d'embedding, de base vectorielle et de recherche par intention — qui prolongent vers le non structuré les compétences classiques de gestion de données.",
      },
      {
        type: "para",
        texte:
          "Ma contribution y fut **ciblée**, et je l'assume : c'était un projet de prise en main, en tout début de stage. Mais il a posé un cadre mental que j'ai retrouvé dans tous les chantiers suivants — penser une donnée comme le produit d'un pipeline traçable.",
      },
    ],
  },

  // ==========================================================================
  //  04 — Du prototype à la plateforme
  // ==========================================================================
  {
    slug: "prototype-plateforme",
    numero: "04",
    titre: "Du prototype à la plateforme",
    tag: "Mission en appui",
    periode: "Mi-mars 2026",
    accroche: "Extraction documentaire",
    resume:
      "Un script de traitement documentaire, efficace mais jetable, transformé en application multi-utilisateurs avec base, comptes, rôles et historique — sans perdre le cœur métier existant.",
    sousTitre:
      "Faire passer une donnée de l'état « prototype » à l'état « produit » : base relationnelle, stockage, sécurité, historique.",
    meta: [
      "Mission en appui — **montage de dossiers de financement**",
      "**Mi-mars 2026**",
      "Rôle : **architecture de données et migration**",
    ],
    stack: ["React", "Supabase", "PostgreSQL", "Python", "Row-Level Security"],
    contenu: [
      { type: "titre", texte: "Le besoin" },
      {
        type: "para",
        texte:
          "Cet outil sert le montage de dossiers de financement pour un opérateur de rénovation énergétique. Avant mon intervention, il existait sous la forme d'une **application prototype monolithique** : efficace pour un traitement ponctuel, inadaptée à un usage réel. Pas d'authentification, pas de rôles, pas de persistance des dossiers, aucune collaboration possible.",
      },

      { type: "titre", texte: "Ce que j'ai fait" },
      {
        type: "para",
        texte:
          "J'ai mené la migration vers une architecture web complète — interface React et base de données — **tout en conservant le cœur métier Python existant**, que j'ai encapsulé derrière une API plutôt que de le réécrire. Côté données, j'ai conçu le modèle (clients, dossiers, documents, événements, notifications), mis en place le stockage des fichiers entrants et sortants, et défini la sécurité au niveau ligne.",
      },

      { type: "titre", texte: "Le pipeline d'extraction" },
      {
        type: "para",
        texte:
          "Le cœur métier que j'ai intégré mérite d'être décrit, car c'est un bel exemple de transformation de données hétérogènes en information structurée. En entrée, des documents très variés : certificats énergétiques avant et après travaux, captures d'un logiciel de calcul thermique, factures, pièces d'identité, photos de chantier.",
      },
      {
        type: "para",
        texte:
          "En sortie, les **pièces administratives normalisées** du dossier de financement, organisées en une arborescence standardisée et exportées prêtes à l'emploi. Entre les deux, le pipeline extrait les données structurées au moyen de modèles de langage, calcule des grandeurs techniques — surfaces, transmittances thermiques, énergie économisée, coordonnées géographiques par géocodage de l'adresse — et adapte les pièces produites à l'organisme concerné, chacun ayant ses propres modèles.",
      },
      {
        type: "para",
        texte:
          "La robustesse reposait sur une **stratégie de repli en cascade** entre plusieurs fournisseurs de modèles : aucun n'étant fiable à 100 % sur la lecture de documents, l'échec de l'un déclenchait le recours à un autre. Le taux de réussite global s'en trouvait sensiblement amélioré.",
      },

      { type: "titre", texte: "Ce qui était difficile" },
      {
        type: "para",
        texte:
          "La principale difficulté a été la **cohabitation** entre un code pensé pour des fichiers locaux et un flux passant désormais par un stockage distant — deux façons de désigner un fichier qui ne se recouvrent pas. S'y est ajoutée la gestion des caractères accentués dans les noms de fichiers, source récurrente d'erreurs côté stockage.",
      },
      {
        type: "para",
        texte:
          "Cette mission illustre une compétence clé du parcours : faire passer une donnée d'un état **prototype** — fichiers locaux, traitement jetable — à un état **produit** : base relationnelle, stockage distant, sécurité, historique.",
      },
    ],
  },

  // ==========================================================================
  //  05 — Des appels aux données
  // ==========================================================================
  {
    slug: "appels-donnees",
    numero: "05",
    titre: "Des appels aux données",
    tag: "Mission en appui — prototype",
    periode: "Mi-mars 2026",
    accroche: "L'audio devient des champs",
    resume:
      "Transformer un enregistrement d'appel commercial en informations structurées réutilisables — avec un mode où l'utilisateur décrit en français ce qu'il veut extraire, et le système fabrique lui-même la liste des champs.",
    sousTitre:
      "Passer d'une donnée non structurée — la voix — à des champs exploitables dans un CRM.",
    meta: [
      "Mission en appui — **preuve de concept**",
      "**Mi-mars 2026**",
      "Rôle : **extraction, persistance, confidentialité**",
    ],
    stack: ["Python", "Transcription", "Modèles de langage", "Supabase"],
    contenu: [
      { type: "titre", texte: "Le besoin" },
      {
        type: "para",
        texte:
          "À partir d'enregistrements d'appels commerciaux, produire des informations structurées et réutilisables dans un CRM : objet de l'appel, objection rencontrée, prochaine étape. C'est un cas typique de transformation d'une donnée **non structurée** en données exploitables.",
      },

      { type: "titre", texte: "Ce que j'ai fait" },
      {
        type: "para",
        texte:
          "Au-delà de la transcription, j'ai développé un mode d'extraction que j'appelle « intelligent » : l'utilisateur **décrit en langage naturel** ce qu'il souhaite obtenir, et le système génère lui-même la liste des champs à extraire avant de la remplir. Il n'y a donc pas de schéma figé à maintenir dans le code pour chaque nouveau besoin.",
      },
      {
        type: "para",
        texte:
          "J'ai également intégré la persistance en base des extractions, avec un **choix de confidentialité assumé** : ne stocker que le nom du fichier audio, jamais son contenu. Un appel commercial contient des données personnelles, et rien n'obligeait à les conserver pour rendre le service. Une interface de test complétait l'ensemble.",
      },

      { type: "titre", texte: "Le bilan, honnêtement" },
      {
        type: "para",
        texte:
          "Il s'agit d'un **prototype**, et je ne le présente pas autrement. La gestion des traitements longs restait en mémoire — donc perdue au redémarrage — et les temps de traitement, de l'ordre d'une minute par appel, le réservaient à une validation de concept plutôt qu'à un usage quotidien. Ce qui en fait un projet intéressant, c'est la démarche d'extraction pilotée par l'utilisateur, pas sa robustesse.",
      },
    ],
  },

  // ==========================================================================
  //  06 — Le bot de facturation
  // ==========================================================================
  {
    slug: "bot-facturation",
    numero: "06",
    titre: "Le bot de facturation",
    tag: "Mission en appui",
    periode: "Mi-mars à mi-avril 2026",
    accroche: "Facturer par messagerie",
    resume:
      "Un assistant conversationnel qui permet à un indépendant d'émettre ses factures depuis sa messagerie, sans ouvrir un logiciel. Un périmètre modeste, mais maîtrisé de bout en bout.",
    sousTitre:
      "Concevoir un schéma relationnel propre et une sécurité d'accès dès la conception, sur un projet mené de bout en bout.",
    meta: [
      "Mission en appui — **outil pour indépendants**",
      "**Mi-mars à mi-avril 2026**",
      "Rôle : **modélisation, sécurité, mise en production**",
    ],
    stack: ["Supabase", "PostgreSQL", "Row-Level Security", "Railway"],
    contenu: [
      { type: "titre", texte: "Le besoin" },
      {
        type: "para",
        texte:
          "Permettre à un travailleur indépendant d'émettre une facture par simple conversation, depuis une messagerie qu'il utilise déjà — sans installer d'application ni apprendre un logiciel de comptabilité.",
      },

      { type: "titre", texte: "Ce que j'ai fait" },
      {
        type: "para",
        texte:
          "Mon apport a porté sur le volet données : la **modélisation** du schéma, la **sécurité** — cloisonnement par utilisateur au niveau ligne, politiques de stockage, limites de taille et de type de fichier — et la **mise en production**.",
      },
      {
        type: "para",
        texte:
          "Ce sont des projets plus modestes que le chantier principal, et je ne les gonfle pas artificiellement. Leur intérêt est ailleurs : sur un périmètre entièrement sous mon contrôle, ils m'ont exercé à concevoir un schéma propre et une sécurité **dès la conception**, plutôt qu'ajoutée après coup sur un existant — ce qui est exactement l'inverse de ma situation sur le projet phare.",
      },
    ],
  },

  // ==========================================================================
  //  07 — Le bot de notes de frais
  // ==========================================================================
  {
    slug: "bot-notes-de-frais",
    numero: "07",
    titre: "Le bot de notes de frais",
    tag: "Mission en appui",
    periode: "Mi-mars à mi-avril 2026",
    accroche: "Photo du ticket, données classées",
    resume:
      "Le successeur du précédent : on photographie un justificatif, le bot en extrait les données et les classe automatiquement par catégorie de dépense.",
    sousTitre:
      "Numériser un justificatif de dépense et le ranger tout seul, en gardant chaque utilisateur strictement chez lui.",
    meta: [
      "Mission en appui — **outil pour indépendants**",
      "**Mi-mars à mi-avril 2026**",
      "Rôle : **modélisation, extraction, classification**",
    ],
    stack: ["Supabase", "PostgreSQL", "Row-Level Security", "Extraction documentaire", "Railway"],
    contenu: [
      { type: "titre", texte: "Le besoin" },
      {
        type: "para",
        texte:
          "Succédant au bot de facturation, celui-ci s'attaque à l'autre moitié de la comptabilité d'un indépendant : les dépenses. L'utilisateur photographie un ticket ou une facture, le bot en extrait les données et les classe.",
      },

      { type: "titre", texte: "Ce que j'ai fait" },
      {
        type: "para",
        texte:
          "Côté données, j'ai conçu le modèle — profils, fournisseurs, dépenses, liens de partage — et la sécurité associée : cloisonnement par utilisateur, politiques de stockage, contrôle de la taille et du type des fichiers déposés. J'ai aussi structuré la chaîne d'**extraction documentaire** et la **classification automatique** des dépenses par catégorie.",
      },
      {
        type: "para",
        texte:
          "La table des fournisseurs mérite un mot : c'est elle qui fait la différence entre une pile de tickets numérisés et une comptabilité exploitable. Reconnaître qu'un même fournisseur revient d'un ticket à l'autre, c'est ce qui permet ensuite de dire où part l'argent — sans quoi chaque dépense reste un événement isolé.",
      },
    ],
  },

  // ==========================================================================
  //  08 — Le CRM commercial
  // ==========================================================================
  {
    slug: "crm-commercial",
    numero: "08",
    titre: "Le CRM commercial",
    tag: "Mission en appui — livraisons continues",
    periode: "Fin mars à juin 2026",
    accroche: "Traduire la réglementation en code",
    resume:
      "Un moteur de règles qui décide si un bien est éligible à un financement, une modélisation du bâtiment avant et après travaux, et un bug de marge qui n'était pas un bug de calcul.",
    sousTitre:
      "Modéliser un bien, son état projeté et son éligibilité réglementaire — et réconcilier une grandeur définie de trois façons différentes.",
    meta: [
      "Mission en appui — **cycle commercial complet**",
      "**Fin mars à juin 2026**",
      "Rôle : **modélisation et livraisons fonctionnelles**",
    ],
    stack: ["PostgreSQL", "Supabase", "React", "TypeScript"],
    contenu: [
      { type: "titre", texte: "Le besoin" },
      {
        type: "para",
        texte:
          "Ce CRM couvre tout le cycle commercial — clients, affaires, devis, factures — avec une modélisation très riche du bien immobilier et de son éligibilité aux dispositifs de financement. Mes livraisons y étaient pilotées par les retours du client.",
      },

      { type: "titre", texte: "Le moteur de règles d'éligibilité" },
      {
        type: "para",
        texte:
          "Il s'agit de **traduire en code une partie de la réglementation**. Une série de conditions techniques détermine si un bien est éligible à une fiche de financement donnée. Le point intéressant est le compromis : j'ai prévu un mode « souple » où un critère non renseigné produit un **avertissement plutôt qu'un blocage**.",
      },
      {
        type: "para",
        texte:
          "Ce n'est pas de la complaisance envers la réglementation, c'est du réalisme envers la saisie. Un commercial en rendez-vous n'a pas toujours toutes les caractéristiques thermiques sous la main ; bloquer le dossier entier pour un champ manquant garantit surtout qu'on remplira n'importe quoi pour passer.",
      },

      { type: "titre", texte: "L'état actuel et l'état projeté" },
      {
        type: "para",
        texte:
          "Pour un même bâtiment, il faut stocker ses caractéristiques **avant** travaux et leur projection **après** travaux : c'est indispensable pour calculer un gain énergétique. Cela double le nombre de champs du modèle et impose une discipline stricte pour ne jamais confondre les deux états — une confusion silencieuse ici fausse tous les calculs en aval sans lever la moindre erreur.",
      },

      { type: "titre", texte: "Le bug qui n'était pas un bug de calcul" },
      {
        type: "para",
        texte:
          "Un défaut de calcul de marge s'est révélé exemplaire d'un problème d'administration des données plutôt que de programmation : **la même grandeur métier était définie de trois façons différentes dans trois parties du code**.",
      },
      {
        type: "para",
        texte:
          "Le corriger n'a pas consisté à réparer une formule, mais à réconcilier une définition unique et à la rendre cohérente partout. C'est exactement le type de travail qui garantit que les chiffres affichés à l'utilisateur **veulent dire la même chose d'un écran à l'autre** — et sans lequel personne ne peut faire confiance à un tableau de bord.",
      },
    ],
  },

  // ==========================================================================
  //  09 — L'entrepôt de données foncières
  // ==========================================================================
  {
    slug: "donnees-foncieres",
    numero: "09",
    titre: "L'entrepôt de données foncières",
    tag: "Mission en appui — audit de sécurité",
    periode: "Fin mars à juin 2026",
    accroche: "7 sources publiques croisées",
    resume:
      "Un outil qui enrichit des prospects à partir de sept sources publiques pour estimer un potentiel de travaux — et dans lequel j'ai trouvé une table de données personnelles ouverte à tous les utilisateurs.",
    sousTitre:
      "Croiser sept sources publiques pour qualifier un prospect, et auditer la sécurité de la base qui les héberge.",
    meta: [
      "Mission en appui — **prospection et données ouvertes**",
      "**Fin mars à juin 2026**",
      "Rôle : **audit de sécurité des données**",
    ],
    stack: ["PostgreSQL", "Row-Level Security", "Données ouvertes", "Supabase"],
    contenu: [
      { type: "titre", texte: "Le besoin" },
      {
        type: "para",
        texte:
          "Cet outil est un véritable petit **entrepôt de données foncières**. Il enrichit des prospects à partir de sept sources publiques — registres d'entreprises, cadastre, base nationale des bâtiments, données de valeurs foncières — pour estimer un potentiel de travaux. Il se situe tout en amont du tunnel : il qualifie des prospects avant de les pousser vers le CRM commercial.",
      },
      {
        type: "para",
        texte:
          "C'est un cas d'école de modélisation de données externes hétérogènes : sept sources, sept formats, sept fréquences de mise à jour, et une seule question à laquelle répondre — ce bien vaut-il un appel.",
      },

      { type: "titre", texte: "L'audit de sécurité" },
      {
        type: "para",
        texte:
          "Ma contribution principale a été un **audit de sécurité des données**. J'ai analysé le modèle et constaté deux problèmes de fond.",
      },
      {
        type: "liste",
        items: [
          {
            fort: "Des politiques de sécurité non versionnées.",
            texte:
              "Les règles d'accès existaient dans la base mais pas dans le dépôt de code. Personne ne pouvait donc dire quand une règle avait changé, ni pourquoi, ni la restaurer après une migration malheureuse — c'est précisément le scénario qui a causé la fuite d'isolation sur le projet phare.",
          },
          {
            fort: "Une table de prospects sans propriétaire.",
            texte:
              "La table ne portait aucun identifiant de propriétaire, ce qui rendait tout cloisonnement impossible à écrire : un risque de fuite de données personnelles entre utilisateurs.",
          },
        ],
      },
      {
        type: "para",
        texte:
          "J'ai produit une **matrice de recommandations** pour y remédier. Ce travail d'audit a eu un effet secondaire précieux : il m'a servi de source de bonnes pratiques, que j'ai ensuite réutilisées sur le CRM d'audit — et c'est en partie ce qui m'a permis de reconnaître la fuite d'isolation quand elle est survenue.",
      },
      {
        type: "para",
        texte:
          "Ces missions montrent que l'administration des données ne se limite pas à migrer : elle inclut **auditer la sécurité d'un système existant**, modéliser des données externes hétérogènes, et garantir la cohérence des règles de calcul. Elles ont aussi mis en évidence un atout de cet écosystème — la réutilisation d'un projet à l'autre — qui permet de capitaliser les bonnes pratiques, mais demande de la rigueur pour ne pas propager les mêmes faiblesses.",
      },
    ],
  },
];

export const experiences: Experience[] = [
  {
    slug: "airbay-data",
    entreprise: "Airbay Data",
    tag: "Stage de fin d'études — 14 semaines",
    periode: "Du 3 mars au 6 juin 2026",
    resume:
      "Référent du volet données sur tout un écosystème de logiciels métier, dans la rénovation énergétique. **Neuf chantiers en quatorze semaines** : la reprise d'un historique de seize mille dossiers, une passerelle entre deux bases de production, de l'extraction documentaire, des audits de sécurité. Le tout sur des bases utilisées tous les jours, sans fenêtre d'arrêt.",
    faits: [
      { label: "Dossiers repris d'un ancien outil", valeur: "16 000" },
      { label: "Pièces justificatives migrées", valeur: "103 Go" },
      { label: "Utilisateurs en production", valeur: "~200" },
      { label: "Chantiers menés", valeur: "9" },
    ],
    sousTitre:
      "Administrer, migrer et sécuriser les données d'un écosystème de logiciels métier utilisés tous les jours. Neuf chantiers, du plus lourd au plus modeste.",
    meta: [
      "Stage de fin d'études — **14 semaines**",
      "Du **3 mars** au **6 juin 2026**",
      "Rôle : **référent données et intégration**",
    ],
    stack: ["PostgreSQL", "Supabase", "Row-Level Security", "Edge Functions", "SQL", "TypeScript"],
    chiffres: [
      { valeur: "16 402", label: "dossiers migrés" },
      { valeur: "103 Go", label: "de pièces reprises" },
      { valeur: "~200", label: "utilisateurs impactés" },
      { valeur: "9", label: "chantiers menés" },
    ],
    contenu: [
      { type: "titre", texte: "Le contexte" },
      {
        type: "para",
        texte:
          "L'entreprise édite des logiciels de gestion de la relation client sur mesure pour des sociétés du secteur de la **rénovation énergétique**. Elle n'exploite pas elle-même les dossiers de travaux : elle fabrique les outils qui permettent à ses clients de le faire, déployés et maintenus dans la durée. Plusieurs produits coexistent, partagent un socle technique commun, servent des métiers différents, et doivent se parler.",
      },
      {
        type: "para",
        texte:
          "Chacun est une **base de production vivante**. Le CRM principal sur lequel j'ai travaillé est utilisé au quotidien par environ deux cents personnes, réparties sur six métiers aux besoins très différents. Toute opération sur ses données avait un effet direct et immédiat sur le travail de ces utilisateurs — il n'y avait pas d'environnement de répétition.",
      },

      { type: "titre", texte: "Pourquoi ce métier complique la base" },
      {
        type: "para",
        texte:
          "Ces logiciels servent le montage de dossiers de travaux financés par le dispositif des **Certificats d'Économie d'Énergie**. Pour chaque opération — isoler des combles, installer une pompe à chaleur — il faut constituer un dossier conforme à une fiche standardisée, et chaque fiche définit ses propres critères techniques d'éligibilité et ses propres pièces justificatives.",
      },
      {
        type: "para",
        texte:
          "Cette contrainte réglementaire descend directement dans le modèle de données, et c'est ce qui rend le sujet intéressant :",
      },
      {
        type: "liste",
        items: [
          {
            fort: "Un état technique très détaillé.",
            texte:
              "Type de chauffage, émetteurs, production d'eau chaude, parois, menuiseries, surfaces — tout cela conditionne l'éligibilité et doit donc être modélisé finement, pas résumé.",
          },
          {
            fort: "Plusieurs fiches pour un même dossier.",
            texte:
              "Un dossier peut relever de plusieurs fiches simultanément, ce qui interdit de réduire la fiche à un simple champ. Une évolution du modèle a consisté à la faire passer d'une valeur unique à une liste.",
          },
          {
            fort: "Des calculs normés.",
            texte:
              "Les volumes d'énergie économisée dépendent de paramètres réglementaires — zone climatique, situation du ménage — qui doivent être stockés et rester justes dans le temps.",
          },
          {
            fort: "Une chaîne à cinq acteurs.",
            texte:
              "Apporteur d'affaires, commercial, planificateur, inspecteur ou thermicien, administration : un même dossier passe entre leurs mains successives, et **chacun ne doit voir que son périmètre**.",
          },
        ],
      },
      {
        type: "para",
        texte:
          "Et la règle simple — « chacun ne voit que les dossiers de son agence » — ne suffit pas : un planificateur ou un inspecteur doit légitimement déborder ce cloisonnement. Cette tension entre cloisonnement par défaut et dérogations métier est exactement ce que la sécurité au niveau de la base a dû exprimer.",
      },

      { type: "titre", texte: "Ma place exacte" },
      {
        type: "para",
        texte:
          "Je n'ai pas construit ces produits depuis une page blanche, et je préfère le dire clairement : le socle applicatif — interface, authentification, écrans de saisie, navigation — avait été conçu par un développeur de l'équipe avant mon arrivée, et le client validait les besoins métier.",
      },
      {
        type: "para",
        texte:
          "J'ai été intégré comme **référent du volet données et intégration**. Le modèle, les migrations, l'intégration entre systèmes, la qualité, la sécurité, et surtout l'**exécution en production**, relevaient de ma responsabilité. J'ai travaillé en grande autonomie sur ce périmètre.",
      },

      { type: "titre", texte: "Trois principes de méthode" },
      {
        type: "liste",
        items: [
          {
            fort: "Sur une base vivante, avancer par étapes.",
            texte:
              "Jamais de migration de schéma sans sauvegarde préalable et sans stratégie en plusieurs temps : d'abord additive — ajouter sans casser l'existant — puis en double écriture, et seulement ensuite la suppression de l'ancien dispositif, une fois la cohabitation validée.",
          },
          {
            fort: "Exécuter à la main, et le revendiquer.",
            texte:
              "Les migrations étaient jouées une par une dans l'éditeur de la base de production, après relecture. Ce choix volontairement artisanal force la vigilance sur une base partagée — au prix d'une industrialisation incomplète que j'assume et que je critique plus bas.",
          },
          {
            fort: "Tout doit être vérifiable.",
            texte:
              "Une donnée migrée ou synchronisée n'a de valeur que si l'on peut **prouver** son intégrité. Chaque traitement était donc accompagné de comptages, de requêtes de cohérence, et de contrôles miroir bilatéraux lorsque deux systèmes devaient refléter la même réalité.",
          },
        ],
      },

      { type: "titre", texte: "Ce que j'en retiens" },
      {
        type: "para",
        texte:
          "Sur une base de production, la question n'est jamais « est-ce que mon script marche » mais **« qu'est-ce qui se passe s'il s'arrête au milieu »**. J'ai appris à écrire des opérations qu'on peut relancer sans dégât, à vérifier avant d'écrire plutôt qu'à réparer après, et à accepter qu'une donnée imparfaite entre quand même — à condition de la marquer comme telle.",
      },
      {
        type: "para",
        texte:
          "Chaque incident m'a laissé un réflexe de diagnostic réutilisable : vérifier la donnée avant d'accuser le code, inspecter un enregistrement réel avant de conclure, suspecter l'effet de bord d'une opération structurelle. Cette capacité à isoler une cause sur un système complexe est ce que je retiens de plus précieux de ces trois mois.",
      },
      {
        type: "para",
        texte:
          "Une limite, enfin, que je dois reconnaître. Appliquée manuellement, ma discipline de migration ne maintenait pas d'**état fiable de ce qui était réellement passé en base**. J'ai découvert sur certaines bases héritées des migrations partiellement appliquées — la structure passée, mais une contrainte oubliée — produisant des bugs qui ressemblaient à des erreurs de code alors qu'ils venaient du schéma. Un véritable gestionnaire de migrations versionné est la première amélioration à apporter.",
      },
      {
        type: "para",
        texte:
          "Il manquait aussi une **alerte automatique sur la cohérence des données** : le suivi reposait sur des contrôles manuels après opération. La vigilance humaine restait indispensable, ce qui n'est pas une garantie qui passe à l'échelle.",
      },
    ],
    projets: projetsStage,
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

/** Un chantier précis d'une expérience, pour /experiences/<slug>/<projet>. */
export function getProjetStage(slugExperience: string, slugProjet: string) {
  const xp = getExperience(slugExperience);
  if (!xp?.projets) return undefined;

  const i = xp.projets.findIndex((p) => p.slug === slugProjet);
  if (i === -1) return undefined;

  // On renvoie aussi les voisins : la fiche se termine par « chantier suivant ».
  return {
    xp,
    projet: xp.projets[i],
    precedent: xp.projets[i - 1],
    suivant: xp.projets[i + 1],
  };
}

/** « https://www.the-circle.pro » → « the-circle.pro » */
export function domaine(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}
