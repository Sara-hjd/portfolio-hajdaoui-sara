/**
 * ProjectModal.jsx
 * ----------------
 * Modal pour afficher les détails d'un projet sur la page d'accueil.
 */

import { useTranslation } from 'react-i18next'
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectModal({ project, onClose }) {
  const { t } = useTranslation()
  if (!project) return null

  const projectKey = project.id.replace(/-/g, '')

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal__close" onClick={onClose} aria-label={t('projects.modal.closeLabel')}>
          <FiX aria-hidden="true" />
        </button>

        <div className="project-modal__content">
          {/* Header */}
          <header className="project-modal__header">
            <div className="project-modal__meta">
              <span className="project-modal__type">
                {project.type === 'academic' ? t('projects.modal.type.academic') : 
                 project.type === 'professional' ? t('projects.modal.type.professional') : t('projects.modal.type.personal')}
              </span>
              <span className="project-modal__year">{project.year}</span>
            </div>
            <h2 className="project-modal__title">{t(`projects.${projectKey}.title`, { defaultValue: project.title })}</h2>
            <p className="project-modal__description">{t(`projects.${projectKey}.shortDescription`, { defaultValue: project.shortDescription })}</p>

            {/* Cover Image */}
            {project.coverImage && (
              <div className="project-modal__cover">
                <img src={project.coverImage} alt={project.title} className="project-modal__cover-img" />
              </div>
            )}

            {/* Tags */}
            <div className="project-modal__tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="project-modal__tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="project-modal__links">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="project-modal__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub aria-hidden="true" />
                  {t('projects.modal.github')}
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  className="project-modal__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink aria-hidden="true" />
                  {t('projects.modal.demo')}
                </a>
              )}
            </div>
          </header>

          {/* Content Sections */}
          <div className="project-modal__body">
            {project.show.problem && project.problem && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.problem')}</h3>
                <p className="project-modal__text">{t(`projects.${projectKey}.problem`, { defaultValue: project.problem })}</p>
              </section>
            )}

            {project.show.overview && project.overview && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.overview')}</h3>
                <p className="project-modal__text">{t(`projects.${projectKey}.overview`, { defaultValue: project.overview })}</p>
              </section>
            )}

            {project.show.objective && project.objective && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.objective')}</h3>
                <p className="project-modal__text">{t(`projects.${projectKey}.objective`, { defaultValue: project.objective })}</p>
              </section>
            )}

            {project.show.solution && project.solution && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.solution')}</h3>
                <p className="project-modal__text">{t(`projects.${projectKey}.solution`, { defaultValue: project.solution })}</p>
              </section>
            )}

            {project.show.technologies && project.technologies && project.technologies.length > 0 && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.technologies')}</h3>
                <div className="project-modal__tech-list">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project-modal__tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {project.show.myRole && project.myRole && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.myRole')}</h3>
                <p className="project-modal__text">{t(`projects.${projectKey}.myRole`, { defaultValue: project.myRole })}</p>
              </section>
            )}

            {project.show.teamWork && project.teamWork && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.teamWork')}</h3>
                <p className="project-modal__text">{t(`projects.${projectKey}.teamWork`, { defaultValue: project.teamWork })}</p>
              </section>
            )}

            {project.show.architecture && project.architecture && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.architecture')}</h3>
                <p className="project-modal__text">{t(`projects.${projectKey}.architecture`, { defaultValue: project.architecture })}</p>
                {project.architectureDiagram && (
                  <div className="project-modal__diagram">
                    <img 
                      src={project.architectureDiagram} 
                      alt="Architecture" 
                      className="project-modal__diagram-img"
                    />
                  </div>
                )}
              </section>
            )}

            {project.show.methodology && project.methodology && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.methodology')}</h3>
                <p className="project-modal__text">{t(`projects.${projectKey}.methodology`, { defaultValue: project.methodology })}</p>
              </section>
            )}

            {project.show.pipelineIA && project.pipelineIA && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.pipelineIA')}</h3>
                <p className="project-modal__text">{t(`projects.${projectKey}.pipelineIA`, { defaultValue: project.pipelineIA })}</p>
                {project.pipelineDiagram && (
                  <div className="project-modal__diagram">
                    <img 
                      src={project.pipelineDiagram} 
                      alt="Pipeline IA" 
                      className="project-modal__diagram-img"
                    />
                  </div>
                )}
              </section>
            )}

            {project.show.scraping && project.scraping && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.scraping')}</h3>
                <p className="project-modal__text">{t(`projects.${projectKey}.scraping`, { defaultValue: project.scraping })}</p>
              </section>
            )}

            {project.show.semanticSearch && project.semanticSearch && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.semanticSearch')}</h3>
                <p className="project-modal__text">{t(`projects.${projectKey}.semanticSearch`, { defaultValue: project.semanticSearch })}</p>
              </section>
            )}

            {project.show.backend && project.backend && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.backend')}</h3>
                <p className="project-modal__text">{t(`projects.${projectKey}.backend`, { defaultValue: project.backend })}</p>
              </section>
            )}

            {project.show.frontend && project.frontend && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.frontend')}</h3>
                <p className="project-modal__text">{t(`projects.${projectKey}.frontend`, { defaultValue: project.frontend })}</p>
              </section>
            )}

            {project.show.features && project.features && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.features')}</h3>
                <p className="project-modal__text">{t(`projects.${projectKey}.features`, { defaultValue: project.features })}</p>
              </section>
            )}

            {project.show.implementation && project.implementation && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.implementation')}</h3>
                <p className="project-modal__text">{t(`projects.${projectKey}.implementation`, { defaultValue: project.implementation })}</p>
              </section>
            )}

            {project.show.results && project.results && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.results')}</h3>
                <p className="project-modal__text">{t(`projects.${projectKey}.results`, { defaultValue: project.results })}</p>
              </section>
            )}

            {project.show.challenges && project.challenges && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.challenges')}</h3>
                <p className="project-modal__text">{t(`projects.${projectKey}.challenges`, { defaultValue: project.challenges })}</p>
              </section>
            )}

            {project.show.improvements && project.improvements && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.improvements')}</h3>
                <p className="project-modal__text">{t(`projects.${projectKey}.improvements`, { defaultValue: project.improvements })}</p>
              </section>
            )}

            {project.show.images && project.images && project.images.length > 0 && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">{t('projects.modal.sections.gallery')}</h3>
                <div className="project-modal__gallery">
                  {project.images.map((image, index) => (
                    <div key={index} className="project-modal__gallery-item">
                      <img 
                        src={image.url} 
                        alt={image.caption || `Image ${index + 1}`} 
                        className="project-modal__gallery-img"
                      />
                      {image.caption && (
                        <p className="project-modal__gallery-caption">{image.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
