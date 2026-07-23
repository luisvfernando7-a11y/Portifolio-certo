'use client'

import { useState } from 'react'
import { C, S } from '@/data/theme'

const LINKS: [string, string][] = [
  ['Sobre', '#sobre'],
  ['Palestras', '#palestras'],
  ['Projetos', '#projetos'],
  ['Experiência', '#experiencia'],
  ['Contato', '#contato'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: '64px',
        borderBottom: `1px solid ${C.b1}`,
        backgroundColor: 'rgba(10,10,10,0.9)',
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center',
      }}
    >
      <div style={S.container} className="flex items-center justify-between w-full">
        <a href="#" style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '16px', fontWeight: 700, color: C.t100, textDecoration: 'none', letterSpacing: '0.02em' }}>
          Luis Galvani
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-9">
          {LINKS.map(([l, h]) => (
            <a key={l} href={h} style={{ fontSize: '14px', color: C.t400, textDecoration: 'none' }}>{l}</a>
          ))}
          <a
            href="/assets/Luis_Galvani_Curriculo.pdf"
            download="Luis_Galvani_Curriculo.pdf"
            style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', color: C.t100, border: `1px solid ${C.b2}`, borderRadius: '3px', padding: '8px 16px', textDecoration: 'none' }}
          >
            Currículo ↓
          </a>
        </div>

        {/* Mobile: botão hamburguer próprio, não é a versão desktop encolhida */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="md:hidden"
          style={{ background: 'none', border: 'none', color: C.t100, padding: '8px', cursor: 'pointer' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Painel mobile — composição própria (lista vertical grande), não os mesmos links espremidos */}
      {open && (
        <div
          className="md:hidden"
          style={{
            position: 'fixed', top: '64px', left: 0, right: 0, bottom: 0,
            backgroundColor: C.bg0, borderTop: `1px solid ${C.b1}`,
            display: 'flex', flexDirection: 'column', padding: '32px 24px', gap: '4px',
          }}
        >
          {LINKS.map(([l, h]) => (
            <a
              key={l} href={h} onClick={() => setOpen(false)}
              style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '28px', fontWeight: 600, color: C.t100, textDecoration: 'none', padding: '14px 0', borderBottom: `1px solid ${C.b1}` }}
            >
              {l}
            </a>
          ))}
          <a
            href="/assets/Luis_Galvani_Curriculo.pdf"
            download="Luis_Galvani_Curriculo.pdf"
            style={{ ...S.btnPrimary, justifyContent: 'center', marginTop: '24px', fontSize: '15px', padding: '16px' }}
          >
            Baixar Currículo ↓
          </a>
        </div>
      )}
    </nav>
  )
}
