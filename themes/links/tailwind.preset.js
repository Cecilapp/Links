const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './layouts/**/*.html.twig',
  ],
  theme: {
    extend: {
      colors: {
        // https://tailwindcss.com/docs/customizing-colors
        primary: colors.blue,
        secondary: colors.teal,
        /*social: {
          github: '#333',
          linkedin: '#0077b5',
          instagram: '#c13584',
          youtube: '#ff0000',
          mastodon: '#6364FF',
          steam: '#171A21',
          bluesky: '#1285FE',
          threads: '#000',
          twitter: '#1da1f2',
          x: '#000'
        },*/
      },
    },
  },
}
