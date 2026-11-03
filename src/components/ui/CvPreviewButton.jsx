/**
 * CvPreviewButton.jsx
 * ------------------
 * Bouton d'aperçu de CV qui ouvre le PDF dans un nouvel onglet.
 */

import { useTranslation } from 'react-i18next'
import { personal } from '../../data/personal.js'
import { FiEye } from 'react-icons/fi'

export default function CvPreviewButton() {
  const { t, i18n } = useTranslation()

  const cvFrPath = personal.cvFrPath
  const cvEnPath = personal.cvEnPath

  if (!cvFrPath && !cvEnPath) {
    return null
  }

  const handlePreview = () => {
    const currentLang = i18n.language
    const cvPath = currentLang === 'fr' ? cvFrPath : cvEnPath
    if (cvPath) {
      window.open(cvPath, '_blank')
    }
  }

  return (
    <button
      className="cv-preview-button"
      onClick={handlePreview}
      title={t('cv.previewLabel')}
    >
      <FiEye aria-hidden="true" />
      {t('cv.previewLabel')}
    </button>
  )
}
