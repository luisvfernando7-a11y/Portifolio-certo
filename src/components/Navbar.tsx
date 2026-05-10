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
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-[#080808]/95 backdrop-blur-md border-[#1E1E1E] py-4" : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="font-mono font-bold text-white text-lg tracking-tighter">
          LG
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="font-mono text-sm text-[#A0A0A0] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a 
            href="/assets/Luis_Galvani_Curriculo.pdf"
            download="Luis_Galvani_Curriculo.pdf"
            className="font-mono text-sm border border-[#2A2A2A] text-[#F5F5F5] px-4 py-1.5 rounded-sm hover:border-white/60 hover:bg-white/5 transition-all"
          >
            Currículo ↓
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {isOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 12h16M4 6h16M4 18h16" />}
          </svg>
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0F0F0F] border-b border-[#1E1E1E] py-8 px-6 flex flex-col gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-mono text-lg text-white border-b border-[#1E1E1E] pb-4"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/assets/Luis_Galvani_Curriculo.pdf"
            download="Luis_Galvani_Curriculo.pdf"
            className="bg-white text-[#080808] text-center font-mono py-4 rounded-sm"
          >
            Baixar Currículo
          </a>
        </div>
      )}
    </nav>
  );
}
