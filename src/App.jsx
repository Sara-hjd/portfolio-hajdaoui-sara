import { Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import Home from './pages/Home.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  // Initialise et applique le thème (dark/light) sur le document
  useTheme()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
