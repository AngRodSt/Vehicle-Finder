/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./js/**/*js"],
  theme: {
    extend: {
      fontFamily: {
        'staatliches': ['Staatliches', 'cursive'],
      },
    },
  },
  plugins: [],
}

