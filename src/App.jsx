import Header from './components/Header'
import Home from './components/Home'
import AboutMeSection from './components/AboutMeSection'
import GridSection from './components/GridSection'
import ProjectsSection from './components/ProjectsSection'


import './App.css'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutMeSection />
      <GridSection/>
      <ProjectsSection />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App
