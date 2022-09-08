/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./plugins/ow-theme.cjs')],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mp-code': ['M PLUS 1 Code', 'monospace'],
        'mp-sans': ['M PLUS 2', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
