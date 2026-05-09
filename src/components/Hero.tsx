"use client";

import { useEffect, useState } from "react";

const SUBTITLES = [
  "Java · Spring Boot · APIs REST",
  "Python · Machine Learning · IoT",
  "Arquiteturas escaláveis orientadas a dados"
];

export default function Hero() {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // inicia o fade out
      
      setTimeout(() => {
        setCurrentSubtitleIndex((prev) => (prev + 1) % SUBTITLES.length);
        setFade(true); // inicia o fade in com a nova frase
      }, 500); // metade do ciclo para a transição
      
    }, 3000); // troca a cada 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section" style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "4rem",
        alignItems: "center"
      }}>
        
        {/* Coluna Esquerda: Textos e CTAs */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "24px" }}>
          
          {/* Pill Tag */}
          <span className="badge badge-outline" style={{ fontSize: "0.875rem" }}>
            &lt; Backend Developer /&gt;
          </span>

          {/* Headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h1 style={{ color: "var(--text-primary)", letterSpacing: "-1px" }}>
              Luis Galvani
            </h1>
            
            {/* Animated Subtitle */}
            <h2 style={{ 
              color: "var(--text-secondary)", 
              fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              minHeight: "3rem", // previne pulos de layout
              transition: "opacity 0.5s ease-in-out",
              opacity: fade ? 1 : 0
            }}>
              {SUBTITLES[currentSubtitleIndex]}
            </h2>
          </div>

          {/* Bio Parágrafo */}
          <p style={{
            color: "var(--text-secondary)",
            fontSize: "1.125rem",
            maxWidth: "540px",
            lineHeight: 1.7
          }}>
            Desenvolvedor backend de 17 anos especializado em unir a robustez do Java com a inteligência do Python. Construo APIs REST, pipelines de ML e sistemas IoT que funcionam em produção.
          </p>

          {/* Botões */}
          <div style={{ display: "flex", gap: "16px", marginTop: "16px", flexWrap: "wrap" }}>
            <a href="#projetos" className="btn-primary">
              Ver Projetos
            </a>
            <a 
              href="/assets/Luis_Galvani_Curriculo.pdf" 
              download="Luis_Galvani_Curriculo.pdf"
              className="btn-outline"
            >
              Baixar Currículo
            </a>
          </div>
        </div>

        {/* Coluna Direita: Status Card */}
        <div className="card" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ 
            fontFamily: "var(--font-mono)", 
            color: "var(--accent-primary)",
            fontSize: "1rem",
            textTransform: "uppercase",
            letterSpacing: "1px"
          }}>
            Status atual
          </h3>

          <ul style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <li style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-primary)" }}>
              {/* Green Pulse Dot */}
              <span style={{ position: "relative", display: "flex", width: "10px", height: "10px" }}>
                <span style={{
                  animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                  position: "absolute",
                  display: "inline-flex",
                  height: "100%",
                  width: "100%",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-primary)",
                  opacity: 0.75
                }}></span>
                <span style={{ position: "relative", display: "inline-flex", borderRadius: "50%", height: "10px", width: "10px", backgroundColor: "var(--accent-primary)" }}></span>
              </span>
              Disponível para estágio
            </li>
            
            <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "var(--text-secondary)" }}>
              <span style={{ color: "var(--accent-primary)", marginTop: "2px" }}>▸</span>
              TCC em desenvolvimento — AgroClima
            </li>
            
            <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "var(--text-secondary)" }}>
              <span style={{ color: "var(--accent-primary)", marginTop: "2px" }}>▸</span>
              3º ano ETEC Jacinto Ferreira de Sá
            </li>
            
            <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "var(--text-secondary)" }}>
              <span style={{ color: "var(--accent-primary)", marginTop: "2px" }}>▸</span>
              Jovem Aprendiz @ Colégio Bagozzi
            </li>
          </ul>

          <div style={{ height: "1px", background: "var(--border)", margin: "8px 0" }}></div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <span className="badge badge-secondary">Java</span>
            <span className="badge badge-secondary">Python</span>
            <span className="badge badge-secondary">Spring Boot</span>
            <span className="badge badge-secondary">Docker</span>
            <span className="badge badge-secondary">ML</span>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
