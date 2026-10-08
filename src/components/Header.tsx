"use client"

import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ContactLinks from './ContactLinks'
import { C, S } from '@/data/theme'

const LINKS = [
  ['Sobre', '#sobre'], ['Experiência', '#experiencia'], ['Projetos', '#projetos'], ['Certificados', '#certificados'], ['Contato', '#contato'],
] as const

export default function Header() {
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); buttonRef.current?.focus() }
    }
    const outside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 1024px)')
    const resize = () => { if (desktop.matches) setOpen(false) }
    document.addEventListener('keydown', close)
    document.addEventListener('pointerdown', outside)
    desktop.addEventListener('change', resize)
    return () => {
      document.removeEventListener('keydown', close)
      document.removeEventListener('pointerdown', outside)
      desktop.removeEventListener('change', resize)
    }
  }, [open])

  return (
    <header ref={headerRef} style={{ position: 'fixed', inset: '0 0 auto', zIndex: 50, background: C.bg0, borderBottom: `1px solid ${C.b1}` }}>
      <div style={{ ...S.container, minHeight: '72px' }} className="flex flex-wrap items-center justify-between gap-1 py-3">
        <a href="#inicio" className="text-sm sm:text-base" style={{ color: C.t100, fontWeight: 700, textDecoration: 'none' }}>Luis Galvani.</a>
        <div className="flex items-center gap-1 lg:order-3">
        <ContactLinks compact />
        <button ref={buttonRef} type="button" className="nav-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(value => !value)}>
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
        </div>
        <nav id="main-navigation" aria-label="Menu principal" className={`${open ? 'flex' : 'hidden'} max-h-[70dvh] w-full flex-col gap-1 overflow-y-auto lg:flex lg:w-auto lg:flex-row lg:gap-1`}>
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="link-arrow px-2 py-3" style={{ color: C.t300, fontSize: '14px', textDecoration: 'none' }}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
