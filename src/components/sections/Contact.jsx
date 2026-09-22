/**
 * Contact.jsx
 * ----------
 * Section Contact finale du portfolio.
 */

import { useTranslation } from 'react-i18next'
import { personal } from '../../data/personal.js'
import { FiMail, FiGithub } from 'react-icons/fi'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section className="contact section" id="contact">
      <div className="container contact__container">
        <h2 className="contact__title">{t('contact.title')}</h2>

        <div className="contact__content">
          <p className="contact__text-primary">
            {t('contact.textPrimary')}
          </p>

          <p className="contact__text-secondary">
            {t('contact.textSecondary')}
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
