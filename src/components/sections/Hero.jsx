/**
 * Hero.jsx
 * ----------
 * Section hero principale avec introduction et CTA.
 */

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { personal } from '../../data/personal.js'
import { FiArrowRight, FiMail, FiGithub } from 'react-icons/fi'
import CvDownloadButton from '../ui/CvDownloadButton.jsx'
import CvPreviewButton from '../ui/CvPreviewButton.jsx'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero" id="hero">
      <div className="container hero__container">
        <div className="hero__content">
          {personal.photoUrl && (
            <div className="hero__photo">
              <img src={personal.photoUrl} alt={personal.name} className="hero__photo-img" />
            </div>
          )}
          <div className="hero__text">
            <h1 className="hero__title">{personal.name}</h1>
            <p className="hero__subtitle">{t('hero.title')}</p>
            <p className="hero__bio">{t('hero.shortBio')}</p>

            <div className="hero__actions-nav">
              <Link to="/" onClick={(e) => {
                e.preventDefault()
                const projectsSection = document.getElementById('projects')
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' })
                }
              }} className="btn btn--primary">
                {t('hero.viewProjects')}
                <FiArrowRight aria-hidden="true" />
              </Link>
              <a
                href={`mailto:${personal.email}`}
                className="btn btn--secondary"
              >
                <FiMail aria-hidden="true" />
                {t('hero.contactMe')}
              </a>
              {personal.github && (
                <a
                  href={personal.github}
                  className="hero__github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub aria-hidden="true" />
                  {t('hero.github')}
                </a>
              )}
            </div>

            <div className="hero__actions-cv">
              <span className="hero__cv-label">{t('cv.label')}</span>
              <div className="hero__cv-buttons">
                <CvPreviewButton />
                <CvDownloadButton />
              </div>
            </div>

            {personal.seekingPFE && (
              <div className="hero__status">
                <span className="hero__status-badge">
                  {t('hero.seekingPFE', { year: personal.pfeYear })}
                </span>
                <span className="hero__status-text">{t('hero.pfeNote', { note: personal.pfeNote })}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
