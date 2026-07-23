import { C } from '@/data/theme'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import BrainSoil from '@/components/BrainSoil'
import Talks from '@/components/Talks'
import Projects from '@/components/Projects'
import ClientWork from '@/components/ClientWork'
import About from '@/components/About'
import Timeline from '@/components/Timeline'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Portfolio() {
  return (
    <div style={{ backgroundColor: C.bg0, color: C.t400, fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Nav />
      <Hero />
      <BrainSoil />
      <Talks />
      <Projects />
      <ClientWork />
      <About />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}
