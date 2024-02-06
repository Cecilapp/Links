const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './layouts/**/*.html.twig',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        neutral: colors.slate,
      },
    },
  },
}
