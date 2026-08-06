"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { ProjectImage } from "@/lib/data";

export default function ProjectGallery({ images }: { images: ProjectImage[] }) {
  const [active, setActive] = useState(0);
  if (images.length === 0) return null;

  return (
    <div>
      <div className="glass relative aspect-video w-full overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="relative h-full w-full"
          >
            <Image src={images[active].src} alt={images[active].caption} fill sizes="(max-width: 1024px) 100vw, 900px" className="object-contain bg-black/20" priority />
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="font-mono text-xs text-ink/80">{images[active].caption}</span>
        </div>
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition-all ${
                active === i ? "border-cyan-400 opacity-100" : "hairline opacity-50 hover:opacity-80"
              }`}
            >
              <Image src={img.src} alt={img.caption} fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
