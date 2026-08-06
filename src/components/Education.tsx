"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiAward } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/lib/data";

function CgpaRing() {
  const ref = useRef<SVGCircleElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "-40px" });
  const [dash, setDash] = useState(314);

  useEffect(() => {
    if (inView) setTimeout(() => setDash(314 - 314 * education.cgpaPct), 200);
  }, [inView]);

  return (
    <div ref={wrapRef} className="relative h-32 w-32 shrink-0 sm:h-36 sm:w-36">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
        <circle
          ref={ref}
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="url(#cgpaGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={314}
          strokeDashoffset={dash}
          style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(.2,.8,.2,1)" }}
        />
        <defs>
          <linearGradient id="cgpaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
        <span className="text-xl font-bold text-ink sm:text-2xl">{education.cgpa}</span>
        <span className="text-[10px] text-ink-dimmer">CGPA</span>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="section-pad relative">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading eyebrow="Academic background" title="Education" index="06" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass mt-14 flex flex-col items-center gap-8 rounded-2xl p-8 sm:flex-row sm:p-10"
        >
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border hairline bg-gradient-to-br from-violet-500/15 to-cyan-400/15 text-cyan-300">
            <FiAward size={26} />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-ink">{education.school}</h3>
            <p className="mt-1 text-sm text-ink-dim">{education.degree}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3 sm:justify-start">
              <span className="rounded-full border border-emerald-400/25 bg-emerald-400/5 px-3 py-1 font-mono text-xs text-emerald-300">
                {education.period}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
              {education.coursework.map((c) => (
                <span key={c} className="rounded-md border hairline px-2.5 py-1 font-mono text-[11px] text-ink-dimmer">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <CgpaRing />
        </motion.div>
      </div>
    </section>
  );
}
