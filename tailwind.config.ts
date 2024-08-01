import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#E5E7EB", // hsl(210, 16%, 93%)
        input: "#F3F4F6", // hsl(210, 20%, 96%)
        ring: "#3B82F6", // hsl(217, 91%, 60%)
        background: "#FFFFFF", // hsl(0, 0%, 100%)
        foreground: "#1F2937", // hsl(210, 16%, 14%)
        customBackground: "#EDF2F7",
        primary: {
          DEFAULT: "#6366F1",
          
          foreground: "#FFFFFF", 
        },
        secondary: {
          DEFAULT: "#3B82F6", // hsl(217, 91%, 60%)
          foreground: "#FFFFFF", // hsl(0, 0%, 100%)
        },
        destructive: {
          DEFAULT: "#EF4444", // hsl(360, 82%, 64%)
          foreground: "#FFFFFF", // hsl(0, 0%, 100%)
        },
        muted: {
          DEFAULT: "#9CA3AF", // hsl(210, 16%, 69%)
          foreground: "#1F2937", // hsl(210, 16%, 14%)
        },
        accent: {
          DEFAULT: "#D97706", // hsl(33, 92%, 53%)
          foreground: "#FFFFFF", // hsl(0, 0%, 100%)
        },
        popover: {
          DEFAULT: "#F3F4F6", // hsl(210, 20%, 96%)
          foreground: "#1F2937", // hsl(210, 16%, 14%)
        },
        card: {
          DEFAULT: "#FFFFFF", // hsl(0, 0%, 100%)
          foreground: "#1F2937", // hsl(210, 16%, 14%)
        },
      },
      fonts: {
        body: "Open Sans, sans-serif",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
