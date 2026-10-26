import { Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import ProjectDetailPage from './pages/ProjectDetailPage.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  // Initialise et applique le thème (dark/light) sur le document
  useTheme()

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/project-detail/:slug" element={<ProjectDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
