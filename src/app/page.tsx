"use client";

import { useState, useRef, useEffect } from "react";
import ChatBot from "@/components/ChatBot";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  const [activeSection, setActiveSection] = useState<"chat" | "projetos" | "sobre">("chat");

  return (
    <main className="site-wrap">
      <nav className="navbar">
        <div className="nav-logo">LF<span className="nav-dot">.</span></div>
        <div className="nav-links">
          <button className={activeSection === "chat" ? "nav-btn active" : "nav-btn"} onClick={() => setActiveSection("chat")}>Chat</button>
          <button className={activeSection === "projetos" ? "nav-btn active" : "nav-btn"} onClick={() => setActiveSection("projetos")}>Projetos</button>
          <button className={activeSection === "sobre" ? "nav-btn active" : "nav-btn"} onClick={() => setActiveSection("sobre")}>Sobre</button>
          <a href="mailto:luisvfernando7@gmail.com" className="nav-cta">Contato</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-tag">Disponível para projetos</div>
        <h1 className="hero-title">
          Luís Fernando
          <span className="hero-title-accent"> — dev backend</span>
        </h1>
        <p className="hero-sub">
          17 anos · Ourinhos, SP · ETEC Jacinto Ferreira de Sá<br />
          Especialista em Python, PHP, C# e apaixonado por Machine Learning.
        </p>
        <div className="hero-chips">
          {["Python","PHP","C#","ML / IA","MySQL","Supabase","IoT"].map(t => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
        <div className="hero-cta-row">
          <button className="btn-primary" onClick={() => setActiveSection("chat")}>
            Conversar com minha IA
          </button>
          <button className="btn-outline" onClick={() => setActiveSection("projetos")}>
            Ver projetos
          </button>
        </div>
      </section>

      <div className="content-area">
        {activeSection === "chat" && <ChatBot />}
        {activeSection === "projetos" && <Projects />}
        {activeSection === "sobre" && <About />}
      </div>

      <footer className="footer">
        <span>© 2025 Luís Fernando</span>
        <span className="footer-sep">·</span>
        <a href="mailto:luisvfernando7@gmail.com">luisvfernando7@gmail.com</a>
        <span className="footer-sep">·</span>
        <span>Ourinhos, SP</span>
      </footer>
    </main>
  );
}
