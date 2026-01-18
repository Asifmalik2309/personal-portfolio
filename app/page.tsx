import ValuesSection from "./component/AboutSection"
import HeroSection from "./component/HeroSection"
import AboutSection from "./component/AboutSection"
import SkillsSection from "./component/SkillsSection"
import ProjectsSection from "./component/ProjectsSection"
import ContactSection from "./component/ContactSection"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
export default function Home() {
  return (
    <>
    <Navbar/>
      <HeroSection/>

    <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <ValuesSection/>
      <Footer/>
    </>
  )
}