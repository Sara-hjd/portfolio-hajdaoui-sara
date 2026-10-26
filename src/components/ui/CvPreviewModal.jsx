/**
 * CvPreviewModal.jsx
 * ------------------
 * Modale d'aperçu de CV avec PDF dans iframe.
 * Accessible, responsive, mise à jour automatique selon la langue.
 */

import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { personal } from '../../data/personal.js'
import { FiX, FiDownload } from 'react-icons/fi'

export default function CvPreviewModal({ isOpen, onClose }) {
  const { t, i18n } = useTranslation()
  const modalRef = useRef(null)
  const closeButtonRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  const cvFrPath = personal.cvFrPath
  const cvEnPath = personal.cvEnPath
  const currentLang = i18n.language
  const cvPath = currentLang === 'fr' ? cvFrPath : cvEnPath

  // Détection mobile pour les PDF
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera
      const isMobileDevice = /android|ipad|iphone|ipod/i.test(userAgent) ||
                            /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated/i.test(userAgent)
      setIsMobile(isMobileDevice)
    }
    checkMobile()
  }, [])

  // Blocage du scroll quand la modale est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Focus sur le bouton de fermeture
      setTimeout(() => {
        closeButtonRef.current?.focus()
      }, 100)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Fermeture avec Échap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Piège de focus dans la modale
  useEffect(() => {
    if (!isOpen || !modalRef.current) return

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTab = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [isOpen])

  const handleDownload = () => {
    if (cvPath) {
      const fileName = currentLang === 'fr' ? 'CV_HAJDAOUI_Sara_FR.pdf' : 'CV_HAJDAOUI_Sara_EN.pdf'
      const link = document.createElement('a')
      link.href = cvPath
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // Sur mobile, ouvrir dans un nouvel onglet au lieu de la modale
  useEffect(() => {
    if (isOpen && isMobile && cvPath) {
      window.open(cvPath, '_blank')
      onClose()
    }
  }, [isOpen, isMobile, cvPath, onClose])

  if (!isOpen || isMobile) return null

  return (
    <div
      className="cv-modal-overlay"
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        className="cv-modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={t('cv.previewLabel')}
      >
        <div className="cv-modal__header">
          <div className="cv-modal__title">
            <span className="cv-modal__title-text">{t('cv.previewLabel')}</span>
            <span className="cv-modal__lang-badge">{currentLang.toUpperCase()}</span>
          </div>
          <button
            ref={closeButtonRef}
            className="cv-modal__close-btn"
            onClick={onClose}
            aria-label={t('cv.closeLabel')}
          >
            <FiX aria-hidden="true" />
          </button>
        </div>
        <div className="cv-modal__content">
          <iframe
            src={cvPath}
            className="cv-modal__iframe"
            title={t('cv.previewLabel')}
            aria-label={t('cv.previewLabel')}
          />
        </div>
        <div className="cv-modal__footer">
          <button
            className="cv-modal__download-btn"
            onClick={handleDownload}
            aria-label={t('cv.downloadLabel')}
          >
            <FiDownload aria-hidden="true" />
            {t('cv.downloadLabel')}
          </button>
        </div>
      </div>
    </div>
  )
}
