/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import ThemeContext, { ThemeProvider } from "../context/ThemeContext"
import "./layout.css"

import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="main-container">
        <div
          style={{
            marginTop: `3.5rem`,
            flex: 1,
          }}
        >
          <main style={{ flex: 1, minHeight: `100vh` }}>{children}</main>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
