'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

// Ativa scroll suave em todo o site. Respeita "prefers-reduced-motion":
// quem tem essa preferência ligada no sistema não recebe o smoothing,
// e continua com o scroll nativo do navegador (acessibilidade > estética).
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return <>{children}</>
}
