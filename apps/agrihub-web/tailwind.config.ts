/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./index.html",
    "../../packages/**/*.{ts,tsx}"
  ],
  theme: {
    colors: {
      primary: {
        100: "#638355"
      },
      secondary: "#985151",
      black: {
        100: "#3E3E3E"
      },
      red: {
        100: "#ED1C2E"
      },
      gray: {
        100: "#D7D7D7"
      }
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {}
  },
  plugins: []
  // [require("tailwindcss-animate")]
};
