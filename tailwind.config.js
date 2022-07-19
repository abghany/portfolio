/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#3ADC86',
        secondary: '#051826',
        'dark-blue': '#0F172A',
        'light-blue': '#64748F',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
