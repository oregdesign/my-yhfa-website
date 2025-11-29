/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F4C75',
        accent: '#D1A054',
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(15,76,117,0.12)',
      },
    },
  },
  plugins: [],
};
