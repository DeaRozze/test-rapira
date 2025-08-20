/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts,tsx}"],
  theme: {
    extend: {
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
