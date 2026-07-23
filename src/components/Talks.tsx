'use client'

import { motion } from 'framer-motion'
import { C, S } from '@/data/theme'
import { TALKS } from '@/data/talks'
import { MicIcon } from './icons'
import Carousel from './Carousel'

export default function Talks() {
  return (
    <section id="palestras" style={S.section(C.bg0)}>
      <div style={S.container}>
        <div style={{ marginBottom: '64px' }}>
          <p style={S.sectionLabel}>// divulgação científica</p>
          <h2 style={S.h2}>Palestras</h2>
          <p style={{ fontSize: 'var(--fs-body)', color: C.t400, marginTop: '10px', maxWidth: '560px' }}>
            Comecei a apresentar palestras técnicas sobre Inteligência Artificial em 2026, traduzindo
            conceitos de IA e dados para públicos técnicos e não-técnicos.
          </p>
          <div style={S.divider} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {TALKS.map((talk, i) => (
            <motion.div
              key={talk.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10"
            >
              <Carousel
                slides={[talk.mainPhoto, ...talk.galleryPhotos].map(src => ({ src, alt: `Palestra: ${talk.title}` }))}
              />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ color: C.t500 }}><MicIcon size={14} /></span>
                  <span style={S.badge}>{talk.event}</span>
                </div>
                <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 'var(--fs-h3)', fontWeight: 600, color: C.t100, marginBottom: '6px' }}>
                  {talk.title}
                </h3>
                <p style={{ fontSize: 'var(--fs-body)', color: C.t400, fontStyle: 'italic', marginBottom: '22px' }}>
                  "{talk.theme}"
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: `1px solid ${C.b1}` }}>
                  {[
                    ['Local', talk.place],
                    ['Data', talk.date],
                    ['Público', talk.audience],
                    ['Duração', talk.duration],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p style={{ ...S.sectionLabel, marginBottom: '4px', fontSize: '10px' }}>{label}</p>
                      <p style={{ fontSize: 'var(--fs-small)', color: C.t300 }}>{value}</p>
                    </div>
                  ))}
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {talk.topics.map(topic => (
                    <li key={topic} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: C.t500, fontSize: '13px', marginTop: '2px', flexShrink: 0 }}>—</span>
                      <span style={{ fontSize: 'var(--fs-small)', color: C.t400, lineHeight: 1.65 }}>{topic}</span>
                    </li>
                  ))}
                </ul>

                {talk.coSpeaker && (
                  <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: C.t500 }}>
                    Co-apresentação: {talk.coSpeaker}
                  </p>
                )}
              </div>
            </motion.div>
          ))}

          {/* Placeholder para próximas palestras — estrutura pronta, só adicionar em data/talks.ts */}
          <div style={{ border: `1px dashed ${C.b1}`, borderRadius: '6px', padding: '28px', textAlign: 'center' }}>
            <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', color: C.t500 }}>
              // mais palestras em breve
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
