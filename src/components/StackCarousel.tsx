"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Pause, Play } from 'lucide-react'
import { STACK_ICONS } from '@/data/stack'

export default function StackCarousel() {
  const [paused, setPaused] = useState(false)

  return (
    <section className="stack-carousel" data-paused={paused} aria-labelledby="stack-title">
      <div className="stack-carousel-bar">
        <h2 id="stack-title" className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Tecnologias e ferramentas</h2>
        <button type="button" className="stack-motion-toggle" aria-label={paused ? 'Continuar animação das tecnologias' : 'Pausar animação das tecnologias'} aria-pressed={paused} onClick={() => setPaused(value => !value)}>
          {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
        </button>
      </div>
      <ul className="sr-only">{STACK_ICONS.map(([label]) => <li key={label}>{label}</li>)}</ul>
      <div className="stack-carousel-window" aria-hidden="true">
        <div className="stack-carousel-track">
          {[0, 1].map(copy => (
            <ul key={copy} className="stack-carousel-group" aria-hidden={copy === 1 ? true : undefined}>
              {STACK_ICONS.map(([label, file]) => (
                <li key={file} className="stack-carousel-item" title={label}>
                  <Image src={`/stack/${file}.svg`} alt="" width={56} height={56} unoptimized />
                  <span className="stack-carousel-label">{label}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
