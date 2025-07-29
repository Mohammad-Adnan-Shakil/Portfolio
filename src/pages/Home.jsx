import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarComponents from '../components/StarComponents'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import { SkillsSection } from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen'>
      

     {/* toggle theme */}
     <ThemeToggle/>
      <StarComponents/>

     {/* bg effects  */}


     {/* navbar  */}
     <Navbar/>

     {/* main content */}
     <main>
      <HeroSection/>
      <AboutMe/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>

      
     </main>


     {/* footer */}
     <Footer/>


    </div>
  )
}

export default Home
