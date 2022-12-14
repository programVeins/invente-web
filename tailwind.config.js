/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  safelist: [
    "bg-sky-200",
    "bg-sky-300",
    "bg-sky-400",
    "bg-sky-500",
    "bg-sky-600",
    "bg-sky-700",
    "bg-sky-800",
    "bg-sky-900",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Mono", ...defaultTheme.fontFamily.sans],
        azonix: ["Azonix", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "#020015",
      },
    },
  },
  plugins: [],
};
