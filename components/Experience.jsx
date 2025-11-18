import React from "react";
import { profile } from "../data/profile";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="reveal-section py-16">
      <SectionHeader
        eyebrow="Experience"
        title="Delivering reliable interfaces and systems."
        description="A timeline of hands-on work across internships, freelance gigs, and academic builds."
      />
      <div className="relative mt-10 space-y-10 pl-6 md:pl-10">
        <span className="absolute inset-y-0 left-3 hidden w-px bg-gradient-to-b from-primary via-primary-2 to-primary md:block" />
        {profile.experience.map((exp, idx) => (
          <article
            key={idx}
            className="relative card-surface interactive-card rounded-2xl p-6"
          >
            <span className="absolute left-[-18px] top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-4 border-[#020617] bg-gradient-to-r from-primary to-primary-2 md:block" />
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[--muted-text]">
                  {exp.company}
                </p>
                <h4 className="text-xl font-semibold text-[--neutral-dark]">
                  {exp.role}
                </h4>
              </div>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold text-[--neutral-dark]">
                {exp.date}
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[--muted-text]">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

