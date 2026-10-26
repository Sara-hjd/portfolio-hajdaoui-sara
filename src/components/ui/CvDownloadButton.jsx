/**
 * CvDownloadButton.jsx
 * -------------------
 * Bouton de téléchargement de CV avec action directe selon la langue du site.
 */

import { useTranslation } from 'react-i18next'
import { personal } from '../../data/personal.js'
import { FiDownload } from 'react-icons/fi'

export default function CvDownloadButton() {
  const { t, i18n } = useTranslation()

  const cvFrPath = personal.cvFrPath
  const cvEnPath = personal.cvEnPath

  if (!cvFrPath && !cvEnPath) {
    return null
  }

  const handleDownload = () => {
    const currentLang = i18n.language
    const cvPath = currentLang === 'fr' ? cvFrPath : cvEnPath

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

  return (
    <button
      className="cv-dropdown__trigger"
      onClick={handleDownload}
      aria-label={t('cv.downloadLabel')}
    >
      <FiDownload aria-hidden="true" />
      {t('cv.downloadLabel')}
    </button>
  )
}
