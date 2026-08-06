import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { projects } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return notFound();
  const project = projects[idx];
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main className="section-pad pt-32">
        <div className="container-px mx-auto max-w-4xl">
          <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-ink-dim hover:text-cyan-300">
            <FiArrowLeft /> Back to projects
          </Link>

          <div className="mb-2 font-mono text-xs uppercase tracking-widest text-cyan-300">Case Study</div>
          <h1 className="font-display text-[clamp(1.8rem,5vw,3rem)] font-bold text-white">{project.title}</h1>
          <p className="mt-3 max-w-2xl text-ink-dim">{project.tagline}</p>

          {project.team && <p className="mt-2 font-mono text-xs text-ink-dimmer">{project.team}</p>}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-ink-dim">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="magnetic flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:border-white/30">
              <FiGithub /> View Code
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="magnetic flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-black">
                <FiExternalLink /> Live Demo
              </a>
            )}
            {project.metric && (
              <span className="flex items-center rounded-full border border-emerald-400/25 bg-emerald-400/5 px-4 py-2.5 font-mono text-xs text-emerald-300">
                {project.metric}
              </span>
            )}
          </div>

          {project.images.length > 0 && (
            <div className="mt-12">
              <ProjectGallery images={project.images} />
            </div>
          )}

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <h2 className="mb-3 font-display text-lg font-bold text-white">Overview</h2>
              <p className="text-sm leading-relaxed text-ink-dim">{project.overview}</p>
            </div>
            <div>
              <h2 className="mb-3 font-display text-lg font-bold text-white">Problem Statement</h2>
              <p className="text-sm leading-relaxed text-ink-dim">{project.problem}</p>
            </div>
            <div>
              <h2 className="mb-3 font-display text-lg font-bold text-white">Solution</h2>
              <p className="text-sm leading-relaxed text-ink-dim">{project.solution}</p>
            </div>
            <div>
              <h2 className="mb-3 font-display text-lg font-bold text-white">Features</h2>
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-ink-dim">
                    <span className="mt-1.5 text-cyan-300">▹</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            {project.challenges && (
              <div>
                <h2 className="mb-3 font-display text-lg font-bold text-white">Challenges</h2>
                <ul className="space-y-2">
                  {project.challenges.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-ink-dim">
                      <span className="mt-1.5 text-violet-300">▹</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.learnings && (
              <div>
                <h2 className="mb-3 font-display text-lg font-bold text-white">Learnings</h2>
                <ul className="space-y-2">
                  {project.learnings.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-ink-dim">
                      <span className="mt-1.5 text-emerald-300">▹</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link
            href={`/projects/${next.slug}`}
            className="glass group mt-20 flex items-center justify-between rounded-2xl p-6 transition-colors hover:border-white/20"
          >
            <div>
              <div className="font-mono text-xs text-ink-dimmer">Next Project</div>
              <div className="mt-1 text-lg font-bold text-white">{next.title}</div>
            </div>
            <FiArrowRight className="text-cyan-300 transition-transform group-hover:translate-x-1" size={22} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
