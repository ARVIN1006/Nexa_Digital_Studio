/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        background: "#020617", // Slate 950
        surface: "#0f172a", // Slate 900
        surfaceHighlight: "#1e293b", // Slate 800
        primary: "#6366f1", // Indigo 500
        secondary: "#06b6d4", // Cyan 500
        accent: "#d946ef", // Fuchsia 500
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-reverse": "float 7s ease-in-out infinite reverse",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      screens: {
        xs: "375px", // Extra small devices
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
