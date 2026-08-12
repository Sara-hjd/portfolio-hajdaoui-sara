/**
 * education.js
 * ------------
 * Source unique de vérité pour la formation académique.
 *
 * RÈGLES IMPORTANTES :
 * - Ne jamais inventer d'établissements, diplômes, dates.
 * - Compléter uniquement avec de vraies informations.
 * - Items affichés du plus récent au plus ancien.
 *
 * TYPES :
 * - 'engineering'  → École d'ingénieurs
 * - 'university'   → Université (licence, master)
 * - 'preparatory'  → Classe préparatoire
 * - 'highschool'   → Baccalauréat
 * - 'certification' → Certification professionnelle
 * - 'mooc'         → Formation en ligne certifiante
 */

export const education = [
  {
    id: 'engineering-current',
    type: 'engineering',
    degree: 'Cycle d\'ingénierie en informatique',
    field: 'Intelligence Artificielle & Data',
    institution: 'École Marocaine des Sciences de l\'Ingénieur (EMSI)',
    location: null,
    startDate: '2025',
    endDate: null,
    current: true,
    description: 'Cycle d\'ingénierie en informatique, spécialité Intelligence Artificielle & Data.',
    relevantCourses: [],
    honors: null,
  },
  {
    id: 'preparatory',
    type: 'preparatory',
    degree: 'Année préparatoire',
    field: 'Pôle Ingénierie — option développement informatique et industriel',
    institution: 'École Marocaine des Sciences de l\'Ingénieur (EMSI)',
    location: null,
    startDate: '2022',
    endDate: '2025',
    current: false,
    description: 'Année préparatoire, Pôle Ingénierie, option développement informatique et industriel.',
    relevantCourses: [],
    honors: null,
  },
  {
    id: 'baccalaureat',
    type: 'highschool',
    degree: 'Baccalauréat scientifique',
    field: 'Sciences physiques',
    institution: 'Groupe Scolaire Berrada',
    location: null,
    startDate: '2021',
    endDate: '2022',
    current: false,
    description: 'Baccalauréat scientifique option Sciences physiques.',
    relevantCourses: [],
    honors: null,
  },
]
