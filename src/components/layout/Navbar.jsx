/**
 * Navbar.jsx
 * ----------
 * Navigation principale avec menu responsive et toggle dark/light.
 */

import { useState, useMemo, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../hooks/useTheme'
import { FiGithub, FiMenu, FiX, FiSun, FiMoon, FiChevronDown } from 'react-icons/fi'
import { personal } from '../../data/personal.js'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { i18n, t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const location = useLocation()
  const langDropdownRef = useRef(null)

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

  // Fermer le dropdown de langue quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setIsLangDropdownOpen(false)
  }

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
  ]

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0]

  return (
    <header
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      role="banner"
    >
      <nav className="navbar__container container" role="navigation" aria-label={t('nav.ariaLabel')}>
        {/* Logo / Nom */}
        <Link to="/" className="navbar__logo" aria-label={t('nav.homeLabel')}>
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

        {/* Actions droite (GitHub + Language + Theme Toggle) */}
        <div className="navbar__actions">
          {/* Language Dropdown */}
          <div className="navbar__language-dropdown" ref={langDropdownRef}>
            <button
              className="navbar__lang-trigger"
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              aria-label={t('languageSelector.label')}
              aria-expanded={isLangDropdownOpen}
            >
              <span className="navbar__lang-flag">{currentLang.flag}</span>
              <span className="navbar__lang-code">{currentLang.code.toUpperCase()}</span>
              <FiChevronDown className={`navbar__lang-chevron ${isLangDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {isLangDropdownOpen && (
              <div className="navbar__lang-menu">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`navbar__lang-option ${i18n.language === lang.code ? 'navbar__lang-option--active' : ''}`}
                    onClick={() => changeLanguage(lang.code)}
                    aria-label={lang.name}
                  >
                    <span className="navbar__lang-option-flag">{lang.flag}</span>
                    <span className="navbar__lang-option-name">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {personal.github && (
            <a
              href={personal.github}
              className="navbar__github-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('nav.githubLabel')}
            >
              <FiGithub aria-hidden="true" />
              <span>GitHub</span>
            </a>
          )}
          <button
            className="navbar__icon-btn navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={t('nav.themeToggleLabel', { mode: theme === 'dark' ? 'light' : 'dark' })}
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
            aria-label={isMenuOpen ? t('nav.menuOpenLabel') : t('nav.menuCloseLabel')}
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
