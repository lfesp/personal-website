module.exports = {
  siteMetadata: {
    title: `Liam Esparraguera`,
    titleTemplate: "%s - liam esparraguera",
    description: `Hi. I'm Liam, a CS student @ at Princeton University passionate about designing and developing engaging software at the intersection of art and technology.`,
    url: 'https://lfesp.me',
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
        name: `projects`,
        path: `${__dirname}/src/projects`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Liam Esparraguera`,
        short_name: `lfesp`,
        start_url: `/`,
        icon: `src/images/icon.png`,
        background_color: `#fffaf0`,
        theme_color: `#1f2036`,
        display: `standalone`,
      },
    },
  ],
}
