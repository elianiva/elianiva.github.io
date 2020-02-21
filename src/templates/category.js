import React from "react"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/card"
import Styles from "../styles/tags.module.css"

function Category({ pageContext, data }) {
  const { category } = pageContext
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Category" />
      <div className={Styles.container}>
        <h1>Categorized as {category}</h1>
        {edges.map(edge => {
          const { cover, title, date, tags } = edge.node.frontmatter
          const { slug } = edge.node.fields
          return (
            <Link to={slug} rel="Post">
              <Card
                key={edge.node.id}
                cover={cover.childImageSharp.fluid}
                title={title}
                date={date}
                desc={edge.node.snippet}
                tags={tags}
              />
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          id
          snippet
          fields {
            slug
          }
          frontmatter {
            title
            date
            category
            tags
            cover {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
