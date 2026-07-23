'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { C, S } from '@/data/theme'
import { EXP } from '@/data/experience'

export default function Timeline() {
  const trackRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 0.8', 'end 0.4'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experiencia" style={S.section(C.bg0)}>
      <div style={S.container}>
        <div style={{ marginBottom: '56px' }}>
          <p style={S.sectionLabel}>// trajetória</p>
          <h2 style={S.h2}>Formação e Experiência</h2>
          <div style={S.divider} />
        </div>

        <div ref={trackRef} style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '5px', top: '4px', bottom: 0, width: '1px', backgroundColor: C.b1 }} />
          <motion.div style={{ position: 'absolute', left: '5px', top: '4px', width: '1px', backgroundColor: C.t100, height: lineHeight }} />

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {EXP.map((e, i) => (
              <motion.div
                key={i}
                className="flex gap-5 md:gap-9"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5 }}
                style={{ position: 'relative' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: C.t100, flexShrink: 0, marginTop: '5px' }} />
                  {i < EXP.length - 1 && <div style={{ width: '1px', flex: 1 }} />}
                </div>
                <div style={{ paddingBottom: '48px', flex: 1 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                    <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: C.t500 }}>{e.period}</span>
                    {e.badge && (
                      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: C.t300, border: `1px solid ${C.b2}`, borderRadius: '20px', padding: '3px 12px' }}>
                        {e.badge}
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 'var(--fs-h3)', fontWeight: 600, color: C.t100, marginBottom: '6px' }}>{e.title}</h3>
                  <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', color: C.t500, marginBottom: '12px' }}>{e.place}</p>
                  <p style={{ fontSize: 'var(--fs-small)', color: C.t400, lineHeight: 1.7, maxWidth: '560px' }}>{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
