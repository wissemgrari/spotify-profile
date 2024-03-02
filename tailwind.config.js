/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1db954',
        dark: '#040306',
        lightDark: '#181818',
      }
    },
  },
  plugins: [],
}