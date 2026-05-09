const EnvelopeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export default function Contact() {
  return (
    <section id="contato" style={{ background: "var(--bg-secondary)", padding: "8rem 0" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        
        <h2 style={{ color: "var(--text-primary)", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "16px" }}>
          Vamos conversar?
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.125rem", marginBottom: "48px" }}>
          Aberto a oportunidades de estágio em Backend · Respondo em até 24h
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          width: "100%",
          maxWidth: "1000px",
          marginBottom: "48px"
        }}>
          
          {/* Email */}
          <a href="mailto:luisvfernando7@gmail.com" className="card" style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textDecoration: "none"
          }}>
            <div style={{ color: "var(--accent-primary)" }}><EnvelopeIcon /></div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Email</span>
            <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>luisvfernando7@gmail.com</span>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/luisfernandovieira" target="_blank" rel="noopener noreferrer" className="card" style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textDecoration: "none"
          }}>
            <div style={{ color: "var(--accent-primary)" }}><LinkedInIcon /></div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "var(--text-muted)", textTransform: "uppercase" }}>LinkedIn</span>
            <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>linkedin.com/in/luisfernandovieira</span>
          </a>

          {/* GitHub */}
          <a href="https://github.com/luisvfernando7-a11y" target="_blank" rel="noopener noreferrer" className="card" style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textDecoration: "none"
          }}>
            <div style={{ color: "var(--accent-primary)" }}><GitHubIcon /></div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "var(--text-muted)", textTransform: "uppercase" }}>GitHub</span>
            <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>github.com/luisvfernando7-a11y</span>
          </a>

        </div>

        {/* CURRÍCULO: renomeie o arquivo recebido para Luis_Galvani_Curriculo.pdf e coloque em public/assets/ */}
        <a
          href="/assets/Luis_Galvani_Curriculo.pdf"
          download="Luis_Galvani_Curriculo.pdf"
          className="btn-primary"
          style={{ padding: "16px 32px", fontSize: "1rem" }}
        >
          Baixar Currículo — PDF
        </a>

      </div>
    </section>
  );
}
