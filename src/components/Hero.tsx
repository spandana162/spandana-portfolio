"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiDownload, FiArrowRight, FiArrowDown, FiMail } from "react-icons/fi";
import { profile } from "@/lib/data";
import { scrollToId } from "@/lib/utils";
import MagneticButton from "@/components/MagneticButton";
import HeroPortrait from "@/components/HeroPortrait";

/** Roles cycled by the typewriter. */
const ROLES = [
  "Software Engineer",
  "Full Stack Developer",
  "AI Developer",
  "Cybersecurity Engineer",
  "Problem Solver",
];

/** Typewriter that types a word, pauses, deletes it, then moves on. */
function Typewriter() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[index];
    const delay = deleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (count < word.length) setCount(count + 1);
        else setTimeout(() => setDeleting(true), 1500);
      } else {
        if (count > 0) setCount(count - 1);
        else {
          setDeleting(false);
          setIndex((index + 1) % ROLES.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [count, deleting, index]);

  return (
    <span className="font-mono">
      <span className="text-gradient-animate">{ROLES[index].slice(0, count)}</span>
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-cyan-400 align-middle animate-pulse" />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      {/* ---- Background: gradient mesh + blurred orbs ---- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(139,92,246,0.20),transparent)]" />
        <motion.div
          className="absolute -top-32 right-[-8%] h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[120px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-12%] left-[-8%] h-[380px] w-[380px] rounded-full bg-cyan-500/15 blur-[110px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      {/* ---- Split layout ---- */}
      <div className="container-px mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* ============ LEFT: the pitch ============ */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border hairline surface-tint px-4 py-1.5 font-mono text-xs text-emerald-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to Software Engineering roles
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mb-2 font-mono text-sm text-ink-dim"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="font-display text-[clamp(2.1rem,5.4vw,3.9rem)] font-extrabold leading-[1.04] tracking-tight text-ink"
          >
            SPANDANA <span className="text-gradient-animate">MURALA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-ink-dim"
          >
            Aspiring Software Engineer &middot; Full Stack Developer &middot; AI &amp; Cybersecurity
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 min-h-[2.2em] text-[clamp(1.05rem,2.4vw,1.55rem)] font-semibold"
          >
            <span className="text-ink-dim">&gt;&nbsp;</span>
            <Typewriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-ink-dim lg:mx-0"
          >
            Turning ideas into scalable software, AI solutions and secure digital experiences.
          </motion.p>

          {/* ---- Calls to action ---- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start"
          >
            <MagneticButton
              href={profile.resumeUrl}
              download="Murala-Chinni-Spandana-Resume.pdf"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-500/25"
            >
              <FiDownload /> Download Resume
              <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-full" />
            </MagneticButton>

            <MagneticButton
              onClick={() => scrollToId("#projects")}
              className="group flex items-center gap-2 rounded-full border hairline surface-tint px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur hover:border-violet-400"
            >
              View Projects
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </MagneticButton>

            <MagneticButton
              onClick={() => scrollToId("#contact")}
              className="flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-ink-dim hover:text-ink"
            >
              <FiMail /> Contact Me
            </MagneticButton>

            <MagneticButton
              href={profile.github}
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-full border hairline surface-tint text-ink hover:border-cyan-400"
            >
              <FiGithub size={17} />
            </MagneticButton>
          </motion.div>
        </div>

        {/* ============ RIGHT: the portrait ============ */}
        <div className="order-1 lg:order-2">
          <HeroPortrait blink={false} />
        </div>
      </div>

      {/* ---- Scroll cue ---- */}
      <motion.button
        onClick={() => scrollToId("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="magnetic absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-dimmer sm:flex"
      >
        Scroll
        <FiArrowDown className="animate-bounce" />
      </motion.button>
    </section>
  );
}
