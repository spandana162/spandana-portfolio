"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiAward, FiShield, FiDatabase, FiFlag, FiCloud, FiZap, FiCpu, FiTarget } from "react-icons/fi";
import type { IconType } from "react-icons";
import SectionHeading from "@/components/SectionHeading";
import { achievements } from "@/lib/data";

const ICONS: Record<string, IconType> = {
  trophy: FiAward,
  medal: FiTarget,
  flag: FiFlag,
  shield: FiShield,
  "shield-check": FiShield,
  database: FiDatabase,
  network: FiCloud,
  sparkles: FiZap,
  bot: FiCpu,
  wand: FiZap,
};

function AchievementCount({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / 1200);
      setN(Math.floor(p * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref} className="font-mono text-lg font-bold text-cyan-300">
      {n}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad relative">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="Recognition" title="Achievements &amp; Certifications" index="05" />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => {
            const Icon = ICONS[a.icon] ?? FiAward;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
                className="glass flex items-start gap-4 rounded-xl p-5 transition-colors hover:border-white/20"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border hairline bg-gradient-to-br from-violet-500/15 to-cyan-400/15 text-cyan-300">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{a.title}</div>
                  <div className="mt-1 text-xs text-ink-dim">{a.detail}</div>
                  {a.count !== undefined && (
                    <div className="mt-2">
                      <AchievementCount value={a.count} suffix={a.suffix ?? ""} />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
