/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { sm: "480px", md: "768px", md: "976px", xl: "1440pd" },
      animation: {
        fadeIn: "fadeIn 1.5s",
        bounce:
          "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
        slideUp: "slideUp 0.5s",
        slideUpEaseInOut: "slideUp 0.5s ease-in-out",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      animationDelay: {
        0: "0s",
        2: "0.2s",
        4: "0.4s",
        6: "0.6s",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
      },
      fontFamily: {
        body1: "Lato",
        body2: "Montserrat",
        body3: "Open Sans",
        body4: "Roboto",
      },
      colors: {
        bgclr: "#030617",
        txtclr: "#bbbbba",
        txtclr2: "#ffffff",
        hclr: "#5858e6",
        ytclr: "ffffff"
      },
      maxWidth: {
        100: "100rem",
        300: "300px",
        450: "450px",
        250: "250px",
      },
      minWidth: {
        140: "140px",
        350: "350px",
        300: "300px",
        450: "450px",
        250: "250px",
      },

      width: {
        "5xl": "64rem",
      },

      minHeight: {
        500: "500px",
        350: "350px",
        475: "475px",
        450: "450px",
        600: "600px",
        250: "250px",
      },
      maxHeight: {
        350: "350px",
        450: "450px",
        600: "600px",
        250: "250px",
        275: "275px",
        325: "325px",
        300: "300px",
        150: "150px",
        225: "225px",
        200: "200px",
      },
      padding: {
        "1/10": "10vh",
      },
      fontSize: {
        "base-lg": "1.0rem", // or whatever name you prefer
      },
      screens: {
        "max-sm": { max: "639px" },
        "max-md": { max: "767px" },
        "max-lg": { max: "1024px" },
        "max-category-w": { max: "884px" },
      },
    },
  },
  plugins: [],
};
