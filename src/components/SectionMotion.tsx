"use client"

import { useEffect } from 'react'

export default function SectionMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const sections = document.querySelectorAll<HTMLElement>('main > section:not(#inicio)')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('section-enter')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.08 })
    sections.forEach(section => observer.observe(section))
    return () => {
      observer.disconnect()
      sections.forEach(section => section.classList.remove('section-enter'))
    }
  }, [])

  return null
}
