import { C, S } from '@/data/theme'
import StackCarousel from './StackCarousel'

export default function Hero() {
  return (
    <section id="inicio" className="hero-intro" style={{ ...S.section(C.bg0), paddingTop: 'clamp(112px, 11vw, 144px)', paddingBottom: '32px' }}>
      <div style={S.container}>
        <p style={S.sectionLabel}>Ourinhos, SP · Tecnologia, software e dados</p>
        <h1 style={{ color: C.t100, fontSize: 'var(--fs-display)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.04em' }}>Luis Galvani<span className="text-muted">.</span></h1>
        <p className="hero-role mt-6">
          Técnico de Suporte de TI <span className="hero-role-separator" aria-hidden="true">|</span> Data Science &amp; Software Engineering
        </p>
        <p className="hero-skills mt-3 text-sm font-medium leading-7 tracking-wide text-muted sm:text-base"><span aria-hidden="true">| </span>Python • SQL • Machine Learning • Java • Docker • AWS Cloud</p>
        <StackCarousel />
        <p className="my-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          Atuo em suporte de TI e desenvolvo APIs, integrações e soluções orientadas a dados.
          No BrainSoil, aplico telemetria IoT e Machine Learning à predição de umidade do solo.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#projetos" style={S.btnPrimary} className="hover:bg-ink">Ver projetos <span aria-hidden="true">↗</span></a>
          <a href="#contato" style={S.btnOutline} className="hover:border-black">Entrar em contato</a>
        </div>
      </div>
    </section>
  )
}
