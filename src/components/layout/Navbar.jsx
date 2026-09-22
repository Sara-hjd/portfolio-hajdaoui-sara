/**
 * Navbar.jsx
 * ----------
 * Navigation principale avec menu responsive et toggle dark/light.
 */

import { useState, useEffect, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useTranslation } from 'react-i18next'
import { personal } from '../../data/personal.js'
import { FiMenu, FiX, FiMoon, FiSun, FiGithub } from 'react-icons/fi'
import LanguageSelector from '../ui/LanguageSelector.jsx'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()

  const navItems = useMemo(() => [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.education'), href: '#education' },
    { label: t('nav.certifications'), href: '#certifications' },
    { label: t('nav.contact'), href: '#contact' },
  ], [t])

  // Fermer le menu au changement de route
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Effet de scroll sur la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Détecter la section active lors du scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      role="banner"
    >
      <nav className="navbar__container container" role="navigation" aria-label="Navigation principale">
        {/* Logo / Nom */}
        <Link to="/" className="navbar__logo" aria-label="Retour à l'accueil">
          <span className="navbar__name">{personal.name}</span>
        </Link>

        {/* Navigation Desktop */}
        <ul className="navbar__nav navbar__nav--desktop">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1)
            const isActive = activeSection === sectionId
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                  onClick={(e) => scrollToSection(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Actions droite (GitHub + Theme Toggle + Language) */}
        <div className="navbar__actions">
          <LanguageSelector />
          {personal.github && (
            <a
              href={personal.github}
              className="navbar__github-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (nouvelle fenêtre)"
            >
              <FiGithub aria-hidden="true" />
              <span>GitHub</span>
            </a>
          )}
          <button
            className="navbar__icon-btn navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={`Basculer vers le mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
          >
            {theme === 'dark' ? (
              <FiSun aria-hidden="true" />
            ) : (
              <FiMoon aria-hidden="true" />
            )}
          </button>

          {/* Menu hamburger mobile */}
          <button
            className="navbar__menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? (
              <FiX aria-hidden="true" />
            ) : (
              <FiMenu aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Navigation Mobile */}
      {isMenuOpen && (
        <div className="navbar__mobile-menu" id="mobile-menu">
          <ul className="navbar__nav navbar__nav--mobile">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="navbar__link navbar__link--mobile"
                  onClick={(e) => scrollToSection(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
