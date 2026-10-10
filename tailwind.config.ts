import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.css",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2.5rem",
        xl: "4rem"
      },
      screens: {
        "2xl": "1440px"
      }
    },
    extend: {
      colors: {
        background: "#070A0E",
        foreground: "#F3F5F4",
        muted: "#A1ADB1",
        surface: "#10161A",
        border: "rgba(255,255,255,0.10)",
        netflix: {
          DEFAULT: "#70E3DC",
          dark: "#369DAB",
          glow: "rgba(112, 227, 220, 0.16)"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "Bebas Neue", "Arial Black", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"]
      },
      backgroundImage: {
        "cinematic-radial":
          "radial-gradient(circle at 78% 34%, rgba(70,207,203,0.16), transparent 38%), radial-gradient(circle at 86% 74%, rgba(244,113,80,0.10), transparent 28%), linear-gradient(to bottom, transparent 48%, #070A0E 100%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.02))"
      },
      boxShadow: {
        glow: "0 0 60px rgba(112, 227, 220, 0.20)",
        "glow-sm": "0 0 28px rgba(112, 227, 220, 0.18)",
        card: "0 24px 80px rgba(0, 0, 0, 0.45)"
      },
      animation: {
        "pulse-red": "pulse-red 2.8s ease-in-out infinite",
        orbit: "orbit 16s linear infinite",
        "orbit-reverse": "orbit-reverse 22s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        "loading-bar": "loading-bar 1.7s cubic-bezier(.65,0,.35,1) forwards",
        float: "float 6s ease-in-out infinite"
      },
      keyframes: {
        "pulse-red": {
          "0%, 100%": { opacity: "0.35", transform: "scale(0.96)" },
          "50%": { opacity: "1", transform: "scale(1.04)" }
        },
        orbit: {
          to: { transform: "rotate(360deg)" }
        },
        "orbit-reverse": {
          to: { transform: "rotate(-360deg)" }
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" }
        },
        "loading-bar": {
          "0%": { transform: "scaleX(0)" },
          "70%": { transform: "scaleX(0.82)" },
          "100%": { transform: "scaleX(1)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: [
    ({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) => {
      addUtilities({
        ".glass": {
          background: "linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,255,255,.025))",
          "backdrop-filter": "blur(18px)",
          "-webkit-backdrop-filter": "blur(18px)",
          border: "1px solid rgba(255,255,255,.1)"
        },
        ".glass-strong": {
          background: "rgba(8,12,17,.78)",
          "backdrop-filter": "blur(24px)",
          "-webkit-backdrop-filter": "blur(24px)",
          border: "1px solid rgba(255,255,255,.12)"
        },
        ".text-balance": {
          "text-wrap": "balance"
        }
      });
    }
  ]
};

export default config;
