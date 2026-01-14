/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4f46e5",
          dark: "#4338ca",
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
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
