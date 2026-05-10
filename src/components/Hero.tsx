'use client'
import { useState, useEffect } from 'react'

const roles = [
  'Java · Spring Boot · APIs REST',
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
      className={`font-mono text-lg font-medium text-accent transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {roles[index]}
    </p>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-navy flex flex-col justify-center py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Coluna Esquerda: Texto */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          
          <div className="inline-flex items-center gap-2 border border-border px-4 py-1.5 rounded-full w-fit bg-surface/50 backdrop-blur-sm">
            <span className="font-mono text-accent text-sm font-medium">
              &lt; Backend Developer /&gt;
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="font-space text-5xl lg:text-7xl font-bold text-primary tracking-tight leading-[1.1]">
              Luis Galvani
            </h1>
            <div className="h-8 flex items-center">
              <AnimatedRole />
            </div>
          </div>

          <p className="text-muted text-lg lg:text-xl leading-relaxed max-w-xl">
            Desenvolvedor backend de 17 anos especializado em unir a robustez do Java com a inteligência do Python. Construo APIs REST, pipelines de ML e sistemas IoT que funcionam em produção.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a 
              href="#projetos"
              className="px-10 py-4 bg-accent text-navy font-bold rounded-lg hover:brightness-110 hover:shadow-[0_0_20px_rgba(45,212,160,0.3)] transition-all duration-300"
            >
              Ver Projetos
            </a>
            
            <a 
              href="/assets/Luis_Galvani_Curriculo.pdf"
              download="Luis_Galvani_Curriculo.pdf"
              className="px-10 py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all duration-300"
            >
              Baixar Currículo
            </a>
          </div>

        </div>

        {/* Coluna Direita: Status Card */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="bg-surface border border-border p-8 rounded-2xl shadow-2xl w-full max-w-md relative group hover:border-accent/30 transition-colors">
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-accent text-sm uppercase tracking-widest font-bold">
                Status atual
              </span>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-border"></div>
                <div className="w-3 h-3 rounded-full bg-border"></div>
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
              </div>
            </div>

            <ul className="flex flex-col gap-5 text-primary font-medium">
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1">▸</span>
                <span>TCC em desenvolvimento — AgroClima</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1">▸</span>
                <span>3º ano ETEC Jacinto Ferreira de Sá</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1">▸</span>
                <span>Jovem Aprendiz @ Colégio Bagozzi</span>
              </li>
            </ul>

            <div className="mt-10 pt-8 border-t border-border flex flex-wrap gap-2">
              {['Java', 'Python', 'Spring Boot', 'Docker', 'ML'].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-navy border border-border text-muted text-xs font-mono rounded-md group-hover:border-accent/20 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
