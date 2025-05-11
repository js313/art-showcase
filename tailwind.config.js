/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Kumbh Sans"', "sans-serif"],
        secondary: ['"Cutive Mono"', "monospace"],
      },
      colors: {
        primary: "rgb(252 165 165)", // text-red-300
        secondary: "#000000", // black
        highlight: "rgb(248 113 113)", // text-red-400
      },
    },
  },
  plugins: [],
};
