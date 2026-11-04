'use client'

import { useContent } from '@/i18n/useContent'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { C, S } from '@/data/theme'
import { ARCH, STACK_AGRO, BRAINSOIL_REPO_URL } from '@/data/projects'

const LockSvg = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

export default function BrainSoil() {
  const t = useTranslations()
  const content = useContent()
  const [videoErr, setVideoErr] = useState(false)

  return (
    <section id="brainsoil" style={{ ...S.section(C.bg0), borderBottom: `1px solid ${C.b1}` }}>
      <div style={S.container}>

        {/* Cabeçalho com enquadramento diferenciado para o TCC */}
        <div style={{ marginBottom: '52px' }}>
          {/* Badge de destaque principal — enquadramento retangular sem glow */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            border: `2px solid ${C.accent}`,
            borderRadius: '4px',
            padding: '5px 14px',
            marginBottom: '14px',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            fontWeight: 700,
            color: C.accent,
            letterSpacing: '0.1em',
          }}>{t('brainsoil.badge')}</div>

          <p style={{ ...S.sectionLabel, display: 'block', marginBottom: '10px' }}>{t('brainsoil.label')}</p>
          <h2 style={{ ...S.h2, fontSize: 'clamp(1.7rem, 3.8vw, 2.6rem)' }}>{t('brainsoil.title')}</h2>
          <p style={{ fontSize: 'var(--fs-body)', color: C.t400, marginTop: '12px', maxWidth: '620px', lineHeight: 1.7 }}>{t('brainsoil.description')}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '18px' }}>
            {BRAINSOIL_REPO_URL ? (
              <a
                href={BRAINSOIL_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={S.btnPrimary}
                className="hover:bg-ink"
              >{t('brainsoil.repository')}</a>
            ) : (
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: 'var(--font-mono)', fontSize: '12px',
                color: C.t500,
                backgroundColor: C.bg1,
                border: `1px solid ${C.b2}`,
                borderRadius: '4px', padding: '6px 14px',
              }}>
                <LockSvg />{t('brainsoil.private')}</span>
            )}
          </div>

          <div style={S.divider} />
        </div>

        {/* Monitor de demonstração — enquadramento retangular limpo */}
        <div style={{ maxWidth: '100%', margin: '0 auto' }}>
          <div style={{
            border: `2px solid ${C.b2}`,
            borderRadius: '8px',
            overflow: 'hidden',
          }}>
            {/* Barra do terminal */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '12px 18px', flexWrap: 'wrap', gap: '12px',
              backgroundColor: C.t100,
              borderBottom: `1px solid ${C.b2}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: C.accent }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: C.accentHover }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: C.bg1 }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: C.bg0, marginLeft: '10px' }}>
                  brainsoil-demo · v1.2.0
                </span>
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: C.bg1,
                backgroundColor: C.t200,
                padding: '2px 8px',
                borderRadius: '3px',
                border: `1px solid ${C.accent}`,
              }}>{t('brainsoil.active')}</span>
            </div>

            {/* Vídeo */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', minHeight: '240px', backgroundColor: C.t200 }}>
              {!videoErr ? (
                <video
                  src="/assets/agroclima-demo.mp4"
                  controls muted playsInline preload="metadata" aria-label={t('brainsoil.video')}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }}
                  onError={() => setVideoErr(true)}
                />
              ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: C.accentLight }}>{t('brainsoil.unavailable')}</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: C.accentLight }}>{t('brainsoil.soon')}</p>
                </div>
              )}
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: '14px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: C.t500 }}>{t('brainsoil.caption')}</p>
        </div>

        {/* Arquitetura + Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          <div style={{ border: `1px solid ${C.b1}`, borderRadius: '8px', padding: '26px 30px', backgroundColor: C.bg0 }}>
            <p style={{ ...S.sectionLabel, marginBottom: '12px' }}>{t('brainsoil.features')}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {ARCH.map(a => (
                <li key={a} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: C.accent, fontSize: '14px', marginTop: '1px', flexShrink: 0 }}>·</span>
                  <span style={{ fontSize: 'var(--fs-small)', color: C.t400, lineHeight: 1.65 }}>{content(a)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ border: `1px solid ${C.b1}`, borderRadius: '8px', padding: '26px 30px', backgroundColor: C.bg0 }}>
            <p style={{ ...S.sectionLabel, marginBottom: '12px' }}>{t('brainsoil.stack')}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {STACK_AGRO.map(t => (
                <span key={t} style={{ ...S.techPill, fontSize: '12px', color: C.t200 }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
