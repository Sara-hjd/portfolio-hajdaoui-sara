/**
 * experience.js
 * -------------
 * Source unique de vérité pour les expériences professionnelles.
 *
 * RÈGLES IMPORTANTES :
 * - Ne jamais inventer d'entreprises, de missions, de résultats.
 * - Compléter uniquement avec de vraies informations.
 * - Les items sont affichés dans l'ordre de déclaration (du plus récent au plus ancien recommandé).
 *
 * TYPES :
 * - 'internship'   → Stage
 * - 'pfa'          → Projet de Fin d'Année académique
 * - 'pfe'          → Projet de Fin d'Études
 * - 'job'          → Emploi
 * - 'contract'     → Mission / freelance
 */

export const experiences = [
  {
    id: 'internship-sanlam',
    type: 'internship',
    title: 'Stagiaire - IA & Data / Développement Python',
    company: 'Sanlam Maroc',
    location: 'Casablanca, Maroc',
    startDate: 'Juin 2026',
    endDate: 'Août 2026',
    current: false,
    shortDescription: 'Stage de fin d\'année au sein du département IT Delivery, consacré à l\'automatisation du traitement des documents d\'assurance automobile par l\'IA.',
    missions: [
      'Analyse du besoin et conception de la solution',
      'Constitution, nettoyage et préparation d\'un dataset à partir de données réelles',
      'Développement d\'un modèle de classification d\'images basé sur ResNet-18',
      'Entraînement et évaluation du modèle avec PyTorch',
      'Mise en place d\'heuristiques de traitement d\'images avec OpenCV',
      'Développement d\'une API REST avec FastAPI pour la classification des documents',
      'Intégration de Qwen2.5-VL pour l\'extraction structurée des informations',
      'Développement d\'un pipeline d\'extraction et d\'export des résultats vers Excel',
      'Utilisation de données Oracle et de TOAD pour la collecte des documents',
      'Modélisation UML et conception de l\'architecture du système',
      'Travail en binôme et collaboration avec l\'équipe IT',
    ],
    technologies: [
      'Python',
      'PyTorch',
      'ResNet-18',
      'Qwen2.5-VL',
      'FastAPI',
      'OpenCV',
      'Ollama',
      'Oracle',
      'Git',
      'Pandas',
      'Openpyxl',
    ],
    reportUrl: null,
  },
  {
    id: 'jobgate-um6p',
    type: 'internship',
    title: 'Stagiaire - Développement Web',
    company: 'JOBGATE / UM6P StartGate',
    location: 'Benguerir, Maroc',
    startDate: 'Juillet 2025',
    endDate: 'Septembre 2025',
    current: false,
    shortDescription: 'Stage pratique sur une plateforme web d\'enregistrement et de gestion de vidéos.',
    missions: [
      'Analyse des besoins et modélisation de la solution',
      'Développement frontend avec React.js',
      'Développement backend avec Django REST',
      'Implémentation d\'un module d\'édition vidéo avec FFmpeg',
      'Gestion des vidéos et des métadonnées',
      'Conception de l\'architecture de la base de données',
      'Travail en équipe agile',
    ],
    technologies: [
      'React.js',
      'Django REST',
      'Docker',
      'PostgreSQL',
      'FFmpeg',
      'API REST',
    ],
    reportUrl: null,
  },
  {
    id: 'cbi-casablanca',
    type: 'internship',
    title: 'Stagiaire - Observation',
    company: 'CBI',
    location: 'Casablanca, Maroc',
    startDate: 'Juin 2024',
    endDate: 'Juillet 2024',
    current: false,
    shortDescription: 'Stage d\'observation dans une entreprise informatique.',
    missions: [
      'Découverte des processus de développement logiciel',
      'Apprentissage des outils et méthodes utilisés',
      'Participation à un projet pratique',
      'Mise à jour d\'un site intranet (HTML/CSS)',
      'Initiation à l\'administration système',
      'Travail en équipe IT',
    ],
    technologies: [
      'HTML',
      'CSS',
    ],
    reportUrl: null,
  },
  {
    id: 'intersig-casablanca',
    type: 'internship',
    title: 'Stagiaire - Observation',
    company: 'INTERSIG',
    location: 'Casablanca, Maroc',
    startDate: 'Juin 2023',
    endDate: 'Août 2023',
    current: false,
    shortDescription: 'Stage d\'observation dans une entreprise industrielle.',
    missions: [
      'Découverte des processus de fabrication',
      'Compréhension de l\'organisation des départements',
      'Développement d\'un outil Excel/VBA de suivi de production',
      'Gestion de données techniques',
    ],
    technologies: [
      'Excel',
      'VBA',
    ],
    reportUrl: null,
  },
]
