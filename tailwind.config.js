/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4f46e5",
          dark: "#4338ca",
          light: "#818cf8", // Improved contrast for dark mode
        },
        accent: {
          DEFAULT: "#6366f1",
          glow: "rgba(79, 70, 229, 0.4)",
        },
        bg: {
          body: "#ffffff",
          surface: "#f8fafc",
          surface2: "#f1f5f9",
        },
        text: {
          main: "#0f172a",
          muted: "#64748b",
        },
        border: "#e2e8f0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "24px",
        md: "16px",
        sm: "8px",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "scroll-left": "scroll-left 40s linear infinite",
      },
    },
  },
  plugins: [],
};
