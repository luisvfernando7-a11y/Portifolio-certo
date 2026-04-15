export default function Footer() {
  return (
    <footer style={{
      borderTop: "0.5px solid var(--border)",
      padding: "24px 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 8,
    }}>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-faint)" }}>
        © 2025 Luís Fernando
      </span>
      <a
        href="mailto:luisvfernando7@gmail.com"
        style={{
          fontFamily: "var(--font-mono)", fontSize: 12,
          color: "var(--accent-light)", textDecoration: "none",
          transition: "opacity 0.15s",
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
      >
        luisvfernando7@gmail.com
      </a>
    </footer>
  );
}
