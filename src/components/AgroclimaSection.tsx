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
          <span className="font-mono text-accent text-sm">{"// projeto em destaque"}</span>
          <h2 className="font-space text-3xl lg:text-4xl font-bold text-primary">
            AgroClima — Sistema de Predição Agroclimática
          </h2>
          <p className="text-muted text-lg mt-2">
            Arquitetura de microserviços · LSTM + Monte Carlo · IoT ESP32 · API REST
          </p>
        </div>

        {/* Badge Flutuante */}
        <div className="mb-8">
          <span className="inline-flex items-center px-3 py-1 bg-accent/10 border border-accent/30 text-accent font-mono text-sm rounded-full">
            🚧 Em Desenvolvimento · TCC 2026
          </span>
        </div>

        {/* Mockup de Monitor CSS */}
        <div className="flex flex-col items-center w-full max-w-5xl mx-auto mb-16">
          
          {/* Base do Monitor (Tela) */}
          <div className="w-full bg-[#0A0F1E] rounded-xl border-4 border-border overflow-hidden shadow-2xl relative flex flex-col">
            
            {/* Barra superior (Estilo macOS) */}
            <div className="h-8 bg-surface w-full flex items-center px-4 gap-2 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
            </div>

            {/* Área de Vídeo (16:9) */}
            <div className="w-full relative bg-[#060D1F]" style={{ aspectRatio: "16/9" }}>
              
              <video
                ref={videoRef}
                src="/assets/agroclima-demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover absolute inset-0 z-10"
              />

              {/* Fallback caso não haja vídeo */}
              <div 
                className="absolute inset-0 z-0 flex items-center justify-center bg-[#060D1F] border border-border"
              >
                <div className="font-mono text-faint text-sm">
                  {"// demo em renderização — em breve"}
                </div>
              </div>
            </div>
          </div>

          {/* Haste do monitor */}
          <div className="w-16 h-10 bg-border"></div>
          {/* Base do monitor */}
          <div className="w-32 h-3 bg-border rounded-md"></div>

          {/* Legenda */}
          <div className="mt-6 font-mono text-xs text-faint text-center">
            Execução de inferência LSTM em tempo real com integração IoT — AgroClima v1.2.0
          </div>
        </div>

        {/* Grid de Arquitetura */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          
          {/* Coluna 1: O que o sistema faz */}
          <div className="flex flex-col gap-6">
            <h3 className="font-space text-2xl font-semibold text-primary">Arquitetura</h3>
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
                  <span className="text-faint mt-1">▸</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 2: Stack do Projeto */}
          <div className="flex flex-col gap-6">
            <h3 className="font-space text-2xl font-semibold text-primary">Stack</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Python", "FastAPI", "Spring Boot 3", "Java 17", "PyTorch", 
                "scikit-learn", "PostgreSQL", "TimescaleDB", "Docker", "MQTT", 
                "ESP32", "Spring Security"
              ].map(tech => (
                <span key={tech} className="px-4 py-2 bg-surface text-primary border border-border rounded text-sm font-medium">
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
