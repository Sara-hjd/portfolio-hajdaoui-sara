/**
 * Experience.jsx
 * --------------
 * Section Expérience avec timeline.
 */

import { useTranslation } from 'react-i18next';
import { experiences } from '../../data/experience.js'

export default function Experience() {
  const { t } = useTranslation();
  const completedExperiences = experiences.filter(exp => !exp.current || exp.missions.length > 0)

  return (
    <section className="experience section" id="experience">
      <div className="container experience__container">
        <h2 className="section__title">{t('experience.title')}</h2>
        
        <div className="experience__timeline">
          {completedExperiences.map((exp) => (
            <article key={exp.id} className="experience-item">
              <div className="experience-item__marker">
                <div className="experience-item__dot" />
              </div>
              
              <div className="experience-item__content">
                <div className="experience-item__header">
                  <div>
                    <h3 className="experience-item__title">{exp.title}</h3>
                    <p className="experience-item__company">{exp.company}</p>
                  </div>
                  <div className="experience-item__meta">
                    <span className="experience-item__location">{exp.location}</span>
                    <span className="experience-item__period">
                      {exp.startDate} — {exp.current ? 'Présent' : exp.endDate}
                    </span>
                  </div>
                </div>

                <p className="experience-item__description">{exp.shortDescription}</p>

                {exp.missions && exp.missions.length > 0 && (
                  <ul className="experience-item__missions">
                    {exp.missions.map((mission, missionIndex) => (
                      <li key={missionIndex}>{mission}</li>
                    ))}
                  </ul>
                )}

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="experience-item__technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="experience-item__tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {completedExperiences.length === 0 && (
          <div className="experience__empty">
            <p>{t('experience.noExperience')}</p>
          </div>
        )}
      </div>
    </section>
  )
}
