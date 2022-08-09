/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("kutty"), require("tailwind-bootstrap-grid")()],
  corePlugins: {
    container: false,
  },
};
