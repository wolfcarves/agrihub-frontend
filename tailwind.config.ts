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
    sm: "375px",
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
        "primary-1": "#45D605",
        "primary-2": "#368F0F",
        "primary-3": "#638355",
        "primary-4": "#C9E7A3",
        "black-1": "#343434",
        "gray-1": "#7C7C7C",
        "gray-2": "#C8C8C8",
        "gray-3": "#F4F4F4",
        "white-1": "#FFFFFF",
        "danger-1": "#F71818",
        "danger-2": "#EE665E"
      },
      fontSize: {
        sm: "0.7rem",
        base: "0.8rem",
        md: "0.9rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.50rem",
        "3xl": "1.75rem",
        "4xl": "2rem",
        "5xl": "2.25rem",
        "6xl": "2.50rem",
        "7xl": "2.75rem",
        "8xl": "3rem",
        "9xl": "3.25rem"
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
