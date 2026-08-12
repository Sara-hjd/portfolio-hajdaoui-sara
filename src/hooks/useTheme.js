/**
 * useTheme.js
 * -----------
 * Hook de gestion du thème dark / light.
 *
 * Comportement :
 * 1. Lit la préférence sauvegardée dans localStorage
 * 2. Si aucune préférence : utilise la préférence système (prefers-color-scheme)
 * 3. Par défaut : dark
 * 4. Applique data-theme="dark" ou data-theme="light" sur <html>
 * 5. Sauvegarde le choix de l'utilisateur dans localStorage
 *
 * Usage :
 *   const { theme, toggleTheme } = useTheme()
 *
 * Dans App.jsx, appeler useTheme() sans destructuration pour l'initialiser.
 */

import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'portfolio-theme'
const DARK = 'dark'
const LIGHT = 'light'

function getInitialTheme() {
  // 1. Préférence sauvegardée
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === DARK || saved === LIGHT) return saved

  // 2. Préférence système
  if (window.matchMedia('(prefers-color-scheme: light)').matches) return LIGHT

  // 3. Défaut : dark
  return DARK
}

function applyTheme(theme) {
  const root = document.documentElement
  root.setAttribute('data-theme', theme)
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  // Applique le thème au montage et à chaque changement
  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === DARK ? LIGHT : DARK))
  }, [])

  return { theme, toggleTheme, isDark: theme === DARK }
}
