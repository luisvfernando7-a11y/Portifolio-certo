"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function WelcomeScreen({ onFinish }: { onFinish: () => void }) {
  const [step, setStep] = useState(0);
  const [typedText, setTypedText] = useState("");
  const fullEmail = "luisvfernando7@gmail.com";

  // Sequência controlada de etapas
  useEffect(() => {
    const timings = [
      { delay: 200, step: 1 },      // "Bem-vindo(a)"
      { delay: 1000, step: 2 },     // "Luis Galvani"
      { delay: 2200, step: 3 },     // "Backend Developer..."
      { delay: 3400, step: 4 },     // Linha
      { delay: 4200, step: 5 },     // Email
    ];

    const timeouts = timings.map((t) =>
      setTimeout(() => setStep(t.step), t.delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (step !== 5) return;

    if (typedText.length < fullEmail.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullEmail[prev.length]);
      }, 60);

      return () => clearTimeout(timeout);
    } else {
      // Finalizar após terminar digitação
      const timeout = setTimeout(() => {
        setStep(6);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [typedText, step]);

  // Fade out final
  useEffect(() => {
    if (step === 6) {
      const timeout = setTimeout(() => {
        onFinish();
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [step, onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: step === 6 ? 0 : 1 }}
      transition={{ duration: 1 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 998,
        background: "linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(circle at 30% 40%, rgba(201,169,110,0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(201,169,110,0.04) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 550, textAlign: "center" }}>
        {/* ETAPA 1: Bem-vindo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: step >= 1 ? 1 : 0,
            y: step >= 1 ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
          style={{ minHeight: 90 }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 9vw, 80px)",
              fontWeight: 700,
              color: "var(--text)",
              margin: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Bem-vindo(a)
          </h1>
        </motion.div>

        {/* ETAPA 2: Luis Galvani - Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: step >= 2 ? 1 : 0,
            y: step >= 2 ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
          style={{ minHeight: 80, marginTop: 30 }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 7vw, 64px)",
              fontWeight: 700,
              color: "#c9a96e",
              margin: 0,
              letterSpacing: "-0.02em",
              fontStyle: "italic",
            }}
          >
            Luis Galvani
          </motion.h2>
        </motion.div>

        {/* ETAPA 3: Subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: step >= 3 ? 1 : 0,
            y: step >= 3 ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
          style={{ minHeight: 60, marginTop: 24 }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(16px, 3.5vw, 24px)",
              fontWeight: 500,
              color: "var(--text-muted)",
              margin: 0,
              letterSpacing: "-0.01em",
              lineHeight: 1.5,
            }}
          >
            Backend Developer &amp; Machine Learning
          </p>
        </motion.div>

        {/* ETAPA 4: Linha divisória */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{
            opacity: step >= 4 ? 0.4 : 0,
            scaleX: step >= 4 ? 1 : 0,
          }}
          transition={{ duration: 0.6 }}
          style={{
            marginTop: 40,
            height: "1px",
            width: "60px",
            background: "#c9a96e",
            transformOrigin: "center",
          }}
        />

        {/* ETAPA 5: Email com Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: step >= 5 ? 1 : 0,
            y: step >= 5 ? 0 : 20,
          }}
          transition={{ duration: 0.4 }}
          style={{ minHeight: 50, marginTop: 32 }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(13px, 2.5vw, 16px)",
              color: "#c9a96e",
              margin: 0,
              letterSpacing: "0.02em",
              minHeight: 24,
            }}
          >
            {typedText}
            {step === 5 && typedText.length < fullEmail.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                style={{ marginLeft: 1 }}
              >
                │
              </motion.span>
            )}
          </p>
        </motion.div>
      </div>

      {/* Loading indicator */}
      <motion.div
        animate={{ opacity: step === 6 ? 0.6 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "5%",
          zIndex: 10,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--text-faint)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Entrando...
        </p>
      </motion.div>
    </motion.div>
  );
}
