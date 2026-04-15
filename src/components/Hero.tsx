"use client";

const CHIPS = ["Python", "PHP", "C#", "JavaScript", "Machine Learning", "MySQL", "Supabase"];

export default function Hero() {
  return (
    <section style={{ padding: "5rem 0 4rem" }}>

      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        fontSize: 11, fontFamily: "var(--font-mono)",
        color: "var(--green)", background: "var(--green-dim)",
        border: "0.5px solid rgba(45,212,160,0.25)",
        padding: "5px 14px", borderRadius: 999,
        marginBottom: 24,
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: "50%",
          background: "var(--green)",
          animation: "pulse-dot 2s ease infinite",
        }} />
        Disponível para projetos e oportunidades
      </div>

      <h1 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(42px, 8vw, 76px)",
        fontWeight: 800,
        lineHeight: 1.05,
        letterSpacing: "-0.03em",
        color: "var(--text)",
        marginBottom: 8,
      }}>
        Luís Fernando
      </h1>

      <h2 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(22px, 4vw, 38px)",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
        color: "var(--accent-light)",
        marginBottom: 20,
      }}>
        Backend Developer & ML Engineer
      </h2>

      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: 15,
        color: "var(--text-muted)",
        lineHeight: 1.7,
        maxWidth: 520,
        marginBottom: 12,
      }}>
        17 anos · Ourinhos, SP · ETEC Jacinto Ferreira de Sá
      </p>

      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: 15,
        color: "var(--text-muted)",
        lineHeight: 1.7,
        maxWidth: 560,
        marginBottom: 32,
      }}>
        Desenvolvedor backend com foco em Python e machine learning. Especializado em construir sistemas escaláveis e aplicar IA em problemas reais.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
        {CHIPS.map(c => (
          <span key={c} style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--accent-light)",
            background: "var(--accent-dim)",
            border: "0.5px solid var(--accent-border)",
            padding: "4px 14px",
            borderRadius: 999,
          }}>{c}</span>
        ))}
      </div>

      {/* CTAs principais */}
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 12, marginTop: 40 }}>
        <a href="#projetos" style={{
          fontFamily: "var(--font-body)",
          fontSize: 14, fontWeight: 500,
          color: "#fff",
          background: "var(--accent)",
          padding: "10px 24px",
          borderRadius: 999,
          textDecoration: "none",
          transition: "opacity 0.15s",
        }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Ver projetos
        </a>

        <a href="#contato" style={{
          fontFamily: "var(--font-body)",
          fontSize: 14, fontWeight: 400,
          color: "var(--text-muted)",
          background: "transparent",
          border: "0.5px solid var(--border-hover)",
          padding: "10px 24px",
          borderRadius: 999,
          textDecoration: "none",
          transition: "all 0.15s",
        }}
          onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border-hover)"; }}
        >
          Entrar em contato
        </a>
      </div>
    </section>
  );
}
