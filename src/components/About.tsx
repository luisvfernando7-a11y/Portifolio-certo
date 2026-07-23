'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { C, S } from '@/data/theme'
import { SKILLS } from '@/data/experience'

export default function About() {
  return (
    <section id="sobre" style={S.section(C.bg1)}>
      <div style={S.container}>
        <div style={{ marginBottom: '64px' }}>
          <p style={S.sectionLabel}>// sobre</p>
          <h2 style={S.h2}>Luis Fernando Galvani Vieira</h2>
          <p style={{ fontSize: 'var(--fs-small)', color: C.t500, fontFamily: '"JetBrains Mono", monospace', marginTop: '8px' }}>
            17 anos · Ourinhos, SP · Estudante de Informática (ETEC)
          </p>
          <div style={S.divider} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative', width: '100%', aspectRatio: '4/5', borderRadius: '4px', overflow: 'hidden', border: `1px solid ${C.b1}`, alignSelf: 'start' }}
          >
            <Image
              src="/about/luis-mesa.jpeg"
              alt="Luis Galvani"
              fill
              style={{ objectFit: 'cover', filter: 'grayscale(1) contrast(1.05)' }}
              sizes="(max-width: 1024px) 100vw, 280px"
              priority
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', fontSize: 'var(--fs-body-lg)', color: C.t400, lineHeight: 1.8 }}>
              <p>
                Estou no último ano do Ensino Médio Técnico em Informática para Internet, na ETEC Jacinto
                Ferreira de Sá, com formatura prevista para 2026. Minha base prática é em{' '}
                <b style={{ color: C.t100, fontWeight: 600 }}>Java e Python</b>, com experiência em bancos
                relacionais e APIs REST construídas em Spring Boot e Flask.
              </p>
              <p>
                Meu principal projeto até aqui é o <b style={{ color: C.t100, fontWeight: 600 }}>BrainSoil</b>,
                meu TCC: um sistema de telemetria IoT com Machine Learning (LSTM) para predição de umidade
                do solo. É onde aplico na prática o que venho estudando — arquitetura de backend,
                modelagem de dados e integração de sensores.
              </p>
              <p>
                Também comecei a dar palestras técnicas sobre Inteligência Artificial em 2026 — duas até
                agora, na Unifio e na ETEC — como forma de organizar e comunicar o que estou aprendendo.
                Estou buscando minha primeira oportunidade formal na área, com abertura para Backend,
                Engenharia de Dados ou Análise de Dados.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {SKILLS.map(({ label, items }) => (
                <div key={label}>
                  <p style={S.sectionLabel}>{label}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {items.map(i => <span key={i} style={S.techPill}>{i}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
