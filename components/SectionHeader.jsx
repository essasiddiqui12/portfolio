import React from "react";

const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "left",
  kicker,
}) => {
  return (
    <div
      className={`space-y-2 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[--muted-text]">
          {eyebrow}
        </p>
      )}
      {title && (
        <h3 className="text-2xl font-semibold text-[--neutral-dark]">
          {title}
        </h3>
      )}
      {kicker && (
        <p className="text-sm font-semibold text-[--muted-text]">{kicker}</p>
      )}
      {description && (
        <p className="text-base text-[--muted-text]">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;


