import { C, S } from '@/data/theme'
import { CURRENT_ROLE } from '@/data/experience'

export default function Hero() {
  return (
    <section id="inicio" style={{ ...S.section(C.bg0), paddingTop: 'clamp(120px, 18vw, 180px)', borderBottom: `1px solid ${C.b1}` }}>
      <div style={S.container} className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <p style={S.sectionLabel}>Ourinhos, SP · Backend e dados</p>
          <h1 style={{ color: C.t100, fontSize: 'var(--fs-display)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em' }}>Luis Galvani</h1>
          <p style={{ color: C.accent, fontWeight: 600, fontSize: 'var(--fs-h3)', marginTop: '16px' }}>{CURRENT_ROLE?.title ?? 'Backend Developer'}</p>
          <p style={{ maxWidth: '540px', margin: '24px 0', fontSize: 'var(--fs-body-lg)' }}>
            Desenvolvimento de APIs, modelagem de dados e integração de sistemas com Java, Python e SQL.
            No BrainSoil, aplico telemetria IoT e Machine Learning à predição de umidade do solo.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projetos" style={S.btnPrimary}>Ver projetos</a>
            <a href="#contato" style={S.btnOutline}>Entrar em contato</a>
          </div>
        </div>
        <aside style={S.card} aria-label="Tecnologias principais">
          <h2 style={{ ...S.h2, fontSize: 'var(--fs-h3)' }}>Stack técnica principal</h2>
          <div className="flex flex-wrap gap-2">
            {['Java', 'Spring Boot', 'Python', 'SQL', 'Docker', 'React', 'Next.js'].map(name => <span key={name} style={S.techPill}>{name}</span>)}
          </div>
          <p>Projetos pessoais, soluções entregues para terceiros e palestras técnicas sobre Inteligência Artificial.</p>
        </aside>
      </div>
    </section>
  )
}
