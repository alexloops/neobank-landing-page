/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xs": "360px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
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
