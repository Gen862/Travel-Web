/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../public/img/sanfrancisco.jpg')",
        'atardecer': "url('../public/img/atardecer.jpg')",
        'bali': "url('../public/img/bali.jpg')",
        'miami': "url('../public/img/miami.jpg')",
        'newyork': "url('../public/img/newyork.jpg')",
        'norway': "url('../public/img/norway.jpg')",
        'sala': "url('../public/img/sala.jpg')",
        'seattlr': "url('../public/img/seattlr.jpg')",
        'suiza': "url('../public/img/suiza.jpg')",
        'sanfranciscodesktop': "url('../public/img/sanfranciscodesktop.jpeg')",
        'yosemite': "url('../public/img/yosemite.jpg')"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary' : '#CC2D4A',
        'secondary' : '#8FA206',
        'terciary' : '#61AEC9'
      }),
      textColor:{
        'primary' : '#CC2D4A',
        'secondary' : '#8FA206',
        'terciary' : '#61AEC9'
      },
      fontFamily:{
        Montserrat : ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [

  ],
}
