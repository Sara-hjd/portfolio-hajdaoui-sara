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
    title: 'Stage — Intelligence Artificielle',
    company: 'Sanlam',
    location: null,
    startDate: ' juin 2026',
    endDate: ' août 2026',
    current: false,
    shortDescription: 'Stage voila  en Intelligence Artificielle. Projet réalisé en équipe, avec encadrement professionnel.',
    missions: [
      'Classification automatique de documents (ResNet18, Qwen, Python, PyTorch, OCR)',
      'Détection et analyse de dommages (Qwen, OCR, Python, traitement de documents/images)',
      'Développement de scripts Python',
      'Travail sur les pipelines IA',
      'Collecte et préparation de données',
      'Scraping',
      'Traitement de documents/images',
      'Intégration de différents composants techniques',
      'Documentation technique',
    ],
    technologies: [
      'Python',
      'PyTorch',
      'ResNet18',
      'Qwen',
      'OCR',
      'Tesseract',
      'YOLO',
      'FastAPI',
      'MySQL',
      'React',
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
