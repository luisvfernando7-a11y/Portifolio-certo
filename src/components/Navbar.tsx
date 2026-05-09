"use client";

import { useState } from "react";

const LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(6, 13, 31, 0.95)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "72px",
      }}>
        {/* Logo */}
        <a href="#" style={{
          fontFamily: "var(--font-mono)",
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "var(--accent-primary)",
        }}>
          LG
        </a>

        {/* Desktop Links */}
        <div style={{
          display: "none",
          alignItems: "center",
          gap: "24px",
        }} className="desktop-menu">
          {LINKS.map(l => (
            <a key={l.label} href={l.href} style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.875rem",
              color: "var(--text-secondary)",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--accent-primary)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
            >
              {l.label}
            </a>
          ))}
          
          <a
            href="/assets/Luis_Galvani_Curriculo.pdf"
            download="Luis_Galvani_Curriculo.pdf"
            className="btn-outline"
            style={{ padding: "8px 16px", fontSize: "0.75rem" }}
          >
            Currículo ↓
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-menu-btn" style={{ display: "block", cursor: "pointer" }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div style={{
          position: "absolute",
          top: "72px",
          left: 0,
          width: "100%",
          background: "var(--bg-secondary)",
          borderBottom: "1px solid var(--border)",
          padding: "24px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
        }}>
          {LINKS.map(l => (
            <a key={l.label} href={l.href} style={{
              fontFamily: "var(--font-mono)",
              fontSize: "1rem",
              color: "var(--text-primary)",
            }} onClick={() => setIsMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="/assets/Luis_Galvani_Curriculo.pdf"
            download="Luis_Galvani_Curriculo.pdf"
            className="btn-outline"
            onClick={() => setIsMenuOpen(false)}
          >
            Currículo ↓
          </a>
        </div>
      )}
      
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
