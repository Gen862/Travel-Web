/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../src/img/sanfrancisco.jpg')",
        'atardecer': "url('../src/img/atardecer.jpg')",
        'bali': "url('../src/img/bali.jpg')",
        'miami': "url('../src/img/miami.jpg')",
        'newyork': "url('../src/img/newyork.jpg')",
        'norway': "url('../src/img/norway.jpg')",
        'sala': "url('../src/img/sala.jpg')",
        'seattlr': "url('../src/img/seattlr.jpg')",
        'suiza': "url('../src/img/suiza.jpg')",
        'sanfranciscodesktop': "url('../src/img/sanfranciscodesktop.jpeg')",
        'yosemite': "url('../src/img/yosemite.jpg')"
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
