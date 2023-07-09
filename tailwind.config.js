/** @type {import('tailwindcss').Config} */
// import greenBg from '/imgs/greenSolarLights.jpg';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', "sans-serif"],
      },
    },
  },
  plugins: [],
}

