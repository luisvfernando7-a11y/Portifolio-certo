"use client";

import { useEffect, useRef, useState } from "react";

export default function IntroAnimation({ onFinish }: { onFinish: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [typedUrl, setTypedUrl] = useState("");
  const fullUrl = "https://site-sigma-flame.vercel.app/";

  const [s1Visible, setS1Visible] = useState(false);
  const [s1Exit, setS1Exit]     = useState(false);
  const [s2Active, setS2Active] = useState(false);
  const [s2Name, setS2Name]     = useState(false);
  const [s2Sub, setS2Sub]       = useState(false);
  const [s2Line, setS2Line]     = useState(false);
  const [s2Url, setS2Url]       = useState(false);
  const [s2Exit, setS2Exit]     = useState(false);

  function wait(ms: number) { return new Promise<void>((r) => setTimeout(r, ms)); }

  /* ── Particles ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    type P = { x: number; y: number; size: number; sy: number; sx: number; alpha: number; blue: boolean };
    const spawn = (): P => ({
      x: Math.random() * canvas.width, y: canvas.height + 10,
      size: Math.random() * 2 + 0.4,
      sy: Math.random() * 0.55 + 0.2, sx: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.45 + 0.1, blue: Math.random() > 0.4,
    });
    const pts: P[] = Array.from({ length: 55 }, () => { const p = spawn(); p.y = Math.random() * canvas.height; return p; });
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p, i) => {
        p.y -= p.sy; p.x += p.sx; p.alpha -= 0.00035;
        if (p.y < -10 || p.alpha <= 0) pts[i] = spawn();
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.blue ? `rgba(37,99,235,${p.alpha})` : `rgba(251,191,36,${p.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  /* ── Sequence ── */
  useEffect(() => {
    (async () => {
      await wait(150);

      /* Scene 1 — hi. */
      setS1Visible(true);
      await wait(1300);
      setS1Exit(true);
      await wait(420);

      /* Scene 2 — Name + URL */
      setS1Visible(false); setS1Exit(false);
      setS2Active(true);
      await wait(80);
      setS2Name(true);
      await wait(280);
      setS2Sub(true);
      await wait(380);
      setS2Line(true);
      await wait(640);
      setS2Url(true);
      await wait(260);

      /* typewriter */
      for (let i = 0; i <= fullUrl.length; i++) {
        setTypedUrl(fullUrl.slice(0, i));
        await wait(46);
      }
      await wait(700);

      /* Fade out → site */
      setS2Exit(true);
      await wait(500);
      onFinish();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const BASE: React.CSSProperties = {
    position: "fixed", inset: 0, zIndex: 999,
    background: "#000",
    opacity: s2Exit ? 0 : 1,
    transition: s2Exit ? "opacity 0.5s ease-in" : "none",
    pointerEvents: s2Exit ? "none" : "auto",
    display: "flex", alignItems: "center", justifyContent: "center",
    overflow: "hidden",
  };

  return (
    <div style={BASE}>
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      {/* Glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 600, height: 600,
        background: "radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)",
        zIndex: 0, pointerEvents: "none",
      }} />
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />

      {/* Scene 1 — hi. */}
      {!s2Active && (
        <div style={{
          position: "relative", zIndex: 10,
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: "clamp(72px,14vw,140px)", letterSpacing: "-0.04em", color: "#fff",
          opacity: s1Visible && !s1Exit ? 1 : 0,
          transform: s1Visible && !s1Exit ? "scale(1)" : s1Exit ? "scale(1.07)" : "scale(0.85)",
          transition: s1Exit
            ? "opacity 0.4s ease-in, transform 0.4s ease-in"
            : "opacity 0.5s cubic-bezier(.22,1,.36,1), transform 0.5s cubic-bezier(.22,1,.36,1)",
        }}>hi.</div>
      )}

      {/* Scene 2 — Name + URL */}
      {s2Active && (
        <div style={{
          position: "relative", zIndex: 10,
          display: "flex", flexDirection: "column", alignItems: "center",
          textAlign: "center", padding: "0 1.5rem",
        }}>
          <div style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(32px,6vw,68px)", letterSpacing: "-0.03em", color: "#fff",
            opacity: s2Name ? 1 : 0,
            transform: s2Name ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.55s cubic-bezier(.22,1,.36,1), transform 0.55s cubic-bezier(.22,1,.36,1)",
          }}>Luis Fernando</div>

          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
            fontSize: "clamp(13px,2vw,17px)", color: "rgba(255,255,255,0.45)",
            marginTop: 6,
            opacity: s2Sub ? 1 : 0,
            transform: s2Sub ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.45s cubic-bezier(.22,1,.36,1) 0.1s, transform 0.45s cubic-bezier(.22,1,.36,1) 0.1s",
          }}>Backend Developer · Machine Learning</div>

          <div style={{
            height: 1.5, background: "#fbbf24",
            margin: "22px auto 18px", borderRadius: 2,
            boxShadow: "0 0 12px rgba(251,191,36,0.6)",
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
              fontSize: "clamp(11px,1.6vw,14px)",
              color: "#60a5fa", letterSpacing: "0.01em",
            }}>{typedUrl}</span>
            <span style={{
              display: "inline-block", width: 2, height: "1em",
              background: "#fbbf24", verticalAlign: "middle", marginLeft: 2,
              boxShadow: "0 0 8px #fbbf24",
              animation: "blink-cur 0.7s step-end infinite",
            }} />
          </div>
        </div>
      )}

      <style>{`@keyframes blink-cur { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </div>
  );
}
