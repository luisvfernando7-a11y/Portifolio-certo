export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container" style={{
        display: "grid",
        gridTemplateColumns: "3fr 2fr",
        gap: "64px",
        alignItems: "flex-start"
      }}>
        
        {/* Coluna Esquerda: Texto */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <span className="section-tag">// sobre</span>
            <h2 style={{ color: "var(--text-primary)", fontSize: "2.5rem" }}>
              Luis Fernando Galvani Vieira
            </h2>
            <h3 style={{ 
              color: "var(--accent-primary)", 
              fontFamily: "var(--font-mono)", 
              fontSize: "1rem",
              marginTop: "8px",
              fontWeight: 500
            }}>
              Backend Developer · 17 anos · Ourinhos, SP
            </h3>
          </div>

          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Especialista em unir a robustez do Java com a inteligência do Python para projetar sistemas escaláveis orientados a dados. Construo desde pipelines de Machine Learning com PyTorch e FastAPI até camadas de orquestração em Spring Boot — com foco em arquiteturas que funcionam em produção.
          </p>
          
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Atualmente no 3º ano do Ensino Médio Técnico em Informática para Internet na ETEC Jacinto Ferreira de Sá, com conclusão prevista para 2026. Atuando como Jovem Aprendiz Administrativo no Colégio Bagozzi, onde desenvolvo comunicação profissional e gestão de processos em ambiente corporativo.
          </p>

          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Direcionando minha formação para engenharia de software e ciência de dados, com interesse em UTFPR e UFSCar. Inglês intermediário para leitura técnica.
          </p>

        </div>

        {/* Coluna Direita: Habilidades */}
        <div className="card" style={{ display: "flex", flexDirection: "column", gap: "32px", width: "100%" }}>
          
          {/* Grupo Backend */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4 style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", fontSize: "0.9rem" }}>
              // backend
            </h4>
            <div style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.6 }}>
              Java 17 · Spring Boot 3 · APIs REST · JPA/Hibernate · Spring Security · Flask
            </div>
          </div>

          {/* Grupo Dados & IA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4 style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", fontSize: "0.9rem" }}>
              // dados & ia
            </h4>
            <div style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.6 }}>
              Python · PyTorch · scikit-learn · FastAPI · Pandas · NumPy · LSTM · Monte Carlo
            </div>
          </div>

          {/* Grupo Infra */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4 style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", fontSize: "0.9rem" }}>
              // infra
            </h4>
            <div style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.6 }}>
              Docker · Docker Compose · MySQL · PostgreSQL · TimescaleDB · H2 · Git · GitHub
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          #sobre .container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
