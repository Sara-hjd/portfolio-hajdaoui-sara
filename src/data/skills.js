/**
 * skills.js
 * ---------
 * Source unique de vérité pour les compétences.
 *
 * RÈGLE IMPORTANTE :
 * N'ajouter que les compétences réellement maîtrisées.
 * Chaque skill peut avoir un niveau optionnel :
 *   'beginner' | 'intermediate' | 'advanced'
 * Le niveau n'est PAS affiché comme barre de progression —
 * il sert uniquement à trier ou filtrer si nécessaire.
 *
 * MODIFIER CE FICHIER pour ajouter/supprimer des compétences.
 * L'interface se met à jour automatiquement.
 */

export const skills = [
  {
    category: 'Langages de programmation',
    items: [
      { name: 'Python', level: 'intermediate' },
      { name: 'Java', level: 'intermediate' },
      { name: 'C', level: 'intermediate' },
      { name: 'C++', level: 'intermediate' },
      { name: 'SQL', level: 'intermediate' },
      { name: 'JavaScript', level: 'intermediate' },
      { name: 'TypeScript', level: 'intermediate' },
    ],
  },
  {
    category: 'Développement Web',
    items: [
      { name: 'HTML', level: 'intermediate' },
      { name: 'CSS', level: 'intermediate' },
      { name: 'JavaScript', level: 'intermediate' },
      { name: 'React.js', level: 'intermediate' },
      { name: 'React Native', level: 'intermediate' },
      { name: 'Expo', level: 'intermediate' },
      { name: 'Bootstrap', level: 'intermediate' },
      { name: 'Chart.js', level: 'intermediate' },
      { name: 'Axios', level: 'intermediate' },
      { name: 'React Webcam', level: 'intermediate' },
      { name: 'QRCode React', level: 'intermediate' },
      { name: 'HTML5 QRCode', level: 'intermediate' },
      { name: 'HTTP Proxy Middleware', level: 'intermediate' },
      { name: 'Streamlit', level: 'intermediate' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Django', level: 'intermediate' },
      { name: 'Django REST', level: 'intermediate' },
      { name: 'FastAPI', level: 'intermediate' },
      { name: 'API REST', level: 'intermediate' },
      { name: 'Django CORS Headers', level: 'intermediate' },
      { name: 'Pillow', level: 'intermediate' },
      { name: 'BeautifulSoup4', level: 'intermediate' },
      { name: 'httpx', level: 'intermediate' },
      { name: 'SQLAlchemy', level: 'intermediate' },
      { name: 'LangGraph', level: 'intermediate' },
      { name: 'LangChain Core', level: 'intermediate' },
      { name: 'OpenAI', level: 'intermediate' },
      { name: 'Pydantic', level: 'intermediate' },
      { name: 'Uvicorn', level: 'intermediate' },
    ],
  },
  {
    category: 'Bases de données',
    items: [
      { name: 'PostgreSQL', level: 'intermediate' },
      { name: 'SQL Server', level: 'intermediate' },
      { name: 'Oracle', level: 'intermediate' },
      { name: 'MongoDB', level: 'intermediate' },
      { name: 'SQLite', level: 'intermediate' },
      { name: 'MySQL', level: 'intermediate' },
    ],
  },
  {
    category: 'Data / IA',
    items: [
      { name: 'Machine Learning', level: 'intermediate' },
      { name: 'Analyse de données', level: 'intermediate' },
      { name: 'Big Data', level: 'intermediate' },
      { name: 'Pipeline IA multi-agents', level: 'intermediate' },
      { name: 'Scraping web', level: 'intermediate' },
      { name: 'Recherche sémantique', level: 'intermediate' },
      { name: 'Sentence Transformers', level: 'intermediate' },
    ],
  },
  {
    category: 'LLM / GenAI',
    items: [
      { name: 'Groq', level: 'intermediate' },
      { name: 'Llama', level: 'intermediate' },
    ],
  },
  {
    category: 'Outils',
    items: [
      { name: 'Git', level: 'intermediate' },
      { name: 'GitHub', level: 'intermediate' },
      { name: 'Docker', level: 'intermediate' },
      { name: 'Docker Compose', level: 'intermediate' },
      { name: 'FFmpeg', level: 'intermediate' },
      { name: 'Nginx', level: 'intermediate' },
      { name: 'Certbot', level: 'intermediate' },
      { name: 'VS Code', level: 'intermediate' },
      { name: 'Leaflet', level: 'intermediate' },
      { name: 'MCP', level: 'intermediate' },
    ],
  },
  {
    category: 'Modélisation & Conception',
    items: [
      { name: 'UML', level: 'intermediate' },
      { name: 'Merise (MCD)', level: 'intermediate' },
      { name: 'Diagramme de cas d\'utilisation', level: 'intermediate' },
      { name: 'Diagramme de séquence', level: 'intermediate' },
      { name: 'Diagramme de classes', level: 'intermediate' },
      { name: 'Diagramme d\'activité', level: 'intermediate' },
    ],
  },
  {
    category: 'Soft skills',
    items: [
      { name: 'Travail en équipe', level: 'intermediate' },
      { name: 'Gestion du temps', level: 'intermediate' },
      { name: 'Communication', level: 'intermediate' },
      { name: 'Esprit critique', level: 'intermediate' },
    ],
  },
]
