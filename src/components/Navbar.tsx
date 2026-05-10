"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Projetos", href: "#projetos" },
    { name: "Experiência", href: "#experiencia" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0E1117]/90 backdrop-blur-md border-b border-border shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="font-mono font-bold text-accent text-xl tracking-tighter">
          LG
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-muted hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a 
            href="/assets/Luis_Galvani_Curriculo.pdf"
            download="Luis_Galvani_Curriculo.pdf"
            className="px-4 py-2 border border-accent text-accent text-sm font-medium rounded hover:bg-accent/10 transition-colors"
          >
            Currículo ↓
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#161B27] border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-base font-medium text-primary py-2 border-b border-border"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/assets/Luis_Galvani_Curriculo.pdf"
            download="Luis_Galvani_Curriculo.pdf"
            className="mt-4 px-4 py-3 bg-accent text-navy text-center font-medium rounded"
          >
            Baixar Currículo
          </a>
        </div>
      )}
    </nav>
  );
}
