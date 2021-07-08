module.exports = {
  siteMetadata: {
    title: `personal website`,
    titleTemplate: "%s - liam esparraguera",
    description: `I'm Liam Esparraugera, a CS student at Princeton University passionate about software development, UX/UI design, and music, currently pursuing minors in Statistics and Machine Learning, Music Composition, and Technology and Society.`,
    url: 'https://www.lfesp.netlify.app',
    author: 'Liam Esparraguera',
    image: '/images/lfesp.png'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: '/images/lfesp.png',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          pages: require.resolve("./src/components/projectpage.js"),
        },
      },
    },
  ],
}
