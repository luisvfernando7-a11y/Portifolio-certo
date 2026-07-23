'use client'

import { useState, useEffect } from 'react'
import { C, S } from '@/data/theme'
import { ROLES } from '@/data/experience'

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [roleVis, setRoleVis] = useState(true)

  useEffect(() => {
    const t = setInterval(() => {
      setRoleVis(false)
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % ROLES.length)
        setRoleVis(true)
      }, 350)
    }, 3200)
    return () => clearInterval(t)
  }, [])

  return (
    <section style={{ ...S.section(C.bg0), paddingTop: '140px', minHeight: '92vh', display: 'flex', alignItems: 'center' }}>
      <div style={S.container} className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-14 items-center">

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: C.t100, display: 'inline-block' }} />
            <span style={{ ...S.sectionLabel, marginBottom: 0 }}>Ourinhos, SP · disponível para estágio/júnior</span>
          </div>

          <div style={{ lineHeight: 0.95 }}>
            <h1 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, color: C.t100, fontSize: 'var(--fs-display)', lineHeight: 0.98, letterSpacing: '-0.02em' }}>
              Luis Galvani
            </h1>
          </div>

          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '15px', color: C.t300, opacity: roleVis ? 1 : 0, transition: 'opacity 0.3s', height: '22px' }}>
            {ROLES[roleIdx]}
          </p>

          <p style={{ fontSize: 'var(--fs-body-lg)', color: C.t400, lineHeight: 1.75, maxWidth: '520px' }}>
            Estudante do 3º ano do Ensino Médio Técnico em Informática para Internet (ETEC), com base
            prática em <span style={{ color: C.t100 }}>Java, Python e SQL</span>. Estou construindo meu
            primeiro projeto de peso — um sistema de IoT com Machine Learning para o TCC — e buscando
            minha primeira oportunidade formal em <span style={{ color: C.t100 }}>Backend, Engenharia de
            Dados ou Análise de Dados</span>.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            <a href="#brainsoil" style={S.btnPrimary}>Ver o TCC</a>
            <a href="/assets/Luis_Galvani_Curriculo.pdf" download="Luis_Galvani_Curriculo.pdf" style={S.btnOutline}>
              Baixar Currículo
            </a>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['Java', 'Spring Boot', 'Python', 'SQL', 'React/Next.js', 'Docker'].map(t => (
              <span key={t} style={S.techPill}>{t}</span>
            ))}
          </div>
        </div>

        {/* CARD DE CONTEXTO — factual, sem inflar */}
        <div style={{ border: `1px solid ${C.b1}`, backgroundColor: C.bg1, borderRadius: '4px', padding: '32px' }}>
          <p style={S.sectionLabel}>// no momento</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              'Desenvolvendo o BrainSoil — TCC de telemetria IoT + ML',
              'Concluindo o Ensino Médio Técnico (formatura em 2026)',
              '2 palestras técnicas conduzidas sobre IA em 2026',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: C.t500, fontSize: '13px', marginTop: '2px', flexShrink: 0 }}>—</span>
                <span style={{ fontSize: 'var(--fs-small)', color: C.t300, lineHeight: 1.55 }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ borderTop: `1px solid ${C.b1}`, marginTop: '24px', paddingTop: '20px' }}>
            <p style={S.sectionLabel}>// buscando</p>
            <p style={{ fontSize: 'var(--fs-small)', color: C.t400, lineHeight: 1.6 }}>
              Primeira oportunidade em Backend Jr., Engenharia de Dados ou Analista de Dados —
              presencial, híbrido ou remoto.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
