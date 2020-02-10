import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../styles/blog.module.css"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
      timeToRead
    }
  }
`

function BlogPage({ data }) {
  const { title, date, cover } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={title} />
      <div className={Styles.container}>
        <Img
          className={Styles.cover}
          fluid={cover.childImageSharp.fluid}
          alt="Post Thumbnail"
        />
        <h1 className={Styles.title}>{title}</h1>
        <p className={Styles.date}>Posted on {date}</p>
        <p className={Styles.time}>
          {data.markdownRemark.timeToRead} minute to read
        </p>
        <div
          className={Styles.content}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  )
}

export default BlogPage
