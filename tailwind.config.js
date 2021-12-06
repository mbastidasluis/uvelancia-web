module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: { 'body': ['Montserrat'] },
    extend: {},
    minHeight: {
      '0': '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      '9/10': '90vh',
      'full': '100vh',
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
