'use client'

import { useContent } from '@/i18n/useContent'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { C, S } from '@/data/theme'
import { CLIENT_WORK } from '@/data/clientwork'

const ArrowSvg = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
)

export default function ClientWork() {
  const t = useTranslations()
  const content = useContent()
  return (
    <section id="client-work" style={{ ...S.section(C.bg1), borderBottom: `1px solid ${C.b1}` }}>
      <div style={S.container}>
        <div style={{ marginBottom: '48px' }}>
          <p style={S.sectionLabel}>{t('applied.label')}</p>
          <h2 style={S.h2}>{t('applied.title')}</h2>
          <p style={{ fontSize: 'var(--fs-body)', color: C.t400, marginTop: '10px', maxWidth: '560px', lineHeight: 1.65 }}>{t('applied.intro')}</p>
          <div style={S.divider} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CLIENT_WORK.map((c, i) => (
            <motion.div
              key={c.id}
              style={{ ...S.card, backgroundColor: C.bg0, justifyContent: 'space-between', borderRadius: '8px' }}
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card-hover"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {c.image && <div className="relative aspect-video overflow-hidden rounded border border-line">
                  <Image src={c.image.src} alt={t(c.image.altKey)} fill sizes="(max-width: 767px) 100vw, 560px" className="object-cover object-top" />
                </div>}
                <span style={S.badge}>{content(c.tag)}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.2rem', fontWeight: 700, color: C.t100, lineHeight: 1.3 }}>
                    {c.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: C.accent, marginTop: '4px' }}>
                    {content(c.client)}
                  </p>
                </div>
                <p style={{ fontSize: 'var(--fs-small)', color: C.t400, lineHeight: 1.7 }}>{content(c.desc)}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {c.highlights.map(h => (
                    <li key={content(h)} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: C.accent, fontSize: '14px', marginTop: '1px', flexShrink: 0 }}>·</span>
                      <span style={{ fontSize: 'var(--fs-small)', color: C.t400, lineHeight: 1.55 }}>{content(h)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '18px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {c.stack.map(t => (
                    <span key={t} style={{ ...S.techPill, fontSize: '11px', padding: '3px 8px' }}>{t}</span>
                  ))}
                </div>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '13px', fontWeight: 600, color: C.accent,
                    textDecoration: 'none', fontFamily: 'var(--font-mono)',
                  }}
                  className="link-arrow"
                >{t('common.demo')}<ArrowSvg />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
