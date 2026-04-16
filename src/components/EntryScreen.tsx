"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function EntryScreen({ onEnter }: { onEnter: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => onEnter(), 600);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "linear-gradient(135deg, #0a0a0a 0%, #0f0f1e 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: isHovered ? "pointer" : "default",
          }}
          onClick={handleEnter}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `
                radial-gradient(circle at 20% 50%, rgba(55, 138, 221, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(45, 212, 160, 0.05) 0%, transparent 50%)
              `,
              pointerEvents: "none",
            }}
          />

          {/* Computer SVG */}
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              position: "relative",
              zIndex: 10,
              marginBottom: 60,
            }}
          >
            <svg
              width="280"
              height="200"
              viewBox="0 0 280 200"
              style={{
                filter: isHovered ? "drop-shadow(0 0 20px rgba(55, 138, 221, 0.3))" : "drop-shadow(0 0 10px rgba(55, 138, 221, 0.15))",
                transition: "filter 0.3s ease",
              }}
            >
              {/* Monitor Body */}
              <rect
                x="40"
                y="30"
                width="200"
                height="120"
                rx="12"
                fill="none"
                stroke="#378ADD"
                strokeWidth="2"
              />

              {/* Screen Display */}
              <defs>
                <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1a3a52" />
                  <stop offset="100%" stopColor="#0f2839" />
                </linearGradient>
              </defs>
              <rect
                x="44"
                y="34"
                width="192"
                height="112"
                rx="10"
                fill="url(#screenGradient)"
              />

              {/* Screen Gloss */}
              <rect
                x="44"
                y="34"
                width="192"
                height="20"
                rx="10"
                fill="rgba(255, 255, 255, 0.05)"
              />

              {/* Decorative lines on screen */}
              <line x1="60" y1="60" x2="220" y2="60" stroke="#378ADD" strokeWidth="1" opacity="0.3" />
              <line x1="60" y1="75" x2="180" y2="75" stroke="#378ADD" strokeWidth="1" opacity="0.3" />
              <line x1="60" y1="90" x2="190" y2="90" stroke="#378ADD" strokeWidth="1" opacity="0.2" />
              <line x1="60" y1="105" x2="170" y2="105" stroke="#378ADD" strokeWidth="1" opacity="0.2" />

              {/* Stand */}
              <rect x="115" y="155" width="50" height="8" rx="4" fill="#378ADD" opacity="0.8" />

              {/* Base */}
              <ellipse cx="140" cy="170" rx="60" ry="8" fill="#378ADD" opacity="0.4" />
            </svg>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "relative",
              zIndex: 10,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                fontWeight: 600,
                color: "#378ADD",
                letterSpacing: "-0.02em",
                textAlign: "center",
                margin: 0,
              }}
            >
              Clique para entrar
            </p>
          </motion.div>

          {/* Fade in hint text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            style={{
              position: "absolute",
              bottom: 40,
              zIndex: 10,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--text-muted)",
                letterSpacing: "0.05em",
                margin: 0,
              }}
            >
              clique para continuar
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
