/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: "hsl(212,21%,14%)",
        darkGrayishBlue: "hsl(228,12%,48%)",
        white: "hsl(0,0%,100%)",
        darkCyan: "hsl(158,36%,37%)",
        cream: "hsl(30,38%,92%),",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
