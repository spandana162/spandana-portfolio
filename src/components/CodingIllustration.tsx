"use client";

/**
 * Animated flat-illustration of a developer at her desk.
 *
 * Drawn as inline SVG rather than a raster image so it stays crisp at any
 * size, follows the active theme, weighs a few kB, and can animate its own
 * parts (typing hands, blinking, screen code, floating icons).
 */
export default function CodingIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 460"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a developer working at a desk"
    >
      <defs>
        <linearGradient id="ci-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="ci-desk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c74d8" />
          <stop offset="100%" stopColor="#544bb0" />
        </linearGradient>
        <linearGradient id="ci-hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#42385f" />
          <stop offset="100%" stopColor="#241d38" />
        </linearGradient>
        <linearGradient id="ci-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
        <radialGradient id="ci-glow">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient glow behind the scene */}
      <ellipse cx="300" cy="200" rx="200" ry="150" fill="url(#ci-glow)">
        <animate attributeName="rx" values="200;214;200" dur="5s" repeatCount="indefinite" />
      </ellipse>

      {/* ---- Floating tech chips ---- */}
      <g>
        <g>
          <animateTransform attributeName="transform" type="translate"
            values="0 0; 0 -11; 0 0" dur="6s" repeatCount="indefinite" />
          <rect x="26" y="74" width="74" height="30" rx="9"
                fill="var(--color-surface)" stroke="var(--color-border)" />
          <text x="63" y="94" textAnchor="middle" fontSize="13" fontFamily="monospace"
                fill="#22d3ee" fontWeight="bold">Java</text>
        </g>
        <g>
          <animateTransform attributeName="transform" type="translate"
            values="0 0; 0 10; 0 0" dur="7.4s" begin="0.6s" repeatCount="indefinite" />
          <rect x="424" y="58" width="80" height="30" rx="9"
                fill="var(--color-surface)" stroke="var(--color-border)" />
          <text x="464" y="78" textAnchor="middle" fontSize="13" fontFamily="monospace"
                fill="#a78bfa" fontWeight="bold">React</text>
        </g>
        <g>
          <animateTransform attributeName="transform" type="translate"
            values="0 0; 0 -8; 0 0" dur="5.4s" begin="1.2s" repeatCount="indefinite" />
          <rect x="18" y="176" width="68" height="30" rx="9"
                fill="var(--color-surface)" stroke="var(--color-border)" />
          <text x="52" y="196" textAnchor="middle" fontSize="12" fontFamily="monospace"
                fill="#34d399" fontWeight="bold">{"{ }"}</text>
        </g>
        <g>
          <animateTransform attributeName="transform" type="translate"
            values="0 0; 0 11; 0 0" dur="8s" begin="0.3s" repeatCount="indefinite" />
          <rect x="424" y="272" width="76" height="30" rx="9"
                fill="var(--color-surface)" stroke="var(--color-border)" />
          <text x="462" y="292" textAnchor="middle" fontSize="12" fontFamily="monospace"
                fill="#f472b6" fontWeight="bold">AI/ML</text>
        </g>
      </g>

      {/* ================= MONITOR (right of centre, on the desk) ============ */}
      <g>
        <rect x="286" y="112" width="196" height="132" rx="11"
              fill="var(--color-surface)" stroke="url(#ci-screen)" strokeWidth="2.5" />
        <rect x="296" y="122" width="176" height="112" rx="5" fill="#0a0e1a" />
        <circle cx="307" cy="133" r="3" fill="#ff5f57" />
        <circle cx="317" cy="133" r="3" fill="#febc2e" />
        <circle cx="327" cy="133" r="3" fill="#28c840" />

        {/* Code that types itself in on a loop */}
        <g>
          <rect x="304" y="146" width="0" height="5.5" rx="2.7" fill="#8b5cf6">
            <animate attributeName="width" values="0;54;54;0" dur="7s" repeatCount="indefinite" />
          </rect>
          <rect x="304" y="157" width="0" height="5.5" rx="2.7" fill="#22d3ee">
            <animate attributeName="width" values="0;0;86;86;0" dur="7s" repeatCount="indefinite" />
          </rect>
          <rect x="313" y="168" width="0" height="5.5" rx="2.7" fill="#34d399">
            <animate attributeName="width" values="0;0;0;66;66;0" dur="7s" repeatCount="indefinite" />
          </rect>
          <rect x="313" y="179" width="0" height="5.5" rx="2.7" fill="#f472b6">
            <animate attributeName="width" values="0;0;0;0;96;96;0" dur="7s" repeatCount="indefinite" />
          </rect>
          <rect x="304" y="190" width="0" height="5.5" rx="2.7" fill="#8b5cf6">
            <animate attributeName="width" values="0;0;0;0;0;48;0" dur="7s" repeatCount="indefinite" />
          </rect>
          <rect x="304" y="201" width="5" height="6" fill="#22d3ee">
            <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" />
          </rect>
        </g>

        <rect x="304" y="214" width="160" height="14" rx="3" fill="#101a2c" />
        <text x="310" y="224" fontFamily="monospace" fontSize="7.5" fill="#34d399">
          {"\u2713 build passed"}
          <animate attributeName="opacity" values="0;0;1;1" dur="7s" repeatCount="indefinite" />
        </text>
      </g>
      <path d="M368 244 h32 l6 22 h-44 z" fill="#3b3470" />
      <rect x="352" y="266" width="64" height="6" rx="3" fill="#3b3470" />

      {/* ================= PERSON (behind the desk, left of centre) ========== */}
      <g>
        <animateTransform attributeName="transform" type="translate"
          values="0 0; 0 -2.5; 0 0" dur="4s" repeatCount="indefinite" />

        {/* Chair back, behind her */}
        <rect x="120" y="214" width="128" height="112" rx="22" fill="#2a2545" />

        {/* Torso: shoulders taper up to the neck */}
        <path d="M132 326 q6 -70 52 -70 q46 0 52 70 z" fill="url(#ci-top)" />

        {/* Arms reaching forward to the keyboard */}
        {/* Slightly darker than the top so the arms separate from the torso */}
        <path d="M138 298 q-26 18 -22 40 l22 5 q4 -24 20 -32 z" fill="#6d28d9" />
        <path d="M230 298 q26 18 22 40 l-22 5 q-4 -24 -20 -32 z" fill="#6d28d9" />

        {/* Neck */}
        <rect x="176" y="238" width="16" height="24" rx="7" fill="#f3c4a0" />

        {/* Head */}
        <circle cx="184" cy="214" r="34" fill="#f5cba7" />

        {/* Hair: fringe over the crown, bun on top, strands down the sides */}
        <path d="M150 210 q2 -40 34 -40 q32 0 34 40 q-10 -20 -34 -20 q-24 0 -34 20 z"
              fill="url(#ci-hair)" />
        <ellipse cx="184" cy="176" rx="15" ry="12" fill="url(#ci-hair)" />
        <path d="M150 212 q-8 30 2 46 q-16 -20 -2 -46 z" fill="url(#ci-hair)" />
        <path d="M218 212 q8 30 -2 46 q16 -20 2 -46 z" fill="url(#ci-hair)" />

        {/* Glasses */}
        <g fill="none" stroke="#241d38" strokeWidth="2.6">
          <circle cx="171" cy="216" r="10.5" fill="#bae6fd" fillOpacity="0.30" />
          <circle cx="197" cy="216" r="10.5" fill="#bae6fd" fillOpacity="0.30" />
          <path d="M181.5 216 h5" />
        </g>

        {/* Eyes with a natural blink */}
        <g fill="#241d38">
          <ellipse cx="171" cy="216" rx="2.7" ry="3.4">
            <animate attributeName="ry" values="3.4;3.4;3.4;0.3;3.4"
                     dur="4.6s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="197" cy="216" rx="2.7" ry="3.4">
            <animate attributeName="ry" values="3.4;3.4;3.4;0.3;3.4"
                     dur="4.6s" repeatCount="indefinite" />
          </ellipse>
        </g>

        <circle cx="158" cy="226" r="5" fill="#f9a8d4" opacity="0.55" />
        <circle cx="210" cy="226" r="5" fill="#f9a8d4" opacity="0.55" />
        <path d="M176 230 q8 7 16 0" stroke="#241d38" strokeWidth="2.2"
              fill="none" strokeLinecap="round" />
      </g>

      {/* ================= DESK (drawn last so it overlaps the body) ========= */}
      <rect x="60" y="326" width="400" height="14" rx="7" fill="url(#ci-desk)" />
      <rect x="86" y="340" width="10" height="76" rx="5" fill="url(#ci-desk)" />
      <rect x="424" y="340" width="10" height="76" rx="5" fill="url(#ci-desk)" />

      {/* Typing hands resting on the desk edge */}
      <g fill="#f5cba7">
        <ellipse cx="150" cy="322" rx="11" ry="7.5">
          <animateTransform attributeName="transform" type="translate"
            values="0 0; 0 -3.5; 0 0" dur="0.45s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="218" cy="322" rx="11" ry="7.5">
          <animateTransform attributeName="transform" type="translate"
            values="0 -3.5; 0 0; 0 -3.5" dur="0.45s" repeatCount="indefinite" />
        </ellipse>
      </g>

      {/* Keyboard with a key highlight running across it */}
      <g>
        <rect x="136" y="330" width="96" height="8" rx="4" fill="#2a2545" />
        <rect x="142" y="332" width="10" height="4" rx="2" fill="#22d3ee">
          <animate attributeName="x" values="142;154;166;178;190;202;214;142"
                   dur="1.8s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Coffee mug with rising steam */}
      <g>
        <rect x="262" y="300" width="26" height="26" rx="5" fill="#f472b6" />
        <path d="M288 307 q9 6 0 12" stroke="#f472b6" strokeWidth="4" fill="none" />
        <g stroke="#94a3b8" strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M270 294 q4 -8 0 -14">
            <animate attributeName="opacity" values="0;0.7;0" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M280 294 q4 -8 0 -14">
            <animate attributeName="opacity" values="0;0.7;0" dur="3s" begin="1.1s" repeatCount="indefinite" />
          </path>
        </g>
      </g>

      {/* Plant on the desk */}
      <g>
        <path d="M64 326 h30 l-4 -24 h-22 z" fill="#7c3aed" />
        <g stroke="#34d399" strokeWidth="3.5" fill="none" strokeLinecap="round">
          <path d="M79 302 q-13 -16 -4 -30">
            <animate attributeName="d"
              values="M79 302 q-13 -16 -4 -30; M79 302 q-16 -15 -6 -29; M79 302 q-13 -16 -4 -30"
              dur="5s" repeatCount="indefinite" />
          </path>
          <path d="M79 302 q13 -18 4 -28">
            <animate attributeName="d"
              values="M79 302 q13 -18 4 -28; M79 302 q16 -16 7 -27; M79 302 q13 -18 4 -28"
              dur="5s" begin="0.8s" repeatCount="indefinite" />
          </path>
          <path d="M79 302 q0 -18 0 -24">
            <animate attributeName="d"
              values="M79 302 q0 -18 0 -24; M79 302 q3 -17 1 -23; M79 302 q0 -18 0 -24"
              dur="5s" begin="0.4s" repeatCount="indefinite" />
          </path>
        </g>
      </g>

      <ellipse cx="256" cy="334" rx="13" ry="8" fill="#2a2545" />
    </svg>
  );
}
