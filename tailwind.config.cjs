/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#12121c',
        secondary: '#222233',
        primary: '#006ada'
      }
    }
  },
  plugins: []
};

