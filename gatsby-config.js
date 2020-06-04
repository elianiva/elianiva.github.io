module.exports = {
  siteMetadata: {
    title: `Elianiva's Blog`,
    description: `This is a blog where I share random stuff that I found from the internet.`,
    author: `@dicha`,
    facebook: `https://facebook.com/ho0m4n`,
    reddit: `https://reddit.com/user/irrellia`,
    github: `https://github.com/elianiva`,
    url: `https://elianiva.github.io`,
    siteUrl: `https://elianiva.github.io`,
  },
  plugins: [
    `gatsby-plugin-feed`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
          {
            resolve: `gatsby-remark-custom-blocks`,
            options: {
              blocks: {
                snippet: {
                  classes: `snippet`,
                },
              },
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: true,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              escapeEntities: {},
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elianiva's Blog`,
        short_name: `Elianiva`,
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
    {
      resolve: "gatsby-plugin-excerpts",
      options: {
        sources: {
          snippetBlocks: {
            type: "htmlQuery",
            sourceField: "html",
            excerptSelector: ".custom-block.snippet .custom-block-body",
            stripSelector: "a",
            elementReplacements: [
              {
                selector: "h6",
                replaceWith: "p",
              },
              {
                selector: "h5",
                replaceWith: "p",
              },
              {
                selector: "h4",
                replaceWith: "p",
              },
              {
                selector: "h3",
                replaceWith: "p",
              },
              {
                selector: "h2",
                replaceWith: "p",
              },
              {
                selector: "h1",
                replaceWith: "p",
              },
            ],
            truncate: {
              length: 30,
              byWords: true,
              ellipsis: "...",
            },
          },
          default: {
            type: "htmlQuery",
            sourceField: "html",
            excerptSelector: "html > *",
            ignoreSelector: "img, .gatsby-highlight",
            stripSelector: "a",
            elementReplacements: [
              {
                selector: "h6",
                replaceWith: "p",
              },
              {
                selector: "h5",
                replaceWith: "p",
              },
              {
                selector: "h4",
                replaceWith: "p",
              },
              {
                selector: "h3",
                replaceWith: "p",
              },
              {
                selector: "h2",
                replaceWith: "p",
              },
              {
                selector: "h1",
                replaceWith: "p",
              },
            ],
            truncate: {
              length: 30,
              byWords: true,
              ellipsis: "...",
            },
          },
        },
        sourceSets: {
          markdownHtml: ["snippetBlocks", "default"],
        },
        excerpts: {
          snippet: {
            type: "html",
            nodeTypeSourceSet: {
              MarkdownRemark: "markdownHtml",
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `elianiva`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
