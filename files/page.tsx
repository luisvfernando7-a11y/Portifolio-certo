"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChatBot from "@/components/ChatBot";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && (
        <IntroAnimation onComplete={() => setIntroComplete(true)} />
      )}

      <div style={{
        opacity: introComplete ? 1 : 0,
        transition: "opacity 0.6s ease",
        pointerEvents: introComplete ? "auto" : "none",
      }}>
        <Navbar />
        <div className="page-wrap">
          <Hero />
          <div id="chat" style={{ paddingBottom: "4rem" }}>
            <p style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              color: "var(--text-faint)", textTransform: "uppercase",
              letterSpacing: "0.08em", marginBottom: 8,
            }}>ia</p>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 34px)",
              fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em",
              marginBottom: 24,
            }}>Converse com minha IA</h2>
            <ChatBot />
          </div>
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <div
      id="intro"
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "#000",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var el = document.getElementById('intro');
              if (!el) return;
              setTimeout(function() {
                el.style.transition = 'opacity 0.6s ease';
                el.style.opacity = '0';
                setTimeout(function() {
                  el.style.display = 'none';
                  document.dispatchEvent(new Event('introComplete'));
                }, 650);
              }, 4200);
            })();
          `,
        }}
      />
    </div>
  );
}
