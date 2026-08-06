"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading eyebrow="Where I've worked" title="Experience" index="03" />

        <div className="relative mt-16 pl-10 sm:pl-14">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500 via-cyan-400 to-transparent sm:left-[19px]" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative mb-14 last:mb-0"
            >
              <div className="glass absolute -left-10 flex h-8 w-8 items-center justify-center rounded-full text-cyan-300 shadow-lg sm:-left-14 sm:h-10 sm:w-10">
                <FiBriefcase size={14} />
              </div>

              <div className="glass rounded-2xl p-6 transition-colors hover:border-white/20 sm:p-8">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-ink sm:text-xl">
                      {exp.role} <span className="text-cyan-300">@ {exp.company}</span>
                    </h3>
                    <div className="mt-1 flex items-center gap-1.5 font-mono text-xs text-ink-dim">
                      <FiMapPin size={11} /> {exp.location}
                    </div>
                  </div>
                  <span className="rounded-full border border-emerald-400/25 bg-emerald-400/5 px-3 py-1 font-mono text-xs text-emerald-300">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-ink-dim">
                      <span className="mt-1.5 text-cyan-300">▹</span>
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span key={t} className="rounded-md border hairline px-2.5 py-1 font-mono text-[11px] text-ink-dimmer">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
