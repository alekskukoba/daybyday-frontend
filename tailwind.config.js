/** @type {import('tailwindcss').Config} */

function rem2px(input, fontSize = 16) {
  if (input == null) {
    return input
  }
  switch (typeof input) {
    case 'object':
      if (Array.isArray(input)) {
        return input.map((val) => rem2px(val, fontSize))
      } else {
        const ret = {}
        for (const key in input) {
          ret[key] = rem2px(input[key])
        }
        return ret
      }
    case 'string':
      return input.replace(
        /(\d*\.?\d+)rem$/,
        (_, val) => `${input} /** ${parseFloat(val) * fontSize}px */`
      )
    default:
      return input
  }
}

module.exports = rem2px({
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
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
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
  ],
})
