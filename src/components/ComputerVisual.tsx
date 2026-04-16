"use client";

import { motion } from "framer-motion";

export default function ComputerVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 320,
        height: "auto",
      }}
      className="computer-visual-container"
    >
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 320 280"
        style={{
          filter: "drop-shadow(0 20px 40px rgba(55, 138, 221, 0.15))",
          display: "block",
        }}
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a3a52" />
            <stop offset="100%" stopColor="#0f1f30" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Monitor frame */}
        <g>
          {/* Outer frame */}
          <rect
            x="30"
            y="20"
            width="260"
            height="160"
            rx="16"
            fill="none"
            stroke="#378ADD"
            strokeWidth="2.5"
          />

          {/* Screen display area */}
          <rect
            x="36"
            y="26"
            width="248"
            height="148"
            rx="14"
            fill="url(#screenGrad)"
          />

          {/* Screen gloss effect */}
          <rect
            x="36"
            y="26"
            width="248"
            height="30"
            rx="14"
            fill="rgba(255, 255, 255, 0.08)"
          />

          {/* Decorative content on screen */}
          <g opacity="0.5">
            <line x1="60" y1="60" x2="240" y2="60" stroke="#378ADD" strokeWidth="1.5" />
            <line x1="60" y1="80" x2="220" y2="80" stroke="#378ADD" strokeWidth="1" />
            <line x1="60" y1="100" x2="230" y2="100" stroke="#2DD4A0" strokeWidth="1" />
            <line x1="60" y1="120" x2="200" y2="120" stroke="#378ADD" strokeWidth="1" />
            <line x1="60" y1="135" x2="210" y2="135" stroke="#2DD4A0" strokeWidth="0.8" />
          </g>

          {/* Center accent circle */}
          <circle
            cx="160"
            cy="100"
            r="3"
            fill="#2DD4A0"
            opacity="0.6"
          />
        </g>

        {/* Keyboard base */}
        <g>
          <rect
            x="20"
            y="190"
            width="280"
            height="50"
            rx="8"
            fill="none"
            stroke="#378ADD"
            strokeWidth="2"
            opacity="0.6"
          />

          {/* Keyboard keys grid */}
          <g opacity="0.4">
            {/* Key rows */}
            {[0, 1, 2, 3].map((row) => (
              [0, 1, 2, 3, 4, 5].map((col) => (
                <rect
                  key={`key-${row}-${col}`}
                  x={40 + col * 40}
                  y={205 + row * 10}
                  width="35"
                  height="8"
                  rx="1"
                  fill="#378ADD"
                  opacity="0.15"
                />
              ))
            ))}
          </g>
        </g>

        {/* Stand */}
        <g>
          <path
            d="M 140 190 Q 130 210 120 220 L 200 220 Q 190 210 160 190"
            fill="none"
            stroke="#378ADD"
            strokeWidth="2.5"
            opacity="0.7"
          />

          {/* Base */}
          <ellipse
            cx="160"
            cy="230"
            rx="70"
            ry="12"
            fill="#378ADD"
            opacity="0.2"
          />
          <ellipse
            cx="160"
            cy="228"
            rx="70"
            ry="10"
            fill="none"
            stroke="#378ADD"
            strokeWidth="1.5"
            opacity="0.4"
          />
        </g>
      </svg>
    </motion.div>
  );
}
