import { useTranslations } from 'next-intl'
import { C, S } from '@/data/theme'
import ProjectNavigation from './ProjectNavigation'
import StackCarousel from './StackCarousel'

export default function Hero() {
  const t = useTranslations()
  return (
    <section id="inicio" className="hero-intro" style={{ ...S.section(C.bg0), paddingTop: 'clamp(112px, 11vw, 144px)', paddingBottom: '32px' }}>
      <div style={S.container}>
        <p style={S.sectionLabel}>{t('hero.location')}</p>
        <h1 style={{ color: C.t100, fontSize: 'var(--fs-display)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.04em' }}>Luis Galvani<span className="text-muted">.</span></h1>
        <p className="hero-role mt-6">{t('hero.role')}<span className="hero-role-separator" aria-hidden="true">|</span>{t('hero.disciplines')}</p>
        <p className="hero-skills mt-3 text-sm font-medium leading-7 tracking-wide text-muted sm:text-base"><span aria-hidden="true">| </span>Python • SQL • Machine Learning • Java • Docker • AWS Cloud</p>
        <StackCarousel />
        <p className="my-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">{t('hero.intro')}</p>
        <div className="flex flex-wrap gap-3">
          <a href="#projetos" style={S.btnPrimary} className="hover:bg-ink">{t('hero.projects')}<span aria-hidden="true">↗</span></a>
          <a href="#contato" style={S.btnOutline} className="hover:border-black">{t('hero.contact')}</a>
        </div>
        <ProjectNavigation />
      </div>
    </section>
  )
}
