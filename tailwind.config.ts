/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./index.html",
    "../../packages/**/*.{ts,tsx}"
  ],
  extend: {
    theme: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px"
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px"
        }
      },
      colors: {
        //primaries
        "primary-1": "#638355",
        //blacks
        "black-1": "#3E3E3E",
        //grays
        "gray-1": "#C8C8C8",
        "gray-2": "#2C2C2C",
        "gray-3": "#3E3E3E",
        //whites
        white: "#FFFFFF"
      },
      fontSize: {
        sm: "0.8rem",
        base: "0.9rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.25rem",
        "5xl": "2.50rem",
        "6xl": "2.75rem",
        "7xl": "3rem",
        "8xl": "3.25rem",
        "9xl": "3.50rem"
      }
    }
  },
  plugins: []
  // [require("tailwindcss-animate")]
};
