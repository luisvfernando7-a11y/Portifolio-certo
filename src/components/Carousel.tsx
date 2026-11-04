'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { C } from '@/data/theme'

type Slide = { src: string; alt: string }

export default function Carousel({ slides }: { slides: Slide[] }) {
  const t = useTranslations()
  const [idx, setIdx] = useState(0)
  if (slides.length === 0) return null

  const go = (dir: 1 | -1) => setIdx(i => (i + dir + slides.length) % slides.length)

  return (
    <div style={{ position: 'relative', width: '100%' }}
      onKeyDown={event => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault()
          event.stopPropagation()
          go(event.key === 'ArrowLeft' ? -1 : 1)
        }
      }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/10',
          borderRadius: '6px',
          overflow: 'hidden',
          border: `1px solid ${C.b2}`,
          backgroundColor: C.bg2,
        }}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={slides[idx].src}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Image
              src={slides[idx].src}
              alt={slides[idx].alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </motion.div>
        </AnimatePresence>

        {slides.length > 1 && (
          <>
            <button onClick={() => go(-1)} aria-label={t('photos.previous')} style={navBtn('left')}>‹</button>
            <button onClick={() => go(1)} aria-label={t('photos.next')} style={navBtn('right')}>›</button>
            <div style={{
              position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)',
              display: 'flex', gap: '6px', backgroundColor: C.bg0,
              padding: '4px 8px', borderRadius: '10px',
            }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={t('photos.position', {number: i + 1})}
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
          </>
        )}
      </div>

      {slides.length > 1 && (
        <p aria-live="polite" aria-atomic="true" style={{ textAlign: 'center', marginTop: '8px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: C.t500 }}>
          {idx + 1} / {slides.length}
        </p>
      )}
    </div>
  )
}

function navBtn(side: 'left' | 'right'): React.CSSProperties {
  return {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)', [side]: '10px',
    width: '44px', height: '44px', borderRadius: '50%',
    backgroundColor: C.bg0, border: `1px solid ${C.b2}`,
    color: C.t200, fontSize: '20px', lineHeight: 1, cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'border-color 0.2s',
  } as React.CSSProperties
}
