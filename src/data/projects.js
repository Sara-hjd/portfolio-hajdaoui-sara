/**
 * projects.js
 * -----------
 * Source unique de vérité pour tous les projets.
 *
 * RÈGLES IMPORTANTES :
 * - Ne jamais inventer de technologies, résultats, métriques, rôles.
 * - Si une information n'est pas disponible → utiliser '[À COMPLÉTER]' ou null.
 * - Les sections avec null ne seront PAS affichées dans la page détaillée.
 *
 * AJOUTER UN PROJET :
 * 1. Copier l'objet template ci-dessous
 * 2. Remplir les champs avec les vraies informations
 * 3. Configurer les champs 'show*' pour contrôler l'affichage
 * 4. L'interface se met à jour automatiquement
 *
 * STRUCTURE DE L'ID :
 * L'id est utilisé dans l'URL : /projects/:id
 * Utiliser des slugs en minuscules avec tirets (ex: "computer-vision-pfa")
 */

export const projects = [
  {
    // --- Identification ---
    id: 'immo-ai',
    title: 'IMMO-AI — Plateforme d\'Analyse Immobilière Intelligente',
    shortDescription: 'Plateforme d\'analyse immobilière dédiée au marché marocain avec pipeline IA multi-agents, recherche sémantique et outils d\'estimation.',
    type: 'academic',
    status: 'completed',
    year: '2025-2026',
    featured: true,

    // --- Tags (affichés sur la carte) ---
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Machine Learning'],

    // --- Liens ---
    githubUrl: 'https://github.com/Sara-hjd/immobilier-ai',
    demoUrl: null,
    documentationUrl: null,

    // --- Images ---
    // Structure pour les images du projet :
    // coverImage: string | null — Image principale (affichée en haut de la page)
    // images: Array<{url: string, caption?: string}> — Galerie d'images secondaires
    // Les URLs doivent être relatives à /public/ (ex: '/projects/immo-ai/architecture.png')
    coverImage: '/projects/immo-ai/01-homepage.png.jpg',
    images: [
      {
        url: '/projects/immo-ai/02-user-space-selection.png.jpg',
        caption: 'Sélection de l\'espace utilisateur : trois profils (Particulier, Investisseur, Agent Immobilier) avec fonctionnalités dédiées'
      },
      {
        url: '/projects/immo-ai/03-authentication.png.jpg',
        caption: 'Écran d\'authentification pour l\'accès aux espaces utilisateurs'
      },
      {
        url: '/projects/immo-ai/04-admin-interface.png.jpg',
        caption: 'Interface Administrateur : tableau de bord KPI, gestion du parc immobilier (64 biens), gestion des utilisateurs (6 comptes)'
      },
      {
        url: '/projects/immo-ai/05-investor-space.png.jpg',
        caption: 'Espace Investisseur : calculateur rendement locatif (11,43% brut / 10,06% net), portfolio (ROI 56,14%), tableau de bord marché'
      },
      {
        url: '/projects/immo-ai/06-individual-space-catalog.png.jpg',
        caption: 'Espace Particulier : catalogue 64 biens avec filtres, carte Leaflet avec heatmap prix/m2, comparateur IA côte-à-côte, gestionnaire favoris'
      },
      {
        url: '/projects/immo-ai/07-ai-analysis.png.jpg',
        caption: 'Analyse IA d\'un bien : fiche détaillée (score 6,5/10, recommandation « Acheter »), pipeline 4 étapes, portefeuille investisseur, tableau de bord marché'
      },
      {
        url: '/projects/immo-ai/08-financial-tools.png.jpg',
        caption: 'Outils financiers : calculateur rendement locatif (11,43% brut), simulateur apport personnel (taux d\'endettement 50,2%), calculateur crédit immobilier'
      },
      {
        url: '/projects/immo-ai/09-agent-space.png.jpg',
        caption: 'Espace Agent Immobilier : vue « Mes Biens » (64 annonces, prix moyen 2 221 263 MAD), formulaire modal d\'ajout de bien'
      }
    ],

    // ============================================================
    // CONTRÔLE D'AFFICHAGE DES SECTIONS
    // ============================================================
    show: {
      problem: true,
      overview: true,
      objective: true,
      solution: true,
      technologies: true,
      teamWork: true,
      architecture: true,
      methodology: true,
      pipelineIA: true,
      scraping: true,
      semanticSearch: true,
      backend: true,
      frontend: true,
      features: true,
      implementation: true,
      results: true,
      challenges: true,
      improvements: true,
      demo: false,
      documentation: false,
      images: true,
    },

    // --- Contenu de la page détaillée ---
    problem: 'Le marché immobilier marocain manque d\'outils centralisés permettant une analyse intelligente des propriétés. Les informations sont dispersées sur plusieurs plateformes (mubawab.ma, avito.ma, etc.), rendant difficile la comparaison, l\'estimation fiable des prix et l\'évaluation de la rentabilité pour les investisseurs et les acquéreurs.',
    overview: 'IMMO-AI est une plateforme d\'analyse immobilière dédiée au marché marocain. Le projet vise à fournir des outils intelligents pour l\'analyse de propriétés, l\'estimation de prix et l\'évaluation de rentabilité, en utilisant des techniques d\'IA et de Machine Learning.',
    objective: 'Développer une plateforme complète permettant aux utilisateurs de rechercher, analyser et évaluer des biens immobiliers au Maroc grâce à des outils IA avancés, notamment la recherche sémantique, l\'estimation automatique de prix et l\'analyse de quartier.',
    solution: 'Une plateforme web intégrée combinant scraping automatisé, pipeline IA multi-agents pour l\'analyse qualitative, recherche sémantique, estimation de prix, scoring de quartier, et interface interactive avec carte Leaflet pour visualiser et comparer les propriétés.',
    technologies: [
      'Python 3.11',
      'FastAPI',
      'React',
      'Vite',
      'PostgreSQL',
      'SQLAlchemy',
      'sentence-transformers',
      'Groq',
      'llama-3.3-70b-versatile',
      'all-MiniLM-L6-v2',
      'BeautifulSoup4',
      'httpx',
      'Leaflet',
    ],
    myRole: 'Conceptrice / Développeuse avec contribution full-stack et IA/Data. Participation au backend (développement, API, intégration des composants, échanges frontend/backend), au scraping (développement du système, collecte des données immobilières, préparation/normalisation, intégration), au pipeline IA (mise en œuvre du pipeline multi-agents, intégration/orchestration des composants, intégration des résultats des agents), au frontend (React, intégration API, interfaces, carte Leaflet, exports), et à la documentation (rapport et documentation du projet). Projet réalisé en équipe.',
    teamWork: 'Développement collectif de la plateforme IMMO-AI avec intégration des différents composants (scraping, backend, pipeline IA, frontend). Le projet a été réalisé en équipe avec répartition des tâches selon les compétences de chaque membre.',
    architecture: 'Architecture client-serveur avec backend FastAPI et frontend React/Vite. Base de données PostgreSQL pour le stockage des données immobilières. Pipeline IA multi-agents pour le traitement et l\'analyse des données. Le flux de données suit le schéma : Collecte (scraping mubawab.ma) → Préparation/normalisation → Stockage (PostgreSQL) → Pipeline IA multi-agents → Analyse/scoring/estimation → API FastAPI → Frontend React → Restitution (carte, comparateur, exports).',
    architectureDiagram: null, // Emplacement pour diagramme d'architecture (ex: '/projects/immo-ai/architecture.png')
    methodology: 'Approche agile avec développement itératif. Collecte automatisée d\'annonces via scraping, traitement par pipeline IA multi-agents (5 agents spécialisés), et interface utilisateur React pour la visualisation et l\'interaction.',
    pipelineIA: 'Système multi-agents composé de 5 agents spécialisés : Agent de collecte (récupération des données brutes), Agent de normalisation (standardisation des formats), Agent d\'analyse qualitative (évaluation des descriptions), Agent d\'estimation (calcul des prix), Agent de scoring (évaluation des quartiers). Les agents communiquent via une architecture orchestrée qui coordonne leurs entrées/sorties pour produire une analyse consolidée de chaque propriété.',
    pipelineDiagram: null, // Emplacement pour diagramme du pipeline (ex: '/projects/immo-ai/pipeline.png')
    scraping: 'Système de scraping automatisé ciblant mubawab.ma pour la collecte	d\'annonces immobilières. Utilisation de BeautifulSoup4 et httpx pour l\'extraction des données (prix, localisation, caractéristiques, description). Les données collectées sont normalisées et stockées dans PostgreSQL pour traitement ultérieur par le pipeline IA.',
    semanticSearch: 'Recherche sémantique basée sur Sentence Transformers avec le modèle all-MiniLM-L6-v2 pour l\'encodage des descriptions immobilières en vecteurs. Utilisation de Groq pour l\'inférence LLM avec le modèle llama-3.3-70b-versatile, permettant des requêtes en langage naturel et des réponses contextuelles. Le système permet de rechercher des propriétés par description, intention ou critères complexes, au-delà de la simple recherche par mots-clés.',
    backend: 'Backend développé avec FastAPI et Python 3.11. API RESTful pour l\'exposition des fonctionnalités (recherche, estimation, scoring). Utilisation de SQLAlchemy pour l\'ORM et la communication avec PostgreSQL. Intégration avec le pipeline IA via des appels asynchrones. Gestion des requêtes frontend et orchestration des différents composants.',
    frontend: 'Frontend développé avec React et Vite. Interface utilisateur réactive avec intégration API pour la récupération des données en temps réel. Carte interactive Leaflet pour la visualisation géographique des propriétés. Module de comparaison pour mettre en côte-à-côte plusieurs annonces. Fonctionnalités d\'export (PDF/Excel) pour les analyses. Chatbot intégré avec recherche en langage naturel.',
    features: 'Recherche sémantique des annonces, estimation automatique des prix, évaluation des travaux nécessaires, calcul de rentabilité (rentabilité locative, rendement), scoring du quartier (accessibilité, services, sécurité), score global de la propriété, carte interactive avec filtrage, comparateur multi-annonces, exports PDF/Excel, chatbot immobilier avec recherche en langage naturel.',
    implementation: 'Développement d\'un système de collecte automatisée d\'annonces immobilières, implémentation d\'un pipeline IA multi-agents pour l\'analyse qualitative, création d\'une interface React avec carte Leaflet interactive, développement de fonctionnalités d\'export PDF/Excel, et intégration d\'un chatbot immobilier avec recherche en langage naturel.',
    results: 'Plateforme fonctionnelle avec recherche sémantique, estimation de prix, évaluation des travaux, calcul de rentabilité, score du quartier, score global, carte interactive, comparateur et chatbot.',
    challenges: 'Intégration de modèles IA pour l\'analyse qualitative, gestion de la collecte de données à grande échelle, synchronisation entre le pipeline IA et l\'interface utilisateur.',
    improvements: 'Ajout de plus de sources de données, amélioration des modèles d\'estimation, expansion des fonctionnalités du chatbot, optimisation des performances.',
  },
  {
    // --- Identification ---
    id: 'medicare-plus',
    title: 'Medicare+ — Plateforme de Gestion Médicale',
    shortDescription: 'Plateforme numérique destinée à améliorer la gestion des informations médicales, la circulation des données, la coordination des soins et l\'accessibilité.',
    type: 'academic',
    status: 'completed',
    year: '2024-2025',
    featured: true,

    // --- Tags (affichés sur la carte) ---
    tags: ['Python', 'Django', 'MySQL'],

    // --- Liens ---
    githubUrl: 'https://github.com/Sara-hjd/MEDICARE-',
    demoUrl: null,
    documentationUrl: null,

    // --- Images ---
    // Structure pour les images du projet :
    // coverImage: string | null — Image principale (affichée en haut de la page)
    // images: Array<{url: string, caption?: string}> — Galerie d'images secondaires
    // Les URLs doivent être relatives à /public/ (ex: '/projects/medicare-plus/architecture.png')
    coverImage: '/projects/medicare-plus/md-01-page_dacceuil .png',
    images: [
      {
        url: '/projects/medicare-plus/md-02-page-de-connexion .png',
        caption: 'Page de connexion : authentification des utilisateurs via email et mot de passe'
      },
      {
        url: '/projects/medicare-plus/md-03-page-inscription .png',
        caption: 'Page d\'inscription : sélection du rôle (patient, médecin, pharmacien, administrateur) avant création de compte'
      },
      {
        url: '/projects/medicare-plus/md-04-dashboards-utilisateurs .png',
        caption: 'Espaces utilisateurs par rôle : dashboards personnalisés avec fonctionnalités spécifiques selon le profil'
      },
      {
        url: '/projects/medicare-plus/md-05-qq-fonctionnalites .png',
        caption: 'Fonctionnalités principales : prise de rendez-vous pour patients, entrée de données journalières, affichage dans dashboard médecin'
      }
    ],

    // ============================================================
    // CONTRÔLE D'AFFICHAGE DES SECTIONS
    // ============================================================
    show: {
      problem: true,
      overview: true,
      objective: true,
      solution: true,
      technologies: true,
      teamWork: true,
      architecture: true,
      methodology: true,
      implementation: true,
      features: true,
      results: true,
      challenges: false,
      improvements: true,
      demo: false,
      documentation: false,
      images: true,
    },

    // --- Contenu de la page détaillée ---
    problem: 'La gestion des informations médicales est souvent fragmentée entre différents systèmes et acteurs, ce qui complique la coordination des soins, la circulation des données et l\'accessibilité pour les patients et les professionnels de santé.',
    overview: 'Medicare+ est une plateforme numérique destinée à améliorer la gestion des informations médicales, la circulation des données, la coordination des soins et l\'accessibilité pour les patients et les professionnels de santé.',
    objective: 'Concevoir une plateforme permettant une gestion plus efficace et centralisée des informations médicales, en améliorant les processus administratifs et cliniques, la coordination entre les acteurs, la communication, l\'accessibilité et la sécurité des données.',
    solution: 'Plateforme web développée avec Python, Django et MySQL pour centraliser la gestion des informations médicales, faciliter la coordination entre les acteurs de santé et améliorer l\'accessibilité des données pour les patients et les professionnels.',
    technologies: [
      'Python',
      'Django',
      'HTML/CSS/JavaScript',
      'Bootstrap',
      'Chart.js',
      'SQLite',
    ],
    myRole: 'Projet réalisé en binôme. Participation à l\'analyse des besoins, modélisation UML et Merise, développement backend Django, développement frontend HTML/CSS/JavaScript avec Bootstrap, et implémentation des fonctionnalités principales (gestion rendez-vous, dossiers médicaux, ordonnances, notifications).',
    architecture: 'Architecture Django MTV (Model-Template-View). Le Modèle définit la structure des données et les interactions avec la base de données via l\'ORM Django. Le Template gère la présentation des données avec des fichiers HTML et balises Django. La Vue traite les requêtes HTTP et orchestre les interactions entre le modèle et le template. Base de données SQLite pour le développement.',
    architectureDiagram: null, // Emplacement pour diagramme d'architecture Django MTV (ex: '/projects/medicare-plus/architecture.png')
    methodology: 'Approche structurée avec phases de planification et analyse des besoins, conception avec diagrammes UML (cas d\'utilisation, séquence, classes) et Merise (MCD), développement backend Django et frontend HTML/CSS/JavaScript, tests approfondis, et déploiement.',
    umlDiagram: null, // Emplacement pour diagrammes UML (ex: '/projects/medicare-plus/uml.png')
    meriseDiagram: null, // Emplacement pour diagramme Merise/MCD (ex: '/projects/medicare-plus/merise.png')
    implementation: 'Développement backend Django avec ORM pour la gestion des données (utilisateurs, patients, médecins, pharmaciens, rendez-vous, ordonnances, médicaments, dossiers médicaux, notifications). Création des templates HTML avec Django pour les interfaces dynamiques. Intégration Bootstrap pour le design responsive. Utilisation de Chart.js pour la visualisation des données médicales. Base de données SQLite pour le développement.',
    features: 'Inscription et authentification selon le rôle (patient, médecin, pharmacien, administrateur), prise et gestion des rendez-vous, consultation et modification des dossiers médicaux, création et validation des ordonnances par les pharmaciens, journal médical patient, notifications automatiques (rappels de traitement), communication sécurisée entre patients et professionnels, et dashboards personnalisés par rôle.',
    results: 'Plateforme fonctionnelle avec dashboards personnalisés par rôle (patient, médecin, pharmacien, administrateur). Fonctionnalités opérationnelles : inscription et authentification selon le rôle, prise et gestion des rendez-vous, consultation et modification des dossiers médicaux, création et validation des ordonnances, journal médical patient, notifications automatiques, et interface responsive.',
    challenges: null,
    improvements: 'Intégration de l\'intelligence artificielle pour l\'analyse prédictive de l\'état de santé des patients chroniques, développement d\'une application mobile complémentaire pour renforcer l\'accessibilité, ajout d\'un module de téléconsultation avec messagerie sécurisée et visioconférence, interfaçage avec d\'autres systèmes médicaux via des API pour renforcer l\'interopérabilité, et mise en œuvre de tableaux de bord analytiques pour les médecins et les décideurs de santé.',
  },
  {
    // --- Identification ---
    id: 'video-studio',
    title: 'Video Studio — Plateforme de Gestion Vidéo',
    shortDescription: 'Plateforme web d\'enregistrement et de gestion de vidéos avec module d\'édition vidéo.',
    type: 'professional',
    status: 'completed',
    year: '2025',
    featured: false,

    // --- Tags (affichés sur la carte) ---
    tags: ['React.js', 'Django REST', 'PostgreSQL', 'Docker', 'FFmpeg'],

    // --- Liens ---
    githubUrl: 'https://github.com/Sara-hjd/video-studio',
    demoUrl: null,
    documentationUrl: null,

    // --- Images ---
    // Structure pour les images du projet :
    // coverImage: string | null — Image principale (affichée en haut de la page)
    // images: Array<{url: string, caption?: string}> — Galerie d'images secondaires
    // Les URLs doivent être relatives à /public/ (ex: '/projects/video-studio/architecture.png')
    coverImage: '/projects/video-studio/vs-01-page_dacceuil.jpg',
    images: [
      {
        url: '/projects/video-studio/vs-02-partie_enregitrement.jpg',
        caption: 'Module d\'enregistrement vidéo : interface webcam avec contrôles de capture, prévisualisation en temps réel et options de configuration'
      },
      {
        url: '/projects/video-studio/vs-03-gestion des videos .jpg',
        caption: 'Gestion des vidéos : tableau de bord avec liste des enregistrements, miniatures générées, actions (visualiser, supprimer, valider) et métadonnées'
      },
      {
        url: '/projects/video-studio/vs-04-code_qr.jpg',
        caption: 'Accès mobile via QR code : génération de code pour enregistrement sur smartphone, synchronisation avec plateforme desktop'
      },
      {
        url: '/projects/video-studio/vs-05-version-mobile.jpg',
        caption: 'Version mobile : interface responsive optimisée pour smartphones avec enregistrement vidéo, édition légère et gestion des contenus'
      }
    ],

    // ============================================================
    // CONTRÔLE D'AFFICHAGE DES SECTIONS
    // ============================================================
    show: {
      problem: true,
      overview: true,
      objective: true,
      solution: true,
      technologies: true,
      teamWork: true,
      architecture: true,
      methodology: true,
      implementation: true,
      results: true,
      challenges: true,
      improvements: true,
      demo: false,
      documentation: false,
      images: true,
    },

    // --- Contenu de la page détaillée ---
    problem: 'La gestion de vidéos nécessite souvent des outils complexes et dispersés. Les utilisateurs ont besoin d\'une solution centralisée permettant l\'enregistrement, le stockage, l\'édition et l\'organisation des contenus vidéo sans nécessiter plusieurs logiciels.',
    overview: 'Plateforme web développée chez JOBGATE/UM6P StartGate permettant l\'enregistrement et la gestion de vidéos avec un module d\'édition intégré.',
    objective: 'Créer une solution complète pour la gestion de vidéos incluant l\'upload, le stockage, l\'édition et l\'organisation des contenus vidéo.',
    solution: 'Architecture microservices avec séparation frontend/backend. Backend Django REST Framework pour les API sécurisées, frontend React.js pour l\'interface réactive, FFmpeg pour le traitement vidéo (découpage, compression), PostgreSQL pour le stockage, Nginx comme reverse proxy pour HTTPS et distribution vidéo, et Docker pour la conteneurisation et l\'orchestration des services.',
    technologies: [
      'React.js',
      'Django REST',
      'Docker',
      'PostgreSQL',
      'FFmpeg',
      'API REST',
    ],
    myRole: 'Développeuse full-stack. Participation à l\'analyse des besoins, modélisation, développement frontend React, développement backend Django REST, implémentation du module d\'édition vidéo avec FFmpeg, et conception de l\'architecture de la base de données.',
    teamWork: 'Projet réalisé en équipe chez JOBGATE/UM6P StartGate avec collaboration sur les différentes parties de la plateforme.',
    architecture: 'Architecture en couches : Frontend (React.js avec composants spécialisés : VideoRecording, VideoEditor, VideoTimeline, MyVideos, MobileStudio), Backend (Django REST avec ViewSets : VideoPresentationViewSet, VideoSessionViewSet, VideoEditor service), Infrastructure (Docker Compose pour orchestration, Nginx reverse proxy pour HTTPS et distribution, PostgreSQL pour persistance). Communication via API REST sécurisées. FFmpeg intégré au backend pour traitement vidéo.',
    architectureDiagram: null, // Emplacement pour diagramme d'architecture microservices (ex: '/projects/video-studio/architecture.png')
    methodology: 'Approche agile avec développement itératif. Planification et analyse des besoins, conception UML (cas d\'utilisation, diagramme d\'activité, architecture logique), développement backend Django REST avec intégration FFmpeg, développement frontend React.js avec Bootstrap, intégration API REST, tests unitaires et fonctionnels, déploiement Docker avec Nginx et HTTPS.',
    workflowDiagram: null, // Emplacement pour diagramme workflow vidéo (ex: '/projects/video-studio/workflow.png')
    implementation: 'Développement de l\'interface React.js avec composants modulaires (VideoRecording pour webcam, VideoEditor pour édition, VideoTimeline pour navigation temporelle, MobileStudio pour QR code, MyVideos pour gestion). Création des API REST Django REST avec authentification sécurisée. Intégration FFmpeg pour découpage vidéo, compression et génération de miniatures. Configuration PostgreSQL pour stockage utilisateurs et métadonnées. Déploiement Docker Compose avec services conteneurisés (React, Django, Nginx, PostgreSQL). Configuration Nginx pour HTTPS et distribution vidéo.',
    results: 'Plateforme fonctionnelle avec enregistrement vidéo desktop (webcam) et mobile (via QR code), édition légère (découpage début/fin), gestion des vidéos (visualisation, suppression, validation), génération de miniatures, notifications système, monitoring administrateur, et support des formats WebM et MP4 avec durée maximale de 5 minutes.',
    challenges: 'Intégration de FFmpeg pour le traitement vidéo en temps réel, gestion des fichiers volumineux (limite 100 MB), synchronisation entre frontend et backend, gestion des erreurs réseau, validation des paramètres de découpage, récupération en cas de timeout, gestion des permissions caméra/microphone, et extraction des métadonnées vidéo.',
    improvements: 'Module d\'analyse vidéo par IA pour suggestions d\'amélioration, système d\'authentification robuste avec gestion sécurisée des utilisateurs, finalisation du système de trimming vidéo pour plus de flexibilité, simulateur IA pour tests pratiques candidats, instructions dynamiques personnalisées par domaine d\'activité, système de lumière intégré (ring light), amélioration de l\'extraction des métadonnées vidéo.',
  },
  {
    // --- Identification ---
    id: 'caregraph-complete',
    title: 'CareGraph Complete — Workflow Multi-Agents Médical',
    shortDescription: 'Application académique de simulation d\'orientation clinique préliminaire basée sur LangGraph avec multi-agents, API FastAPI, intégration MCP, interface Streamlit et Human-in-the-Loop.',
    type: 'academic',
    status: 'completed',
    year: '2026',
    featured: false,

    // --- Tags (affichés sur la carte) ---
    tags: ['Python', 'LangGraph', 'FastAPI', 'OpenAI', 'Streamlit'],

    // --- Liens ---
    githubUrl: null,
    demoUrl: null,
    documentationUrl: null,

    // --- Images ---
    coverImage: '/projects/caregraph-complete/cg-01-ecran-dacceuil .png',
    images: [
      {
        url: '/projects/caregraph-complete/cg-02-saisie-du cas .png',
        caption: 'Saisie du cas patient : cas initial, profil du patient, niveau d\'urgence perçu et contexte utile'
      },
      {
        url: '/projects/caregraph-complete/cg-03-qst-generes.png',
        caption: 'Première question générée par le Diagnostic Agent via OpenAI, adaptée au cas patient'
      },
      {
        url: '/projects/caregraph-complete/cg-04-progression-qst.png',
        caption: 'Progression des questions : état d\'avancement, nombre de questions posées et question actuelle'
      },
      {
        url: '/projects/caregraph-complete/cg-05-collecte-des-rps.png',
        caption: 'Collecte des réponses patient : les réponses sont saisies successivement et intégrées dans l\'état partagé du graphe'
      },
      {
        url: '/projects/caregraph-complete/cg-06-ecran-de-revue .png',
        caption: 'Écran de revue médecin : après les 5 réponses, affichage de la synthèse clinique préliminaire et attente de validation humaine'
      },
      {
        url: '/projects/caregraph-complete/cg-07-reco-intermediaire.png',
        caption: 'Recommandation intermédiaire et signaux d\'alerte (red flags) identifiés par le système'
      },
      {
        url: '/projects/caregraph-complete/cg-08-conduite-medecin .png',
        caption: 'Validation par le médecin : saisie de la conduite à tenir, traitement proposé et commentaire optionnel'
      },
      {
        url: '/projects/caregraph-complete/cg-09-rapport-final.png',
        caption: 'Rapport final structuré généré après validation médicale'
      },
      {
        url: '/projects/caregraph-complete/cg-10-alertes-et-syntheses .png',
        caption: 'Sections de synthèse du rapport : signaux d\'alerte et synthèse clinique préliminaire détaillée'
      },
      {
        url: '/projects/caregraph-complete/cg-11-reco-val-avert.png',
        caption: 'Recommandation, validation du médecin et avertissement éthique obligatoire dans le rapport final'
      },
      {
        url: '/projects/caregraph-complete/cg-12-rapport-markdown.png',
        caption: 'Téléchargement du rapport généré au format Markdown'
      },
    ],

    // ============================================================
    // CONTRÔLE D'AFFICHAGE DES SECTIONS
    // ============================================================
    show: {
      problem: true,
      overview: true,
      objective: true,
      solution: true,
      technologies: true,
      teamWork: true,
      architecture: true,
      methodology: true,
      implementation: true,
      features: true,
      results: true,
      challenges: true,
      improvements: true,
      demo: false,
      documentation: false,
      images: true,
    },

    // --- Contenu de la page détaillée ---
    problem: 'Les systèmes d\'orientation clinique nécessitent souvent des workflows complexes impliquant plusieurs étapes et acteurs. Il est difficile de concevoir une solution qui permette à la fois de collecter des informations patient, de générer des questions cliniques pertinentes, de produire une synthèse préliminaire, d\'impliquer un médecin pour validation, et de générer un rapport final structuré.',
    overview: 'CareGraph Complete est une application académique de simulation d\'un workflow d\'orientation clinique préliminaire. Le projet s\'inscrit dans le cadre d\'un système multi-agents médical basé sur LangGraph, avec une API FastAPI, une intégration MCP, une interface Streamlit et une étape Human-in-the-Loop pour la validation médicale.',
    objective: 'Concevoir un workflow multi-agents avec LangGraph permettant de collecter un cas patient, de générer 5 questions cliniques via LLM, de produire une synthèse clinique préliminaire avec identification de signaux d\'alerte, d\'impliquer un médecin pour validation humaine, et de générer un rapport final structuré.',
    solution: 'Architecture multi-agents LangGraph avec 4 agents spécialisés : Supervisor (orchestration), Diagnostic Agent (génération de questions et synthèse clinique), Physician Review (Human-in-the-Loop pour validation médicale), Report Agent (génération rapport final). Utilisation d\'OpenAI pour la génération LLM, intégration MCP pour les règles cliniques, API FastAPI pour l\'exposition des routes, et interface Streamlit pour l\'utilisateur final.',
    technologies: [
      'Python 3.11/3.12',
      'LangGraph',
      'LangChain Core',
      'FastAPI',
      'OpenAI',
      'Streamlit',
      'MCP',
      'Pydantic',
      'Docker Compose',
      'Uvicorn',
    ],
    myRole: 'Conception et développement individuel du projet, de l\'analyse du besoin jusqu\'à l\'implémentation et à la réalisation des différentes fonctionnalités.',
    teamWork: 'Projet académique réalisé individuellement en 2026.',
    architecture: 'Architecture multi-agents LangGraph avec 4 nœuds : Supervisor (routeur conditionnel), Diagnostic Agent (génération questions et synthèse), Physician Review (interrupt pour Human-in-the-Loop), Report Agent (génération rapport). État partagé MedicalState contenant thread_id, patient_case, patient_profile, questions, patient_answers, red_flags, diagnostic_summary, final_report. Backend FastAPI avec routes /sessions/start, /consultation/start, /consultation/resume, /consultation/{thread_id}, /consultation/{thread_id}/report. Serveur MCP local pour règles cliniques. Frontend Streamlit pour interface utilisateur. Persistance en mémoire avec InMemorySaver.',
    architectureDiagram: null,
    methodology: 'Approche itérative avec développement du graphe LangGraph, implémentation des agents spécialisés, intégration OpenAI pour génération LLM, création du serveur MCP pour règles cliniques, développement API FastAPI avec routes obligatoires, implémentation des interruptions LangGraph pour Human-in-the-Loop, développement interface Streamlit, et tests de scénarios complets.',
    implementation: 'Développement du graphe LangGraph avec StateGraph et InMemorySaver. Création des 4 agents (supervisor, diagnostic_agent, physician_review, report_agent) avec logique de routing conditionnel. Intégration OpenAI via openai_service.py pour génération questions, synthèse clinique et rapport final. Implémentation du serveur MCP avec outil get_clinical_rules. Développement API FastAPI avec routes obligatoires et gestion des interruptions via Command(resume=...). Création interface Streamlit avec écrans : accueil, questions patient, revue médecin, rapport final. Configuration Docker Compose pour orchestration backend/frontend.',
    features: 'Démarrage de session de consultation, saisie du cas patient (cas, profil, urgence, contexte), génération automatique de 5 questions cliniques via OpenAI, collecte des réponses patient avec état partagé, synthèse clinique préliminaire générée par LLM, identification des signaux d\'alerte (red flags), recommandation intermédiaire générale, étape Human-in-the-Loop pour validation médecin, saisie de la conduite à tenir par le médecin, génération du rapport final structuré en Markdown, export du rapport en Markdown, interface Streamlit avec écrans multiples, panneau de données techniques pour observer l\'état du graphe, avertissement éthique obligatoire dans le rapport final.',
    results: 'Plateforme fonctionnelle avec workflow multi-agents complet. Tests réalisés : démarrage API, accès frontend Streamlit, démarrage consultation, génération questions OpenAI, reprise graphe après réponse patient, collecte 5 réponses, passage revue médecin, reprise après validation, génération rapport final. Scénario complet exécuté avec succès (statut initial patient_questions, 5 questions/réponses, statut final finished, rapport généré). Conformité au cahier des charges : 17/17 exigences conformes.',
    challenges: 'Gestion des interruptions LangGraph pour Human-in-the-Loop, synchronisation de l\'état partagé entre agents, intégration OpenAI avec gestion des erreurs, fallback local pour serveur MCP en cas de problème, persistance en mémoire (pas de base de données), qualité des réponses dépendant du modèle OpenAI configuré.',
    improvements: 'Ajout d\'une base de données pour l\'historique des consultations, export automatique du rapport en PDF, tests unitaires et tests d\'intégration automatisés, authentification utilisateur, journalisation des étapes du graphe, amélioration de la gestion des erreurs OpenAI, interface de comparaison des scénarios de test, prompts versionnés pour faciliter l\'évaluation.',
  },
  {
    // --- Identification ---
    id: 'bookingexpress',
    title: 'BookingExpress — Application Mobile de Réservation d\'Hôtels',
    shortDescription: 'Application mobile de réservation d\'hôtels développée avec React Native et Expo, permettant la recherche, l\'exploration et la réservation d\'hébergements.',
    type: 'academic',
    status: 'completed',
    year: '2026',
    featured: false,

    // --- Tags (affichés sur la carte) ---
    tags: ['React Native', 'Expo', 'TypeScript', 'Mobile', 'Navigation'],

    // --- Liens ---
    githubUrl: null,
    demoUrl: null,
    documentationUrl: null,

    // --- Images ---
    coverImage: null,
    images: [],

    // ============================================================
    // CONTRÔLE D'AFFICHAGE DES SECTIONS
    // ============================================================
    show: {
      problem: true,
      overview: true,
      objective: true,
      solution: true,
      technologies: true,
      teamWork: true,
      architecture: true,
      methodology: true,
      implementation: true,
      features: true,
      results: true,
      challenges: true,
      improvements: true,
      demo: false,
      documentation: false,
      images: false,
    },

    // --- Contenu de la page détaillée ---
    problem: 'Les utilisateurs ont besoin d\'une solution mobile simple et intuitive pour rechercher, explorer et réserver des hôtels. Les applications existantes peuvent être complexes ou manquer de fonctionnalités essentielles comme un système de panier ou une navigation fluide.',
    overview: 'BookingExpress est une application mobile de réservation d\'hôtels développée avec React Native et Expo. L\'application permet aux utilisateurs de rechercher des hôtels par destination, dates et nombre de voyageurs, d\'explorer une liste d\'hébergements avec images et détails, et de gérer un panier d\'achat pour les réservations.',
    objective: 'Développer une application mobile complète de réservation d\'hôtels avec une interface utilisateur intuitive, incluant la recherche, les filtres, les détails d\'hébergement, le système de panier et la navigation par onglets.',
    solution: 'Application mobile React Native avec Expo pour le développement cross-platform. Navigation par onglets avec Expo Router. Interface utilisateur avec composants React Native et StyleSheet. Gestion d\'état locale avec React hooks. Données statiques d\'hébergements pour la démonstration. Système de panier d\'achat avec calcul de total. Modals pour les détails d\'hôtel et le panier.',
    technologies: [
      'React Native 0.81.5',
      'Expo ~54.0.30',
      'Expo Router ~6.0.21',
      'React Navigation 7.x',
      'TypeScript ~5.9.2',
      '@expo/vector-icons',
      'react-native-reanimated',
      'react-native-gesture-handler',
      'react-native-safe-area-context',
      'react-native-screens',
    ],
    myRole: 'Participation au développement de l\'application mobile de réservation d\'hôtels avec React Native et Expo, incluant l\'interface utilisateur, la navigation, le système de panier et les fonctionnalités de recherche.',
    teamWork: 'Projet académique de développement mobile réalisé en équipe dans le cadre d\'un semestre d\'études.',
    architecture: 'Architecture React Native avec Expo pour le développement cross-platform (iOS, Android, Web). Navigation par onglets avec Expo Router et React Navigation Bottom Tabs. Gestion d\'état locale avec React hooks (useState). Composants modulaires pour l\'interface utilisateur (cartes d\'hôtels, modals, formulaires de recherche). Données statiques intégrées (hotelsData) pour la démonstration. StyleSheet pour le styling responsive.',
    architectureDiagram: null,
    methodology: 'Approche itérative avec développement des composants UI, implémentation de la navigation par onglets, création du système de recherche et de filtres, développement du système de panier d\'achat, intégration des modals pour les détails et le panier, et tests sur différentes plateformes.',
    implementation: 'Développement de l\'interface utilisateur avec React Native et StyleSheet. Création des composants de cartes d\'hôtels avec images, notes, étoiles et équipements. Implémentation de la navigation par onglets (Explorer, Favoris, Réservations, Profil) avec Expo Router. Développement du système de recherche avec filtres (prix, étoiles, équipements, type). Création du système de panier d\'achat avec ajout, suppression et calcul du total. Implémentation des modals pour les détails d\'hôtel et le panier. Intégration des icônes avec @expo/vector-icons. Configuration Expo pour iOS, Android et Web.',
    features: 'Recherche d\'hôtels (destination, dates, voyageurs), filtres (prix, étoiles, équipements, type), liste d\'hôtels avec cartes visuelles, détails d\'hôtel (image, localisation, note, étoiles, description, équipements), système de panier d\'achat, calcul du total du panier, paiement simulé avec Alert, navigation par onglets (Explorer, Favoris, Réservations, Profil), profil utilisateur avec menu, badges "Populaire" sur certains hôtels, système d\'évaluation avec étoiles, responsive design mobile.',
    results: 'Application mobile fonctionnelle avec interface utilisateur complète. Système de recherche opérationnel avec filtres. Liste d\'hôtels avec données de test (5 hôtels parisiens). Panier d\'achat fonctionnel avec ajout, suppression et calcul du total. Modal de détails d\'hôtel avec informations complètes. Navigation par onglets fonctionnelle. Profil utilisateur avec menu. Système de paiement simulé.',
    challenges: 'Gestion de l\'état local avec React hooks, implémentation des modals pour une bonne expérience utilisateur, responsive design pour différentes tailles d\'écran mobile, gestion des données statiques pour la démonstration, intégration de la navigation par onglets avec Expo Router.',
    improvements: 'Intégration d\'une API backend pour les données d\'hébergements réelles, ajout d\'une base de données pour les réservations utilisateurs, implémentation de l\'authentification utilisateur, ajout de fonctionnalités de favoris et d\'historique de réservations, intégration d\'un système de paiement réel, tests unitaires et tests d\'intégration automatisés, optimisation des performances pour les grandes listes d\'hébergements.',
  },
]

/**
 * Retourne un projet par son ID.
 * Utilisé par la page ProjectDetail.
 * Retourne undefined si le projet n'existe pas (→ page 404).
 */
export function getProjectById(id) {
  return projects.find((project) => project.id === id)
}

/**
 * Retourne les projets mis en avant (featured: true) en premier,
 * puis les autres dans l'ordre de déclaration.
 */
export function getSortedProjects() {
  return [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })
}
