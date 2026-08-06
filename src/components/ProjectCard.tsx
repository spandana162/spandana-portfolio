"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rotX = ((y / r.height) - 0.5) * -8;
    const rotY = ((x / r.width) - 0.5) * 8;
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
  };

  const cover = project.images[0]?.src;

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ transitionDelay: `${(index % 6) * 40}ms` }}
      className="group relative rounded-2xl bg-gradient-to-br from-violet-500/20 via-white/5 to-cyan-400/10 p-px transition-transform duration-300 ease-out will-change-transform"
    >
      <div className="glass flex h-full flex-col overflow-hidden rounded-2xl p-5">
        <div className="mb-4 flex items-start justify-between">
          <div className="relative h-11 w-11 overflow-hidden rounded-xl border hairline surface-tint">
            {cover ? (
              <Image src={cover} alt={project.title} fill sizes="44px" className="object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-mono text-xs text-cyan-300">{project.title.slice(0, 2)}</div>
            )}
          </div>
          <div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-ink-dim hover:text-cyan-300">
              <FiGithub size={16} />
            </a>
          </div>
        </div>

        <Link href={`/projects/${project.slug}`} className="flex flex-1 flex-col">
          <h3 className="text-base font-bold text-ink transition-colors group-hover:text-cyan-300">{project.title}</h3>
          <p className="mt-1.5 text-[13px] leading-relaxed text-ink-dim line-clamp-3">{project.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="rounded-md border hairline px-2 py-0.5 font-mono text-[10px] text-ink-dimmer">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-1.5 font-mono text-xs text-cyan-300">
            View case study <FiArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </Link>
      </div>
    </div>
  );
}
