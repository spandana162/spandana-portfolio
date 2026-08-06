"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="magnetic flex h-9 w-9 items-center justify-center rounded-full border hairline surface-tint text-ink-dim transition-colors hover:text-cyan-300 hover:border-cyan-300/40"
    >
      {theme === "dark" ? <FiSun size={15} /> : <FiMoon size={15} />}
    </button>
  );
}
