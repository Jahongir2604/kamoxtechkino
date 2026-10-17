/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        hacker: {
          DEFAULT: '#0b0f0b',
          bg: '#070909',
          neon: '#00FF7F'
        }
      }
    },
  },
  plugins: [],
}
