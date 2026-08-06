"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  index,
  center,
}: {
  eyebrow: string;
  title: string;
  index: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300 ${center ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-cyan-300/60" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-display text-[clamp(1.7rem,4vw,2.6rem)] font-bold"
      >
        <span className="mr-3 font-mono text-[0.5em] text-ink-dimmer">{index}</span>
        {title}
      </motion.h2>
    </div>
  );
}
