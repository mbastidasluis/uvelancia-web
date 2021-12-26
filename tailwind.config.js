module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: { 'body': ['Montserrat'] },
    extend: {
      colors: {
        transparent: 'transparent',
        currentColor: 'currentColor',
        'ocean': {
          50: '#ecf8f9',
          100: '#d8f1f3',
          200: '#b1e2e7',
          300: '#8bd4da',
          400: '#64c5ce',
          500: '#3db7c2',
          600: '#31929b',
          700: '#256e74',
          800: '#18494e',
          900: '#0c2527',
        },
        'forest': {
          50: '#edf8f2',
          100: '#daf1e6',
          200: '#b6e2cc',
          300: '#91d4b3',
          400: '#6cc699',
          500: '#47b880',
          600: '#399366',
          700: '#2b6e4d',
          800: '#1d4933',
          900: '#0e251a',
        },
        'purple': '#4242bd',
        'slime': '#9e42bd',
        'candy': '#bd4280',
        'copper': '#bd6142',
        'ore': '#bdbd42',
      },
    },
    minHeight: {
      '0': '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      '9/10': '90vh',
      'full': '100vh',
      'max': 'max-content'
    }
  },
  variants: {
    extend: {
      maxHeight: {
        half: "50vh",
        third: "33.3333vh",
        "3/4": "75vh",
      },
      minHeight: {
        third: "33.3333vh",
        half: "50vh",
        "3/4": "75vh",
      },
      height: {
        half: "50vh",
        third: "33.3333vh",
        "3/4": "75vh",
      },
    }
  },
  plugins: [],
}
