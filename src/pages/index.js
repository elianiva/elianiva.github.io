import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import Logo from "../assets/logo.svg"
import Card from "../components/card"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import SEO from "../components/seo"
import Styles from "../styles/index.module.css"

function IndexPage() {
  const [limit, setLimit] = useState(3)

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
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
      <SEO url="https://elianiva.github.io" title="Home" />
      <div className={Styles.container}>
        <div className={Styles.greet}>
          <div className={Styles.wrapper}>
            <div className={Styles.logo}>
              <Logo className={Styles.svg} />
            </div>
            <span className={Styles.greetText}>Hi there! I’m Elianiva.</span>
            <span className={Styles.greetDesc}>
              I'm a self taught web developer and a Linux enthusiast who likes
              to write whatever I've learned and some other stuff. Hopefully
              you'll find something useful from my blog. Have a good day!
            </span>
          </div>
        </div>
        <div className={Styles.posts} id="posts">
          <div className={Styles.cards}>
            {data.allMarkdownRemark.edges.slice(0, limit).map(post => {
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
            {limit < data.allMarkdownRemark.edges.length && (
              <button
                className={Styles.more}
                onClick={() => setLimit(limit + 3)}
              >
                View More
              </button>
            )}
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
export default IndexPage
