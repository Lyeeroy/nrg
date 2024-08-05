/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/index.html"],
  theme: {
    extend: {},
    build: "npx tailwindcss -i ./input.css -o ./output.css --watch",
  },
  plugins: [],
};
