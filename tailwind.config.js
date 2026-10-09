/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        bg: "#0d0c0b",
        bg2: "#171513",
        gold: "#e8b923",
        gold2: "#f6d56a",
        blush: "#f0b7bd",
        ink: "#f6efe4",
        mute: "#a79f90",
        line: "rgba(232,185,35,.25)",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ["Outfit", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
