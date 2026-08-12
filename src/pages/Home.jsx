/**
 * Home.jsx
 * --------
 * Page principale — assemble toutes les sections en scroll.
 */

import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import Hero from '../components/sections/Hero.jsx'
import About from '../components/sections/About.jsx'
import Skills from '../components/sections/Skills.jsx'
import Projects from '../components/sections/Projects.jsx'
import Experience from '../components/sections/Experience.jsx'
import Education from '../components/sections/Education.jsx'
import Certifications from '../components/sections/Certifications.jsx'
import Contact from '../components/sections/Contact.jsx'

function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
