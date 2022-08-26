/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        slg: "896px",
      },
      backgroundImage: { "granular-pattern": "url('/granular.png')" },
      colors: {
        "brand-light": "#38D2D9",
        "brand-dark": "#142249",
      },
      fontFamily: {
        "soleil-light": "'Soleil-Light', sans-serif",
        "soleil-regular": "'Soleil-Regular', sans-serif",
        "soleil-bold": "'Soleil-Bold', sans-serif",
      },
    },
  },
  plugins: [],
};
