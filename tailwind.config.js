/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'footer-primary-bg': '#EEF0F3',
        'footer-secondary-bg': '#E0E4EB',
        'dbd-yellow': '#FFD233',
        'dbd-grey': '#929292',
        'dbd-mid-grey': '#414141',
        'dbd-dark-grey': '#222222',
        'dbd-blue': '#4289F4',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        atkinson: ['Atkinson Hyperlegible', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '4rem',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-opentype'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
}
