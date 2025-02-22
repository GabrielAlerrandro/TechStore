/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-blue": "#2662ec",
        "primary-purple": "#8f34e9",
        "light": "#334155",
        "dark": "#F3F4F6",
        "dark-border": "#001733",
        "dark-background": "#030917",
      },
    },
  },
  plugins: [],
}
