/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'footer-primary-bg': '#EEF0F3',
        'footer-secondary-bg': '#E0E4EB',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-opentype'),
    require('@tailwindcss/line-clamp'),
  ],
}
