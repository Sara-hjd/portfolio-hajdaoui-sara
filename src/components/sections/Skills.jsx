/**
 * Skills.jsx
 * ----------
 * Section Compétences organisée par catégories.
 */

import { useTranslation } from 'react-i18next'
import { skills } from '../../data/skills.js'

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section className="skills section" id="skills">
      <div className="container skills__container">
        <h2 className="section__title">{t('skills.title')}</h2>
        
        <div className="skills__grid">
          {skills.map((category, index) => {
            const categoryKey = category.category.toLowerCase().replace(/[^a-z]/g, '')
            return (
              <div key={index} className="skills__category">
                <h3 className="skills__category-title">{t(`skills.categories.${categoryKey}`, { defaultValue: category.category })}</h3>
                <ul className="skills__list">
                  {category.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="skills__item">
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
