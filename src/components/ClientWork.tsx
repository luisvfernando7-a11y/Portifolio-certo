'use client'

import { motion } from 'framer-motion'
import { C, S } from '@/data/theme'
import { CLIENT_WORK } from '@/data/clientwork'
import { ArrowIcon } from './icons'

export default function ClientWork() {
  return (
    <section id="client-work" style={S.section(C.bg1)}>
      <div style={S.container}>
        <div style={{ marginBottom: '56px' }}>
          <p style={S.sectionLabel}>// fora da sala de aula</p>
          <h2 style={S.h2}>Projetos Aplicados</h2>
          <p style={{ fontSize: 'var(--fs-body)', color: C.t400, marginTop: '10px', maxWidth: '560px' }}>
            Onde levo o que aprendo para fora do ambiente de estudo — incluindo um trabalho entregue
            para uso real de terceiros.
          </p>
          <div style={S.divider} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CLIENT_WORK.map((c, i) => (
            <motion.div
              key={c.title}
              style={S.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span style={S.badge}>{c.tag}</span>
              <div>
                <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 'var(--fs-h3)', fontWeight: 600, color: C.t100, lineHeight: 1.3 }}>{c.title}</h3>
                <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: C.t500, marginTop: '4px' }}>{c.client}</p>
              </div>
              <p style={{ fontSize: 'var(--fs-small)', color: C.t400, lineHeight: 1.7 }}>{c.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {c.highlights.map(h => (
                  <li key={h} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: C.t500, fontSize: '13px', marginTop: '2px', flexShrink: 0 }}>—</span>
                    <span style={{ fontSize: 'var(--fs-small)', color: C.t400, lineHeight: 1.55 }}>{h}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {c.stack.map(t => <span key={t} style={S.techPill}>{t}</span>)}
              </div>
              <a href={c.url} target="_blank" rel="noopener noreferrer"
                 style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', color: C.t100, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Ver Projeto Online <ArrowIcon />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
