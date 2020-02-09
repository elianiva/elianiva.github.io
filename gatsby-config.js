module.exports = {
  siteMetadata: {
    title: `Irrellia's Blog`,
    description: `This is a blog where I share random stuff that I found from the internet.`,
    author: `Irrellia`,
    twitter: `https://twitter.com/irrellia_`,
    facebook: `https://facebook.com/ho0m4n`,
    reddit: `https://reddit.com/user/irrellia`,
    github: `https://github.com/irrellia`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-images`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Irrellia's Blog`,
        short_name: `Irrellia`,
        start_url: `/`,
        background_color: `#181824`,
        theme_color: `#181824`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`autoprefixer`)],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
