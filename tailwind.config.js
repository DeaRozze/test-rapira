/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        all: "all",
      },
      transitionDuration: {
        400: "400ms",
        500: "500ms",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      scale: {
        105: "1.05",
        95: "0.95",
      },
      translate: {
        0.5: "0.125rem",
        1.5: "0.375rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      colors: {
        primary: {
          50: "#EEF6FF",
          100: "#3E97FF33",
          500: "#3E97FF",
          transparent: "#FFFFFF1A",
        },
      },
    },
  },
  plugins: [],
};
