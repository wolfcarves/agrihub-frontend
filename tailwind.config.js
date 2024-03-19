/** @type {import('tailwindcss').Config} */

import tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px"
      }
    },
    fontSize: {
      xs: "0.7rem",
      sm: "0.8rem",
      base: "0.9rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.50rem",
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
    },
    fontFamily: {
      //poppins
      "poppins-thin": ["poppins-thin"],
      "poppins-regular": ["poppins-regular"],
      "poppins-medium": ["poppins-medium"],
      "poppins-semibold": ["poppins-semibold"],
      "poppins-bold": ["poppins-bold"],
      "poppins-extrabold": ["poppins-extrabold"],
      // inter
      "inter-thin": ["inter-thin"],
      "inter-regular": ["inter-regular"],
      "inter-medium": ["inter-medium"],
      "inter-semibold": ["inter-semibold"],
      "inter-bold": ["inter-bold"],
      "inter-extrabold": ["inter-extrabold"],
      // inter
      "merri-thin": ["merri-thin"],
      "merri-regular": ["merri-regular"],
      "merri-bold": ["merri-bold"],
      "merri-black": ["merri-black"]
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#21C45D", //ganto muna
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "14px"
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [tailwindAnimate, require("autoprefixer")]
};
