/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      'laptop': {'max': '1600px'},

      'tab': {'max': '767px'},

      'mobile': {'max': '639px'},
    },
    extend: {},
  },
  plugins: [],
}

