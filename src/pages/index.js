import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Card from "../components/card"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import SEO from "../components/seo"
import Styles from "../styles/index.module.css"

function IndexPage() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 5
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
  `)

  return (
    <>
      <Navbar />
      <SEO url="https://elianiva.github.io" title="Home" />
      <div className={Styles.container}>
        <div className={Styles.greet}>
          <div className={Styles.wrapper}>
            <div className={Styles.logo}>
              <h1>Elianiva</h1>
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
            <Link to="/posts" className={Styles.more}>
              View More
            </Link>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
