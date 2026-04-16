"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function WelcomeScreen({ onFinish }: { onFinish: () => void }) {
  const [step, setStep] = useState(0);
  const [typedText, setTypedText] = useState("");
  const fullEmail = "luisvfernando7@gmail.com";

  // Sequência de etapas
  useEffect(() => {
    const timings = [
      { delay: 300, action: () => setStep(1) },           // "Bem-vindo"
      { delay: 1500, action: () => setStep(2) },          // "Luis Fernando"
      { delay: 2600, action: () => setStep(3) },          // "Backend Developer..."
      { delay: 3600, action: () => setStep(4) },          // E-mail digitando
    ];

    const timeouts = timings.map((t) =>
      setTimeout(t.action, t.delay)
    );

    return () => timeouts.forEach((t) => clearTimeout(t));
  }, []);

  // Typewriter effect para email
  useEffect(() => {
    if (step !== 4) return;

    if (typedText.length < fullEmail.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullEmail[prev.length]);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      // Após terminar a digitação
      const timeout = setTimeout(() => {
        setStep(5);
      }, 800);

      return () => clearTimeout(timeout);
    }
  }, [typedText, step]);

  // Fade out final e carregamento do site
  useEffect(() => {
    if (step === 5) {
      const timeout = setTimeout(() => {
        onFinish();
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [step, onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: step === 5 ? 0 : 1 }}
      transition={{ duration: 1, delay: step === 5 ? 0.2 : 0 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 998,
        background: "linear-gradient(135deg, #0a0a0a 0%, #0f0f1e 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(55, 138, 221, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(45, 212, 160, 0.04) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 500, textAlign: "center" }}>
        {/* Step 1: Bem-vindo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: step >= 1 ? 1 : 0,
            y: step >= 1 ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
          style={{ minHeight: 80 }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(42px, 8vw, 72px)",
              fontWeight: 800,
              color: "var(--text)",
              margin: 0,
              letterSpacing: "-0.03em",
            }}
          >
            Bem-vindo
          </h1>
        </motion.div>

        {/* Step 2: Luis Fernando */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: step >= 2 ? 1 : 0,
            y: step >= 2 ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
          style={{ minHeight: 80, marginTop: 20 }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 700,
              color: "#378ADD",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Luis Fernando
          </h2>
        </motion.div>

        {/* Step 3: Subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: step >= 3 ? 1 : 0,
            y: step >= 3 ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
          style={{ minHeight: 60, marginTop: 20 }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(18px, 3.5vw, 28px)",
              fontWeight: 600,
              color: "var(--accent-light)",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Backend Developer | Machine Learning
          </p>
        </motion.div>

        {/* Step 4: Typewriter Effect - Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: step >= 4 ? 1 : 0,
            y: step >= 4 ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
          style={{ minHeight: 50, marginTop: 40 }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(14px, 2.5vw, 18px)",
              color: "#2DD4A0",
              margin: 0,
              letterSpacing: "0.02em",
              minHeight: 24,
            }}
          >
            {typedText}
            {step === 4 && typedText.length < fullEmail.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                style={{ marginLeft: 2 }}
              >
                │
              </motion.span>
            )}
          </p>
        </motion.div>

        {/* Barra divisória */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{
            opacity: step >= 3 ? 0.3 : 0,
            scaleX: step >= 3 ? 1 : 0,
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            marginTop: 40,
            height: "1px",
            width: "80px",
            background: "var(--accent-light)",
            transformOrigin: "center",
          }}
        />
      </div>

      {/* Loading indicator */}
      <motion.div
        animate={{ opacity: step === 5 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "5%",
          zIndex: 10,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--text-muted)",
            letterSpacing: "0.08em",
            margin: 0,
          }}
        >
          Carregando...
        </p>
      </motion.div>
    </motion.div>
  );
}
