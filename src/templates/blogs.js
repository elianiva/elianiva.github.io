import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Styles from "../styles/blogs.module.css"

function Blogs({ pageContext, data }) {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  return (
    <Layout>
      <SEO title="Blogs" />
      <div className={Styles.container}>
        <div className={Styles.cardWrapper}>
          {data.allMarkdownRemark.edges.map(post => {
            const { cover, title, date, tags } = post.node.frontmatter
            const { slug } = post.node.fields
            return (
              <Link to={slug} rel="post">
                <Card
                  key={post.node.id}
                  cover={cover.childImageSharp.fluid}
                  title={title}
                  date={date}
                  desc={post.node.snippet}
                  tags={tags}
                />
              </Link>
            )
          })}
        </div>
        <div className={Styles.buttonWrapper}>
          <div className={Styles.pagination}>
            {!isFirst && (
              <Link to={`/blogs/${prevPage}`} rel="prev">
                <div className={Styles.prev}>PREV</div>
              </Link>
            )}
            <div className={Styles.pages}>
              Page {currentPage} of {numPages}
            </div>
            {!isLast && (
              <Link to={`/blogs/${nextPage}`} rel="next">
                <div className={Styles.next}>NEXT</div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blogs

export const blogsQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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
                fluid(
                  traceSVG: {
                    color: "#5C90FF"
                    turnPolicy: TURNPOLICY_MINORITY
                    blackOnWhite: false
                  }
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
