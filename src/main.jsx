import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './i18n/i18n.js'
import './styles/globals.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/about.css'
import './styles/skills.css'
import './styles/projects.css'
import './styles/experience.css'
import './styles/education.css'
import './styles/certifications.css'
import './styles/contact.css'
import './styles/footer.css'
import './styles/project-detail.css'
import './styles/project-modal.css'
import './styles/not-found.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
