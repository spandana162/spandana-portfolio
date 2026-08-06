"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects, otherProjects } from "@/lib/data";

export default function Projects() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => s.add(t)));
    return Array.from(s).slice(0, 10);
  }, []);

  const filtered = projects.filter((p) => {
    const matchesQuery =
      !query ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()));
    const matchesTag = !tag || p.tech.includes(tag);
    return matchesQuery && matchesTag;
  });

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="What I've built" title="Featured Projects" index="04" />

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:w-72">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-dimmer" size={14} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech..."
              className="w-full rounded-full border hairline surface-tint py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink-dimmer outline-none focus:border-cyan-400/40"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setTag(null)}
              className={`rounded-full border px-3 py-1.5 font-mono text-[11px] ${!tag ? "border-cyan-400/40 text-cyan-300" : "hairline text-ink-dimmer"}`}
            >
              All
            </button>
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t === tag ? null : t)}
                className={`rounded-full border px-3 py-1.5 font-mono text-[11px] ${tag === t ? "border-cyan-400/40 text-cyan-300" : "hairline text-ink-dimmer"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
            >
              <ProjectCard project={p} index={i} />
            </motion.div>
          ))}
          {filtered.length === 0 && <p className="col-span-full py-10 text-center text-ink-dim">No projects match that search.</p>}
        </div>

        {/* other projects marquee-ish grid */}
        <div className="mt-20">
          <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-ink-dimmer">Other Projects</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {otherProjects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
                className="glass rounded-xl p-4 transition-colors hover:border-white/20"
              >
                <div className="font-semibold text-ink">{p.title}</div>
                <div className="mt-1 text-xs text-ink-dim">{p.note}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
