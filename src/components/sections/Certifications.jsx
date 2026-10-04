/**
 * Certifications.jsx
 * ------------------
 * Section Certifications avec grille de cartes.
 */

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getSortedCertifications } from '../../data/certifications.js'
import { FiExternalLink, FiAward, FiChevronDown } from 'react-icons/fi'

export default function Certifications() {
  const { t } = useTranslation()
  const certifications = getSortedCertifications()
  const [expandedSkills, setExpandedSkills] = useState({})

  const toggleSkills = (certId) => {
    setExpandedSkills(prev => ({
      ...prev,
      [certId]: !prev[certId]
    }))
  }

  return (
    <section className="certifications section" id="certifications">
      <div className="container certifications__container">
        <h2 className="section__title">{t('certifications.title')}</h2>
        
        {certifications.length > 0 ? (
          <div className="certifications__grid">
            {certifications.map((cert) => {
              const isExpanded = expandedSkills[cert.id]
              const showAllSkills = isExpanded || cert.skills.length <= 6
              const certKey = cert.id.replace(/-/g, '').toLowerCase()

              return (
                <article key={cert.id} className="certification-card">
                  <div className="certification-card__header">
                    <div className="certification-card__icon">
                      <FiAward aria-hidden="true" />
                    </div>
                    <div className="certification-card__meta">
                      <h3 className="certification-card__title">{t(`certifications.${certKey}.title`, { defaultValue: cert.title })}</h3>
                      <p className="certification-card__issuer">{cert.issuer}</p>
                      <p className="certification-card__date">{cert.date}</p>
                    </div>
                  </div>

                  <p className="certification-card__description">{t(`certifications.${certKey}.description`, { defaultValue: cert.description })}</p>

                  {cert.skills && cert.skills.length > 0 && (
                    <div className="certification-card__skills">
                      {cert.skills.slice(0, showAllSkills ? cert.skills.length : 6).map((skill, index) => (
                        <span key={index} className="certification-card__skill">
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 6 && (
                        <button
                          className="certification-card__skill certification-card__skill--toggle"
                          onClick={() => toggleSkills(cert.id)}
                          aria-label={isExpanded ? t('certifications.seeLessSkills') : t('certifications.seeMoreSkills')}
                        >
                          {isExpanded ? (
                            <>
                              <FiChevronDown aria-hidden="true" className="rotate-180" />
                              {t('projects.modal.seeLess')}
                            </>
                          ) : (
                            <>
                              <FiChevronDown aria-hidden="true" />
                              +{cert.skills.length - 6}
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  )}

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certification-card__link"
                      aria-label={t('certifications.verifyLabel', { title: cert.title })}
                    >
                      <span>{t('certifications.verify')}</span>
                      <FiExternalLink aria-hidden="true" />
                    </a>
                  )}

                  {cert.certificateFile && (
                    <a
                      href={cert.certificateFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certification-card__file"
                      aria-label={t('certifications.certificateLabel', { title: cert.title })}
                    >
                      <span>{t('certifications.certificatePdf')}</span>
                    </a>
                  )}
                </article>
              )
            })}
          </div>
        ) : (
          <div className="certifications__empty">
            <p>{t('certifications.empty')}</p>
          </div>
        )}
      </div>
    </section>
  )
}
