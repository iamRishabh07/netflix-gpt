/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        13: '0.8125rem', // 13px
      },
      colors: {
        'gray-custom': '#737373',
      },
    },
  },
  variants: {},
  plugins: [],
};
