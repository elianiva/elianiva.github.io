import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <div
      className="container"
      styles={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: `100vw`,
        height: `100vh`,
      }}
    >
      <h1 style={{ textAlign: "center", flex: 1 }}>
        Sorry pal, the page that you're looking for doesn't exist.
      </h1>
    </div>
  </Layout>
)

export default NotFoundPage
