import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Category from "../components/category"
import Styles from "../styles/archives.module.css"

function ArchivesPage() {
  return (
    <Layout>
      <SEO title="Archives" />
      <div className={Styles.container}>
        <h1 className={Styles.title}>ARCHIVES</h1>
        <hr className={Styles.divider} />
        <span className={Styles.subtitle}>CATEGORIES</span>
        <Category category="linux" number="2" />
        <Category category="neovim" number="12" />
        <Category category="webdev" number="3" />
        <Category category="others" number="5" />
      </div>
    </Layout>
  )
}

export default ArchivesPage
