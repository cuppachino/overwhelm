/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./plugins/ow-theme.cjs')],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
