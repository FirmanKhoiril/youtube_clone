/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
  
        primary: "#49e8ff"
      },
      backgroundColor: {
        body: "#181818",
        primary: "#212121",
        primaryHover: "#3d3d3d",
      },
      screens: {
        xxl: "1536px"
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

