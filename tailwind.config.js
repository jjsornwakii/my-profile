/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffe8a9",
        "primary-container": "#f2c942",
        "on-primary": "#3c2f00",
        "on-primary-container": "#6a5400",
        secondary: "#efc135",
        "secondary-container": "#c59b00",
        tertiary: "#ebe7f8",
        "tertiary-container": "#cecbdc",
        background: "#131317",
        surface: "#131317",
        "surface-dim": "#131317",
        "surface-bright": "#39393d",
        "surface-container-lowest": "#0e0e12",
        "surface-container-low": "#1b1b1f",
        "surface-container": "#1f1f23",
        "surface-container-high": "#2a292e",
        "surface-container-highest": "#353439",
        "on-surface": "#e4e1e7",
        "on-surface-variant": "#d0c6ae",
        outline: "#99907b",
        "outline-variant": "#4d4634",
        error: "#ffb4ab",
        "error-container": "#93000a",
      },
      fontFamily: {
        sans: ["Geist", "sans-serif"],
        display: ["Geist", "sans-serif"],
        headline: ["Geist", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        code: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}

