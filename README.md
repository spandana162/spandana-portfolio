# Murala Chinni Spandana — Portfolio

A premium, animated Software Engineer portfolio built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion, GSAP, React Three Fiber, and Lenis smooth scroll.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

```bash
npx vercel
```

Or connect the repo at vercel.com/new — zero config needed, it's a standard Next.js App Router project.

## Before you ship this — things to configure

This was built from your resume, internship report, and the 5 real project decks/poster you provided, with real screenshots extracted from those files. A few things are intentionally left as placeholders for you to fill in:

1. **Résumé PDF** — drop your actual `resume.pdf` into `/public/resume.pdf`. The "Download Resume" buttons link to `/resume.pdf`.
2. **EmailJS** — copy `.env.local.example` to `.env.local` and fill in your Service ID / Template ID / Public Key from emailjs.com. Until configured, the contact form falls back to opening the visitor's email client instead of sending directly.
3. **Project GitHub/demo links** — every "View Code" button currently points to your GitHub profile (`github.com/spandana162`) because I don't have the individual repo URLs. Open `src/lib/data.ts` and set the exact `github` (and `demo`, if you have one) URL per project.
4. **Testimonials** — the Testimonials section ships with clearly-labeled placeholder cards. Real quotes from a manager, mentor, or professor will carry far more weight than anything fabricated — swap them in `src/lib/data.ts`.
5. **Company logos** — Experience section uses a generic icon instead of real IBaseIT/SkillDzire logos (I didn't have licensed assets for them). Drop logo files into `/public` and swap the icon for an `<Image>` if you have them.

## About the hero visual

You asked for a realistic 3D scene of a girl coding at a desk — that's a full 3D character/asset-modeling job (rigging, texturing, lighting) that isn't realistic to hand-build from scratch in code. Instead, the hero uses a genuinely interactive R3F/Three.js particle + distorted-blob background plus a stylized animated "workspace" mockup (glass IDE card, terminal, floating tech badges) built in CSS/SVG. If you later commission or generate a 3D character asset (`.glb`/`.gltf`), it can be dropped straight into `HeroScene.tsx` alongside the existing scene.

## Project screenshots

Real screenshots were extracted from your uploaded presentations/poster into `/public/projects/<slug>/`:
- **AI Interview Practice Platform** — from `min1fp.pptx`
- **AgriCare** — from `D7_Review4_21-02-2026.pptx`
- **LostNFound** — from `Mini_Project3_review1.pptx`
- **Customer Segmentation** — from `Customer_Segmentation.pptx`
- **Trash Tracker** — from your poster photo

These were built by a 5-person team for academic project reviews (SVECW) — the project pages note this ("Team project") rather than implying solo authorship.

## Tech stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · GSAP + ScrollTrigger · React Three Fiber + drei · Lenis · @emailjs/browser · react-icons · cmdk (command palette)

## Structure

```
src/
  app/            # routes: / , /projects/[slug], sitemap, robots
  components/      # all UI sections + providers
  lib/data.ts      # ALL content lives here — edit this file to update copy
  types/r3f.d.ts   # React 19 + React Three Fiber JSX typing shim
public/
  projects/        # real screenshots per project
```

## Notes

- Command palette: `Ctrl/Cmd + K`.
- Dark/light mode toggle in the navbar (persisted to localStorage).
- All animations respect standard performance practices (dynamic import for the R3F canvas, `viewport once` for scroll reveals) but there's no substitute for running Lighthouse yourself post-deploy to confirm real-world scores.
