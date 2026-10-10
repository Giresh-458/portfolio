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
      padding: { DEFAULT: "1.25rem", md: "2.5rem", xl: "4rem" },
      screens: { "2xl": "1440px" }
    },
    extend: {
      colors: {
        background: "#080A09",
        foreground: "#F3EEE3",
        muted: "#AAAFA4",
        surface: "#101510",
        border: "rgba(243,238,227,0.10)",
        netflix: {
          DEFAULT: "#E85D47",
          dark: "#A93431",
          glow: "rgba(232,93,71,0.18)"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Bebas Neue", "Poppins", "Arial Black", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"]
      },
      backgroundImage: {
        "cinematic-radial": "radial-gradient(circle at 76% 28%, rgba(181,59,44,0.16), transparent 36%), radial-gradient(circle at 72% 73%, rgba(63,117,66,0.16), transparent 31%), linear-gradient(to bottom, transparent 42%, #080A09 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.02))"
      },
      boxShadow: {
        glow: "0 0 60px rgba(232,93,71,0.20)",
        "glow-sm": "0 0 28px rgba(232,93,71,0.18)",
        card: "0 24px 80px rgba(0,0,0,0.50)"
      },
      animation: {
        "pulse-red": "pulse-red 2.8s ease-in-out infinite",
        orbit: "orbit 16s linear infinite",
        "orbit-reverse": "orbit-reverse 22s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        "loading-bar": "loading-bar 1.05s cubic-bezier(.65,0,.35,1) forwards",
        float: "float 6s ease-in-out infinite"
      },
      keyframes: {
        "pulse-red": {
          "0%, 100%": { opacity: "0.35", transform: "scale(0.96)" },
          "50%": { opacity: "1", transform: "scale(1.04)" }
        },
        orbit: { to: { transform: "rotate(360deg)" } },
        "orbit-reverse": { to: { transform: "rotate(-360deg)" } },
        shimmer: { from: { backgroundPosition: "200% 0" }, to: { backgroundPosition: "-200% 0" } },
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
          border: "1px solid rgba(243,238,227,.1)"
        },
        ".glass-strong": {
          background: "rgba(8,10,9,.84)",
          "backdrop-filter": "blur(24px)",
          "-webkit-backdrop-filter": "blur(24px)",
          border: "1px solid rgba(243,238,227,.12)"
        },
        ".text-balance": { "text-wrap": "balance" }
      });
    }
  ]
};

export default config;
