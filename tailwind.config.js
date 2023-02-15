/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      dark:"#040826",
      ...colors
    },
    extend: {
      backgroundImage: {
        'sakib-gradient': 'linear-gradient(91.81deg, #81CAFF 0.77%, #95FFD2 47.33%, #C68CFF 99%)',
      }
    },
  },
  plugins: [require("daisyui")],
};
