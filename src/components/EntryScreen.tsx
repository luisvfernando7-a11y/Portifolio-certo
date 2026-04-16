"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const CODE_LINES = [
  "const build = () => {",
  "  return 'systems that learn';",
  "};",
];

export default function EntryScreen({ onEnter }: { onEnter: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [displayedCode, setDisplayedCode] = useState("");

  // Typewriter effect for code
  useEffect(() => {
    let currentIndex = 0;
    let currentLineIndex = 0;
    let code = "";

    const interval = setInterval(() => {
      if (currentLineIndex < CODE_LINES.length) {
        const currentLine = CODE_LINES[currentLineIndex];
        if (currentIndex <= currentLine.length) {
          code = CODE_LINES.slice(0, currentLineIndex)
            .join("\n") +
            (currentLineIndex > 0 ? "\n" : "") +
            currentLine.slice(0, currentIndex);
          setDisplayedCode(code);
          currentIndex++;
        } else {
          currentIndex = 0;
          currentLineIndex++;
        }
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => onEnter(), 1000);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: isHovered ? "pointer" : "default",
            overflow: "hidden",
          }}
          onClick={handleEnter}
        >
          {/* Subtle background gradient */}
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

          {/* Modern Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              position: "relative",
              zIndex: 10,
              marginBottom: 56,
            }}
          >
            <motion.div
              animate={{
                scale: isHovered ? 1.03 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(201, 169, 110, 0.2)",
                borderRadius: 16,
                padding: "20px 24px",
                width: "100%",
                maxWidth: 520,
                boxShadow: isHovered
                  ? "0 20px 60px rgba(201, 169, 110, 0.15), inset 0 0 30px rgba(201, 169, 110, 0.05)"
                  : "0 10px 40px rgba(201, 169, 110, 0.08), inset 0 0 20px rgba(201, 169, 110, 0.02)",
              }}
            >
              {/* Terminal Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 16,
                  borderBottom: "1px solid rgba(201, 169, 110, 0.1)",
                  paddingBottom: 12,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "rgba(201, 169, 110, 0.3)",
                  }}
                />
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "rgba(201, 169, 110, 0.2)",
                  }}
                />
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "rgba(201, 169, 110, 0.1)",
                  }}
                />
                <div style={{ flex: 1 }} />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "rgba(201, 169, 110, 0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  terminal
                </span>
              </div>

              {/* Code Display */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: "#ffffff",
                  textAlign: "left",
                  minHeight: 100,
                }}
              >
                <pre
                  style={{
                    margin: 0,
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                    fontFamily: "inherit",
                  }}
                >
                  {displayedCode}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    style={{
                      color: "#c9a96e",
                      fontWeight: "bold",
                    }}
                  >
                    │
                  </motion.span>
                </pre>
              </div>
            </motion.div>
          </motion.div>

          {/* Main text */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 700,
              color: "var(--text)",
              letterSpacing: "-0.02em",
              margin: "32px 0 8px",
              textAlign: "center",
              zIndex: 10,
              position: "relative",
            }}
          >
            Luis Galvani
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "var(--text-muted)",
              letterSpacing: "-0.01em",
              margin: "0 0 24px",
              textAlign: "center",
              zIndex: 10,
              position: "relative",
            }}
          >
            Backend Developer & Machine Learning
          </motion.p>

          {/* Interactive hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1, duration: 1 }}
            style={{
              position: "absolute",
              bottom: "10%",
              zIndex: 10,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--text-faint)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Clique para continuar
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
