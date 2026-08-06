"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
    };
    let raf: number;
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);

    const onEnter = () => setActive(true);
    const onLeave = () => setActive(false);
    const attach = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea, .magnetic").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    attach();
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-300 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999]"
      />
      <div
        ref={ringRef}
        className={`custom-cursor-ring fixed top-0 left-0 rounded-full border pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height,background,border-color] duration-200 ${
          active ? "w-12 h-12 border-violet-400 bg-violet-400/10" : "w-8 h-8 border-cyan-300/50 bg-transparent"
        }`}
      />
    </>
  );
}
