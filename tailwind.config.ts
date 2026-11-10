import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        background: {
          DEFAULT: "#0a0a0c",
          secondary: "#111116",
          tertiary: "#16161e",
          elevated: "#1c1c26",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          muted: "rgba(255, 255, 255, 0.04)",
          glow: "rgba(255, 255, 255, 0.16)",
        },
        accent: {
          DEFAULT: "#10b981",
          light: "#34d399",
          dark: "#059669",
          glow: "rgba(16, 185, 129, 0.18)",
        },
        violet: {
          DEFAULT: "#8b5cf6",
          light: "#a78bfa",
          dark: "#6d28d9",
          glow: "rgba(139, 92, 246, 0.18)",
        },
        text: {
          primary: "#f4f4f5",
          secondary: "#a1a1aa",
          muted: "#71717a",
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "bento-glow": "0 0 35px -5px rgba(16, 185, 129, 0.08)",
        "purple-glow": "0 0 35px -5px rgba(139, 92, 246, 0.08)",
        "inner-glow": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)",
        subtle: "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-pattern": "24px 24px",
      },
    },
  },
  plugins: [],
};

export default config;
