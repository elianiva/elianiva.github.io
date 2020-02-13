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
  const tagTemplate = path.resolve("./src/templates/tags.js")
  const categoryTemplate = path.resolve("./src/templates/category.js")
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

      categoriesGroup: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        group(field: frontmatter___category) {
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
      component: blogTemplate,
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

  // Make category pages
  const categories = res.data.categoriesGroup.group
  categories.forEach(category => {
    createPage({
      path: `/category/${category.fieldValue}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    })
  })

  // Create blog-list pages
  const posts = res.data.blogsRemark.edges
  const postsPerPage = 5
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve("./src/templates/blogs.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
