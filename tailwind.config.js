const colors = require('tailwindcss/colors');

module.exports = {
  presets: [
    require('./themes/links/tailwind.preset.js')
  ],
  content: [
    './layouts/**/*.html.twig',
    './themes/**/layouts/**/*.html.twig',
  ],
  theme: {
    extend: {
      // https://tailwindcss.com/docs/customizing-colors
      colors: {
        primary: colors.blue,
        secondary: colors.slate,
      },
    },
  }
}
