import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../styles/blog.module.css"
import "../styles/link.css"

function BlogPage({ data }) {
  const { title, date, cover, tags } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO
        title={title}
        description={data.markdownRemark.snippet}
        image={cover && cover.childImageSharp.fixed.src}
      />
      <div className={Styles.container}>
        <h1 className={Styles.title}>{title}</h1>
        <p className={Styles.date}>Posted on {date}</p>
        {data.markdownRemark.timeToRead === 1 ? (
          <p className={Styles.time}>
            {data.markdownRemark.timeToRead} minute to read
          </p>
        ) : (
          <p className={Styles.time}>
            {data.markdownRemark.timeToRead} minutes to read
          </p>
        )}

        <div className={Styles.toc}>
          <span className={Styles.tocTitle}>Table Of Contents</span>
          <hr className={Styles.divider} />
          <p
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.tableOfContents,
            }}
          ></p>
        </div>
        <div
          className={Styles.content}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
        <hr className={Styles.tagDivider} />
        {tags.map(tag => (
          <Link to={`/tags/${tag}`}>
            <span className={Styles.tag}>{tag}</span>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        tags
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      html
      timeToRead
      tableOfContents
      snippet
    }
  }
`
