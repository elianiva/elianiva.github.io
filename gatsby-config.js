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
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#212333`,
        theme_color: `#212333`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
