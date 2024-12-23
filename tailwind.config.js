/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#e3fdff",
        primary: "#49e8ff"
      }
    },
  },
  plugins: [],
}

