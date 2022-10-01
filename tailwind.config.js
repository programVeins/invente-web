/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Mono", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
