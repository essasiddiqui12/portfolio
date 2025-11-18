import React from "react";
import { profile } from "../data/profile";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="reveal-section py-16">
      <SectionHeader
        eyebrow="Education"
        title="Foundations built on structured learning."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {profile.education.map((ed, i) => (
          <article
            key={i}
            className="card-surface interactive-card relative overflow-hidden rounded-2xl transition"
          >
            <div className="space-y-3 p-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-[--neutral-dark]">
                {ed.date}
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[--muted-text]">
                  {ed.school}
                </p>
                <h4 className="text-xl font-semibold text-[--neutral-dark]">
                  {ed.degree}
                </h4>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

