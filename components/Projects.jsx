import React from "react";
import { profile } from "../data/profile";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="reveal-section py-16">
      <SectionHeader
        eyebrow="Projects"
        title="Selected builds"
        description="Representative work spanning real-time systems, payment flows, and AI-guided UX."
      />
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {profile.projects.map((p, i) => (
          <article
            key={i}
            className="card-surface interactive-card relative overflow-hidden rounded-3xl p-6 transition duration-200"
            aria-labelledby={`project-${i}`}
          >
            <div className="absolute inset-x-6 top-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-[--muted-text]">
              <span>Case {i + 1}</span>
              <span>{p.tech[0]}</span>
            </div>
            <div className="mt-10 space-y-4">
              <h4
                id={`project-${i}`}
                className="text-2xl font-semibold text-[--neutral-dark]"
              >
                {p.title}
              </h4>
              <p className="text-sm text-[--muted-text]">{p.desc}</p>
              <div className="divider" />
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-[--muted-text]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href={p.github}
                  className="btn-focus btn-glow flex-1 rounded-full border border-white/20 px-4 py-2 text-center text-sm font-semibold text-[--neutral-dark]"
                >
                  GitHub
                </a>
                <a
                  href={p.demo}
                  className="btn-focus btn-glow flex-1 rounded-full bg-gradient-to-r from-primary to-primary-2 px-4 py-2 text-center text-sm font-semibold text-white"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}




