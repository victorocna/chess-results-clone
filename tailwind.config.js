module.exports = {
  important: true,
  theme: {
    extend: {
      fontSize: {
        tiny: "0.675rem",
      },
      fontFamily: {
        mono: "'Roboto Mono', monospace",
      },
      colors: {
        default: "rgb(15, 76, 129)"
      },
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
};
