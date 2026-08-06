"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const cat = skillCategories.find((c) => c.id === active)!;

  return (
    <section
  id="skills"
  className="section-pad relative overflow-hidden bg-lightblue-500"
>
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="What I work with" title="Skills &amp; Tools" index="02" />

        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {skillCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`magnetic rounded-full border px-4 py-2 font-mono text-xs transition-all sm:text-sm ${
                active === c.id
                  ? "border-transparent bg-gradient-to-r from-violet-500 to-cyan-400 text-black font-semibold"
                  : "border-white/10 bg-white/5 text-ink-dim hover:text-white"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="relative mx-auto mt-16 flex min-h-[380px] max-w-3xl items-center justify-center">
          {/* orbit rings */}
          <div className="pointer-events-none absolute h-[300px] w-[300px] rounded-full border border-white/5 sm:h-[380px] sm:w-[380px]" />
          <div className="pointer-events-none absolute h-[200px] w-[200px] rounded-full border border-white/5 sm:h-[260px] sm:w-[260px]" />

          <div className="glass relative z-10 flex h-28 w-28 items-center justify-center rounded-full text-center font-display text-sm font-bold text-gradient shadow-xl sm:h-32 sm:w-32">
            {cat.label}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={cat.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
              style={{ animation: "spin 40s linear infinite" }}
            >
              {cat.skills.map((skill, i) => {
                const angle = (i / cat.skills.length) * 2 * Math.PI;
                const radius = 42; // percent
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                return (
                  <div
                    key={skill}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%`, animation: "spin 40s linear infinite reverse" }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.15 }}
                      className="glass block whitespace-nowrap rounded-full px-3.5 py-2 font-mono text-[11px] text-white shadow-lg shadow-black/30 sm:text-xs"
                    >
                      {skill}
                    </motion.span>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
