/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(231, 69%, 60%)",
        secondary: "hsl(0, 94%, 66%)",
        grayishBlue: "hsl(229, 8%, 60%)",
        darkBlue: "hsl(229, 31%, 21%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
    screens: {
      xs: "375px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1440px",
    },
  },

  plugins: [],
};
