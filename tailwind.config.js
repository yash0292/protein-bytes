/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation:{
        "slide": "slideBottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
      },
      keyframes:{
        slideBottom:{
          '0%': { transform: 'translateY(-25%)' },      
          '100%': { transform: 'translateY(0)'}
        }
      },
      colors:{
        'protienGolden': '#DCCA87',
        'protienBlack': '#0C0C0C',
        'protienGray': '#545454',
        'protienCrimson': '#F5EFDB',
        'protienGrey': '#AAAAAA',
        'protienWhite':' #FFFFFF',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'alkatra' : ['Alkatra', 'cursive'],
      },
      content: {
        'spoon': 'url("/assets/spoon.png")',
      },
      backgroundImage: {
        "menuBg":"linear-gradient(to right bottom, rgb(40 43 46 / 80%), rgb(40 43 46 /80%)), url('https://png.pngtree.com/thumb_back/fh260/20170803/pngtree-Food-Menu-Fare-Meal-background-photo-869492.jpg')",
        'menuPattern': "linear-gradient(to right bottom, rgb(0 0 0 / 90%), rgb(0 0 0 / 96%)), url('https://themewagon.github.io/restoran/img/bg-hero.jpg')",
      },
      screens: {
      '3xl': '1920px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
