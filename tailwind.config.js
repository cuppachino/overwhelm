/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./plugins/pmdrs-tw.cjs')],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
