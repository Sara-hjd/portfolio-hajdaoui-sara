/**
 * ProjectDetailPage.jsx
 * --------------------
 * Page détaillée pour un projet avec toutes les sections bilingues FR/EN.
 * Structure inspirée de la page de référence, avec sélecteur de langue.
 */

import { useParams, Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef } from 'react'
import { getProjectDetailBySlug, getAllProjectSlugs } from '../data/projects-detailed.js'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import NotFound from './NotFound.jsx'
import { FiArrowLeft, FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const { i18n, t } = useTranslation()
  const navigate = useNavigate()
  const project = getProjectDetailBySlug(slug)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Fermer le dropdown au clic extérieur
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsLangDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setIsLangDropdownOpen(false)
  }

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
  ]

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0]

  // Navigation précédent/suivant
  const allSlugs = getAllProjectSlugs()
  const currentIndex = allSlugs.indexOf(slug)
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null

  if (!project) {
    return <NotFound />
  }

  const content = project[i18n.language] || project.fr

  // Fonction helper pour vérifier si un contenu existe et n'est pas vide
  const hasContent = (value) => {
    if (Array.isArray(value)) return value.length > 0 && value.some(item => item && item.trim() !== '')
    return value && value.trim() !== ''
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className="project-detail-page">
        <div className="container project-detail-page__container">
          {/* Back button + Language selector */}
          <div className="project-detail-page__header-actions">
            <Link to="/" className="project-detail-page__back">
              <FiArrowLeft aria-hidden="true" />
              {t('projectDetail.backToProjects')}
            </Link>

            {/* Language selector */}
            <div className="project-detail-page__lang-dropdown" ref={dropdownRef}>
              <button
                className="project-detail-page__lang-trigger"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                aria-label={t('languageSelector.label')}
                aria-expanded={isLangDropdownOpen}
              >
                <span className="project-detail-page__lang-flag">{currentLang.flag}</span>
                <span className="project-detail-page__lang-code">{currentLang.code.toUpperCase()}</span>
              </button>
              {isLangDropdownOpen && (
                <div className="project-detail-page__lang-menu">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`project-detail-page__lang-option ${i18n.language === lang.code ? 'project-detail-page__lang-option--active' : ''}`}
                      onClick={() => changeLanguage(lang.code)}
                      aria-label={lang.name}
                    >
                      <span className="project-detail-page__lang-option-flag">{lang.flag}</span>
                      <span className="project-detail-page__lang-option-name">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Header */}
          <header className="project-detail-page__header">
            <div className="project-detail-page__number">{project.number}</div>
            <div className="project-detail-page__meta">
              <span className="project-detail-page__type">{content.type}</span>
              <span className="project-detail-page__context">{content.context}</span>
              <span className="project-detail-page__year">{content.year}</span>
            </div>
            <h1 className="project-detail-page__title">{content.title}</h1>
            <p className="project-detail-page__summary">{content.summary}</p>

            {/* Tags */}
            <div className="project-detail-page__tags">
              {content.tags.map((tag, index) => (
                <span key={index} className="project-detail-page__tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Confidentiality badge */}
            {content.confidential && (
              <div className="project-detail-page__confidentiality">
                {t('projectDetail.confidentialCode')}
              </div>
            )}

            {/* Note */}
            {hasContent(content.note) && (
              <div className="project-detail-page__note">
                {content.note}
              </div>
            )}
          </header>

          {/* Key info */}
          <section className="project-detail-page__key-info">
            {hasContent(content.team) && (
              <div className="project-detail-page__info-item">
                <span className="project-detail-page__info-label">{t('projectDetail.team')}</span>
                <span className="project-detail-page__info-value">{content.team}</span>
              </div>
            )}
            <div className="project-detail-page__info-item">
              <span className="project-detail-page__info-label">{t('projectDetail.stack')}</span>
              <div className="project-detail-page__info-value">
                {content.stack.map((tech, index) => (
                  <span key={index} className="project-detail-page__tech">{tech}</span>
                ))}
              </div>
            </div>
            {hasContent(content.status) && (
              <div className="project-detail-page__info-item">
                <span className="project-detail-page__info-label">{t('projectDetail.status')}</span>
                <span className="project-detail-page__info-value">{content.status}</span>
              </div>
            )}
          </section>

          {/* Content sections */}
          <div className="project-detail-page__content">
            {/* Problem */}
            {hasContent(content.problem) && (
              <section className="project-detail-page__section">
                <h2 className="project-detail-page__section-title">{t('projectDetail.problem')}</h2>
                <p className="project-detail-page__text">{content.problem}</p>
              </section>
            )}

            {/* Contribution */}
            {hasContent(content.contribution) && (
              <section className="project-detail-page__section">
                <h2 className="project-detail-page__section-title">{t('projectDetail.contribution')}</h2>
                <p className="project-detail-page__text">{content.contribution}</p>
              </section>
            )}

            {/* Approach */}
            {hasContent(content.approach) && (
              <section className="project-detail-page__section">
                <h2 className="project-detail-page__section-title">{t('projectDetail.approach')}</h2>
                <ul className="project-detail-page__list">
                  {content.approach.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Pipeline */}
            {hasContent(content.pipeline) && (
              <section className="project-detail-page__section">
                <h2 className="project-detail-page__section-title">{t('projectDetail.pipeline')}</h2>
                <div className="project-detail-page__pipeline">
                  <p className="project-detail-page__text">{content.pipeline}</p>
                </div>
              </section>
            )}

            {/* Features */}
            {hasContent(content.features) && (
              <section className="project-detail-page__section">
                <h2 className="project-detail-page__section-title">{t('projectDetail.features')}</h2>
                <ul className="project-detail-page__list">
                  {content.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Results */}
            {hasContent(content.results) && (
              <section className="project-detail-page__section">
                <h2 className="project-detail-page__section-title">{t('projectDetail.results')}</h2>
                <p className="project-detail-page__text">{content.results}</p>
              </section>
            )}

            {/* Limitations */}
            {hasContent(content.limitations) && content.limitations.length > 0 && (
              <section className="project-detail-page__section">
                <h2 className="project-detail-page__section-title">{t('projectDetail.limitations')}</h2>
                <ul className="project-detail-page__list">
                  {content.limitations.map((limitation, index) => (
                    <li key={index}>{limitation}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Perspectives */}
            {hasContent(content.perspectives) && content.perspectives.length > 0 && (
              <section className="project-detail-page__section">
                <h2 className="project-detail-page__section-title">{t('projectDetail.perspectives')}</h2>
                <ul className="project-detail-page__list">
                  {content.perspectives.map((perspective, index) => (
                    <li key={index}>{perspective}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Learnings */}
            {hasContent(content.learnings) && content.learnings.length > 0 && (
              <section className="project-detail-page__section">
                <h2 className="project-detail-page__section-title">{t('projectDetail.learnings')}</h2>
                <ul className="project-detail-page__list">
                  {content.learnings.map((learning, index) => (
                    <li key={index}>{learning}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Links */}
            {(content.githubUrl || content.demoUrl) && (
              <section className="project-detail-page__section">
                <h2 className="project-detail-page__section-title">{t('projectDetail.links')}</h2>
                <div className="project-detail-page__links">
                  {content.githubUrl && (
                    <a
                      href={content.githubUrl}
                      className="project-detail-page__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub aria-hidden="true" />
                      GitHub
                    </a>
                  )}
                  {content.demoUrl && (
                    <a
                      href={content.demoUrl}
                      className="project-detail-page__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink aria-hidden="true" />
                      {t('projectDetail.demo')}
                    </a>
                  )}
                </div>
              </section>
            )}
          </div>

          {/* Navigation prev/next */}
          <div className="project-detail-page__nav">
            {prevSlug && (
              <Link to={`/project-detail/${prevSlug}`} className="project-detail-page__nav-link project-detail-page__nav-link--prev">
                <FiChevronLeft aria-hidden="true" />
                {t('projectDetail.previousProject')}
              </Link>
            )}
            {nextSlug && (
              <Link to={`/project-detail/${nextSlug}`} className="project-detail-page__nav-link project-detail-page__nav-link--next">
                {t('projectDetail.nextProject')}
                <FiChevronRight aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
