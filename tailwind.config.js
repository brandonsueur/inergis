/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#18306C",
        secondary: "#2B61EA",
      },
      fontFamily: {
        airbnb: ["var(--font-airbnb)", "Airbnb Cereal", "sans-serif"],
      },
    },
  },
  plugins: [],
};
