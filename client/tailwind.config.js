/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          gold: '#FFD700',
          green: '#00A86B',
          blue: '#0066CC',
        }
      },
    },
  },
  plugins: [],
};