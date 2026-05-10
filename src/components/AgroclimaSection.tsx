"use client";

import { useEffect, useRef } from "react";

export default function AgroclimaSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="agroclima" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Título da Seção */}
        <div className="flex flex-col gap-2 mb-12">
          <span className="font-mono text-accent text-sm font-bold">{"// projeto em destaque"}</span>
          <h2 className="font-space text-3xl lg:text-4xl font-bold text-primary">
            AgroClima — Sistema de Predição Agroclimática
          </h2>
          <p className="text-muted text-lg mt-2">
            Arquitetura de microserviços · LSTM + Monte Carlo · IoT ESP32 · API REST
          </p>
        </div>

        {/* Mockup do Monitor + Legenda */}
        <div className="flex flex-col items-center w-full max-w-5xl mx-auto mb-20">
          
          {/* Badge Flutuante */}
          <div className="mb-6 w-full flex justify-end">
            <span className="inline-flex items-center px-4 py-1.5 bg-accent/10 border border-accent/30 text-accent font-mono text-xs font-bold rounded-full">
              🚧 Em Desenvolvimento · TCC 2026
            </span>
          </div>

          {/* Container do Monitor */}
          <div className="w-full relative">
            {/* Moldura da Tela */}
            <div className="w-full bg-[#0A0F1E] rounded-2xl border-[3px] border-border overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative flex flex-col">
              
              {/* Barra superior (Estilo macOS) */}
              <div className="h-9 bg-surface w-full flex items-center px-5 gap-2 border-b border-border">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F57]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#FEBC2E]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#28C840]"></div>
              </div>

              {/* Área do Vídeo (16:9) */}
              <div className="w-full relative bg-navy" style={{ aspectRatio: "16/9" }}>
                <video
                  ref={videoRef}
                  src="/assets/agroclima-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover absolute inset-0"
                />

                {/* Fallback */}
                <div className="absolute inset-0 flex items-center justify-center bg-navy/90 -z-10">
                  <span className="font-mono text-faint text-sm italic">
                    {"// demo em renderização — em breve"}
                  </span>
                </div>
              </div>
            </div>

            {/* Suporte do Monitor */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-10 bg-border"></div>
              <div className="w-36 h-3 bg-border rounded-full"></div>
            </div>

            {/* Legenda (Item 09 - Agrupada e Centralizada) */}
            <p className="mt-6 font-mono text-xs text-muted text-center tracking-tight">
              Execução de inferência LSTM em tempo real com integração IoT — AgroClima v1.2.0
            </p>
          </div>
        </div>

        {/* Grid de Arquitetura */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col gap-6">
            <h3 className="font-space text-2xl font-bold text-primary">Arquitetura</h3>
            <ul className="flex flex-col gap-4 text-muted">
              {[
                "Ingestão de dados em tempo real via ESP32 + Zigbee mesh",
                "Treinamento e inferência de modelos LSTM com PyTorch",
                "Simulação Monte Carlo para análise probabilística de risco climático",
                "API REST Spring Boot como camada de orquestração e segurança",
                "Orquestração de serviços com Docker Compose",
                "Segregação de bancos: ODS (séries temporais) + banco de domínio"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">▸</span>
                  <span className="leading-relaxed text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-space text-2xl font-bold text-primary">Stack do Projeto</h3>
            <div className="flex flex-wrap gap-2.5">
              {[
                "Python", "FastAPI", "Spring Boot 3", "Java 17", "PyTorch", 
                "scikit-learn", "PostgreSQL", "TimescaleDB", "Docker", "MQTT", 
                "ESP32", "Spring Security"
              ].map(tech => (
                <span key={tech} className="px-4 py-2 bg-surface text-primary border border-border rounded-md text-sm font-mono font-medium hover:border-accent/30 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
