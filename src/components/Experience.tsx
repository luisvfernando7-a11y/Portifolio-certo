const EXPERIENCES = [
  {
    period: "2026 — Em andamento",
    title: "TCC — Sistema IoT de Telemetria e Predição",
    local: "ETEC Jacinto Ferreira de Sá",
    desc: "Arquitetura de microserviços com Java 17 + Spring Boot como API Gateway. Rede ESP32 com Zigbee mesh, serviço de ML em Python para predição de umidade do solo, Docker e Spring Security.",
    badge: "Em Desenvolvimento"
  },
  {
    period: "Atual",
    title: "Jovem Aprendiz Administrativo",
    local: "Colégio Bagozzi",
    desc: "Gestão de processos administrativos, comunicação corporativa e trabalho colaborativo em ambiente profissional.",
  },
  {
    period: "2024 — 2026",
    title: "Ensino Médio Técnico em Informática para Internet",
    local: "ETEC Jacinto Ferreira de Sá",
    desc: "Formação técnica com ênfase em desenvolvimento web, banco de dados e programação orientada a objetos.",
  }
];

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">{"// experiência e formação"}</span>
        </div>

        <div style={{
          position: "relative",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px 0"
        }}>
          
          {/* Linha Central */}
          <div style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "24px",
            width: "2px",
            background: "var(--border)",
            transform: "translateX(-50%)"
          }} className="timeline-line"></div>

          {/* Itens */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {EXPERIENCES.map((exp, i) => (
              <div key={i} style={{
                position: "relative",
                paddingLeft: "64px"
              }} className="timeline-item">
                
                {/* Ponto */}
                <div style={{
                  position: "absolute",
                  left: "24px",
                  top: "6px",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  background: "var(--accent-primary)",
                  boxShadow: "0 0 0 4px var(--bg-primary)",
                  transform: "translateX(-50%)",
                  zIndex: 2
                }}></div>

                {/* Conteúdo */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.875rem",
                      color: "var(--accent-primary)"
                    }}>
                      {exp.period}
                    </span>
                    {exp.badge && (
                      <span className="badge badge-outline" style={{ fontSize: "0.7rem", padding: "2px 8px" }}>
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 style={{ color: "var(--text-primary)", fontSize: "1.25rem", marginTop: "4px" }}>
                    {exp.title}
                  </h3>
                  
                  <span style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--text-secondary)",
                    fontWeight: 500,
                    fontSize: "0.95rem"
                  }}>
                    {exp.local}
                  </span>
                  
                  <p style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginTop: "8px"
                  }}>
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
