

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      green: "#28a745",
      teal: "#03C988",
      "light-black": "#1B2430",
      "light-blue": "#34B3F1",
      "light-grey": "#30475E",
      "light-grey-500": "#35526E"
    }
  },
  plugins: [
    // require('@tailwindcss/line-clamp')
  ]
};
