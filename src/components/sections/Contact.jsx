/**
 * Contact.jsx
 * ----------
 * Section Contact finale du portfolio.
 */

import { personal } from '../../data/personal.js'
import { FiMail, FiGithub } from 'react-icons/fi'

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container contact__container">
        <h2 className="contact__title">Construisons quelque chose ensemble.</h2>

        <div className="contact__content">
          <p className="contact__text-primary">
            Je recherche actuellement un projet de fin d'études pour 2027, avec un intérêt particulier pour les projets en Intelligence Artificielle, Machine Learning et Data.
          </p>

          <p className="contact__text-secondary">
            Mon profil combine développement frontend et backend, traitement des données, scraping, Machine Learning et intégration de solutions IA. Je suis ouverte aux opportunités permettant de travailler sur des problématiques concrètes et de contribuer à un projet de bout en bout.
          </p>

          <div className="contact__skills">
            <span className="contact__skill">Frontend</span>
            <span className="contact__skill-separator">•</span>
            <span className="contact__skill">Backend</span>
            <span className="contact__skill-separator">•</span>
            <span className="contact__skill">IA</span>
            <span className="contact__skill-separator">•</span>
            <span className="contact__skill">Machine Learning</span>
            <span className="contact__skill-separator">•</span>
            <span className="contact__skill">Data</span>
            <span className="contact__skill-separator">•</span>
            <span className="contact__skill">Scraping</span>
            <span className="contact__skill-separator">•</span>
            <span className="contact__skill">Pipelines IA</span>
          </div>

          <div className="contact__links">
            <a
              href={`mailto:${personal.email}`}
              className="contact__link contact__link--primary"
            >
              <FiMail aria-hidden="true" />
              <span>Me contacter</span>
            </a>

            {personal.github && (
              <a
                href={personal.github}
                className="contact__link contact__link--secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub aria-hidden="true" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
