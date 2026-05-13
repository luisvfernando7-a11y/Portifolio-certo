'use client'
import { useRef, useState, useEffect } from 'react'

export function AgroClima() {
  const videoRef  = useRef<HTMLVideoElement>(null)
  const [err, setErr] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const obs = new IntersectionObserver(
      ([e]) => { e.isIntersecting ? video.play().catch(() => {}) : video.pause() },
      { threshold: 0.3 }
    )
    obs.observe(video)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="agroclima" className="py-24 bg-[#0D1117]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-[10px] text-[#484F58] tracking-[0.2em] uppercase mb-3">// projeto em destaque · tcc 2026</p>
          <h2 className="font-space text-3xl lg:text-4xl font-bold text-[#F0F6FC] leading-tight mb-3">
            AgroClima — Predição Agroclimática com IA
          </h2>
          <p className="text-[#8B949E] mb-4">Arquitetura de microserviços · LSTM + Monte Carlo · IoT ESP32 · API REST</p>
          <span className="inline-block font-mono text-xs text-[#60A5FA] border border-[#60A5FA]/25 bg-[#60A5FA]/5 px-3 py-1 rounded-full">
            Em Desenvolvimento · TCC 2026
          </span>
        </div>

        {/* Monitor */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="border-2 border-[#1E2D45] rounded-xl overflow-hidden shadow-2xl shadow-black/50">

            {/* Barra do monitor */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0D1117] border-b border-[#1E2D45]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="font-mono text-xs text-[#484F58] ml-3">agroclima-demo · v1.2.0</span>
            </div>

            {/* Tela */}
            <div className="relative w-full aspect-video bg-[#080C14] overflow-hidden">
              {!err ? (
                <video
                  ref={videoRef}
                  src="/assets/agroclima-demo.mp4"
                  autoPlay loop muted playsInline preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={() => setErr(true)}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <p className="font-mono text-[#484F58] text-sm">// demo em renderização</p>
                  <p className="font-mono text-[#60A5FA] text-xs">agroclima v1.2.0 — em breve</p>
                </div>
              )}
            </div>
          </div>

          {/* Base do monitor */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-6 bg-[#1E2D45]" />
            <div className="w-24 h-2.5 bg-[#1E2D45] rounded-sm" />
          </div>

          <p className="font-mono text-xs text-[#484F58] text-center mt-4">
            Execução de inferência LSTM em tempo real com integração IoT — AgroClima v1.2.0
          </p>
        </div>

        {/* Arquitetura + Stack */}
        <div className="grid lg:grid-cols-2 gap-10 mt-14">

          <div>
            <p className="font-mono text-[10px] text-[#484F58] tracking-[0.2em] uppercase mb-4">// o que o sistema faz</p>
            <ul className="flex flex-col gap-3">
              {[
                'Ingestão de dados em tempo real via ESP32 + Zigbee mesh',
                'Treinamento e inferência de modelos LSTM com PyTorch',
                'Simulação Monte Carlo para análise probabilística de risco',
                'API REST Spring Boot como camada de orquestração e segurança',
                'Orquestração de serviços com Docker Compose',
                'Segregação de bancos: ODS (séries temporais) + banco de domínio',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#60A5FA] shrink-0 mt-1 text-xs">▸</span>
                  <span className="text-[#8B949E] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] text-[#484F58] tracking-[0.2em] uppercase mb-4">// stack do projeto</p>
            <div className="flex flex-wrap gap-2">
              {['Python','FastAPI','Spring Boot 3','Java 17','PyTorch','scikit-learn','PostgreSQL','TimescaleDB','Docker','MQTT','ESP32','Spring Security'].map(t => (
                <span key={t} className="font-mono text-xs text-[#8B949E] border border-[#1E2D45] bg-[#080C14] px-3 py-1.5 rounded hover:border-[#30363D] hover:text-[#C9D1D9] transition-all">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
