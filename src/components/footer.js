import React from "react"
import Styles from "../styles/footer.module.css"

function Footer() {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <span className={Styles.desc}>
          <span>
            Powered by{" "}
            <a
              href="https://gatsbyjs.org"
              style={{ color: "#8a4baf", fontWeight: 600 }}
            >
              Gatsby JS{" "}
            </a>
            and{" "}
            <a
              href="https://graphql.org"
              style={{ color: "#8a4baf", fontWeight: 600 }}
            >
              GraphQL
            </a>
          </span>
          <span>
            This website is hosted on{" "}
            <a
              href="https://pages.github.com/"
              style={{ color: "#5c90ff", fontWeight: 600 }}
            >
              Github Pages
            </a>{" "}
            with help of{" "}
            <a
              href="https://travis-ci.org/"
              style={{ color: "#CD324A", fontWeight: 600 }}
            >
              Travis-CI.
            </a>
          </span>
          <span>
            Source code is available on{" "}
            <a
              href="https://github.com/elianiva/elianiva.github.io"
              style={{ color: "#5c90ff", fontWeight: 600 }}
            >
              Github
            </a>
          </span>
          &copy; 2020
          <a
            href="https://github.com/elianiva/"
            style={{ color: "#5c90ff", fontWeight: 600 }}
          >
            {" "}
            ELIANIVA
          </a>
        </span>
      </div>
    </div>
  )
}

export default Footer
