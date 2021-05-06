module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      variants: {
        border: ['hover'],
        borderRadius: ['responsive', 'hover'],
      },
      colors: {
        'light-background': '#fff',
        'light-font': '#000',
        'light-fontShadowPrimary': '#e1e1e1',
        'light-fontShadowSecondary': '#bab8b8',
        'light-primary': '#0629ee',
        'light-hover': '#0629ee',
        'light-color': '#000',
        'light-fontSecondary': '#7f7a7a',
        'dark-background': '#0E151C',
        'dark-font': '#e1e1e1',
        'dark-fontShadowPrimary': '#000',
        'dark-fontShadowSecondary': '#757575',
        'dark-primary': '#ff0a78',
        'dark-hover': '#ff0a78',
        'dark-color': '#fff',
        'dark-fontSecondary': '#999898',
      },
      fontFamily: {
        sans: [
          'Futura',
          'Wotfard',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
