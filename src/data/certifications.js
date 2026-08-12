/**
 * certifications.js
 * ----------------
 * Source unique de vérité pour les certifications.
 *
 * RÈGLES IMPORTANTES :
 * - Ne jamais inventer de certifications.
 * - Si aucune certification n'est disponible → tableau vide.
 * - Les fichiers de certificats doivent être déposés dans /public/certifications/
 *
 * STRUCTURE D'UNE CERTIFICATION :
 * {
 *   id: 'identifiant-unique',
 *   title: 'Nom de la certification',
 *   issuer: 'Organisme émetteur',
 *   date: 'Mois Année',
 *   credentialId: 'ID du certificat (optionnel)',
 *   credentialUrl: 'URL de vérification (optionnel)',
 *   certificateFile: '/certifications/fichier.pdf' (optionnel),
 *   description: 'Description courte (optionnel)',
 *   skills: ['Compétence 1', 'Compétence 2'] (optionnel),
 * }
 */

export const certifications = [
  {
    id: 'agile-project-management',
    title: 'Agile Project Management',
    issuer: 'Google',
    date: 'June 2026',
    credentialUrl: 'https://coursera.org/share/e829dbbd21e882ac8f9f0bbdfd466efc',
    certificateFile: '/certifications/Agile Project Management.pdf',
    description: 'Formation sur l\'approche Agile de gestion de projet, incluant les valeurs et principes Agile, les piliers de Scrum, les événements Scrum, et le coaching d\'équipes Agile.',
    skills: [
      'User Story',
      'Organizational Change',
      'Coaching',
      'Agile Product Development',
      'Problem Solving',
      'Product Roadmaps',
      'Project Management Software',
      'Agile Software Development',
      'Team Building',
      'Sprint Planning',
      'Prioritization',
      'Team Management',
    ],
  },
  {
    id: 'introduction-to-big-data',
    title: 'Introduction to Big Data',
    issuer: 'University of California San Diego',
    date: 'June 2026',
    credentialUrl: 'https://coursera.org/share/21f9fd0831568464af4402ed9d621459',
    certificateFile: '/certifications/Introduction to Big Data.pdf',
    description: 'Introduction aux concepts fondamentaux du Big Data, incluant le calcul distribué, l\'analyse de données, les systèmes de fichiers, Apache Hadoop, et l\'infrastructure de données.',
    skills: [
      'Distributed Computing',
      'Data Analysis',
      'File Systems',
      'Apache Hadoop',
      'Scalability',
      'Data Processing',
      'Data Science',
      'Data Infrastructure',
      'Data Quality',
      'Unstructured Data',
      'Big Data',
    ],
  },
  {
    id: 'react-native',
    title: 'React Native',
    issuer: 'Meta',
    date: 'December 2025',
    credentialUrl: 'https://coursera.org/share/a21a5355a8da8825924f41d445affc9a',
    certificateFile: '/certifications/React Native.pdf',
    description: 'Formation sur le développement d\'applications mobiles avec React Native, incluant l\'environnement de développement, les composants UI, le développement cross-platform, et les outils de développement mobile.',
    skills: [
      'React Native',
      'Application Development',
      'Development Environment',
      'Cross Platform Development',
      'React.js',
      'UI Components',
      'Mobile Development',
      'Interactive Design',
      'Mobile Development Tools',
      'User Interface (UI)',
      'Front-End Web Development',
    ],
  },
  {
    id: 'react-basics',
    title: 'React Basics',
    issuer: 'Meta',
    date: 'December 2025',
    credentialUrl: 'https://coursera.org/share/bfe65a0f6fb0557305221d4dfa06c9c9',
    certificateFile: '/certifications/React Basics.pdf',
    description: 'Formation sur les fondamentaux de React, incluant les composants réutilisables, le dataflow, la gestion des props, le développement d\'applications React, et la programmation événementielle.',
    skills: [
      'Dataflow',
      'Code Reusability',
      'User Interface (UI)',
      'Javascript',
      'Mobile Development',
      'Front-End Web Development',
      'UI Components',
      'Development Environment',
      'React.js',
      'Webpack',
      'Application Development',
      'Event-Driven Programming',
    ],
  },
  {
    id: 'successful-negotiation',
    title: 'Successful Negotiation: Essential Strategies and Skills',
    issuer: 'University of Michigan',
    date: 'January 2025',
    credentialUrl: 'https://coursera.org/share/aa7a2575a01a67e95f22ae2df0c38e95',
    certificateFile: '/certifications/Successful Negotiation Essential Strategies and Skillspdf.pdf',
    description: 'Formation sur les stratégies et compétences essentielles de négociation, incluant l\'analyse de négociation, les outils psychologiques, la communication interculturelle, et la pratique de négociations.',
    skills: [
      'Contract Negotiation',
      'Decision Making',
      'Business Communication',
      'Intercultural Competence',
      'Price Negotiation',
      'Planning',
      'Constructive Feedback',
      'Ethical Standards And Conduct',
      'Communication',
      'Cultural Sensitivity',
      'Mediation',
      'Analysis',
    ],
  },
  {
    id: 'interactivity-with-javascript',
    title: 'Interactivity with JavaScript',
    issuer: 'University of Michigan',
    date: 'January 2025',
    credentialUrl: 'https://coursera.org/share/d6d7d6a7f0a21df299ec00fd1cc2368f',
    certificateFile: '/certifications/Interactivity with JavaScript.pdf',
    description: 'Formation sur l\'interactivité avec JavaScript, incluant la réaction aux événements utilisateur, l\'écriture de code JavaScript pour l\'interaction, les directives d\'accessibilité, et le débogage.',
    skills: [
      'Javascript',
      'Web Design and Development',
      'Cascading Style Sheets (CSS)',
      'Web Content Accessibility Guidelines',
      'Web Development',
      'Hypertext Markup Language (HTML)',
      'Web Development Tools',
      'Interactive Design',
      'Debugging',
      'Web Design',
      'HTML and CSS',
      'Data Structures',
    ],
  },
  {
    id: 'successful-presentation',
    title: 'Successful Presentation',
    issuer: 'University of Colorado Boulder',
    date: 'May 2024',
    credentialUrl: 'https://coursera.org/share/2a4e4f9b37c0d748c474c26b8a4ae19e',
    certificateFile: '/certifications/Successful Presentation.pdf',
    description: 'Formation sur les compétences de présentation publique, incluant la présence exécutive, la communication verbale, les stratégies de communication, le storytelling, et l\'expression orale.',
    skills: [
      'Executive Presence',
      'Composure',
      'Verbal Communication Skills',
      'Presentations',
      'Editing',
      'Storytelling',
      'Communication',
      'Communication Strategies',
      'Public Speaking',
      'Oral Expression',
      'Adaptability',
      'Business Writing',
    ],
  },
]

/**
 * Retourne les certifications triées par date (plus récent en premier).
 */
export function getSortedCertifications() {
  return [...certifications].sort((a, b) => {
    // Tri par date si disponible
    if (a.date && b.date) {
      return new Date(b.date) - new Date(a.date)
    }
    return 0
  })
}
