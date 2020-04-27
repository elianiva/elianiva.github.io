import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Box from "../components/box"
import Tag from "../components/tag"
import Styles from "../styles/archives.module.css"

function TagsPage() {
  const data = useStaticQuery(graphql`
    {
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Tags" />
      <div className={Styles.container}>
        <h1 className={Styles.title}>TAGS</h1>
        <hr className={Styles.divider} />
        <br />
        {data.tagsGroup.group.map(tag => {
          return (
            <Link to={`/tags/${tag.fieldValue}`}>
              <Tag
                name={tag.fieldValue}
                number={tag.totalCount}
                key={tag.fieldValue}
              />
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default TagsPage
