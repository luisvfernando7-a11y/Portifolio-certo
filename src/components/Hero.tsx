'use client'
import { useState, useEffect } from 'react'

const roles = [
  'Java · Spring Boot 3 · APIs REST',
  'Python · Machine Learning · IoT',
  'Sistemas escaláveis orientados a dados',
  'Backend Developer em formação',
]

export function Hero() {
  const [index, setIndex]     = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false)
      setTimeout(() => { setIndex(i => (i + 1) % roles.length); setVisible(true) }, 350)
    }, 3200)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="min-h-screen flex items-center pt-14 bg-[#080C14]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-16 items-center">

          {/* ESQUERDA */}
          <div className="flex flex-col gap-6">

            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse-slow" />
              <span className="font-mono text-xs text-[#60A5FA] tracking-[0.18em] uppercase">Backend Developer</span>
            </div>

            <div>
              <h1
                className="font-space font-bold text-[#F0F6FC] tracking-tight leading-[1]"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}
              >
                Luis
              </h1>
              <h1
                className="font-space font-bold text-[#30363D] tracking-tight leading-[1]"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}
              >
                Galvani
              </h1>
            </div>

            <p
              className="font-mono text-sm text-[#60A5FA] transition-opacity duration-300 h-5"
              style={{ opacity: visible ? 1 : 0 }}
            >
              {roles[index]}
            </p>

            <p className="text-[#8B949E] text-base leading-relaxed max-w-[440px]">
              Desenvolvedor backend de 17 anos. Construo{' '}
              <span className="text-[#C9D1D9] font-medium">APIs REST</span>,{' '}
              <span className="text-[#C9D1D9] font-medium">pipelines de ML</span> e{' '}
              <span className="text-[#C9D1D9] font-medium">sistemas IoT</span>{' '}
              com Java e Python — com foco em arquiteturas que funcionam em produção.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projetos"
                className="font-mono text-sm font-semibold bg-[#60A5FA] text-[#080C14] px-5 py-2.5 rounded hover:bg-[#93C5FD] transition-colors duration-200"
              >
                Ver Projetos
              </a>
              <a
                href="/assets/Luis_Galvani_Curriculo.pdf"
                download="Luis_Galvani_Curriculo.pdf"
                className="font-mono text-sm font-medium text-[#C9D1D9] border border-[#30363D] px-5 py-2.5 rounded hover:border-[#8B949E] hover:text-[#F0F6FC] hover:bg-[#161B22] transition-all duration-200"
              >
                Baixar Currículo
              </a>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {['Java 17', 'Spring Boot 3', 'Python', 'FastAPI', 'Docker', 'ML'].map(t => (
                <span key={t} className="font-mono text-xs text-[#484F58] border border-[#1E2D45] px-2.5 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>

          </div>

          {/* DIREITA — STATUS CARD */}
          <div className="border border-[#1E2D45] bg-[#0D1117] rounded-xl p-6 self-center">
            <p className="font-mono text-[10px] text-[#484F58] tracking-[0.2em] uppercase mb-5">// status</p>

            <div className="flex flex-col gap-4">
              {[
                'TCC em desenvolvimento — AgroClima',
                '3º ano · ETEC Jacinto Ferreira de Sá',
                'Jovem Aprendiz @ Colégio Bagozzi',
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[#60A5FA] text-xs mt-0.5 shrink-0">▸</span>
                  <span className="text-[#C9D1D9] text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#1E2D45] mt-5 pt-4">
              <p className="font-mono text-[10px] text-[#484F58] tracking-[0.2em] uppercase mb-2">// foco</p>
              <p className="text-[#8B949E] text-xs">UTFPR · UFSCar · Eng. de Software</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
