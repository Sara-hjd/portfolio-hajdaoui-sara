/**
 * Certifications.jsx
 * ------------------
 * Section Certifications avec grille de cartes.
 */

import { useState } from 'react'
import { getSortedCertifications } from '../../data/certifications.js'
import { FiExternalLink, FiAward, FiChevronDown } from 'react-icons/fi'

export default function Certifications() {
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
        <h2 className="section__title">Certifications</h2>
        
        {certifications.length > 0 ? (
          <div className="certifications__grid">
            {certifications.map((cert) => {
              const isExpanded = expandedSkills[cert.id]
              const showAllSkills = isExpanded || cert.skills.length <= 6
              
              return (
                <article key={cert.id} className="certification-card">
                  <div className="certification-card__header">
                    <div className="certification-card__icon">
                      <FiAward aria-hidden="true" />
                    </div>
                    <div className="certification-card__meta">
                      <span className="certification-card__date">{cert.date}</span>
                      {cert.issuer && (
                        <span className="certification-card__issuer">{cert.issuer}</span>
                      )}
                    </div>
                  </div>

                  <h3 className="certification-card__title">{cert.title}</h3>

                  {cert.description && (
                    <p className="certification-card__description">{cert.description}</p>
                  )}

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
                          aria-label={isExpanded ? 'Voir moins de compétences' : 'Voir plus de compétences'}
                        >
                          {isExpanded ? (
                            <>
                              <FiChevronDown aria-hidden="true" className="rotate-180" />
                              Voir moins
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
                      aria-label={`Vérifier la certification ${cert.title} (nouvelle fenêtre)`}
                    >
                      <span>Vérifier</span>
                      <FiExternalLink aria-hidden="true" />
                    </a>
                  )}

                  {cert.certificateFile && (
                    <a
                      href={cert.certificateFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certification-card__file"
                      aria-label={`Télécharger le certificat ${cert.title} (nouvelle fenêtre)`}
                    >
                      <span>Certificat PDF</span>
                    </a>
                  )}
                </article>
              )
            })}
          </div>
        ) : (
          <div className="certifications__empty">
            <p>Aucune certification à afficher pour le moment.</p>
          </div>
        )}
      </div>
    </section>
  )
}
