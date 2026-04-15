"use client";

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

export default function Contact() {
  return (
    <section id="contato" style={{ padding: "5rem 0 4rem", borderTop: "0.5px solid var(--border)" }}>
      <p style={{
        fontFamily: "var(--font-mono)", fontSize: 11,
        color: "var(--text-faint)", textTransform: "uppercase",
        letterSpacing: "0.08em", marginBottom: 8,
      }}>contato</p>

      <h2 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(26px, 4vw, 40px)",
        fontWeight: 700, letterSpacing: "-0.02em",
        color: "var(--text)", marginBottom: 16,
      }}>Vamos conversar?</h2>

      <p style={{
        fontFamily: "var(--font-body)", fontSize: 15,
        color: "var(--text-muted)", lineHeight: 1.7,
        maxWidth: 460, marginBottom: 32,
      }}>
        Estou aberto a projetos, colaborações e primeiras oportunidades. Respondo rápido.
      </p>

      <a
        href="mailto:luisvfernando7@gmail.com"
        style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500,
          color: "#fff", background: "var(--accent)",
          padding: "10px 24px", borderRadius: 999,
          textDecoration: "none", transition: "opacity 0.15s",
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
      >
        <MailIcon /> Enviar e-mail
      </a>
    </section>
  );
}
