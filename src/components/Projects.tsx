'use client'

import { motion } from 'framer-motion'
import { C, S } from '@/data/theme'
import { PROJECTS } from '@/data/projects'
import { ArrowIcon } from './icons'

export default function Projects() {
  return (
    <section id="projetos" style={S.section(C.bg0)}>
      <div style={S.container}>
        <div style={{ marginBottom: '56px' }}>
          <p style={S.sectionLabel}>// repositórios</p>
          <h2 style={S.h2}>Projetos de Estudo</h2>
          <p style={{ fontSize: 'var(--fs-body)', color: C.t400, marginTop: '10px', maxWidth: '560px' }}>
            Exercícios práticos para consolidar arquitetura de APIs, persistência de dados e boas
            práticas de código.
          </p>
          <div style={S.divider} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              style={S.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span style={S.badge}>{p.tag}</span>
              <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 'var(--fs-h3)', fontWeight: 600, color: C.t100, lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ fontSize: 'var(--fs-small)', color: C.t400, lineHeight: 1.7, flex: 1 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {p.stack.map(t => <span key={t} style={S.techPill}>{t}</span>)}
              </div>
              <a href={p.url} target="_blank" rel="noopener noreferrer"
                 style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', color: C.t100, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                {p.linkText || 'Ver no GitHub'} <ArrowIcon />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
