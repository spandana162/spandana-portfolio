"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navLinks, profile } from "@/lib/data";
import { scrollToId } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";
import { FiMenu, FiX, FiCommand } from "react-icons/fi";
import BrandLogo from "@/components/BrandLogo";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (!isHome) return;
      let current = "";
      navLinks.forEach((l) => {
        const el = document.querySelector(l.href);
        if (el && window.scrollY >= (el as HTMLElement).offsetTop - 160) current = l.href;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const handleNav = (href: string) => {
    setOpen(false);
    if (isHome) scrollToId(href);
    else window.location.href = `/${href}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ${
        scrolled ? "border-b hairline nav-bar-bg backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <Link href="/" className="magnetic">
        <BrandLogo size={36} />
      </Link>


        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className={`magnetic rounded-full px-4 py-2 font-mono text-[13px] transition-colors ${
                  active === l.href ? "text-cyan-300" : "text-ink-dim hover:text-ink"
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
            className="magnetic hidden items-center gap-2 rounded-full border hairline surface-tint px-3 py-1.5 font-mono text-xs text-ink-dim hover:text-ink sm:flex"
          >
            <FiCommand size={12} /> K
          </button>
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="magnetic flex h-9 w-9 items-center justify-center rounded-full border hairline surface-tint lg:hidden">
            {open ? <FiX size={16} /> : <FiMenu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t hairline nav-panel-bg backdrop-blur-xl lg:hidden"
        >
          <ul className="container-px flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button onClick={() => handleNav(l.href)} className="w-full rounded-lg px-3 py-3 text-left font-mono text-sm text-ink-dim hover:surface-tint hover:text-ink">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
