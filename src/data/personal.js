/**
 * personal.js
 * -----------
 * Source unique de vérité pour les informations personnelles.
 *
 * MODIFIER CE FICHIER pour mettre à jour :
 * - le nom, le titre, la bio
 * - l'email, GitHub, LinkedIn
 * - le statut de recherche PFE
 *
 * Aucun composant React ne doit contenir ces informations en dur.
 */

export const personal = {
  // --- Identité ---
  name: 'HAJDAOUI Sara',
  firstName: 'Sara',
  title: 'Étudiante ingénieure en informatique | IA, Machine Learning & Data',

  // --- Bio courte (section Hero) ---
  // 1 à 2 phrases maximum. Affichée directement sous le titre.
  shortBio: "Étudiante ingénieure en informatique, spécialisée en Intelligence Artificielle & Data à l'EMSI. Je conçois et développe des solutions combinant Intelligence Artificielle, Machine Learning, développement frontend et backend, développement logiciel et traitement des données, avec une expérience pratique en scraping, pipelines IA et intégration de modèles. Je recherche un projet de fin d'études pour 2027 dans les domaines de l'IA, du Machine Learning ou de la Data.",

  // --- Bio longue (section About) ---
  // Peut contenir plusieurs paragraphes sous forme de tableau de strings.
  // Chaque string = un paragraphe.
  longBio: [
    "Mon parcours en informatique m'a progressivement amenée à explorer différents aspects du développement et des technologies numériques. Après une troisième année principalement orientée développement, durant laquelle j'ai eu l'occasion de réaliser plusieurs projets, j'ai découvert en quatrième année un autre aspect de l'informatique à travers l'Intelligence Artificielle et la Data.",
    "Ce qui me plaît particulièrement dans ce domaine est sa diversité : comprendre un problème, poser les bonnes questions, rechercher différentes approches, expérimenter et construire une solution concrète. Je suis naturellement curieuse et j'aime apprendre de nouvelles technologies en comprenant d'abord leur fonctionnement, puis en les mettant en pratique.",
    "Je me définis aujourd'hui comme un profil polyvalent et adaptable, avec un intérêt pour le développement, l'IA et la Data. J'apprécie également le travail en équipe, où les échanges permettent de confronter les idées et d'explorer différentes solutions.",
    "Mon objectif pour la suite est de passer progressivement de l'apprentissage académique à des problématiques professionnelles concrètes, à travers un projet de fin d'études qui me permettra à la fois d'apprendre, de contribuer et de mettre mes compétences en pratique.",
  ],

  // --- Contact ---
  email: 'hajdaouisara0@gmail.com',
  github: 'https://github.com/Sara-hjd',
  linkedin: null, // [À COMPLÉTER — URL LinkedIn]

  // --- Photo ---
  // Fichier à déposer dans /public/ lorsqu'il est disponible
  // Mettre à null pour masquer la photo
  photoUrl: '/photo-sara.jpeg',

  // --- CV ---
  // Fichier à déposer dans /public/cv.pdf lorsqu'il sera finalisé
  // Mettre à null pour masquer le bouton téléchargement
  cvPath: null, // '/cv.pdf'

  // --- Recherche PFE ---
  // Ne pas afficher comme "Open to Work" générique
  // Ces données sont utilisées pour une mention précise dans le Hero/About
  seekingPFE: true,
  pfeYear: 2027,
  pfeNote: "En préparation d'un PFE 2027 orienté IA / Machine Learning / Data",

  // --- Situation actuelle ---
  currentYear: '4e année',
  nextYear: '5e année (septembre 2026)',
  status: 'PFA en cours chez Sanlam',

  // --- Langues (optionnel — peut être affiché dans About ou Skills) ---
  // [À COMPLÉTER si tu veux les afficher]
  languages: [
    { name: 'Arabe', level: 'Langue maternelle' },
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Courant' },
  ],

  // --- Centres d'intérêt professionnels (optionnel) ---
  // [À COMPLÉTER si tu veux les afficher]
  interests: [
    'Intelligence Artificielle',
    'Machine Learning',
    'Analyse de données',
    'Développement web',
  ],
}
