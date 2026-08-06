"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { profile, stats, journey } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const duration = 1400;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(p * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
  <span
    ref={ref}
    className={`font-display font-black leading-none text-gradient ${
      value >= 100
        ? "text-2xl sm:text-4xl"
        : "text-3xl sm:text-3xl"
    }`}
  >
    {n}
    {suffix}
  </span>
);
}

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Get to know me" title="About Me" index="01" />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            {profile.bio.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="mb-5 text-[15px] leading-relaxed text-ink-dim"
              >
                {p}
              </motion.p>
            ))}

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-5">
                  <Counter value={s.value} suffix={s.suffix} />
                  <div className="mt-1 text-xs text-ink-dim">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* journey timeline */}
          <div className="relative pl-8">
            <div className="absolute left-[7px] top-1 bottom-1 w-px bg-gradient-to-b from-violet-500 via-cyan-400 to-transparent" />
            {journey.map((j, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative mb-8 last:mb-0"
              >
                <span className="absolute -left-8 top-1 h-3.5 w-3.5 rounded-full border-2 border-cyan-300 bg-[#05050a]" />
                <div className="font-mono text-xs text-cyan-300">{j.year}</div>
                <div className="mt-1 font-semibold text-white">{j.title}</div>
                <div className="mt-1 text-sm text-ink-dim">{j.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
