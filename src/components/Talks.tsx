'use client'

import { C, S } from '@/data/theme'
import { TALKS } from '@/data/talks'
import TalksCarousel from './TalksCarousel'

export default function Talks() {
  return (
    <section id="palestras" style={{ ...S.section(C.bg1), borderBottom: `1px solid ${C.b1}` }}>
      <div style={S.container}>
        <div style={{ marginBottom: '48px' }}>
          <p style={S.sectionLabel}>PALESTRAS</p>
          <h2 style={S.h2}>Divulgação Científica</h2>
          <p style={{ fontSize: 'var(--fs-body)', color: C.t400, marginTop: '10px', maxWidth: '560px', lineHeight: 1.65 }}>
            Comecei a apresentar palestras técnicas sobre Inteligência Artificial em 2026, traduzindo
            conceitos de IA e dados para públicos técnicos e não-técnicos.
          </p>
          <div style={S.divider} />
        </div>

        <TalksCarousel talks={TALKS} />
      </div>
    </section>
  )
}
