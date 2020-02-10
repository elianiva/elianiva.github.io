const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

// Will be called when new node created
module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Only make slug if the type of the node is markdown remark
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const slug = value.replace("/blog/", "")
    const url = `${slug}`

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
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
