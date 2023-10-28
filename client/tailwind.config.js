/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        button: "#050816",
        primary: "#aae295",
        secondary: "#c5d8d8",
        tertiary: "#4d9689",
        Background: "#eef4c6",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 20px 30px -15px #ffffff",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "login-pattern": "url('/src/assets/bg3.jpg')",
      },
    },
  },
  plugins: [],
};
