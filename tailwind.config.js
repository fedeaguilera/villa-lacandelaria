module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily : {
      'title' : ['Fleur De Leah', 'cursive'],
      'body' : ['Belleza', 'sans-serif']
    },
    
    extend: {
      backgroundImage: {
        'hero': "linear-gradient(to right bottom , rgba(34,49,63,.5),rgba(34,49,63,.5)), url('/hero.jpg')",
      },
      colors: {
        'primary': '#D2ECF9',
        'secondary': '#253B6E',
        'bg-primary' : '#D2ECF9',
        'bg-secondary': '#253B6E',
        'gallery' : '#1891AC',
        'test': '#1F5F8B'
      },
      minHeight: {
        '3/4': '85vh',
        '1': '50vh',
        'header' : '15vh'
      },
    },
  },
  plugins: [],
}
