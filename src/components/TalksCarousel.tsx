'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { C, S } from '@/data/theme'
import { Talk } from '@/data/talks'
import Carousel from './Carousel'

const MicSvg = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>
  </svg>
)

const ChevLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
)

const ChevRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
)

export default function TalksCarousel({ talks }: { talks: Talk[] }) {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const paginate = (newDir: number) => {
    setDir(newDir)
    setIdx(prev => {
      let next = prev + newDir
      if (next < 0) next = talks.length - 1
      if (next >= talks.length) next = 0
      return next
    })
  }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') paginate(-1)
      if (e.key === 'ArrowRight') paginate(1)
    }
    el.addEventListener('keydown', handle)
    return () => el.removeEventListener('keydown', handle)
  })

  if (!talks.length) return null

  const talk = talks[idx]

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  }

  return (
    <div ref={containerRef} tabIndex={0} role="region" aria-roledescription="carrossel" aria-label="Palestras técnicas">

      {/* Controles superiores */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: C.accent,
          backgroundColor: C.accentLight,
          border: `1px solid ${C.b1}`,
          borderRadius: '4px',
          padding: '4px 12px',
          fontWeight: 600,
        }}>
          {idx + 1} / {talks.length}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => paginate(-1)}
            aria-label="Palestra anterior"
            style={{
              width: '44px', height: '44px', borderRadius: '6px',
              backgroundColor: C.bg0, border: `1px solid ${C.b2}`,
              color: C.t300, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            className="hover:border-black hover:text-black"
          >
            <ChevLeft />
          </button>

          <div style={{ display: 'flex', gap: '6px' }}>
            {talks.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }}
                aria-label={`Ir para palestra ${i + 1}`}
                aria-pressed={i === idx}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '4px',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  backgroundColor: i === idx ? C.accent : C.bg0,
                  color: i === idx ? C.bg0 : C.t200,
                  transition: 'all 0.25s ease',
                }}
              >{i + 1}</button>
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            aria-label="Próxima palestra"
            style={{
              width: '44px', height: '44px', borderRadius: '6px',
              backgroundColor: C.bg0, border: `1px solid ${C.b2}`,
              color: C.t300, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            className="hover:border-black hover:text-black"
          >
            <ChevRight />
          </button>
        </div>
      </div>

      {/* Card da palestra */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence initial={false} custom={dir} mode="wait">
          <motion.div
            key={idx}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x
              if (swipe < -80 || offset.x < -50) paginate(1)
              else if (swipe > 80 || offset.x > 50) paginate(-1)
            }}
            style={{
              backgroundColor: C.bg0,
              border: `1px solid ${C.b2}`,
              borderRadius: '8px',
              padding: 'clamp(18px, 3.5vw, 32px)',
              cursor: 'grab',
            }}
            className="active:cursor-grabbing"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 items-start">

              {/* Galeria */}
              <div>
                <Carousel
                  slides={[talk.mainPhoto, ...talk.galleryPhotos].map(src => ({ src, alt: `Palestra: ${talk.title}` }))}
                />
              </div>

              {/* Detalhes */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ color: C.accent }}><MicSvg /></span>
                  <span style={S.badge}>{talk.event}</span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
                  fontWeight: 700, color: C.t100, lineHeight: 1.3,
                }}>
                  {talk.title}
                </h3>

                <p style={{ fontSize: 'var(--fs-body)', color: C.t400, fontStyle: 'italic', lineHeight: 1.55 }}>
                  &ldquo;{talk.theme}&rdquo;
                </p>

                {/* Grid de metadados */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" style={{ paddingBottom: '14px', borderBottom: `1px solid ${C.b1}` }}>
                  {[
                    ['LOCAL', talk.place],
                    ['DATA', talk.date],
                    ['PÚBLICO', talk.audience],
                    ['DURAÇÃO', talk.duration],
                  ].map(([label, value]) => (
                    <div key={label} style={{
                      backgroundColor: C.bg1,
                      border: `1px solid ${C.b1}`,
                      borderRadius: '5px',
                      padding: '8px 10px',
                    }}>
                      <p style={{ ...S.sectionLabel, marginBottom: '2px', fontSize: '9px' }}>{label}</p>
                      <p style={{ fontSize: '13px', color: C.t200, fontWeight: 500, lineHeight: 1.3 }}>{value}</p>
                    </div>
                  ))}
                </div>

                {/* Tópicos */}
                <div>
                  <p style={{ ...S.sectionLabel, fontSize: '10px', marginBottom: '8px' }}>TÓPICOS ABORDADOS</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {talk.topics.map(topic => (
                      <li key={topic} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ color: C.accent, fontSize: '14px', marginTop: '1px', flexShrink: 0 }}>·</span>
                        <span style={{ fontSize: 'var(--fs-small)', color: C.t400, lineHeight: 1.6 }}>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Co-apresentação */}
                {talk.coSpeaker && (
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: C.t500,
                    backgroundColor: C.bg1,
                    border: `1px solid ${C.b1}`,
                    borderRadius: '4px',
                    padding: '7px 12px',
                    display: 'inline-block',
                  }}>
                    Co-apresentação: {talk.coSpeaker}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dica mobile */}
      <p className="md:hidden" style={{
        textAlign: 'center', marginTop: '10px',
        fontFamily: 'var(--font-mono)',
        fontSize: '11px', color: C.t500,
      }}>
        ← deslize para navegar →
      </p>

    </div>
  )
}
