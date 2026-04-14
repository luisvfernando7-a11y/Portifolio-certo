"use client";

import { useEffect, useRef, useState } from "react";

export default function IntroAnimation({ onFinish }: { onFinish: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scene, setScene] = useState<"s1" | "s2" | "s3" | "s4" | "done">("s1");

  // typed URL state
  const [typedUrl, setTypedUrl] = useState("");
  const fullUrl = "https://site-sigma-flame.vercel.app/";

  // visibility states
  const [s1Visible, setS1Visible] = useState(false);
  const [s1Exit, setS1Exit] = useState(false);
  const [s2Visible, setS2Visible] = useState(false);
  const [s2Sub, setS2Sub] = useState(false);
  const [s2Line, setS2Line] = useState(false);
  const [s2Url, setS2Url] = useState(false);
  const [s2Exit, setS2Exit] = useState(false);
  const [s3Visible, setS3Visible] = useState(false);
  const [s3Chips, setS3Chips] = useState<number[]>([]);
  const [s3Exit, setS3Exit] = useState(false);
  const [s4Visible, setS4Visible] = useState(false);
  const [browserIn, setBrowserIn] = useState(false);
  const [overlayOut, setOverlayOut] = useState(false);

  function wait(ms: number) {
    return new Promise<void>((r) => setTimeout(r, ms));
  }

  /* ── Particles ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Particle = { x: number; y: number; size: number; speedY: number; speedX: number; alpha: number; blue: boolean };
    const spawn = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      size: Math.random() * 2.2 + 0.4,
      speedY: Math.random() * 0.55 + 0.2,
      speedX: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.45 + 0.1,
      blue: Math.random() > 0.4,
    });
    const pts: Particle[] = Array.from({ length: 55 }, () => {
      const p = spawn(); p.y = Math.random() * canvas.height; return p;
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p, i) => {
        p.y -= p.speedY; p.x += p.speedX; p.alpha -= 0.00035;
        if (p.y < -10 || p.alpha <= 0) pts[i] = spawn();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.blue ? `rgba(55,138,221,${p.alpha})` : `rgba(133,183,235,${p.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  /* ── Main sequence ── */
  useEffect(() => {
    (async () => {
      await wait(200);

      // Scene 1 — hi.
      setScene("s1"); setS1Visible(true);
      await wait(1200);
      setS1Exit(true);
      await wait(450);

      // Scene 2 — Name + URL
      setScene("s2"); setS1Visible(false); setS1Exit(false);
      setS2Visible(true);
      await wait(300);
      setS2Sub(true);
      await wait(400);
      setS2Line(true);
      await wait(650);
      setS2Url(true);
      await wait(300);

      // typewriter
      for (let i = 0; i <= fullUrl.length; i++) {
        setTypedUrl(fullUrl.slice(0, i));
        await wait(46);
      }
      await wait(850);
      setS2Exit(true);
      await wait(400);

      // Scene 3 — chips
      setScene("s3"); setS2Visible(false); setS2Exit(false);
      setS3Visible(true);
      await wait(200);
      for (let i = 0; i < 7; i++) {
        setS3Chips((prev) => [...prev, i]);
        await wait(115);
      }
      await wait(750);
      setS3Exit(true);
      await wait(400);

      // Scene 4 — browser mockup
      setScene("s4"); setS3Visible(false); setS3Exit(false);
      setS4Visible(true);
      await wait(80);
      setBrowserIn(true);
      await wait(2400);

      // Fade out overlay → reveal portfolio
      setOverlayOut(true);
      await wait(700);
      onFinish();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const CHIPS = ["Python", "PHP", "C#", "ML / IA", "IoT", "MySQL", "Supabase"];

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: "#000",
        opacity: overlayOut ? 0 : 1,
        transition: overlayOut ? "opacity 0.7s ease" : "none",
        pointerEvents: overlayOut ? "none" : "auto",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(55,138,221,0.07) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      {/* Glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 600, height: 600,
        background: "radial-gradient(ellipse at center, rgba(55,138,221,0.11) 0%, transparent 70%)",
        zIndex: 0, pointerEvents: "none",
      }} />

      {/* Particles */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />

      {/* ── SCENE 1 ── */}
      {scene === "s1" && (
        <div style={{
          position: "relative", zIndex: 10, textAlign: "center",
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: "clamp(72px,14vw,140px)", letterSpacing: "-0.04em",
          color: "#fff",
          opacity: s1Visible && !s1Exit ? 1 : 0,
          transform: s1Visible && !s1Exit ? "scale(1)" : s1Exit ? "scale(1.06)" : "scale(0.85)",
          transition: s1Exit
            ? "opacity 0.4s ease-in, transform 0.4s ease-in"
            : "opacity 0.5s cubic-bezier(.22,1,.36,1), transform 0.5s cubic-bezier(.22,1,.36,1)",
        }}>
          hi.
        </div>
      )}

      {/* ── SCENE 2 ── */}
      {scene === "s2" && (
        <div style={{
          position: "relative", zIndex: 10, textAlign: "center",
          display: "flex", flexDirection: "column", alignItems: "center",
          opacity: s2Exit ? 0 : 1,
          transition: s2Exit ? "opacity 0.35s ease-in" : "none",
        }}>
          <div style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(36px,6vw,68px)", letterSpacing: "-0.03em",
            color: "#fff",
            opacity: s2Visible ? 1 : 0,
            transform: s2Visible ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.55s cubic-bezier(.22,1,.36,1), transform 0.55s cubic-bezier(.22,1,.36,1)",
          }}>
            Luís Fernando
          </div>

          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
            fontSize: "clamp(14px,2vw,18px)", color: "rgba(255,255,255,0.45)",
            marginTop: 6,
            opacity: s2Sub ? 1 : 0,
            transform: s2Sub ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.45s cubic-bezier(.22,1,.36,1) 0.1s, transform 0.45s cubic-bezier(.22,1,.36,1) 0.1s",
          }}>
            Backend Developer &amp; Machine Learning
          </div>

          <div style={{
            height: 1.5, background: "#378ADD",
            margin: "22px auto 18px",
            borderRadius: 2,
            boxShadow: "0 0 12px rgba(55,138,221,0.6)",
            width: s2Line ? 200 : 0,
            transition: "width 0.6s cubic-bezier(.22,1,.36,1)",
          }} />

          <div style={{
            opacity: s2Url ? 1 : 0,
            transform: s2Url ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}>
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "clamp(12px,1.6vw,15px)",
              color: "#85B7EB",
              letterSpacing: "0.01em",
            }}>{typedUrl}</span>
            <span style={{
              display: "inline-block", width: 2, height: "1em",
              background: "#378ADD", verticalAlign: "middle", marginLeft: 2,
              boxShadow: "0 0 8px #378ADD",
              animation: "blink-cur 0.7s step-end infinite",
            }} />
          </div>
        </div>
      )}

      {/* ── SCENE 3 ── */}
      {scene === "s3" && (
        <div style={{
          position: "relative", zIndex: 10, textAlign: "center",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 18,
          opacity: s3Exit ? 0 : 1,
          transition: s3Exit ? "opacity 0.35s ease-in" : "none",
        }}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 11,
            color: "rgba(255,255,255,0.45)", textTransform: "uppercase",
            letterSpacing: "0.12em",
            opacity: s3Visible ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}>
            stack &amp; tecnologias
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", maxWidth: 560 }}>
            {CHIPS.map((c, i) => (
              <span key={c} style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "clamp(12px,1.5vw,14px)",
                color: "#85B7EB",
                background: "rgba(55,138,221,0.12)",
                border: "1px solid rgba(55,138,221,0.35)",
                padding: "7px 18px", borderRadius: 999,
                boxShadow: "0 0 18px rgba(55,138,221,0.08)",
                opacity: s3Chips.includes(i) ? 1 : 0,
                transform: s3Chips.includes(i) ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.38s cubic-bezier(.22,1,.36,1), transform 0.38s cubic-bezier(.22,1,.36,1)",
              }}>{c}</span>
            ))}
          </div>
        </div>
      )}

      {/* ── SCENE 4 ── */}
      {scene === "s4" && (
        <div style={{
          position: "relative", zIndex: 10, width: "100%",
          display: "flex", justifyContent: "center",
          opacity: s4Visible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}>
          <div style={{
            width: "min(820px, 92vw)",
            borderRadius: 14,
            overflow: "hidden",
            background: "#0a0a0f",
            border: "1px solid rgba(55,138,221,0.18)",
            boxShadow: "0 30px 100px rgba(55,138,221,0.15), 0 0 0 0.5px rgba(255,255,255,0.06)",
            opacity: browserIn ? 1 : 0,
            transform: browserIn ? "translateY(0)" : "translateY(60px)",
            transition: "opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1)",
          }}>
            {/* Browser chrome */}
            <div style={{
              background: "#111118", padding: "12px 16px",
              display: "flex", alignItems: "center", gap: 12,
              borderBottom: "0.5px solid rgba(255,255,255,0.07)",
            }}>
              <div style={{ display: "flex", gap: 6 }}>
                {["#FF5F57","#FEBC2E","#28C840"].map(c => (
                  <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
                ))}
              </div>
              <div style={{
                flex: 1, background: "#1a1a24",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: 6, padding: "5px 12px",
                fontFamily: "'DM Mono', monospace", fontSize: 11,
                color: "rgba(255,255,255,0.4)", textAlign: "center",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#28C840", display: "inline-block", flexShrink: 0 }} />
                site-sigma-flame.vercel.app
              </div>
            </div>

            {/* Mock nav */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "14px 28px", borderBottom: "0.5px solid rgba(255,255,255,0.06)",
              background: "#0a0a0f",
            }}>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 19, color: "#fff", letterSpacing: "-0.02em" }}>
                LF<span style={{ color: "#378ADD" }}>.</span>
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                {["Chat","Projetos","Sobre"].map(l => (
                  <span key={l} style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", padding: "5px 12px" }}>{l}</span>
                ))}
                <span style={{
                  fontSize: 12, color: "#85B7EB", padding: "5px 14px",
                  borderRadius: 999, border: "0.5px solid rgba(55,138,221,0.4)", marginLeft: 6,
                }}>Contato</span>
              </div>
            </div>

            {/* Mock hero */}
            <div style={{ padding: "28px 28px 22px", background: "#0a0a0f" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontFamily: "'DM Mono', monospace", fontSize: 10,
                color: "#2dd4a0", background: "rgba(45,212,160,0.1)",
                border: "0.5px solid rgba(45,212,160,0.25)", padding: "3px 12px",
                borderRadius: 999, marginBottom: 14,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#2dd4a0", display: "inline-block", animation: "pulse-dot 2s infinite" }} />
                Disponível para projetos
              </div>
              <div style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 800,
                fontSize: "clamp(22px,3.5vw,32px)", color: "#f0f0f5",
                letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 8,
              }}>
                Luís Fernando<br/>
                <span style={{ color: "#85B7EB" }}>— dev backend</span>
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 14 }}>
                17 anos · Ourinhos, SP · ETEC Jacinto Ferreira de Sá<br/>
                Especialista em Python, PHP, C# e apaixonado por Machine Learning.
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                {["Python","PHP","C#","ML / IA","MySQL","Supabase","IoT"].map(t => (
                  <span key={t} style={{
                    fontFamily: "'DM Mono', monospace", fontSize: 10,
                    color: "#85B7EB", background: "rgba(55,138,221,0.12)",
                    border: "0.5px solid rgba(55,138,221,0.35)", padding: "3px 10px", borderRadius: 999,
                  }}>{t}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <span style={{ fontSize: 12, color: "#fff", background: "#378ADD", padding: "8px 18px", borderRadius: 999 }}>
                  Conversar com minha IA
                </span>
                <span style={{
                  fontSize: 12, color: "rgba(255,255,255,0.55)",
                  border: "0.5px solid rgba(255,255,255,0.15)", padding: "8px 18px", borderRadius: 999,
                }}>
                  Ver projetos
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes blink-cur { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </div>
  );
}
