'use client'

import { useTranslations } from 'next-intl'
import { C, S } from '@/data/theme'
import { TALKS } from '@/data/talks'
import TalksCarousel from './TalksCarousel'

export default function Talks() {
  const t = useTranslations()
  return (
    <section id="palestras" style={{ ...S.section(C.bg1), borderBottom: `1px solid ${C.b1}` }}>
      <div style={S.container}>
        <div style={{ marginBottom: '48px' }}>
          <p style={S.sectionLabel}>{t('talks.label')}</p>
          <h2 style={S.h2}>{t('talks.title')}</h2>
          <p style={{ fontSize: 'var(--fs-body)', color: C.t400, marginTop: '10px', maxWidth: '560px', lineHeight: 1.65 }}>{t('talks.intro')}</p>
          <div style={S.divider} />
        </div>

        <TalksCarousel talks={TALKS} />
      </div>
    </section>
  )
}
