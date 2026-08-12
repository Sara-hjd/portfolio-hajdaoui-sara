/**
 * NotFound.jsx
 * ------------
 * Page 404 — affichée pour toute route inconnue.
 */

import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'

function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="not-found">
        <div className="container not-found__container">
          <p className="not-found__code">404</p>
          <h1 className="not-found__title">Page introuvable</h1>
          <p className="not-found__description">
            Cette page n'existe pas ou a été déplacée.
          </p>
          <Link to="/" className="btn btn--primary">
            Retour à l'accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default NotFound
