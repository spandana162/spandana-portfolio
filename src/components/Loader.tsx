"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINES = ["const engineer = await import('spandana');", "engineer.status; // 'ready to ship'", "rendering portfolio..."];

export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Generated once on the client only — avoids SSR/CSR hydration mismatches from Math.random().
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }).map(() => ({
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 4 + Math.random() * 6,
        delay: Math.random() * 3,
      })),
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + Math.random() * 14 + 4);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 500);
        }
        return next;
      });
    }, 180);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (lineIdx >= LINES.length) return;
    const current = LINES[lineIdx];
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 22);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((l) => l + 1);
      setCharIdx(0);
    }, 350);
    return () => clearTimeout(t);
  }, [charIdx, lineIdx]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#05050a]"
        >
          <div className="absolute inset-0 overflow-hidden">
            {mounted &&
              particles.map((p, i) => (
                <span
                  key={i}
                  className="absolute rounded-full bg-violet-400/40"
                  style={{
                    width: p.width,
                    height: p.height,
                    left: `${p.left}%`,
                    top: `${p.top}%`,
                    animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
                  }}
                />
              ))}
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-display text-2xl font-bold text-gradient-animate backdrop-blur"
          >
            MS
          </motion.div>

          <div className="relative z-10 w-[min(90vw,440px)] rounded-xl border border-white/10 bg-white/5 p-5 font-mono text-[13px] text-cyan-200/90 backdrop-blur">
            {LINES.map((line, i) => (
              <div key={i} className="min-h-[1.4em]">
                {i < lineIdx && line}
                {i === lineIdx && line.slice(0, charIdx)}
                {i === lineIdx && <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-cyan-300 align-middle" />}
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-6 h-[3px] w-[min(90vw,440px)] overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <div className="relative z-10 mt-3 font-mono text-xs text-white/40">{Math.floor(progress)}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
