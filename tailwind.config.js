/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primaryDark" : "#1A120B",
        "primaryLight" : "FEFBF6",
      },
      fontFamily: {
        quickSand : ["Quicksand", "sans-serif"],
      }
    },
  },
  plugins: [],
}

