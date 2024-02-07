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
        social: {
          twitter: '#1da1f2',
          github: '#333',
          linkedin: '#0077b5',
          instagram: '#c13584',
          youtube: '#ff0000',
        },
      },
    },
  },
}
