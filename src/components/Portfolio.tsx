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
import {getTranslations, setRequestLocale} from 'next-intl/server'
import StructuredData from '@/components/StructuredData'

export default async function Portfolio({locale}: {locale: string}) {
  setRequestLocale(locale)
  const t = await getTranslations()
  return (
    <div
      style={{
        backgroundColor: C.bg0,
        color: C.t400,
        fontFamily: 'var(--font-sans)',
        minHeight: '100vh',
      }}
    >
      <StructuredData locale={locale} title={t('seo.title')} description={t('seo.description')} />
      <a href="#conteudo" className="skip-link">{t('nav.skip')}</a>
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
