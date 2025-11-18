import React from "react";
import { profile } from "../data/profile";
import SectionHeader from "./SectionHeader";

const badgeColors = [
  "from-slate-900/80 via-slate-900/50 to-slate-800/40",
  "from-blue-900/60 via-indigo-900/40 to-slate-900/30",
  "from-purple-900/60 via-slate-900/40 to-slate-900/20",
  "from-slate-900/70 via-slate-800/40 to-slate-900/30",
];

export default function Skills() {
  return (
    <section id="skills" className="reveal-section py-16">
      <SectionHeader
        eyebrow="Capabilities"
        title="Skills & tools that keep my builds sharp."
        description="A blend of frontend craft, backend pragmatism, and operational awareness."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {profile.skills.map((s, i) => (
          <div
            key={s}
            className={`interactive-card card-border flex items-center justify-between rounded-2xl bg-gradient-to-r px-5 py-4 text-sm font-semibold text-[--neutral-dark] ${badgeColors[i % badgeColors.length]}`}
          >
            <span>{s}</span>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[--muted-text]">
              {i + 1 < 10 ? `0${i + 1}` : i + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}




