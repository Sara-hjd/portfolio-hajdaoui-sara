/**
 * Skills.jsx
 * ----------
 * Section Compétences organisée par catégories.
 */

import { skills } from '../../data/skills.js'

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container skills__container">
        <h2 className="section__title">Compétences</h2>
        
        <div className="skills__grid">
          {skills.map((category, index) => (
            <div key={index} className="skills__category">
              <h3 className="skills__category-title">{category.category}</h3>
              <ul className="skills__list">
                {category.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skills__item">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
