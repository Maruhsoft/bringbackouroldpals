/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#1a1f35',
          900: '#0f1525',
          950: '#0a0f1a',
        },
        gold: {
          300: '#ffd700',
          400: '#ffb700',
          500: '#ff9500',
          600: '#ff7400',
        },
      },
    },
  },
  plugins: [],
};