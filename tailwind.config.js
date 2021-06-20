const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#232931",
      secondary: "#393E46",
      green: "#4ECCA3",
      text: "#EEEEEE",
      textSecondary: "#686D76",
    },
    extend: {
      fontFamily: {
        sans: ["Asap", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      scale: ["active", "group-hover"],
    },
  },
  plugins: [],
};
