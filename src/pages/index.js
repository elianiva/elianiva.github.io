import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import SEO from "../components/seo"
import Logo from "../assets/logo.svg"
import Styles from "../styles/index.module.css"
import Card from "../components/card"
import Navbar from "../components/navbar"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 3
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
  `)

  return (
    <>
      <Navbar />
      <SEO url="https://irrellia.github.io" title="Home" />
      <div className={Styles.container}>
        <div className={Styles.greet}>
          <div className={Styles.wrapper}>
            <div className={Styles.logo}>
              <Logo className={Styles.svg} />
            </div>
            <span className={Styles.greetText}>Hi there! I’m Irrellia.</span>
            <span className={Styles.greetDesc}>
              I'm a self taught web developer and a Linux enthusiast who likes
              to share my experience to other people and hopefully they find it
              useful.
            </span>
          </div>
        </div>
        <div className={Styles.posts} id="posts">
          {data.allMarkdownRemark.edges.map(post => {
            const { cover, title, date, tags } = post.node.frontmatter
            const { slug } = post.node.fields
            return (
              <Link to={slug} rel="Post">
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
      </div>
    </>
  )
}
export default IndexPage
