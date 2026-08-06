"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMail, FiGithub, FiLinkedin, FiDownload, FiSend, FiCheck, FiMapPin, FiAlertCircle } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [notice, setNotice] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // --- Configured: send through EmailJS ---------------------------
    if (serviceId && templateId && publicKey) {
      setStatus("sending");
      try {
        await emailjs.sendForm(serviceId, templateId, form, { publicKey });
        setStatus("sent");
        setNotice("Thanks — your message has been sent. I'll reply soon.");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } catch (err) {
        console.error(err);
        setStatus("error");
        setNotice("Sending failed. Please email me directly at " + profile.email);
        setTimeout(() => setStatus("idle"), 6000);
      }
      return;
    }

    // --- Not configured: fall back, and SAY SO ----------------------
    // Silently opening a mail client looks like a dead button when the user
    // has no desktop mail app, so always give visible feedback as well.
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n---\nFrom: ${name} <${email}>`);
    const mailto = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    let copied = false;
    try {
      await navigator.clipboard.writeText(
        `To: ${profile.email}\nFrom: ${name} <${email}>\n\n${message}`
      );
      copied = true;
    } catch {
      copied = false;
    }

    window.location.href = mailto;
    setStatus("sent");
    setNotice(
      copied
        ? `Your mail app should open. The message is also copied to your clipboard — or email ${profile.email} directly.`
        : `Your mail app should open. If nothing happens, email ${profile.email} directly.`
    );
    setTimeout(() => setStatus("idle"), 8000);
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[130px]" />
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading eyebrow="What's next?" title="Let's Build Something" index="07" center />

        <div className="glass mt-14 grid grid-cols-1 gap-10 rounded-3xl p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-bold text-ink">Let's Connect</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-dim">
              I&apos;m final-year Computer Science (Cybersecurity) student actively seeking Software Engineer, Full Stack Developer, and Software Development roles. I'm excited to contribute, learn from experienced teams, and build impactful products. 
              If you're hiring fresh graduates or have an opportunity to discuss, I'd love to connect.
            </p>

            <div className="mt-8 space-y-4">
              <a href={`mailto:${profile.email}`} className="magnetic flex items-center gap-3 text-sm text-ink-dim hover:text-cyan-300">
                <FiMail /> {profile.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-ink-dim">
                <FiMapPin /> {profile.location}
              </div>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="magnetic flex items-center gap-3 text-sm text-ink-dim hover:text-cyan-300">
                <FiGithub /> github.com/{profile.githubUsername}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="magnetic flex items-center gap-3 text-sm text-ink-dim hover:text-cyan-300">
                <FiLinkedin /> linkedin.com/in/spandana-murala
              </a>
              <a href={profile.resumeUrl} download="Murala-Chinni-Spandana-Resume.pdf" className="magnetic flex items-center gap-3 text-sm text-ink-dim hover:text-cyan-300">
                <FiDownload /> Download résumé
              </a>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-5">
  <h4 className="mb-3 text-sm font-semibold text-cyan-300">
    💼 Currently Looking For
  </h4>

  <div className="flex flex-wrap gap-2">
    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
      Software Engineer
    </span>

    <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
      Full Stack Developer
    </span>

    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
      Backend Developer
    </span>

    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
      AI / ML Engineer
    </span>

    <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs text-orange-300">
      Cybersecurity
    </span>
  </div>

  <p className="mt-4 text-sm leading-6 text-ink-dim">
    🚀 Currently open to Software Engineer, Full Stack Developer,
    Backend Developer, AI/ML Engineer, and Cybersecurity opportunities
    across India. I usually respond within <strong>24 hours</strong>.
  </p>
</div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block font-mono text-xs text-ink-dimmer">Name</label>
              <input name="name" required className="w-full rounded-xl border hairline surface-tint px-4 py-3 text-sm text-ink outline-none focus:border-cyan-400/40" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-xs text-ink-dimmer">Email</label>
              <input type="email" name="email" required className="w-full rounded-xl border hairline surface-tint px-4 py-3 text-sm text-ink outline-none focus:border-cyan-400/40" placeholder="you@company.com" />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-xs text-ink-dimmer">Message</label>
              <textarea name="message" required rows={4} className="w-full resize-none rounded-xl border hairline surface-tint px-4 py-3 text-sm text-ink outline-none focus:border-cyan-400/40" placeholder="Let's talk about..." />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="magnetic flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.01] disabled:opacity-70"
            >
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.span key="sent" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2">
                    <FiCheck /> Message sent
                  </motion.span>
                ) : (
                  <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                    <FiSend /> {status === "sending" ? "Sending..." : "Send Message"}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <AnimatePresence>
              {notice && (
                <motion.div
                  initial={{ opacity: 0, y: -6, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`flex items-start gap-2 rounded-xl border px-4 py-3 text-xs leading-relaxed ${
                    status === "error"
                      ? "border-red-400/30 bg-red-400/10 text-red-300"
                      : "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                  }`}
                >
                  {status === "error" ? <FiAlertCircle className="mt-0.5 shrink-0" /> : <FiCheck className="mt-0.5 shrink-0" />}
                  <span>{notice}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-center text-[11px] text-ink-dimmer">
              Prefer email?{" "}
              <a href={`mailto:${profile.email}`} className="link-cyan hover:underline">
                {profile.email}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
