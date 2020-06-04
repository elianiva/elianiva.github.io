import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from "../components/tag"
import Styles from "../styles/tagsPage.module.css"

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
        <div className={Styles.title}>TAGS</div>
        <hr className={Styles.divider} />
        <div className={Styles.tags}>
          {data.tagsGroup.group.map(tag => {
            return (
              <Link key={tag.fieldValue} to={`/tags/${tag.fieldValue}`}>
                <Tag name={tag.fieldValue} number={tag.totalCount} />
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default TagsPage
