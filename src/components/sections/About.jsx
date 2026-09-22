/**
 * About.jsx
 * ---------
 * Section À propos avec informations personnelles et langues.
 */

import { useTranslation } from 'react-i18next'
import { personal } from '../../data/personal.js'

export default function About() {
  const { t } = useTranslation()

  return (
    <section className="about section section--alt" id="about">
      <div className="container about__container">
        <h2 className="section__title">À propos</h2>
        
        <div className="about__content">
          <div className="about__bio">
            <p>{t('about.bio1')}</p>
            <p>{t('about.bio2')}</p>
            <p>{t('about.bio3')}</p>
            <p>{t('about.bio4')}</p>
          </div>

          {(personal.languages && personal.languages.length > 0) && (
            <div className="about__languages">
              <h3 className="about__subtitle">{t('about.languages')}</h3>
              <ul className="about__languages-list">
                {personal.languages.map((lang, index) => (
                  <li key={index} className="about__language-item">
                    <span className="about__language-name">{lang.name}</span>
                    <span className="about__language-level">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(personal.interests && personal.interests.length > 0) && (
            <div className="about__interests">
              <h3 className="about__subtitle">{t('about.interests')}</h3>
              <ul className="about__interests-list">
                {personal.interests.map((interest, index) => (
                  <li key={index} className="about__interest-item">
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
