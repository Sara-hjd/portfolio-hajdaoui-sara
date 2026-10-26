/**
 * ScrollToTop.jsx
 * ---------------
 * Composant qui remet le scroll à 0 à chaque changement de route.
 */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
