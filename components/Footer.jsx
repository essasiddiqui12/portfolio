import React from "react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="reveal-section">
      <div className="card-surface interactive-card rounded-3xl p-8 text-center text-sm text-[--muted-text]">
        <div className="font-semibold text-[--neutral-dark]">
          © {new Date().getFullYear()} {profile.name}
        </div>
        <div className="mt-2">
          <a href={`mailto:${profile.email}`} className="mr-3 underline">
            {profile.email}
          </a>
          <span>{profile.location}</span>
        </div>
        <div className="mt-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[--neutral-dark]"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}



