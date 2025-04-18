import { AboutMeSection } from './(pages)/about-me/components/AboutMeSection'
import { Contact } from './components/section/Contact'
import { ExperienceWork } from './components/section/ExperienceWork'
import Hability from './components/section/Hability'
import { Hero } from './components/section/Hero'
import Projects from './components/section/Projects'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutMeSection />
        <ExperienceWork />
        <Hability />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
