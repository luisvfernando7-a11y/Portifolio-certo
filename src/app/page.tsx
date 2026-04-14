"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Github, Linkedin } from "lucide-react";
import ChatBot from "@/components/ChatBot";
import Projects from "@/components/Projects";
import About from "@/components/About";

const IntroAnimation = dynamic(() => import("@/components/IntroAnimation"), { ssr: false });

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [activeSection, setActiveSection] = useState<"chat" | "projetos" | "sobre">("chat");

  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      <main
        className="site-wrap"
        style={{
          opacity: introDone ? 1 : 0,
          transition: introDone ? "opacity 0.6s ease" : "none",
        }}
      >
        <nav className="navbar">
          <div className="nav-logo">LF<span className="nav-dot">.</span></div>
          <div className="nav-links">
            <button
              className={activeSection === "chat" ? "nav-btn active" : "nav-btn"}
              onClick={() => setActiveSection("chat")}
            >Chat</button>
            <button
              className={activeSection === "projetos" ? "nav-btn active" : "nav-btn"}
              onClick={() => setActiveSection("projetos")}
            >Projetos</button>
            <button
              className={activeSection === "sobre" ? "nav-btn active" : "nav-btn"}
              onClick={() => setActiveSection("sobre")}
            >Sobre</button>
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
            Python, PHP, C# e Machine Learning.
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
            <a href="https://github.com/luisvfernando7-a11y" target="_blank" rel="noopener noreferrer" className="btn-icon">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/luisfernandovieira" target="_blank" rel="noopener noreferrer" className="btn-icon">
              <Linkedin size={20} />
            </a>
          </div>
        </section>

        <div className="content-area">
          {activeSection === "chat" && <ChatBot />}
          {activeSection === "projetos" && <Projects />}
          {activeSection === "sobre" && <About />}
        </div>

        <footer className="footer">
          <span>© 2026 Luís Fernando</span>
          <span className="footer-sep">·</span>
          <a href="mailto:luisvfernando7@gmail.com">luisvfernando7@gmail.com</a>
          <span className="footer-sep">·</span>
          <span>Ourinhos, SP</span>
        </footer>
      </main>
    </>
  );
}
