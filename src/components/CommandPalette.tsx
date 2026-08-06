"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { navLinks, projects, profile } from "@/lib/data";
import { scrollToId } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (e.key === "/" && (e.target as HTMLElement)?.tagName === "INPUT") return;
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const go = (fn: () => void) => {
    fn();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center bg-black/70 backdrop-blur-sm pt-[12vh]"
      onClick={() => setOpen(false)}
    >
      <div onClick={(e) => e.stopPropagation()} className="w-[min(92vw,560px)]">
        <Command
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b16]/95 shadow-2xl shadow-black/50"
          loop
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-4">
            <span className="font-mono text-cyan-300">/</span>
            <Command.Input
              autoFocus
              placeholder="Jump to a section, project, or action..."
              className="w-full bg-transparent py-4 text-sm text-white placeholder:text-white/40 outline-none"
            />
            <kbd className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-white/40">esc</kbd>
          </div>
          <Command.List className="max-h-[50vh] overflow-y-auto p-2">
            <Command.Empty className="px-4 py-6 text-center text-sm text-white/40">No results found.</Command.Empty>

            <Command.Group heading="Sections" className="px-2 py-1 text-[11px] uppercase tracking-wider text-white/40 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:pt-3">
              {navLinks.map((l) => (
                <Command.Item
                  key={l.href}
                  onSelect={() => go(() => scrollToId(l.href))}
                  className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm text-white/80 aria-selected:bg-white/10 aria-selected:text-white"
                >
                  {l.label}
                  <FiArrowRight className="opacity-40" />
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Projects" className="px-2 py-1 text-[11px] uppercase tracking-wider text-white/40 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:pt-3">
              {projects.map((p) => (
                <Command.Item
                  key={p.slug}
                  onSelect={() => go(() => router.push(`/projects/${p.slug}`))}
                  className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm text-white/80 aria-selected:bg-white/10 aria-selected:text-white"
                >
                  {p.title}
                  <FiArrowRight className="opacity-40" />
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Actions" className="px-2 py-1 text-[11px] uppercase tracking-wider text-white/40 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:pt-3">
              <Command.Item onSelect={() => go(() => window.open(profile.github, "_blank"))} className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-white/80 aria-selected:bg-white/10 aria-selected:text-white">
                <FiGithub /> Open GitHub
              </Command.Item>
              <Command.Item onSelect={() => go(() => window.open(profile.linkedin, "_blank"))} className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-white/80 aria-selected:bg-white/10 aria-selected:text-white">
                <FiLinkedin /> Open LinkedIn
              </Command.Item>
              <Command.Item onSelect={() => go(() => (window.location.href = `mailto:${profile.email}`))} className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-white/80 aria-selected:bg-white/10 aria-selected:text-white">
                <FiMail /> Email me
              </Command.Item>
              <Command.Item onSelect={() => go(() => window.open(profile.resumeUrl, "_blank"))} className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-white/80 aria-selected:bg-white/10 aria-selected:text-white">
                <FiDownload /> Download résumé
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
