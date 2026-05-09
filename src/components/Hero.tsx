"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

/*
  HOSPEDAGEM DO VÍDEO — OPÇÕES RECOMENDADAS:

  OPÇÃO 1 (Recomendada — gratuita):
  Cloudinary — https://cloudinary.com
  - Faça upload do vídeo no Cloudinary
  - Substitua o src do <video> pela URL gerada
  - O Cloudinary entrega o vídeo via CDN global com compressão automática
  - Mantém o Lighthouse score alto pois o vídeo não fica no bundle da Vercel

  OPÇÃO 2 (Simples — para vídeos curtos até 50MB):
  Vídeo nativo na pasta assets/
  - Exporte em H.264 + MP4, resolução máxima 1080p, bitrate ~2Mbps
  - Use ffmpeg: ffmpeg -i original.mp4 -vcodec h264 -acodec aac -crf 28 agroclima-v1.mp4
  - Coloque em public/assets/agroclima-v1.mp4

  OPÇÃO 3 (YouTube/Vimeo embed):
  - Substitua o <video> por um <iframe> do YouTube com parâmetros:
    ?autoplay=1&mute=1&loop=1&controls=0&playlist=VIDEO_ID
  - Menor controle visual mas zero impacto na Vercel
*/

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Lazy Autoplay usando Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(err => console.warn("Autoplay prevenido pelo navegador:", err));
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section style={{ padding: "3rem 0 4rem" }}>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
          <motion.div variants={itemVariants} style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            {/* Main Title */}
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}>
              AgroClima — Plataforma de Predição Agroclimática com IA
            </h1>
            
            {/* Status Badge */}
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
              color: "var(--accent)",
              background: "#1F2937",
              border: "1px solid var(--accent)",
              padding: "4px 12px",
              borderRadius: 999,
              whiteSpace: "nowrap",
            }}>
              🚧 Em Desenvolvimento
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.h2 variants={itemVariants} style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(16px, 3vw, 20px)",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "var(--text-muted)",
            maxWidth: 720,
          }}>
            Arquitetura de microserviços integrando LSTM, Monte Carlo, IoT (ESP32) e API REST para predição de riscos em agricultura de precisão.
          </motion.h2>
        </div>

        {/* Video Mockup Frame */}
        <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
          <div style={{
            width: "100%",
            maxWidth: 900,
            background: "#0A0F1E",
            border: "1px solid var(--border)",
            borderRadius: "12px 12px 0 0",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            position: "relative"
          }}>
            {/* Browser/Monitor Header Bar */}
            <div style={{
              height: 28,
              background: "#111827",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              padding: "0 12px",
              gap: 6
            }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981" }} />
            </div>

            {/* Video Container (16:9) */}
            <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", background: "#0A0F1E" }}>
              <video
                ref={videoRef}
                preload="none"
                muted
                loop
                playsInline
                poster="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%230A0F1E'/%3E%3Ctext x='50%25' y='50%25' font-family='monospace' font-size='16' fill='%239CA3AF' text-anchor='middle' dominant-baseline='middle'%3EAgroClima v1.2.0 %E2%80%94 Demo%3C/text%3E%3C/svg%3E"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              >
                {/* VÍDEO — coloque o arquivo em public/assets/agroclima-v1.mp4 para ativar */}
                <source src="/assets/agroclima-v1.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
            
            {/* Monitor Base (reflexo sutil simulado com gradient) */}
            <div style={{
              position: "absolute",
              top: 0, left: 0, right: 0, height: "40%",
              background: "linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)",
              pointerEvents: "none"
            }} />
          </div>
          
          {/* Monitor Stand (Base do Monitor) */}
          <div style={{
            width: 140,
            height: 16,
            background: "linear-gradient(to bottom, #1F2937, #111827)",
            borderLeft: "1px solid var(--border)",
            borderRight: "1px solid var(--border)",
          }} />
          <div style={{
            width: 220,
            height: 8,
            background: "#1F2937",
            borderRadius: "4px 4px 0 0",
            borderTop: "1px solid var(--border)",
          }} />

          {/* Legenda Técnica */}
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "#9CA3AF",
            textAlign: "center",
            marginTop: 24,
            maxWidth: "90%"
          }}>
            Execução de inferência LSTM em tempo real com integração IoT — AgroClima v1.2.0
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
