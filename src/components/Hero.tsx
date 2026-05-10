'use client'
import { useState, useEffect } from 'react'

const roles = [
  'Java · Spring Boot 3 · APIs REST',
  'Python · Machine Learning · IoT',
  'Sistemas escaláveis orientados a dados',
  'Backend Developer em formação',
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
      className={`font-mono text-base text-accent transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {roles[index]}
    </p>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-navy flex items-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Coluna Esquerda */}
        <div className="flex flex-col gap-6">
          
          <div className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded-full w-fit bg-surface">
            <span className="font-mono text-accent text-sm font-medium">
              &lt; Backend Developer /&gt;
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-space text-5xl lg:text-7xl font-bold text-primary tracking-tight">
              Luis Galvani
            </h1>
            <div className="h-8 flex items-center">
              <AnimatedRole />
            </div>
          </div>

          <p className="text-muted text-lg leading-relaxed max-w-xl">
            Desenvolvedor backend de 17 anos especializado em unir a robustez do Java com a inteligência do Python. Construo APIs REST, pipelines de ML e sistemas IoT que funcionam em produção.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a 
              href="#projetos"
              className="px-8 py-3 bg-accent text-navy font-semibold rounded-md hover:bg-accent/90 transition-colors"
            >
              Ver Projetos
            </a>
            
            <a 
              href="/assets/Luis_Galvani_Curriculo.pdf"
              download="Luis_Galvani_Curriculo.pdf"
              className="px-8 py-3 border border-border text-muted font-semibold rounded-md hover:border-borderHover hover:text-primary transition-colors"
            >
              Baixar Currículo
            </a>
          </div>

        </div>

        {/* Coluna Direita - Status */}
        <div className="bg-surface border border-border p-6 md:p-8 rounded-xl shadow-lg flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-accent text-sm uppercase tracking-wider">
              Status atual
            </span>
          </div>

          <ul className="flex flex-col gap-4 text-primary font-medium">
            <li className="flex items-center gap-3">
              <span className="text-faint">▸</span>
              TCC em desenvolvimento — AgroClima
            </li>
            <li className="flex items-center gap-3">
              <span className="text-faint">▸</span>
              3º ano ETEC Jacinto Ferreira de Sá
            </li>
            <li className="flex items-center gap-3">
              <span className="text-faint">▸</span>
              Jovem Aprendiz @ Colégio Bagozzi
            </li>
          </ul>

          <div className="pt-6 border-t border-border flex flex-wrap gap-2">
            {['Java', 'Python', 'Spring Boot', 'Docker', 'ML'].map(tech => (
              <span key={tech} className="px-3 py-1 bg-navy border border-border text-muted text-sm font-mono rounded">
                {tech}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
