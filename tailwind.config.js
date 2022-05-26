module.exports = {
  important: true,
  theme: {
    extend: {
      fontSize: {
        tiny: "0.5rem",
      },
      fontFamily: {
        mono: "'Roboto Mono', monospace",
      },
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
};
