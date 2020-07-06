import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Card from "../components/card"
import Styles from "../styles/posts.module.css"

function Posts({ pageContext, data }) {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/posts" : `/posts/${(currentPage - 1).toString()}`
  const nextPage = `/posts/${(currentPage + 1).toString()}`

  return (
    <Layout>
      <div style={{ backgroundColor: "#efefef" }}>
        <SEO url="https://elianiva.github.io/posts" title="Posts" />
        <div className={Styles.container}>
          {data.allMarkdownRemark.edges.map(post => {
            const { cover, title, date, tags } = post.node.frontmatter
            const { slug } = post.node.fields
            return (
              <Link key={post.node.id} to={slug} rel="Post">
                <Card
                  cover={cover.childImageSharp.fluid}
                  title={title}
                  date={date}
                  desc={post.node.snippet}
                  tags={tags}
                />
              </Link>
            )
          })}
          <div className={Styles.navigation}>
            <Link
              to={prevPage}
              rel="prev"
              className={isFirst ? Styles.inactive : Styles.active}
            >
              Prev
            </Link>
            <div className={Styles.pageNumber}>
              {currentPage} of {numPages}
            </div>
            <Link
              to={nextPage}
              rel="next"
              className={isLast ? Styles.inactive : Styles.active}
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Posts

export const postsQuery = graphql`
  query postsQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
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
