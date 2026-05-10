"use client";

import { useEffect, useRef, useState } from "react";

export default function AgroclimaSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play().catch(() => {}); // silencia erros de autoplay
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="agroclima" className="section" style={{ position: "relative" }}>
      <div className="container">
        
        {/* Badge superior direito */}
        <div style={{
          position: "absolute",
          top: "6rem",
          right: "1.5rem",
          display: "none", // visível via media query em telas maiores
        }} className="agroclima-badge">
          <span className="badge" style={{
            background: "rgba(0, 200, 150, 0.1)",
            border: "1px solid var(--accent-primary)",
            color: "var(--accent-primary)",
            padding: "6px 16px"
          }}>
            🚧 Em Desenvolvimento · TCC 2026
          </span>
        </div>

        {/* Título da Seção */}
        <div className="section-header">
          <span className="section-tag">{"// projeto em destaque"}</span>
          <h2 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>
            AgroClima — Sistema de Predição Agroclimática
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.125rem" }}>
            Arquitetura de microserviços · LSTM + Monte Carlo · IoT ESP32 · API REST
          </p>
        </div>

        {/* Mockup do Monitor em CSS */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "48px" }}>
          
          {/* Base do Monitor (Tela) */}
          <div style={{
            width: "100%",
            maxWidth: "900px",
            background: "#0A0F1E",
            border: "3px solid #1D3557",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          }}>
            {/* Barra superior (Estilo macOS) */}
            <div style={{
              height: "32px",
              background: "#0D1B2A",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
              gap: "8px"
            }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#FF5F57" }}></div>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#FEBC2E" }}></div>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28C840" }}></div>
            </div>

            {/* Área do Vídeo (16:9) */}
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#060D1F", overflow: "hidden" }}>
              
              {/* VÍDEO: coloque o arquivo em assets/agroclima-demo.mp4 — o arquivo enviado é WhatsApp_Video_2026-05-09_at_20_04_58.mp4, renomeie para agroclima-demo.mp4 */}
              <video
                id="agroclima-video"
                ref={videoRef}
                src="/assets/agroclima-demo.mp4"
                poster="/assets/preview-pt.png"
                loop
                muted
                playsInline
                preload="metadata"
                onError={() => setVideoError(true)}
                style={{
                  display: videoError ? "none" : "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />

              {/* Fallback */}
              <div id="video-fallback" style={{
                display: videoError ? "flex" : "none",
                position: "absolute",
                top: 0, left: 0, width: "100%", height: "100%",
                background: "#060D1F",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono)",
                color: "var(--text-secondary)",
                fontSize: "1rem"
              }}>
                {"// demo em renderização — em breve"}
              </div>
            </div>
          </div>
          
          {/* Haste do monitor */}
          <div style={{
            width: "60px",
            height: "40px",
            background: "#1D3557",
          }}></div>
          
          {/* Base do monitor inferior */}
          <div style={{
            width: "120px",
            height: "12px",
            background: "#1D3557",
            borderRadius: "4px"
          }}></div>

          {/* Legenda Técnica */}
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            textAlign: "center",
            marginTop: "16px",
            maxWidth: "90%"
          }}>
            Execução de inferência LSTM em tempo real com integração IoT — AgroClima v1.2.0
          </p>
        </div>

        {/* Bloco de Arquitetura (2 colunas) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          marginTop: "64px"
        }}>
          {/* Coluna 1: Funcionalidades */}
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)" }}>O que o sistema faz</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px", color: "var(--text-secondary)" }}>
              <li style={{ display: "flex", gap: "12px" }}>
                <span style={{ color: "var(--accent-primary)" }}>▸</span>
                Ingestão de dados em tempo real via ESP32 + Zigbee mesh
              </li>
              <li style={{ display: "flex", gap: "12px" }}>
                <span style={{ color: "var(--accent-primary)" }}>▸</span>
                Treinamento e inferência de modelos LSTM com PyTorch
              </li>
              <li style={{ display: "flex", gap: "12px" }}>
                <span style={{ color: "var(--accent-primary)" }}>▸</span>
                Simulação Monte Carlo para análise probabilística de risco climático
              </li>
              <li style={{ display: "flex", gap: "12px" }}>
                <span style={{ color: "var(--accent-primary)" }}>▸</span>
                API REST Spring Boot como camada de orquestração e segurança
              </li>
              <li style={{ display: "flex", gap: "12px" }}>
                <span style={{ color: "var(--accent-primary)" }}>▸</span>
                Orquestração de serviços com Docker Compose
              </li>
              <li style={{ display: "flex", gap: "12px" }}>
                <span style={{ color: "var(--accent-primary)" }}>▸</span>
                Segregação de bancos: ODS (séries temporais) + banco de domínio
              </li>
            </ul>
          </div>

          {/* Coluna 2: Stack */}
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)" }}>Stack do Projeto</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "8px" }}>
              {[
                "Python", "FastAPI", "Spring Boot 3", "Java 17", "PyTorch", "scikit-learn", 
                "PostgreSQL", "TimescaleDB", "Docker", "MQTT", "ESP32", "Spring Security"
              ].map(tech => (
                <span key={tech} className="badge badge-secondary" style={{ padding: "8px 16px", borderRadius: "4px" }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 1024px) {
          .agroclima-badge { display: block !important; }
        }
      `}</style>
    </section>
  );
}
