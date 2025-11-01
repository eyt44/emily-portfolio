/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "var(--primary)",
        accent: "var(--accent)",
      },
      backgroundColor: {
        panel: "var(--panel)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
}
