'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { C, S } from '@/data/theme'
import { ARCH, STACK_AGRO, BRAINSOIL_REPO_URL } from '@/data/projects'
import { LockIcon, ArrowIcon } from './icons'

export default function BrainSoil() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoErr, setVideoErr] = useState(false)

  // Zoom ligado ao scroll: o "monitor" com o vídeo cresce suavemente
  // enquanto a seção passa pela viewport. Não é um efeito disparado uma
  // vez — ele acompanha a posição do scroll em tempo real.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.02, 0.97])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.5, 1, 1, 0.65])

  // Autoplay apenas quando o vídeo está visível — economiza recursos.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const obs = new IntersectionObserver(
      ([e]) => { e.isIntersecting ? video.play().catch(() => {}) : video.pause() },
      { threshold: 0.3 }
    )
    obs.observe(video)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="brainsoil" ref={sectionRef} style={S.section(C.bg1)}>
      <div style={S.container}>
        <div style={{ marginBottom: '56px' }}>
          <p style={S.sectionLabel}>// tcc · em desenvolvimento</p>
          <h2 style={S.h2}>BrainSoil — Predição Agroclimática com IA</h2>
          <p style={{ fontSize: 'var(--fs-body)', color: C.t400, marginTop: '10px', maxWidth: '580px' }}>
            Sistema de telemetria IoT com Machine Learning (LSTM) para prever a necessidade de irrigação
            a partir de dados de sensores em campo.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
            {/* Badge de status do repositório — vira link automaticamente quando BRAINSOIL_REPO_URL for preenchida em data/projects.ts */}
            {BRAINSOIL_REPO_URL ? (
              <a
                href={BRAINSOIL_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontFamily: '"JetBrains Mono", monospace', fontSize: '12px',
                  color: C.t100, border: `1px solid ${C.b2}`,
                  borderRadius: '20px', padding: '5px 14px',
                  textDecoration: 'none',
                }}
              >
                Ver Repositório <ArrowIcon />
              </a>
            ) : (
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontFamily: '"JetBrains Mono", monospace', fontSize: '12px',
                color: C.t500, border: `1px solid ${C.b1}`,
                borderRadius: '20px', padding: '5px 14px',
              }}>
                <LockIcon size={12} /> Repositório privado — liberação após defesa do TCC
              </span>
            )}
          </div>

          <div style={S.divider} />
        </div>

        {/* Monitor com zoom no scroll */}
        <motion.div style={{ maxWidth: '100%', margin: '0 auto', scale, opacity }}>
          <div style={{ border: `1px solid ${C.b2}`, borderRadius: '8px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 20px', backgroundColor: C.bg2, borderBottom: `1px solid ${C.b1}` }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', border: `1px solid ${C.b2}` }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', border: `1px solid ${C.b2}` }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', border: `1px solid ${C.b2}` }} />
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: C.t500, marginLeft: '8px' }}>
                brainsoil-demo · v1.2.0
              </span>
            </div>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', minHeight: '240px', backgroundColor: C.bg0, overflow: 'hidden' }}>
              {!videoErr ? (
                <video
                  ref={videoRef}
                  src="/assets/agroclima-demo.mp4"
                  autoPlay loop muted playsInline preload="metadata"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', backgroundColor: C.bg0 }}
                  onError={() => setVideoErr(true)}
                />
              ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '14px', color: C.t500 }}>// demo em renderização</p>
                  <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: C.t400 }}>brainsoil v1.2.0 — em breve</p>
                </div>
              )}
            </div>
          </div>
          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: C.t500, textAlign: 'center', marginTop: '18px' }}>
            Inferência LSTM com integração de sensores IoT — BrainSoil v1.2.0
          </p>
        </motion.div>

        {/* Arch + Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-14 md:mt-20">
          <div>
            <p style={S.sectionLabel}>// o que o sistema faz</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {ARCH.map(a => (
                <li key={a} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: C.t500, fontSize: '13px', marginTop: '2px', flexShrink: 0 }}>—</span>
                  <span style={{ fontSize: 'var(--fs-small)', color: C.t400, lineHeight: 1.65 }}>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={S.sectionLabel}>// stack do projeto</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {STACK_AGRO.map(t => (
                <span key={t} style={{ ...S.techPill, padding: '6px 14px', color: C.t300 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
