"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function EntryScreen({ onEnter }: { onEnter: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => onEnter(), 800);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
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
                radial-gradient(circle at 20% 50%, rgba(55, 138, 221, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(45, 212, 160, 0.04) 0%, transparent 50%)
              `,
              pointerEvents: "none",
            }}
          />

          {/* Notebook SVG - Modern Design */}
          <motion.div
            animate={{
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              position: "relative",
              zIndex: 10,
              marginBottom: 50,
            }}
          >
            <svg
              width="320"
              height="220"
              viewBox="0 0 320 220"
              style={{
                filter: isHovered 
                  ? "drop-shadow(0 25px 50px rgba(55, 138, 221, 0.25))" 
                  : "drop-shadow(0 10px 30px rgba(55, 138, 221, 0.1))",
                transition: "filter 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <defs>
                <linearGradient id="notebookGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1a1a2e" />
                  <stop offset="100%" stopColor="#0f0f1a" />
                </linearGradient>
                <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#152a3f" />
                  <stop offset="50%" stopColor="#0d1b28" />
                  <stop offset="100%" stopColor="#081019" />
                </linearGradient>
              </defs>

              {/* Notebook Body - Lid */}
              <g>
                {/* Lid shadow */}
                <ellipse cx="160" cy="85" rx="145" ry="85" fill="rgba(0,0,0,0.3)" />
                
                {/* Main lid body */}
                <path
                  d="M 30 80 Q 30 40 50 35 L 270 35 Q 290 40 290 80 Z"
                  fill="url(#notebookGrad)"
                  stroke="#2DD4A0"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />

                {/* Screen bezel */}
                <rect
                  x="50"
                  y="50"
                  width="220"
                  height="120"
                  rx="12"
                  fill="url(#screenGrad)"
                  stroke="#378ADD"
                  strokeWidth="1.5"
                />

                {/* Screen gloss/shine */}
                <rect
                  x="55"
                  y="55"
                  width="210"
                  height="25"
                  rx="8"
                  fill="rgba(255, 255, 255, 0.08)"
                  opacity="0.6"
                />

                {/* Display content lines */}
                <g opacity="0.4">
                  <line x1="70" y1="80" x2="250" y2="80" stroke="#378ADD" strokeWidth="1.5" />
                  <line x1="70" y1="100" x2="220" y2="100" stroke="#378ADD" strokeWidth="0.8" />
                  <line x1="70" y1="118" x2="240" y2="118" stroke="#2DD4A0" strokeWidth="0.8" />
                  <line x1="70" y1="135" x2="200" y2="135" stroke="#378ADD" strokeWidth="0.8" opacity="0.5" />
                </g>

                {/* Accent dot */}
                <circle cx="160" cy="110" r="2.5" fill="#2DD4A0" opacity="0.8" />
              </g>

              {/* Notebook Base */}
              <g>
                {/* Base body */}
                <path
                  d="M 20 80 L 25 185 Q 25 200 40 205 L 280 205 Q 295 200 295 185 L 300 80 Z"
                  fill="#0a0a0a"
                  stroke="#2DD4A0"
                  strokeWidth="1.5"
                  opacity="0.7"
                />

                {/* Keyboard keys pattern */}
                <g opacity="0.3">
                  <rect x="50" y="120" width="8" height="8" rx="1" fill="#378ADD" />
                  <rect x="60" y="120" width="8" height="8" rx="1" fill="#378ADD" />
                  <rect x="70" y="120" width="8" height="8" rx="1" fill="#378ADD" />
                  <rect x="85" y="120" width="8" height="8" rx="1" fill="#378ADD" />
                  <rect x="95" y="120" width="8" height="8" rx="1" fill="#378ADD" />
                  <rect x="105" y="120" width="8" height="8" rx="1" fill="#378ADD" />
                </g>

                {/* Trackpad */}
                <rect x="130" y="155" width="60" height="35" rx="4" fill="none" stroke="#2DD4A0" strokeWidth="0.8" opacity="0.4" />
              </g>
            </svg>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 15,
            }}
            transition={{ duration: 0.4 }}
            style={{
              position: "relative",
              zIndex: 10,
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(18px, 4vw, 26px)",
                fontWeight: 700,
                color: "#378ADD",
                letterSpacing: "-0.02em",
                margin: "0 0 8px 0",
              }}
            >
              Explorar portfólio
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--text-muted)",
                letterSpacing: "0.05em",
                margin: 0,
              }}
            >
              [ clique para continuar ]
            </p>
          </motion.div>

          {/* Hint text at bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.2, duration: 0.8 }}
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
                letterSpacing: "0.08em",
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
