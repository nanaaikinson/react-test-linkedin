/** @type {import('tailwindcss').Config} */

const themeColors = {
  primary: {
    light: "#60a5fa", // For lighter primary color
    DEFAULT: "#3b82f6", // Normal primary color
    dark: "#1d4ed8", // Used for hover, active, etc.
  },
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: themeColors,
    },
  },
  plugins: [require("kutty"), require("tailwind-bootstrap-grid")()],
  corePlugins: {
    container: false,
  },
};
