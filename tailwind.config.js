/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",       // your HTML
    "./src/**/*.{js,ts,jsx,tsx}" // all your React components
  ],
  theme: {
    extend: {
      colors: {
        portfolioPink: "#ffc0cb", // custom pastel pink
        portfolioDark: "#a67ca6"  // a nice complement
      },
      fontFamily: {
        fancy: ["'Comic Sans MS'", "cursive"], // example — pick your vibe
      }
    }
  },
  plugins: [],
}

