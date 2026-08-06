"use client";

import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { navLinks, profile } from "@/lib/data";
import { scrollToId } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleNav = (href: string) => {
    if (isHome) scrollToId(href);
    else window.location.href = `/${href}`;
  };

  return (
    <footer className="relative border-t hairline">
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-48 bg-gradient-to-t from-violet-600/10 to-transparent blur-2xl" />
      <div className="container-px glass mx-auto flex max-w-7xl flex-col items-center gap-6 rounded-t-3xl border-0 border-b-0 px-8 py-12 sm:flex-row sm:justify-between">
        <div>
          <div className="font-display text-lg font-bold">
            <span className="text-gradient">{profile.initials}</span>
            <span className="text-ink-dimmer">.dev</span>
          </div>
          <p className="mt-1 text-xs text-ink-dimmer">© {new Date().getFullYear()} {profile.name}. Built with Next.js, Three.js &amp; a lot of coffee.</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button onClick={() => handleNav(l.href)} className="font-mono text-xs text-ink-dim hover:text-cyan-300">
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="magnetic flex h-9 w-9 items-center justify-center rounded-full border hairline surface-tint text-ink-dim hover:text-cyan-300">
            <FiGithub size={15} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="magnetic flex h-9 w-9 items-center justify-center rounded-full border hairline surface-tint text-ink-dim hover:text-cyan-300">
            <FiLinkedin size={15} />
          </a>
          <a href={`mailto:${profile.email}`} className="magnetic flex h-9 w-9 items-center justify-center rounded-full border hairline surface-tint text-ink-dim hover:text-cyan-300">
            <FiMail size={15} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="magnetic flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-300"
            aria-label="Back to top"
          >
            <FiArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
