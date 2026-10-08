'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { C, S } from '@/data/theme'
import { SKILLS } from '@/data/experience'

export default function About() {
  return (
    <section id="sobre" style={{ ...S.section(C.bg1), borderBottom: `1px solid ${C.b1}` }}>
      <div style={S.container}>
        {/* Cabeçalho */}
        <div style={{ marginBottom: '52px' }}>
          <p style={S.sectionLabel}>SOBRE MIM</p>
          <h2 style={S.h2}>Luis Fernando Galvani Vieira</h2>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color: C.t500,
            marginTop: '6px',
          }}>
            17 anos · Ourinhos, SP · Estudante de Informática (ETEC)
          </p>
          <div style={S.divider} />
        </div>

        {/* Grid: foto + conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-14 items-start">

          {/* Foto */}
          <div className="flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'relative',
                width: '200px',
                aspectRatio: '4/5',
                borderRadius: '6px',
                overflow: 'hidden',
                border: `1px solid ${C.b2}`,
                flexShrink: 0,
              }}
            >
              <Image
                src="/about/luis-mesa.jpeg"
                alt="Luis Galvani"
                fill
                style={{ objectFit: 'cover' }}
                sizes="200px"
                priority
              />
            </motion.div>
          </div>

          {/* Conteúdo */}
          <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_1fr] gap-8">

            {/* Parágrafos em cartão */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                <>
                  Estou no último ano do Ensino Médio Técnico em Informática para Internet, na ETEC Jacinto
                  Ferreira de Sá, com formatura prevista para 2026. Minha base prática é em{' '}
                  <strong style={{ color: C.t200, fontWeight: 600 }}>Java e Python</strong>, com experiência em bancos
                  relacionais e APIs REST construídas em Spring Boot e Flask.
                </>,
                <>
                  Meu principal projeto até aqui é o <strong style={{ color: C.accent, fontWeight: 600 }}>BrainSoil</strong>,
                  meu TCC: um sistema de telemetria IoT com Machine Learning (LSTM) para predição de umidade
                  do solo. É onde aplico na prática o que venho estudando — arquitetura de backend,
                  modelagem de dados e integração de sensores.
                </>,
                <>
                  Também comecei a dar palestras técnicas sobre Inteligência Artificial em 2026 — duas até
                  agora, na Unifio e na ETEC — como forma de organizar e comunicar o que estou aprendendo.
                  Meu foco reúne desenvolvimento Backend, Engenharia de Dados e Análise de Dados.
                </>,
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  style={{
                    backgroundColor: C.bg0,
                    border: `1px solid ${C.b1}`,
                    borderRadius: '6px',
                    padding: '20px 24px',
                    fontSize: 'var(--fs-body)',
                    color: C.t400,
                    lineHeight: 1.75,
                  }}
                >
                  <p>{text}</p>
                </motion.div>
              ))}
            </div>

            {/* Habilidades */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {SKILLS.map(({ label, items }, idx) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  style={{
                    backgroundColor: C.bg0,
                    border: `1px solid ${C.b1}`,
                    borderRadius: '6px',
                    padding: '16px 18px',
                  }}
                >
                  <p style={{ ...S.sectionLabel, marginBottom: '10px', fontSize: '10px' }}>{label.replace('//', '').trim().toUpperCase()}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {items.map(item => (
                      <span key={item} style={{ ...S.techPill, fontSize: '11px', padding: '3px 9px' }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
