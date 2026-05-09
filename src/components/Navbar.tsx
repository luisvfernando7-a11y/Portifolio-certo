"use client";

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const LINKS = [
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
];

export default function Navbar() {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "var(--bg)",
      borderBottom: "0.5px solid var(--border)",
      padding: "0 1.25rem",
    }}>
      <div style={{
        maxWidth: 860, margin: "0 auto",
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
        height: 56,
      }}>
        <a href="#" style={{
          fontFamily: "var(--font-display)",
          fontSize: 20, fontWeight: 800,
          color: "var(--text)", textDecoration: "none",
          letterSpacing: "-0.02em",
        }}>
          LF<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {LINKS.map(l => (
            <a key={l.label} href={l.href} style={{
              fontFamily: "var(--font-body)",
              fontSize: 13, color: "var(--text-muted)",
              padding: "6px 14px", borderRadius: 999,
              textDecoration: "none", transition: "all 0.15s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.background = "var(--bg-surface)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.background = "transparent"; }}
            >{l.label}</a>
          ))}

          <div style={{ width: "0.5px", height: 18, background: "var(--border)", margin: "0 6px" }} />

          <a
            href="https://github.com/luisvfernando7-a11y"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            style={{
              width: 32, height: 32, borderRadius: "50%",
              border: "0.5px solid var(--border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--text-muted)", textDecoration: "none",
              transition: "all 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--border-hover)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            <GitHubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/luisfernandovieira"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn (Luis Galvani)"
            style={{
              width: 32, height: 32, borderRadius: "50%",
              border: "0.5px solid var(--border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--text-muted)", textDecoration: "none",
              transition: "all 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "#0A66C2"; e.currentTarget.style.borderColor = "#0A66C2"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            <LinkedInIcon />
          </a>

          <a
            href="#contato"
            style={{
              marginLeft: 8,
              fontFamily: "var(--font-body)", fontSize: 13,
              color: "var(--accent-light)",
              border: "0.5px solid var(--accent-border)",
              padding: "6px 16px", borderRadius: 999,
              textDecoration: "none", transition: "all 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--accent-dim)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}
