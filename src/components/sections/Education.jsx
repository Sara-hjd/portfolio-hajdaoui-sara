/**
 * Education.jsx
 * -------------
 * Section Formation avec timeline.
 */

import { education } from '../../data/education.js'

export default function Education() {
  return (
    <section className="education section section--alt" id="education">
      <div className="container education__container">
        <h2 className="section__title">Formation</h2>
        
        <div className="education__timeline">
          {education.map((edu) => (
            <article key={edu.id} className="education-item">
              <div className="education-item__marker">
                <div className="education-item__dot" />
              </div>
              
              <div className="education-item__content">
                <div className="education-item__header">
                  <div>
                    <h3 className="education-item__degree">{edu.degree}</h3>
                    <p className="education-item__field">{edu.field}</p>
                    <p className="education-item__institution">{edu.institution}</p>
                  </div>
                  <div className="education-item__meta">
                    <span className="education-item__location">{edu.location}</span>
                    <span className="education-item__period">
                      {edu.startDate} — {edu.current ? 'Présent' : edu.endDate}
                    </span>
                  </div>
                </div>

                <p className="education-item__description">{edu.description}</p>

                {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                  <div className="education-item__courses">
                    <h4 className="education-item__courses-title">Cours pertinents</h4>
                    <div className="education-item__courses-list">
                      {edu.relevantCourses.map((course, courseIndex) => (
                        <span key={courseIndex} className="education-item__course">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {edu.honors && (
                  <p className="education-item__honors">
                    <span className="education-item__honors-label">Distinction :</span>
                    {edu.honors}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {education.length === 0 && (
          <div className="education__empty">
            <p>Aucune formation à afficher pour le moment.</p>
          </div>
        )}
      </div>
    </section>
  )
}
