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
    <section id="agroclima" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Título da Seção (Novo Padrão) */}
        <div className="flex flex-col mb-16">
          <p className="font-mono text-xs text-[#4A4A4A] tracking-widest uppercase mb-3">
            // projeto em destaque
          </p>
          <h2 className="font-space text-3xl lg:text-5xl font-bold text-white">
            AgroClima — Sistema de Predição
          </h2>
          <div className="w-12 h-px bg-white/20 mt-6" />
          <p className="text-[#A0A0A0] text-lg mt-8 max-w-2xl leading-relaxed">
            Arquitetura de microserviços com <span className="text-white">Spring Boot 3</span> e <span className="text-white">Python</span>. Inferência LSTM + Monte Carlo integrados via IoT ESP32.
          </p>
        </div>

        {/* Mockup do Monitor */}
        <div className="flex flex-col items-center w-full max-w-5xl mx-auto mb-20">
          
          {/* Badge de Status */}
          <div className="mb-6 w-full flex justify-end">
            <span className="font-mono text-xs text-[#A0A0A0] border border-[#2A2A2A] bg-[#0F0F0F] px-4 py-1.5 rounded-full tracking-widest uppercase">
              Em Desenvolvimento · TCC 2026
            </span>
          </div>

          {/* Container do Monitor */}
          <div className="w-full relative">
            <div className="w-full bg-[#0A0A0A] rounded-sm border border-[#1E1E1E] overflow-hidden shadow-card-lg relative flex flex-col">
              
              {/* Barra superior */}
              <div className="h-9 bg-[#111] w-full flex items-center px-5 gap-2 border-b border-[#1E1E1E]">
                <div className="w-3 h-3 rounded-full bg-[#2A2A2A]"></div>
                <div className="w-3 h-3 rounded-full bg-[#2A2A2A]"></div>
                <div className="w-3 h-3 rounded-full bg-[#2A2A2A]"></div>
              </div>

              {/* Área do Vídeo */}
              <div className="w-full relative bg-[#080808]" style={{ aspectRatio: "16/9" }}>
                <video
                  ref={videoRef}
                  src="/assets/agroclima-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Suporte */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-8 bg-[#1E1E1E]"></div>
              <div className="w-32 h-1 bg-[#1E1E1E] rounded-full"></div>
            </div>

            <p className="mt-8 font-mono text-[10px] text-[#4A4A4A] text-center tracking-[0.2em] uppercase">
              Inferência LSTM real-time — AgroClima v1.2.0
            </p>
          </div>
        </div>

        {/* Grid de Arquitetura */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <div className="flex flex-col gap-8">
            <h3 className="font-space text-2xl font-bold text-white uppercase tracking-tight">Arquitetura</h3>
            <ul className="flex flex-col gap-6 text-[#A0A0A0]">
              {[
                "Ingestão de dados via ESP32 + Zigbee mesh",
                "Treinamento LSTM distribuído com PyTorch",
                "Simulação Monte Carlo para análise de risco",
                "API REST Spring Boot 3 como orquestrador",
                "Containerização completa com Docker Compose",
                "Segregação TimescaleDB + PostgreSQL"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-white/40 font-bold mt-1">▸</span>
                  <span className="leading-relaxed text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="font-space text-2xl font-bold text-white uppercase tracking-tight">Stack</h3>
            <div className="flex flex-wrap gap-2.5">
              {[
                "Python", "FastAPI", "Spring Boot 3", "Java 17", "PyTorch", 
                "Docker", "PostgreSQL", "MQTT", "ESP32", "Spring Security"
              ].map(tech => (
                <span key={tech} className="font-mono text-xs text-[#A0A0A0] border border-[#1E1E1E] bg-[#0F0F0F] px-4 py-2 rounded-sm hover:border-[#2A2A2A] hover:text-white transition-all">
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
