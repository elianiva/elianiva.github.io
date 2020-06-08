const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

// Will be called when new node created
module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Only make slug if the type of the node is markdown remark
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const slug = value.replace("/blog/", "")
    const url = `/${slug.replace(/\//, "")}`

    // Create node field
    createNodeField({
      name: `slug`,
      node,
      value: url,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("./src/templates/post.js")
  const tagTemplate = path.resolve("./src/templates/tags.js")
  const postsListTemplate = path.resolve("./src/templates/posts.js")
  const res = await graphql(`
    {
      blogsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }

      tagsGroup: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  // Make blog pages
  const blogs = res.data.blogsRemark.edges
  blogs.forEach(({ node }) => {
    createPage({
      path: `${node.fields.slug}`,
      component: postTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  // Make tag pages
  const tags = res.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  // Create blog post list pages
  const postsPerPage = 5
  const posts = res.data.blogsRemark.edges
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts/` : `/posts/${i + 1}`,
      component: postsListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
