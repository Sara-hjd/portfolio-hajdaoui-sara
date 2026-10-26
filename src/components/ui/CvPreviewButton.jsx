/**
 * CvPreviewButton.jsx
 * ------------------
 * Bouton d'aperçu de CV avec action directe pour ouvrir la modale.
 */

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { personal } from '../../data/personal.js'
import { FiEye } from 'react-icons/fi'
import CvPreviewModal from './CvPreviewModal.jsx'

export default function CvPreviewButton() {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const cvFrPath = personal.cvFrPath
  const cvEnPath = personal.cvEnPath

  if (!cvFrPath && !cvEnPath) {
    return null
  }

  const handlePreview = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <button
        className="cv-dropdown__trigger"
        onClick={handlePreview}
        aria-label={t('cv.previewLabel')}
      >
        <FiEye aria-hidden="true" />
        {t('cv.previewLabel')}
      </button>
      <CvPreviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
