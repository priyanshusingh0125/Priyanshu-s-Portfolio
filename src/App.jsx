import React from 'react'
import NavBar from './components/NavBar.jsx'
import Banner from './components/Banner.jsx'
import About from './components/About.jsx'
import Experiences from './components/Experiences.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div class="bg-gradient-to-r from-[#0a0f2c] to-[#131a42]">
      <NavBar />
      <Banner />
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
