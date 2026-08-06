"use client";

import { motion } from "framer-motion";

/**
 * Animated personal brand mark.
 *
 * An "MS" monogram inside a hexagon that doubles as a security shield, with a
 * `</>` code motif. Drawn as inline SVG so it stays sharp, weighs almost
 * nothing, and can animate its own gradient and rings.
 */
export default function BrandLogo({
  size = 38,
  showWordmark = true,
}: {
  size?: number;
  showWordmark?: boolean;
}) {
  return (
    <motion.div
      className="flex items-center gap-2.5"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      whileHover="hover"
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Spandana Murala logo"
        variants={{ hover: { rotate: 180, scale: 1.08 } }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="shrink-0"
      >
        <defs>
          <linearGradient id="bl-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b5cf6">
              <animate attributeName="stop-color"
                values="#8b5cf6;#3b82f6;#22d3ee;#8b5cf6" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#22d3ee">
              <animate attributeName="stop-color"
                values="#22d3ee;#8b5cf6;#3b82f6;#22d3ee" dur="6s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <filter id="bl-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Hexagon shield outline */}
        <path
          d="M32 3 L57 17.5 V46.5 L32 61 L7 46.5 V17.5 Z"
          stroke="url(#bl-grad)"
          strokeWidth="2.6"
          strokeLinejoin="round"
          fill="none"
          filter="url(#bl-glow)"
        />

        {/* Inner shield, pulsing softly */}
        <path
          d="M32 13 L47 21.5 V38 Q47 46 32 52 Q17 46 17 38 V21.5 Z"
          fill="url(#bl-grad)"
          opacity="0.13"
        >
          <animate attributeName="opacity" values="0.13;0.26;0.13" dur="3.2s" repeatCount="indefinite" />
        </path>

        {/* MS monogram */}
        <text
          x="32" y="38"
          textAnchor="middle"
          fontSize="19"
          fontWeight="800"
          fontFamily="Sora, Inter, sans-serif"
          fill="url(#bl-grad)"
          letterSpacing="-0.5"
        >
          MS
        </text>

        {/* Code brackets flanking the monogram */}
        <path d="M20 30 L16 34 L20 38" stroke="url(#bl-grad)" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
        <path d="M44 30 L48 34 L44 38" stroke="url(#bl-grad)" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />

        {/* Orbiting node, ties the mark to the network/security theme */}
        <circle r="2.2" fill="#22d3ee">
          <animateMotion dur="5s" repeatCount="indefinite"
            path="M32 3 L57 17.5 V46.5 L32 61 L7 46.5 V17.5 Z" />
        </circle>
      </motion.svg>

      {showWordmark && (
        <span className="font-display text-[15px] font-bold tracking-tight">
          <span className="text-gradient">SPANDANA</span>
          <span className="text-ink-dimmer"> · dev</span>
        </span>
      )}
    </motion.div>
  );
}
