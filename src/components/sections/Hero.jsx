/**
 * Hero.jsx
 * ----------
 * Section hero principale avec introduction et CTA.
 */

import { Link } from 'react-router-dom'
import { personal } from '../../data/personal.js'
import { FiArrowRight, FiMail, FiGithub } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="container hero__container">
        <div className="hero__content">
          {personal.photoUrl && (
            <div className="hero__photo">
              <img src={personal.photoUrl} alt={personal.name} className="hero__photo-img" />
            </div>
          )}

          <div className="hero__text">
            <h1 className="hero__title">{personal.name}</h1>
            <p className="hero__subtitle">{personal.title}</p>
            <p className="hero__bio">{personal.shortBio}</p>

            <div className="hero__cta">
              <Link to="/" onClick={(e) => {
                e.preventDefault()
                const projectsSection = document.getElementById('projects')
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' })
                }
              }} className="btn btn--primary">
                Voir mes projets
                <FiArrowRight aria-hidden="true" />
              </Link>
              <a
                href={`mailto:${personal.email}`}
                className="btn btn--secondary"
              >
                <FiMail aria-hidden="true" />
                Me contacter
              </a>
              {personal.github && (
                <a
                  href={personal.github}
                  className="btn btn--ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub aria-hidden="true" />
                  GitHub
                </a>
              )}
            </div>

            {personal.seekingPFE && (
              <div className="hero__status">
                <span className="hero__status-badge">
                  Recherche PFE {personal.pfeYear}
                </span>
                <span className="hero__status-text">{personal.pfeNote}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
