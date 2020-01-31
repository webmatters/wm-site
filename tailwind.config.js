const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: { body: ['Open Sans'] },
    extend: {
      colors: {
        primary: '#3256a8',
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
