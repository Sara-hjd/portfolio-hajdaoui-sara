/**
 * Footer.jsx
 * ----------
 * Footer minimal avec informations essentielles.
 */

import { useTranslation } from 'react-i18next'
import { personal } from '../../data/personal.js'
import { FiMail, FiGithub } from 'react-icons/fi'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__content">
          <div className="footer__identity">
            <p className="footer__name">{personal.name}</p>
            <p className="footer__tagline">{t('footer.tagline')}</p>
          </div>

          <div className="footer__links">
            {personal.email && (
              <a
                href={`mailto:${personal.email}`}
                className="footer__link"
                aria-label={t('footer.emailLabel')}
              >
                <FiMail aria-hidden="true" />
              </a>
            )}
            {personal.github && (
              <a
                href={personal.github}
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('footer.githubLabel')}
              >
                <FiGithub aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <p className="footer__copyright">
          {t('footer.copyright', { year: currentYear, name: personal.name })}
        </p>
      </div>
    </footer>
  )
}
