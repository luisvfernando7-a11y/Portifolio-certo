import { C } from '@/data/theme'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import BrainSoil from '@/components/BrainSoil'
import Talks from '@/components/Talks'
import Projects from '@/components/Projects'
import ClientWork from '@/components/ClientWork'
import About from '@/components/About'
import Timeline from '@/components/Timeline'
import Contact from '@/components/Contact'
import Certificates from '@/components/Certificates'
import Footer from '@/components/Footer'
import SectionMotion from '@/components/SectionMotion'

export default function Portfolio() {
  return (
    <div
      style={{
        backgroundColor: C.bg0,
        color: C.t400,
        fontFamily: 'var(--font-sans)',
        minHeight: '100vh',
      }}
    >
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <SectionMotion />
        <Hero />
        <BrainSoil />
        <Talks />
        <Projects />
        <ClientWork />
        <About />
        <Timeline />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
