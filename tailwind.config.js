const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: { body: ['Roboto'] },
    extend: {
      colors: {
        primary: '#243e85',
        secondary: colors.gray[900],
        cta: '#ed8936',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
