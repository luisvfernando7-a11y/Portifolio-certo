"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function EntryScreen({ onEnter }: { onEnter: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

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

          {/* Elegant Notebook SVG */}
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
              filter: isHovered
                ? "drop-shadow(0 30px 60px rgba(201, 169, 110, 0.2))"
                : "drop-shadow(0 10px 30px rgba(201, 169, 110, 0.1))",
            }}
            transition={{ duration: 0.4 }}
            style={{
              position: "relative",
              zIndex: 10,
              marginBottom: 48,
            }}
          >
            <svg
              width="280"
              height="180"
              viewBox="0 0 280 180"
              style={{ display: "block" }}
            >
              <defs>
                <linearGradient id="lidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1a1a1a" />
                  <stop offset="100%" stopColor="#0d0d0d" />
                </linearGradient>
                <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1a1a24" />
                  <stop offset="100%" stopColor="#0f0f14" />
                </linearGradient>
              </defs>

              {/* Notebook Lid */}
              <g>
                {/* Shadow */}
                <ellipse cx="140" cy="65" rx="130" ry="60" fill="rgba(0,0,0,0.4)" />

                {/* Lid Main */}
                <path
                  d="M 25 60 Q 25 30 45 25 L 235 25 Q 255 30 255 60 Z"
                  fill="url(#lidGrad)"
                  stroke="#c9a96e"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />

                {/* Screen Bezel */}
                <rect
                  x="45"
                  y="40"
                  width="190"
                  height="90"
                  rx="8"
                  fill="url(#screenGrad)"
                  stroke="#c9a96e"
                  strokeWidth="1"
                />

                {/* Screen Shine */}
                <rect
                  x="48"
                  y="43"
                  width="184"
                  height="18"
                  rx="6"
                  fill="rgba(255,255,255,0.05)"
                />

                {/* Content lines */}
                <g opacity="0.3">
                  <line x1="60" y1="65" x2="220" y2="65" stroke="#c9a96e" strokeWidth="0.8" />
                  <line x1="60" y1="78" x2="200" y2="78" stroke="#c9a96e" strokeWidth="0.6" />
                  <line x1="60" y1="90" x2="210" y2="90" stroke="#c9a96e" strokeWidth="0.6" />
                </g>

                {/* Apple logo or accent */}
                <circle cx="140" cy="120" r="1.5" fill="#c9a96e" opacity="0.6" />
              </g>

              {/* Base */}
              <g>
                {/* Base shadow */}
                <ellipse cx="140" cy="170" rx="100" ry="6" fill="rgba(0,0,0,0.3)" />

                {/* Keyboard outline */}
                <rect
                  x="50"
                  y="130"
                  width="180"
                  height="35"
                  rx="4"
                  fill="none"
                  stroke="#c9a96e"
                  strokeWidth="0.8"
                  opacity="0.4"
                />
              </g>
            </svg>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
            style={{
              position: "relative",
              zIndex: 10,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                fontWeight: 700,
                color: "#c9a96e",
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              Clique para entrar
            </p>
          </motion.div>

          {/* Bottom hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{
              position: "absolute",
              bottom: "8%",
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
              Pressione ENTER ou clique
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
