/**
 * ProjectDetail.jsx
 * -----------------
 * Page détaillée pour un projet avec toutes les sections disponibles.
 */

import { useParams, Link } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import NotFound from './NotFound'
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi'

function ProjectDetail() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return <NotFound />
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className="project-detail">
        <div className="container project-detail__container">
          {/* Back button */}
          <Link to="/#projects" className="project-detail__back">
            <FiArrowLeft aria-hidden="true" />
            Retour aux projets
          </Link>

          {/* Header */}
          <header className="project-detail__header">
            <div className="project-detail__meta">
              <span className="project-detail__type">
                {project.type === 'academic' ? 'Projet académique' : 
                 project.type === 'professional' ? 'Projet professionnel' : 'Projet personnel'}
              </span>
              <span className="project-detail__year">{project.year}</span>
            </div>
            <h1 className="project-detail__title">{project.title}</h1>
            <p className="project-detail__description">{project.shortDescription}</p>

            {/* Cover Image */}
            {project.coverImage && (
              <div className="project-detail__cover">
                <img src={project.coverImage} alt={project.title} className="project-detail__cover-img" />
              </div>
            )}

            {/* Tags */}
            <div className="project-detail__tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="project-detail__tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="project-detail__links">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="project-detail__link"
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
                  className="project-detail__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink aria-hidden="true" />
                  Démo
                </a>
              )}
            </div>
          </header>

          {/* Content sections */}
          <div className="project-detail__content">
            {project.show.problem && project.problem && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Problématique</h2>
                <p className="project-detail__text">{project.problem}</p>
              </section>
            )}

            {project.show.overview && project.overview && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Overview</h2>
                <p className="project-detail__text">{project.overview}</p>
              </section>
            )}

            {project.show.objective && project.objective && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Objectif</h2>
                <p className="project-detail__text">{project.objective}</p>
              </section>
            )}

            {project.show.solution && project.solution && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Solution</h2>
                <p className="project-detail__text">{project.solution}</p>
              </section>
            )}

            {project.show.technologies && project.technologies && project.technologies.length > 0 && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Technologies</h2>
                <ul className="project-detail__list">
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </section>
            )}

            {project.show.teamWork && project.teamWork && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Travail d'équipe</h2>
                <p className="project-detail__text">{project.teamWork}</p>
              </section>
            )}

            {project.myRole && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Ma contribution</h2>
                <p className="project-detail__text">{project.myRole}</p>
              </section>
            )}

            {project.show.architecture && project.architecture && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Architecture</h2>
                <p className="project-detail__text">{project.architecture}</p>
                {project.architectureDiagram && (
                  <div className="project-detail__diagram">
                    <img 
                      src={project.architectureDiagram} 
                      alt="Diagramme d'architecture" 
                      className="project-detail__diagram-img"
                    />
                  </div>
                )}
              </section>
            )}

            {project.show.methodology && project.methodology && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Méthodologie</h2>
                <p className="project-detail__text">{project.methodology}</p>
                {project.umlDiagram && (
                  <div className="project-detail__diagram">
                    <img 
                      src={project.umlDiagram} 
                      alt="Diagrammes UML" 
                      className="project-detail__diagram-img"
                    />
                  </div>
                )}
                {project.meriseDiagram && (
                  <div className="project-detail__diagram">
                    <img 
                      src={project.meriseDiagram} 
                      alt="Diagramme Merise" 
                      className="project-detail__diagram-img"
                    />
                  </div>
                )}
                {project.workflowDiagram && (
                  <div className="project-detail__diagram">
                    <img 
                      src={project.workflowDiagram} 
                      alt="Workflow" 
                      className="project-detail__diagram-img"
                    />
                  </div>
                )}
              </section>
            )}

            {project.show.pipelineIA && project.pipelineIA && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Pipeline IA</h2>
                <p className="project-detail__text">{project.pipelineIA}</p>
                {project.pipelineDiagram && (
                  <div className="project-detail__diagram">
                    <img 
                      src={project.pipelineDiagram} 
                      alt="Diagramme du pipeline IA" 
                      className="project-detail__diagram-img"
                    />
                  </div>
                )}
              </section>
            )}

            {project.show.scraping && project.scraping && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Scraping</h2>
                <p className="project-detail__text">{project.scraping}</p>
              </section>
            )}

            {project.show.semanticSearch && project.semanticSearch && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Recherche sémantique & IA</h2>
                <p className="project-detail__text">{project.semanticSearch}</p>
              </section>
            )}

            {project.show.backend && project.backend && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Backend</h2>
                <p className="project-detail__text">{project.backend}</p>
              </section>
            )}

            {project.show.frontend && project.frontend && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Frontend</h2>
                <p className="project-detail__text">{project.frontend}</p>
              </section>
            )}

            {project.show.features && project.features && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Fonctionnalités</h2>
                <p className="project-detail__text">{project.features}</p>
              </section>
            )}

            {project.show.implementation && project.implementation && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Implémentation</h2>
                <p className="project-detail__text">{project.implementation}</p>
              </section>
            )}

            {project.show.results && project.results && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Résultats</h2>
                <p className="project-detail__text">{project.results}</p>
              </section>
            )}

            {project.show.challenges && project.challenges && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Difficultés</h2>
                <p className="project-detail__text">{project.challenges}</p>
              </section>
            )}

            {project.show.improvements && project.improvements && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Améliorations possibles</h2>
                <p className="project-detail__text">{project.improvements}</p>
              </section>
            )}

            {/* Image Gallery */}
            {project.show.images && project.images && project.images.length > 0 && (
              <section className="project-detail__section">
                <h2 className="project-detail__section-title">Galerie</h2>
                <div className="project-detail__gallery">
                  {project.images.map((image, index) => (
                    <div key={index} className="project-detail__gallery-item">
                      <img 
                        src={image.url} 
                        alt={image.caption || `Image ${index + 1}`} 
                        className="project-detail__gallery-img"
                      />
                      {image.caption && (
                        <p className="project-detail__gallery-caption">{image.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ProjectDetail
