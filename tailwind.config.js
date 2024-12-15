/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      ...colors,
      primary:colors.green,
      secondary:colors.yellow,
    }
  },
 
  plugins: [],
};
