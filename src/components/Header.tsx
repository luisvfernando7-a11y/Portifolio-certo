"use client"

import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import ContactLinks from './ContactLinks'
import { C, S } from '@/data/theme'


export default function Header() {
  const t = useTranslations()
  const LINKS = [
    [t('nav.about'), '#sobre'], [t('nav.experience'), '#experiencia'], [t('nav.projects'), '#projetos'], [t('nav.certificates'), '#certificados'], [t('nav.contact'), '#contato'],
  ] as const
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
        <div className="header-actions flex items-center gap-1 lg:order-3">
        <ContactLinks compact />
        <LanguageSwitcher />
        <button ref={buttonRef} type="button" className="nav-toggle" aria-label={open ? t('nav.close') : t('nav.open')} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(value => !value)}>
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
        </div>
        <nav id="main-navigation" aria-label={t('nav.main')} className={`${open ? 'flex' : 'hidden'} max-h-[70dvh] w-full flex-col gap-1 overflow-y-auto lg:flex lg:w-auto lg:flex-row lg:gap-1`}>
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => {
              setOpen(false)
              const target = document.getElementById(href.slice(1))
              if (target) {
                target.tabIndex = -1
                requestAnimationFrame(() => target.focus({preventScroll: true}))
              }
            }} className="link-arrow px-2 py-3" style={{ color: C.t300, fontSize: '14px', textDecoration: 'none' }}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
