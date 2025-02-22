import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Fixed duplicate array issue
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flyonui/dist/js/accordion.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "15%": { transform: "rotate(14.0deg)" },
          "30%": { transform: "rotate(-8.0deg)" },
          "40%": { transform: "rotate(14.0deg)" },
          "50%": { transform: "rotate(-4.0deg)" },
          "60%": { transform: "rotate(10.0deg)" },
          "70%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        wave: "wave 1.5s infinite",
      },
      colors: {
        primary: "#4F39F6",
        secondary: "#1B1631",
        darkMode: "#020617",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("flyonui"),
    require("flyonui/plugin"),
  ],
};

export default config;
