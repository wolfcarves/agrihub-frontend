/** @type {import('tailwindcss').Config} */

import tailwindCssAnimate from "tailwindcss-animate";

const theme = {
  important: true,
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./index.html",
    "../../packages/**/*.{ts,tsx}"
  ],
  screens: {
    xs: "375px",
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px"
  },
  container: {
    center: true
  },
  theme: {
    extend: {
      colors: {
        //primaries
        "primary-1": "#368F0F",
        "primary-2": "#57714B",
        "primary-3": "#638355",
        "primary-4": "#C9E7A3",
        "primary-5": "#F0FBEA",
        //blacks
        "black-1": "#343434",
        "black-2": "#4D4D4D",
        //grays
        "gray-1": "#848484",
        "gray-2": "#A9A9A9",
        "gray-3": "#C8C8C8",
        //whites
        white: "#FFFFFF",
        //danger
        "danger-1": "#F95757"
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
      },
      fontWeight: {
        thin: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800"
      }
    }
  },
  plugins: [tailwindCssAnimate],
  blocklist: ["container", "collapse"]
} as const;

export default theme;
