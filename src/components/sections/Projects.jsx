/**
 * Projects.jsx
 * ----------
 * Section Projets avec cartes et modal pour détails.
 */

import { useState } from 'react'
import { getSortedProjects } from '../../data/projects.js'
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi'
import ProjectModal from '../ProjectModal.jsx'

export default function Projects() {
  const projects = getSortedProjects()
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="projects section section--alt" id="projects">
      <div className="container projects__container">
        <h2 className="section__title">Projets</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__content">
                <div className="project-card__header">
                  <span className="project-card__type">
                    {project.type === 'academic' ? 'Académique' :
                     project.type === 'professional' ? 'Professionnel' : 'Personnel'}
                  </span>
                  <span className="project-card__year">{project.year}</span>
                </div>

                <h3 className="project-card__title">
                  <button 
                    className="project-card__title-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </button>
                </h3>

                <p className="project-card__description">
                  {project.shortDescription}
                </p>

                <div className="project-card__tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-card__footer">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="project-card__link"
                  >
                    Voir le projet
                    <FiArrowRight aria-hidden="true" />
                  </button>

                  <div className="project-card__actions">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="project-card__action"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub (nouvelle fenêtre)"
                      >
                        <FiGithub aria-hidden="true" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className="project-card__action"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Démo (nouvelle fenêtre)"
                      >
                        <FiExternalLink aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="projects__empty">
            <p>Aucun projet à afficher pour le moment.</p>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  )
}
