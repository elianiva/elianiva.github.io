import React from "react"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/card"
import Styles from "../styles/tags.module.css"

function Tags({ pageContext, data }) {
  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Tags" />
      <div className={Styles.container}>
        <span className={Styles.title}>
          Tagged by <span className={Styles.tag}>{tag}</span>
        </span>
        <hr className={Styles.divider} />
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

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
