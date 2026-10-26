/**
 * projects-detailed.js
 * -------------------
 * Données détaillées et bilingues pour les pages de détail de projets.
 * Source unique de vérité pour le contenu des pages /project-detail/:slug
 */

export const projectsDetailed = [
  {
    slug: 'immo-ai',
    number: '01',
    fr: {
      type: 'Académique',
      year: '2025-2026',
      context: 'PFA EMSI (Ingénierie IA & Data)',
      team: 'Projet en binôme (2 personnes)',
      title: 'IMMO-AI : Plateforme d\'Analyse Immobilière Intelligente',
      summary: 'Plateforme d\'analyse immobilière dédiée au marché marocain, avec un pipeline IA multi-agents, une recherche sémantique et des outils d\'estimation.',
      tags: ['IA multi-agents', 'Recherche sémantique', 'Immobilier', 'Maroc'],
      stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Machine Learning (embeddings)', 'Groq (llama-3.3-70b)', 'sentence-transformers', 'Leaflet'],
      problem: 'Au Maroc, les annonces sont dispersées, les prix peu transparents et il manque d\'outils d\'analyse accessibles pour estimer un prix juste, la rentabilité ou les travaux d\'un bien.',
      contribution: 'Conception et développement des agents IA, du backend, du frontend et de la recherche sémantique, ainsi que de la collecte de données par scraping.',
      approach: [
        'Scraping des annonces de mubawab.ma, nettoyage et import dédoublonné en base',
        'Pipeline de 5 agents LLM orchestrés (analyse, estimation, rénovation, rentabilité, quartier) produisant un score global 0-10 et une recommandation (acheter / négocier / surveiller / éviter)',
        'Recherche sémantique en langage naturel (embeddings all-MiniLM-L6-v2, similarité cosinus)',
        'API FastAPI asynchrone (environ 25 endpoints) et interface React (8 pages)'
      ],
      pipeline: 'Annonces → Scraping/nettoyage → PostgreSQL → 5 agents IA → Score global + recommandation → Interface (carte, comparateur, exports)',
      features: [
        'Catalogue avec filtres',
        'Carte interactive avec heatmap des prix au m²',
        'Comparateur de biens',
        'Favoris par session',
        'Chatbot immobilier',
        'Exports Excel et PDF',
        'Calculateurs financiers (rendement, crédit, apport)'
      ],
      results: 'Fonctionnalités du backlog haute priorité réalisées ; analyse complète d\'un bien en environ 40 à 60 secondes ; base de démonstration de 64 biens. Étude entrepreneuriale réalisée (PESTEL, SWOT, Business Model Canvas).',
      status: 'Fonctionnel',
      limitations: [
        'Index sémantique en mémoire',
        'Authentification JWT incomplète',
        'Pas de rate limiting',
        'Source de données unique'
      ],
      perspectives: [
        'Améliorer l\'authentification et la sécurité',
        'Ajouter d\'autres sources de données',
        'Optimiser l\'index sémantique',
        'Ajouter un système de rate limiting'
      ],
      learnings: [
        'Orchestration de multi-agents LLM',
        'Intégration de recherche sémantique',
        'Développement d\'API asynchrone avec FastAPI',
        'Gestion de données immobilières'
      ],
      githubUrl: 'https://github.com/Sara-hjd/immobilier-ai',
      demoUrl: null,
      confidential: false
    },
    en: {
      type: 'Academic',
      year: '2025-2026',
      context: 'PFA EMSI (AI & Data Engineering)',
      team: 'Team project (2 people)',
      title: 'IMMO-AI: Intelligent Real Estate Analysis Platform',
      summary: 'Real estate analysis platform dedicated to the Moroccan market, with a multi-agent AI pipeline, semantic search and estimation tools.',
      tags: ['Multi-agent AI', 'Semantic Search', 'Real Estate', 'Morocco'],
      stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Machine Learning (embeddings)', 'Groq (llama-3.3-70b)', 'sentence-transformers', 'Leaflet'],
      problem: 'In Morocco, listings are scattered, prices are not transparent and there is a lack of accessible analysis tools to estimate a fair price, profitability or renovation costs for a property.',
      contribution: 'Design and development of AI agents, backend, frontend and semantic search, as well as data collection through scraping.',
      approach: [
        'Scraping of mubawab.ma listings, cleaning and deduplicated import into database',
        'Pipeline of 5 orchestrated LLM agents (analysis, estimation, renovation, profitability, neighborhood) producing a global score 0-10 and a recommendation (buy / negotiate / monitor / avoid)',
        'Natural language semantic search (embeddings all-MiniLM-L6-v2, cosine similarity)',
        'Asynchronous FastAPI API (about 25 endpoints) and React interface (8 pages)'
      ],
      pipeline: 'Listings → Scraping/cleaning → PostgreSQL → 5 AI agents → Global score + recommendation → Interface (map, comparator, exports)',
      features: [
        'Catalog with filters',
        'Interactive map with price per m² heatmap',
        'Property comparator',
        'Session-based favorites',
        'Real estate chatbot',
        'Excel and PDF exports',
        'Financial calculators (yield, credit, down payment)'
      ],
      results: 'High-priority backlog features completed; complete analysis of a property in about 40 to 60 seconds; demonstration database of 64 properties. Entrepreneurial study completed (PESTEL, SWOT, Business Model Canvas).',
      status: 'Functional',
      limitations: [
        'In-memory semantic index',
        'Incomplete JWT authentication',
        'No rate limiting',
        'Single data source'
      ],
      perspectives: [
        'Improve authentication and security',
        'Add other data sources',
        'Optimize semantic index',
        'Add rate limiting system'
      ],
      learnings: [
        'LLM multi-agent orchestration',
        'Semantic search integration',
        'Asynchronous API development with FastAPI',
        'Real estate data management'
      ],
      githubUrl: 'https://github.com/Sara-hjd/immobilier-ai',
      demoUrl: null,
      confidential: false
    }
  },
  {
    slug: 'medicare-plus',
    number: '02',
    fr: {
      type: 'Académique',
      year: '2024-2025',
      context: 'PFA EMSI, soutenu le 25/05/2025',
      team: 'Projet en binôme',
      title: 'Medicare+ : Plateforme de Gestion Médicale',
      summary: 'Plateforme web destinée à améliorer la gestion des informations médicales, la circulation des données, la coordination des soins et l\'accessibilité, avec un focus sur le suivi des maladies chroniques.',
      tags: ['Santé numérique', 'Gestion médicale', 'Application web'],
      stack: ['Python', 'Django', 'MySQL', 'HTML/CSS/JavaScript', 'Bootstrap', 'Chart.js'],
      problem: 'Les patients atteints de maladies chroniques ont besoin d\'un suivi régulier ; l\'absence de système centralisé entraîne des pertes d\'information et des retards de prise en charge.',
      contribution: '',
      approach: [
        'Quatre rôles : patient, médecin, pharmacien, administrateur, chacun avec son tableau de bord',
        'Prise et gestion des rendez-vous, dossiers médicaux, journal de santé',
        'Création d\'ordonnances par le médecin, validation par le pharmacien',
        'Notifications, chatbot répondant aux questions médicales (page d\'accueil)',
        'Modélisation UML (cas d\'utilisation, séquence, classes) et MCD Merise ; méthode Agile'
      ],
      pipeline: 'Connexion par rôle → Rendez-vous → Dossier médical → Ordonnance → Validation pharmacien → Notifications',
      features: [
        'Tableaux de bord par rôle',
        'Gestion des rendez-vous',
        'Dossiers médicaux',
        'Journal de santé',
        'Ordonnances',
        'Notifications',
        'Chatbot médical'
      ],
      results: 'Application fonctionnelle avec les parcours patient, médecin et pharmacien.',
      status: 'Fonctionnel',
      limitations: [
        'Pas de téléconsultation',
        'Pas d\'IA prédictive',
        'Pas d\'application mobile'
      ],
      perspectives: [
        'Ajouter la téléconsultation',
        'Intégrer l\'IA prédictive',
        'Développer une application mobile'
      ],
      learnings: [],
      githubUrl: 'https://github.com/Sara-hjd/MEDICARE-',
      demoUrl: null,
      confidential: false
    },
    en: {
      type: 'Academic',
      year: '2024-2025',
      context: 'PFA EMSI, defended on 25/05/2025',
      team: 'Team project',
      title: 'Medicare+: Medical Management Platform',
      summary: 'Web platform designed to improve medical information management, data flow, care coordination and accessibility, with a focus on chronic disease follow-up.',
      tags: ['Digital Health', 'Medical Management', 'Web Application'],
      stack: ['Python', 'Django', 'MySQL', 'HTML/CSS/JavaScript', 'Bootstrap', 'Chart.js'],
      problem: 'Patients with chronic diseases need regular follow-up; the absence of a centralized system leads to loss of information and delays in care.',
      contribution: '',
      approach: [
        'Four roles: patient, doctor, pharmacist, administrator, each with their dashboard',
        'Appointment scheduling and management, medical records, health journal',
        'Prescription creation by doctor, validation by pharmacist',
        'Notifications, chatbot answering medical questions (home page)',
        'UML modeling (use cases, sequence, classes) and Merise MCD; Agile method'
      ],
      pipeline: 'Role login → Appointments → Medical record → Prescription → Pharmacist validation → Notifications',
      features: [
        'Role-based dashboards',
        'Appointment management',
        'Medical records',
        'Health journal',
        'Prescriptions',
        'Notifications',
        'Medical chatbot'
      ],
      results: 'Functional application with patient, doctor and pharmacist workflows.',
      status: 'Functional',
      limitations: [
        'No teleconsultation',
        'No predictive AI',
        'No mobile application'
      ],
      perspectives: [
        'Add teleconsultation',
        'Integrate predictive AI',
        'Develop mobile application'
      ],
      learnings: [],
      githubUrl: 'https://github.com/Sara-hjd/MEDICARE-',
      demoUrl: null,
      confidential: false
    }
  },
  {
    slug: 'video-studio',
    number: '03',
    fr: {
      type: 'Professionnel',
      year: '2025',
      context: 'Stage chez JobGate',
      team: 'Réalisé en binôme',
      title: 'Video Studio : Plateforme de Gestion Vidéo',
      summary: 'Plateforme web d\'enregistrement et de gestion de vidéos de présentation, avec un module d\'édition vidéo.',
      tags: ['Vidéo', 'Plateforme web', 'FFmpeg', 'Docker'],
      stack: ['React.js', 'Django REST Framework', 'PostgreSQL', 'Docker', 'FFmpeg', 'Nginx (HTTPS)'],
      problem: 'Les outils existants sont complexes ou payants, sans support mobile intégré, avec une édition limitée et peu de monitoring.',
      contribution: '',
      approach: [
        'Enregistrement depuis le navigateur (caméra/micro, MediaRecorder), durée maximale de 5 minutes',
        'Enregistrement mobile via QR code',
        'Gestion des vidéos : consulter, supprimer, télécharger, marquer comme finale',
        'Découpe début/fin avec FFmpeg',
        'Monitoring, logs avec rotation, accès en HTTPS via Nginx',
        'Déploiement avec Docker et Docker Compose'
      ],
      pipeline: 'Enregistrement (web ou QR mobile) → Upload → Stockage → Édition (FFmpeg) → Validation / vidéo finale',
      features: [
        'Enregistrement web',
        'Enregistrement mobile via QR',
        'Gestion des vidéos',
        'Édition vidéo (découpe)',
        'Monitoring',
        'Déploiement conteneurisé'
      ],
      results: 'Plateforme fonctionnelle (enregistrement web et mobile, gestion des vidéos, déploiement conteneurisé).',
      status: 'Fonctionnel',
      limitations: [
        'Module d\'évaluation IA non réalisé',
        'Système de découpe à finaliser',
        'Authentification à renforcer'
      ],
      perspectives: [
        'Finaliser le système de découpe',
        'Ajouter l\'évaluation IA',
        'Renforcer l\'authentification'
      ],
      learnings: [],
      githubUrl: 'https://github.com/Sara-hjd/video-studio',
      demoUrl: null,
      confidential: true
    },
    en: {
      type: 'Professional',
      year: '2025',
      context: 'Internship at JobGate',
      team: 'Developed in duo',
      title: 'Video Studio: Video Management Platform',
      summary: 'Web platform for recording and managing presentation videos, with a video editing module.',
      tags: ['Video', 'Web Platform', 'FFmpeg', 'Docker'],
      stack: ['React.js', 'Django REST Framework', 'PostgreSQL', 'Docker', 'FFmpeg', 'Nginx (HTTPS)'],
      problem: 'Existing tools are complex or paid, without integrated mobile support, with limited editing and little monitoring.',
      contribution: '',
      approach: [
        'Recording from browser (camera/micro, MediaRecorder), maximum duration of 5 minutes',
        'Mobile recording via QR code',
        'Video management: view, delete, download, mark as final',
        'Start/end trimming with FFmpeg',
        'Monitoring, logs with rotation, HTTPS access via Nginx',
        'Deployment with Docker and Docker Compose'
      ],
      pipeline: 'Recording (web or mobile QR) → Upload → Storage → Editing (FFmpeg) → Validation / final video',
      features: [
        'Web recording',
        'Mobile recording via QR',
        'Video management',
        'Video editing (trimming)',
        'Monitoring',
        'Containerized deployment'
      ],
      results: 'Functional platform (web and mobile recording, video management, containerized deployment).',
      status: 'Functional',
      limitations: [
        'AI evaluation module not implemented',
        'Trimming system to be finalized',
        'Authentication to be strengthened'
      ],
      perspectives: [
        'Finalize trimming system',
        'Add AI evaluation',
        'Strengthen authentication'
      ],
      learnings: [],
      githubUrl: 'https://github.com/Sara-hjd/video-studio',
      demoUrl: null,
      confidential: true
    }
  },
  {
    slug: 'caregraph-complete',
    number: '04',
    fr: {
      type: 'Académique',
      year: '2026',
      context: 'Projet individuel',
      team: 'Projet réalisé seule',
      title: 'CareGraph Complete : Workflow Multi-Agents Médical',
      summary: 'Application de simulation d\'orientation clinique préliminaire basée sur LangGraph, avec multi-agents, API FastAPI, intégration MCP, interface Streamlit et Human-in-the-Loop.',
      tags: ['Multi-agents', 'LangGraph', 'Human-in-the-Loop', 'MCP'],
      stack: ['Python', 'LangGraph / LangChain Core', 'OpenAI', 'FastAPI', 'MCP', 'Streamlit', 'Pydantic', 'Docker Compose'],
      note: 'Projet académique et expérimental ; simulation pédagogique, ni dispositif médical ni diagnostic.',
      problem: '',
      contribution: 'Projet réalisé seule, de bout en bout (workflow, API, intégration MCP, interface).',
      approach: [
        'Supervisor qui oriente le workflow selon l\'état partagé',
        'Diagnostic Agent : génère 5 questions patient, avec interruption du graphe à chaque question, puis produit une synthèse préliminaire, les signaux d\'alerte et une recommandation intermédiaire',
        'Physician Review : validation humaine, le graphe attend la conduite à tenir du médecin',
        'Report Agent : rapport final structuré en Markdown, téléchargeable',
        'Serveur MCP exposant l\'outil get_clinical_rules (règles générales, red flags, avertissement éthique)',
        'API FastAPI (démarrage, reprise des interruptions, rapport) ; testable dans LangGraph Studio'
      ],
      pipeline: 'Cas patient → 5 questions → Synthèse → Revue médecin → Rapport final',
      features: [
        'Workflow multi-agents',
        'Interruptions humaines',
        'Génération de rapport',
        'Intégration MCP',
        'API FastAPI',
        'Interface Streamlit'
      ],
      results: 'Workflow complet de bout en bout avec avertissement éthique systématique.',
      status: 'Fonctionnel',
      limitations: [
        'Sessions en mémoire',
        'Pas de PDF automatique',
        'Pas de tests automatisés',
        'Pas d\'authentification'
      ],
      perspectives: [
        'Persister les sessions',
        'Générer automatiquement des PDF',
        'Ajouter des tests automatisés',
        'Ajouter l\'authentification'
      ],
      learnings: [
        'LangGraph et multi-agents',
        'Intégration MCP',
        'Human-in-the-Loop',
        'API FastAPI',
        'Streamlit'
      ],
      githubUrl: 'https://github.com/Sara-hjd/care-graph',
      demoUrl: null,
      confidential: false
    },
    en: {
      type: 'Academic',
      year: '2026',
      context: 'Individual project',
      team: 'Project completed alone',
      title: 'CareGraph Complete: Medical Multi-Agent Workflow',
      summary: 'Preliminary clinical orientation simulation application based on LangGraph, with multi-agents, FastAPI API, MCP integration, Streamlit interface and Human-in-the-Loop.',
      tags: ['Multi-agents', 'LangGraph', 'Human-in-the-Loop', 'MCP'],
      stack: ['Python', 'LangGraph / LangChain Core', 'OpenAI', 'FastAPI', 'MCP', 'Streamlit', 'Pydantic', 'Docker Compose'],
      note: 'Academic and experimental project; educational simulation, neither medical device nor diagnosis.',
      problem: '',
      contribution: 'Project completed alone, end-to-end (workflow, API, MCP integration, interface).',
      approach: [
        'Supervisor that directs the workflow according to shared state',
        'Diagnostic Agent: generates 5 patient questions, with graph interruption at each question, then produces a preliminary synthesis, alert signals and an intermediate recommendation',
        'Physician Review: human validation, the graph waits for the physician\'s course of action',
        'Report Agent: final structured report in Markdown, downloadable',
        'MCP server exposing the get_clinical_rules tool (general rules, red flags, ethical warning)',
        'FastAPI API (start, resume interruptions, report); testable in LangGraph Studio'
      ],
      pipeline: 'Patient case → 5 questions → Synthesis → Physician review → Final report',
      features: [
        'Multi-agent workflow',
        'Human interruptions',
        'Report generation',
        'MCP integration',
        'FastAPI API',
        'Streamlit interface'
      ],
      results: 'Complete end-to-end workflow with systematic ethical warning.',
      status: 'Functional',
      limitations: [
        'In-memory sessions',
        'No automatic PDF',
        'No automated tests',
        'No authentication'
      ],
      perspectives: [
        'Persist sessions',
        'Automatically generate PDFs',
        'Add automated tests',
        'Add authentication'
      ],
      learnings: [
        'LangGraph and multi-agents',
        'MCP integration',
        'Human-in-the-Loop',
        'FastAPI API',
        'Streamlit'
      ],
      githubUrl: 'https://github.com/Sara-hjd/care-graph',
      demoUrl: null,
      confidential: false
    }
  },
  {
    slug: 'bookingexpress',
    number: '05',
    fr: {
      type: 'Académique',
      year: '2026',
      context: 'Projet en binôme',
      team: '',
      title: 'BookingExpress : Application Mobile de Réservation d\'Hôtels',
      summary: 'Application mobile cross-platform de réservation d\'hôtels permettant la recherche, l\'exploration et la réservation d\'hébergements.',
      tags: ['Mobile', 'Cross-platform', 'Réservation'],
      stack: ['React Native', 'Expo', 'TypeScript', 'Expo Router'],
      problem: '',
      contribution: '',
      approach: [
        'Recherche et filtres d\'hébergements',
        'Pages de détails d\'un hôtel',
        'Panier de réservation',
        'Navigation par onglets'
      ],
      pipeline: 'Recherche → Filtres → Détails → Panier → Réservation',
      features: [
        'Recherche d\'hébergements',
        'Filtres',
        'Détails hôtel',
        'Panier',
        'Réservation'
      ],
      results: '',
      status: '',
      limitations: [],
      perspectives: [],
      learnings: [],
      githubUrl: null,
      demoUrl: null,
      confidential: false
    },
    en: {
      type: 'Academic',
      year: '2026',
      context: 'Team project',
      team: '',
      title: 'BookingExpress: Hotel Reservation Mobile Application',
      summary: 'Cross-platform mobile application for hotel reservation allowing search, exploration and booking of accommodations.',
      tags: ['Mobile', 'Cross-platform', 'Reservation'],
      stack: ['React Native', 'Expo', 'TypeScript', 'Expo Router'],
      problem: '',
      contribution: '',
      approach: [
        'Accommodation search and filters',
        'Hotel detail pages',
        'Reservation cart',
        'Tab navigation'
      ],
      pipeline: 'Search → Filters → Details → Cart → Reservation',
      features: [
        'Accommodation search',
        'Filters',
        'Hotel details',
        'Cart',
        'Reservation'
      ],
      results: '',
      status: '',
      limitations: [],
      perspectives: [],
      learnings: [],
      githubUrl: null,
      demoUrl: null,
      confidential: false
    }
  }
]

export function getProjectDetailBySlug(slug) {
  return projectsDetailed.find(p => p.slug === slug) || null
}

export function getAllProjectSlugs() {
  return projectsDetailed.map(p => p.slug)
}
