export default function Footer() {
  return (
    <footer style={{
      background: "var(--bg-primary)",
      padding: "48px 0",
      textAlign: "center",
      borderTop: "1px solid var(--border)"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        fontFamily: "var(--font-mono)",
        fontSize: "0.75rem",
        color: "var(--text-muted)"
      }}>
        <p>Luis Fernando Galvani Vieira · Backend Developer · 2026</p>
        <p>Feito com HTML, CSS e JS puro · Hospedado na Vercel</p>
      </div>
    </footer>
  );
}
