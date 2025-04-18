import { AboutMeSection } from './(pages)/about-me/components/AboutMeSection'
import { ExperienceWork } from './components/section/ExperienceWork'
import Hability from './components/section/Hability'
import { Hero } from './components/section/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMeSection />
      <ExperienceWork />
      <Hability />
    </>
  )
}
