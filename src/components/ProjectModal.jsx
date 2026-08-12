/**
 * ProjectModal.jsx
 * ----------------
 * Modal pour afficher les détails d'un projet sur la page d'accueil.
 */

import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal__close" onClick={onClose} aria-label="Fermer">
          <FiX aria-hidden="true" />
        </button>

        <div className="project-modal__content">
          {/* Header */}
          <header className="project-modal__header">
            <div className="project-modal__meta">
              <span className="project-modal__type">
                {project.type === 'academic' ? 'Projet académique' : 
                 project.type === 'professional' ? 'Projet professionnel' : 'Projet personnel'}
              </span>
              <span className="project-modal__year">{project.year}</span>
            </div>
            <h2 className="project-modal__title">{project.title}</h2>
            <p className="project-modal__description">{project.shortDescription}</p>

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
                  GitHub
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
                  Démo
                </a>
              )}
            </div>
          </header>

          {/* Content Sections */}
          <div className="project-modal__body">
            {project.show.problem && project.problem && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">Problème</h3>
                <p className="project-modal__text">{project.problem}</p>
              </section>
            )}

            {project.show.overview && project.overview && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">Présentation</h3>
                <p className="project-modal__text">{project.overview}</p>
              </section>
            )}

            {project.show.objective && project.objective && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">Objectif</h3>
                <p className="project-modal__text">{project.objective}</p>
              </section>
            )}

            {project.show.solution && project.solution && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">Solution</h3>
                <p className="project-modal__text">{project.solution}</p>
              </section>
            )}

            {project.show.technologies && project.technologies && project.technologies.length > 0 && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">Technologies</h3>
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
                <h3 className="project-modal__section-title">Mon Rôle</h3>
                <p className="project-modal__text">{project.myRole}</p>
              </section>
            )}

            {project.show.architecture && project.architecture && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">Architecture</h3>
                <p className="project-modal__text">{project.architecture}</p>
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
                <h3 className="project-modal__section-title">Méthodologie</h3>
                <p className="project-modal__text">{project.methodology}</p>
              </section>
            )}

            {project.show.pipelineIA && project.pipelineIA && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">Pipeline IA</h3>
                <p className="project-modal__text">{project.pipelineIA}</p>
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
                <h3 className="project-modal__section-title">Scraping</h3>
                <p className="project-modal__text">{project.scraping}</p>
              </section>
            )}

            {project.show.semanticSearch && project.semanticSearch && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">Recherche Sémantique & IA</h3>
                <p className="project-modal__text">{project.semanticSearch}</p>
              </section>
            )}

            {project.show.backend && project.backend && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">Backend</h3>
                <p className="project-modal__text">{project.backend}</p>
              </section>
            )}

            {project.show.frontend && project.frontend && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">Frontend</h3>
                <p className="project-modal__text">{project.frontend}</p>
              </section>
            )}

            {project.show.features && project.features && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">Fonctionnalités</h3>
                <p className="project-modal__text">{project.features}</p>
              </section>
            )}

            {project.show.implementation && project.implementation && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">Implémentation</h3>
                <p className="project-modal__text">{project.implementation}</p>
              </section>
            )}

            {project.show.results && project.results && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">Résultats</h3>
                <p className="project-modal__text">{project.results}</p>
              </section>
            )}

            {project.show.challenges && project.challenges && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">Défis</h3>
                <p className="project-modal__text">{project.challenges}</p>
              </section>
            )}

            {project.show.improvements && project.improvements && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">Améliorations</h3>
                <p className="project-modal__text">{project.improvements}</p>
              </section>
            )}

            {project.show.images && project.images && project.images.length > 0 && (
              <section className="project-modal__section">
                <h3 className="project-modal__section-title">Galerie</h3>
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
