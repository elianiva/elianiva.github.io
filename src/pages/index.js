import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../assets/logo.svg"
import Styles from "../styles/index.module.css"
import Arrow from "../assets/arrow.svg"
import Card from "../components/card"

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

  console.log(data)

  return (
    <Layout>
      <SEO title="Home" />
      <div className={Styles.container}>
        <div className={Styles.greet}>
          <div className={Styles.wrapper}>
            <div className={Styles.logo}>
              <Logo className={Styles.svg} />
            </div>
            <span className={Styles.greetText}>
              Hi there! I’m Irrellia and welcome to my personal blog.
            </span>
            <span className={Styles.greetDesc}>
              I made this website because I like to write and share something
              useful that I found from the internet and share it with you guys.
              I hope you get something useful from my website. Cheers :)
            </span>
            <a href="#posts" className={Styles.arrow}>
              <Arrow />
            </a>
          </div>
        </div>
        <div className={Styles.posts} id="posts">
          <span className={Styles.title}>LATEST POSTS</span>
          {data.allMarkdownRemark.edges.map(post => {
            const { cover, title, date, tags } = post.node.frontmatter
            const { slug } = post.node.fields
            return (
              <Link to={slug}>
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
    </Layout>
  )
}
export default IndexPage
