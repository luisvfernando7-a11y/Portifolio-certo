'use client'

import { useContent } from '@/i18n/useContent'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { C, S } from '@/data/theme'
import { PROJECTS } from '@/data/projects'

const ArrowSvg = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
)

export default function Projects() {
  const t = useTranslations()
  const content = useContent()
  return (
    <section id="projetos" style={{ ...S.section(C.bg0), borderBottom: `1px solid ${C.b1}` }}>
      <div style={S.container}>
        <div style={{ marginBottom: '48px' }}>
          <p style={S.sectionLabel}>{t('study.label')}</p>
          <h2 style={S.h2}>{t('study.title')}</h2>
          <p style={{ fontSize: 'var(--fs-body)', color: C.t400, marginTop: '10px', maxWidth: '560px', lineHeight: 1.65 }}>{t('study.intro')}</p>
          <div style={S.divider} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              style={{
                ...S.card,
                justifyContent: 'space-between',
                borderRadius: '8px',
              }}
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card-hover"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {p.image && <div className="relative aspect-video overflow-hidden rounded border border-line">
                  <Image src={p.image.src} alt={t(p.image.altKey)} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 380px" className="object-cover object-top" />
                </div>}
                <span style={S.badge}>{content(p.tag)}</span>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 700, color: C.t100, lineHeight: 1.3 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 'var(--fs-small)', color: C.t400, lineHeight: 1.7 }}>
                  {content(p.desc)}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '18px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {p.stack.map(t => (
                    <span key={t} style={{ ...S.techPill, fontSize: '11px', padding: '3px 8px' }}>{t}</span>
                  ))}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '13px', fontWeight: 600, color: C.accent,
                    textDecoration: 'none', fontFamily: 'var(--font-mono)',
                  }}
                  className="link-arrow"
                >
                  {p.linkText ? content(p.linkText) : t('common.github')} <ArrowSvg />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
