"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FaJava, FaGithub, FaLock, FaShieldAlt, FaDatabase, FaTerminal, FaCloud,
  FaMicrochip, FaReact, FaPython, FaJs, FaNodeJs,
} from "react-icons/fa";

/**
 * The animated hero portrait.
 *
 * The portrait itself is a flat-vector illustration derived from a real
 * photograph, so it keeps an accurate likeness rather than being a generic
 * character. Motion is layered on top: mouse parallax, an idle breathing
 * drift, a rotating conic ring, orbiting technology icons and drifting
 * particles.
 */

/** Icons that orbit the portrait, with their angle and colour. */
const ORBIT = [
  { Icon: FaReact, angle: 0, color: "#61dafb", label: "React" },
  { Icon: FaJava, angle: 45, color: "#f89820", label: "Java" },
  { Icon: FaPython, angle: 90, color: "#3776ab", label: "Python" },
  { Icon: FaShieldAlt, angle: 135, color: "#22d3ee", label: "Security" },
  { Icon: FaNodeJs, angle: 180, color: "#68a063", label: "Node.js" },
  { Icon: FaDatabase, angle: 225, color: "#a78bfa", label: "Databases" },
  { Icon: FaJs, angle: 270, color: "#f7df1e", label: "JavaScript" },
  { Icon: FaMicrochip, angle: 315, color: "#ec4899", label: "AI" },
];

/** Smaller badges that float freely around the frame. */
const FLOATERS = [
  { Icon: FaLock, x: "4%", y: "20%", delay: 0, color: "#22d3ee" },
  { Icon: FaTerminal, x: "88%", y: "12%", delay: 0.7, color: "#a78bfa" },
  { Icon: FaCloud, x: "92%", y: "70%", delay: 1.4, color: "#3b82f6" },
  { Icon: FaGithub, x: "2%", y: "74%", delay: 2.1, color: "#e6edf3" },
];

/** Eye positions measured from the illustration, used for the blink overlay. */
const EYES = [
  { xPct: 37.3, yPct: 29.2, wPct: 7.3 },
  { xPct: 51.2, yPct: 23.7, wPct: 9.0 },
];
const LID_COLOR = "#dfb29c"; // sampled from the skin just below the eye

export default function HeroPortrait({ blink = true }: { blink?: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  // Mouse parallax, damped so it glides rather than snaps.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [8, -8]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [-6, 6]);
  const shiftX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const shiftY = useTransform(sy, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - (r.left + r.width / 2)) / window.innerWidth);
      my.set((e.clientY - (r.top + r.height / 2)) / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  // Particle positions are generated once on the client so the server and
  // client markup match (Math.random during render causes hydration errors).
  const [particles, setParticles] = useState<
    { left: number; top: number; size: number; dur: number; delay: number }[]
  >([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: 22 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        dur: Math.random() * 6 + 6,
        delay: Math.random() * 4,
      }))
    );
  }, []);

  return (
    <div ref={wrapRef} className="relative mx-auto w-full max-w-[440px] select-none">
      {/* ---- Glow behind everything ---- */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.30) 0%, rgba(34,211,238,0.16) 45%, transparent 72%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ---- Drifting particles ---- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-cyan-300/50"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              animation: `heroFloat ${p.dur}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* ---- Rotating conic ring ---- */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-[5] h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, #8b5cf6 60deg, transparent 130deg, #22d3ee 220deg, transparent 300deg)",
          maskImage: "radial-gradient(circle, transparent 60%, black 62%, black 65%, transparent 67%)",
          WebkitMaskImage: "radial-gradient(circle, transparent 60%, black 62%, black 65%, transparent 67%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />

      {/* ---- Orbiting technology icons ---- */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {ORBIT.map(({ Icon, angle, color, label }) => {
          const rad = (angle * Math.PI) / 180;
          const radius = 49; // percent from centre
          return (
            <motion.div
              key={label}
              className="absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-[rgba(15,15,28,0.72)] backdrop-blur-md"
              style={{
                left: `${50 + radius * Math.cos(rad)}%`,
                top: `${50 + radius * Math.sin(rad)}%`,
                boxShadow: `0 0 18px -6px ${color}`,
              }}
              // Counter-rotate so each badge stays upright while orbiting.
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              <Icon size={17} color={color} aria-label={label} />
            </motion.div>
          );
        })}
      </motion.div>

      {/* ---- Free-floating badges ---- */}
      {FLOATERS.map(({ Icon, x, y, delay, color }, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[rgba(15,15,28,0.7)] backdrop-blur-md"
          style={{ left: x, top: y, boxShadow: `0 0 16px -6px ${color}` }}
          animate={{ y: [0, -14, 0], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <Icon size={15} color={color} />
        </motion.div>
      ))}

      {/* ---- The portrait ---- */}
      <motion.div
        className="relative z-10 mx-auto w-[76%]"
        style={{ rotateX, rotateY, x: shiftX, y: shiftY, transformPerspective: 1000 }}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Idle breathing drift */}
        <motion.div
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <Image
            src="/images/profile-illustration.png"
            alt="Illustrated portrait of Spandana Murala"
            width={720}
            height={800}
            priority
            className="h-auto w-full drop-shadow-[0_18px_45px_rgba(0,0,0,0.45)]"
          />

          {/* Blink overlay: skin-toned lids that briefly close.
              Pass blink={false} to disable. */}
          {blink &&
            EYES.map((eye, i) => (
              <span
                key={i}
                aria-hidden
                className="pointer-events-none absolute"
                style={{
                  left: `${eye.xPct}%`,
                  top: `${eye.yPct}%`,
                  width: `${eye.wPct}%`,
                  height: `${eye.wPct * 0.62}%`,
                  transform: "translate(-50%, -50%) rotate(-9deg)",
                  background: LID_COLOR,
                  borderRadius: "50%",
                  transformOrigin: "center top",
                  animation: `heroBlink 6.5s ease-in-out ${i * 0.04}s infinite`,
                }}
              />
            ))}
        </motion.div>
      </motion.div>

      {/* Component-scoped keyframes */}
      <style jsx global>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.35; }
          50%      { transform: translateY(-26px) translateX(8px); opacity: 0.9; }
        }
        @keyframes heroBlink {
          0%, 92%, 100% { transform: translate(-50%, -50%) rotate(-9deg) scaleY(0); }
          94%, 96%      { transform: translate(-50%, -50%) rotate(-9deg) scaleY(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes heroFloat { 0%, 100% { transform: none; opacity: 0.5; } }
          @keyframes heroBlink { 0%, 100% { transform: translate(-50%, -50%) scaleY(0); } }
        }
      `}</style>
    </div>
  );
}
