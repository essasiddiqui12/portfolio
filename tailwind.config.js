/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        lg: "1100px",
      },
    },
    extend: {
      colors: {
        primary: "#2563EB",
        "primary-2": "#7C3AED",
        "neutral-dark": "#0F172A",
        "muted-text": "#475569",
        "surface-border": "#E6EEF8",
        "page-bg-from": "#F8FBFF",
        "page-bg-to": "#F4F7FB",
      },
      boxShadow: {
        "soft-lg": "0 12px 28px rgba(3,7,18,0.08)",
        elevated: "0 18px 40px rgba(3,7,18,0.10)",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};



