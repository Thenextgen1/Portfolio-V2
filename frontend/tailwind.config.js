/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Oxygen: ["Oxygen"],
        Synocopate: ["Syncopate"]
      },
      colors: {
        Gray: '#999',
        LightGray: 'rgba(153, 153, 153, 0.425)'
      }
    },
  },
  plugins: [],
}
