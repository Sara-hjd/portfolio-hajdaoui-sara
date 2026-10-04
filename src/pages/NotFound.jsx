/**
 * NotFound.jsx
 * ------------
 * Page 404 — affichée pour toute route inconnue.
 */

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'

function NotFound() {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />
      <main id="main-content" className="not-found">
        <div className="container not-found__container">
          <p className="not-found__code">{t('notFound.code')}</p>
          <h1 className="not-found__title">{t('notFound.title')}</h1>
          <p className="not-found__description">
            {t('notFound.description')}
          </p>
          <Link to="/" className="btn btn--primary">
            {t('notFound.backToHome')}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default NotFound
