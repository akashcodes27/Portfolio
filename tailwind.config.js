/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cosmos: "#461220",
        cordovan: "#8C2F39",
        redwood: "#B23A48",
        melon: "#FCB9B2",
        apricot: "#FED0BB",
      },

      
    },
  },
  plugins: [],
};
