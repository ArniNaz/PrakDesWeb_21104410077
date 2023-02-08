/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/css/**/*.{html,js}',
    './public/css/**/*.{html,js}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        skcolor: {
          default: '#7B99B9',
          dark: '#517dad'
        }
      },
    },
  },
  plugins: [],
}
