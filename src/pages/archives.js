import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Box from "../components/box"
import Styles from "../styles/archives.module.css"

function ArchivesPage() {
  const data = useStaticQuery(graphql`
    {
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }

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
      <SEO title="Archives" />
      <div className={Styles.container}>
        <h1 className={Styles.title}>ARCHIVES</h1>
        <hr className={Styles.divider} />
        <span className={Styles.subtitle}>CATEGORY</span>
        {data.categoriesGroup.group.map(category => {
          return (
            <Link to={`/category/${category.fieldValue}`}>
              <Box
                name={category.fieldValue}
                number={category.totalCount}
                key={category.fieldValue}
              />
            </Link>
          )
        })}
        <br />
        <span className={Styles.subtitle}>TAGS</span>
        {data.tagsGroup.group.map(tag => {
          return (
            <Link to={`/tags/${tag.fieldValue}`}>
              <Box
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

export default ArchivesPage
