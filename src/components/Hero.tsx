'use client'
import { useState, useEffect } from 'react'

const roles = [
  'Java · Spring Boot 3 · APIs REST',
  'Python · Machine Learning · IoT',
  'Arquiteturas escaláveis orientadas a dados',
]

export function AnimatedRole() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(prev => (prev + 1) % roles.length)
        setVisible(true)
      }, 350)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <p
      className={`font-mono text-base text-[#A0A0A0] transition-opacity duration-400 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {roles[index]}
    </p>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-[#080808] flex flex-col justify-center py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Coluna Esquerda: Texto */}
        <div className="flex flex-col items-start order-2 lg:order-1">
          
          <span className="font-mono text-xs text-[#4A4A4A] border border-[#1E1E1E] bg-[#0F0F0F] px-3 py-1 rounded-sm tracking-widest uppercase">
            Backend Developer
          </span>

          <h1 className="font-space text-6xl lg:text-8xl font-bold text-white leading-none tracking-tight mt-6">
            Luis<br />
            <span className="text-white/60">Galvani</span>
          </h1>

          <div className="h-8 flex items-center mt-4">
            <AnimatedRole />
          </div>

          <p className="text-[#A0A0A0] text-lg leading-relaxed mt-6 max-w-lg">
            Desenvolvedor backend de 17 anos. Construo{' '}
            <span className="text-white font-medium">APIs REST</span>,{' '}
            <span className="text-white font-medium">pipelines de ML</span> e{' '}
            <span className="text-white font-medium">sistemas IoT</span>{' '}
            com Java e Python.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projetos"
              className="bg-white text-[#080808] font-semibold font-mono text-sm px-8 py-4 rounded-sm hover:bg-white/90 transition-all"
            >
              Ver Projetos
            </a>

            <a
              href="/assets/Luis_Galvani_Curriculo.pdf"
              download="Luis_Galvani_Curriculo.pdf"
              className="border border-[#2A2A2A] text-[#F5F5F5] font-mono text-sm px-8 py-4 rounded-sm hover:border-white/60 hover:bg-white/5 transition-all"
            >
              Baixar Currículo ↓
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mt-12">
            {['Java 17', 'Spring Boot 3', 'Python', 'FastAPI', 'Docker', 'ML'].map(tech => (
              <span key={tech} className="font-mono text-xs text-[#4A4A4A] border border-[#1E1E1E] px-2 py-1 rounded-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Coluna Direita: Status Card */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="border border-[#1E1E1E] bg-[#0F0F0F] rounded-sm p-8 font-mono w-full max-w-sm shadow-card">
            <p className="text-[#4A4A4A] text-xs mb-6 tracking-widest uppercase">// status</p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-[#F5F5F5] font-medium">Open to internship</span>
              </div>
              <div className="flex items-start gap-3 text-[#A0A0A0]">
                <span className="text-white/40 mt-1">▸</span>
                <span>TCC em desenvolvimento — AgroClima</span>
              </div>
              <div className="flex items-start gap-3 text-[#A0A0A0]">
                <span className="text-white/40 mt-1">▸</span>
                <span>3º ano ETEC Jacinto Ferreira de Sá</span>
              </div>
              <div className="flex items-start gap-3 text-[#A0A0A0]">
                <span className="text-white/40 mt-1">▸</span>
                <span>Jovem Aprendiz @ Colégio Bagozzi</span>
              </div>
            </div>

            <div className="border-t border-[#1E1E1E] mt-6 pt-6">
              <p className="text-[#4A4A4A] text-xs tracking-widest uppercase mb-2">// meta</p>
              <p className="text-[#A0A0A0] text-xs leading-relaxed">
                UTFPR · UFSCar · Engenharia de Software
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
