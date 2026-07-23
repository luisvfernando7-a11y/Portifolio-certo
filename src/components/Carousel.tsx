'use client'

import { useState } from 'react'
import Image from 'next/image'
import { C } from '@/data/theme'

type Slide = { src: string; alt: string }

// Carrossel manual e estático — não gira sozinho. A pessoa navega
// pelas setas ou pelos indicadores. Pensado para fotos de evento,
// onde cada imagem merece ser vista em tamanho real, não em miniatura.
export default function Carousel({ slides }: { slides: Slide[] }) {
  const [idx, setIdx] = useState(0)
  if (slides.length === 0) return null

  const go = (dir: 1 | -1) => setIdx(i => (i + dir + slides.length) % slides.length)

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '6px', overflow: 'hidden', border: `1px solid ${C.b1}`, backgroundColor: C.bg2 }}>
        <Image
          key={slides[idx].src}
          src={slides[idx].src}
          alt={slides[idx].alt}
          fill
          style={{ objectFit: 'cover', filter: 'grayscale(1) contrast(1.05)' }}
          sizes="(max-width: 768px) 100vw, 480px"
        />

        {slides.length > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Foto anterior"
              style={navBtnStyle('left')}
            >‹</button>
            <button
              onClick={() => go(1)}
              aria-label="Próxima foto"
              style={navBtnStyle('right')}
            >›</button>

            <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px' }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Ver foto ${i + 1}`}
                  style={{
                    width: '6px', height: '6px', borderRadius: '50%', border: 'none', padding: 0, cursor: 'pointer',
                    backgroundColor: i === idx ? C.t100 : 'rgba(245,245,243,0.35)',
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {slides.length > 1 && (
        <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: C.t500, marginTop: '10px', textAlign: 'center' }}>
          {idx + 1} / {slides.length}
        </p>
      )}
    </div>
  )
}

function navBtnStyle(side: 'left' | 'right'): React.CSSProperties {
  return {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)', [side]: '10px',
    width: '36px', height: '36px', borderRadius: '50%',
    backgroundColor: 'rgba(10,10,10,0.6)', border: `1px solid ${C.b2}`,
    color: C.t100, fontSize: '20px', lineHeight: 1, cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  } as React.CSSProperties
}
