import React from "react";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <header className="reveal-section card-surface interactive-card flex min-h-[90vh] w-full flex-col justify-center rounded-[36px] p-8 sm:p-10">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-3">
          <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[--neutral-dark]">
            AI-Assisted Developer
          </span>
          <span className="text-xs font-medium text-[--muted-text]">
            Cursor + Copilot
          </span>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[--muted-text]">
            Portfolio
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-[--neutral-dark] sm:text-5xl">
            {profile.name}
          </h1>
          <p className="text-lg text-[--muted-text]">{profile.title}</p>
          <p className="inline-flex items-center gap-2 text-sm text-[--muted-text]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-70"
            >
              <path
                d="M12 2C8 2 5 5 5 9c0 7 7 13 7 13s7-6 7-13c0-4-3-7-7-7z"
                stroke="#94a3b8"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <circle cx="12" cy="9" r="2.2" fill="#94a3b8"></circle>
            </svg>
            {profile.location}
          </p>
        </div>

        <p className="max-w-3xl text-base leading-relaxed text-[--muted-text]">
          {profile.aboutShort}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="btn-focus btn-glow inline-flex items-center rounded-full bg-gradient-to-r from-primary to-primary-2 px-6 py-3 text-sm font-semibold text-white"
          >
            View Projects
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-focus btn-glow inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-[--neutral-dark]"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="btn-focus btn-glow inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-[--neutral-dark]"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}



