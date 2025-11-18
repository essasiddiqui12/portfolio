import React from "react";
import { profile } from "../data/profile";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="reveal-section py-16">
      <div className="card-surface interactive-card grid gap-10 rounded-3xl p-10 md:grid-cols-[3fr_2fr]">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="About"
            title="A developer who leads with curiosity and clarity."
          />
          <p className="text-lg font-medium text-[--neutral-dark]">
            {profile.aboutShort}
          </p>
          <div className="space-y-4 text-[--muted-text]">
            {profile.extraAbout.split("\n\n").map((para, idx) => (
              <p key={idx} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
        <div className="interactive-card flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 text-sm text-[--neutral-dark]">
          <p className="text-base font-semibold">Contact</p>
          <div className="space-y-3">
            <div>
              <span className="text-[--muted-text]">Email</span>
              <p>
                <a href={`mailto:${profile.email}`} className="font-semibold">
                  {profile.email}
                </a>
              </p>
            </div>
            <div>
              <span className="text-[--muted-text]">Phone</span>
              <p className="font-semibold">{profile.phone}</p>
            </div>
            <div>
              <span className="text-[--muted-text]">Location</span>
              <p className="font-semibold">{profile.location}</p>
            </div>
            <div>
              <span className="text-[--muted-text]">GitHub</span>
              <p>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  {profile.github.replace("https://", "")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




