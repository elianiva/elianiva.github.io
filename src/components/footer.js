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
              style={{ color: "#2f6ef3", fontWeight: 600 }}
            >
              Github Pages{" "}
            </a>
            with the help of{" "}
            <a
              href="https://github.com/features/actions"
              style={{ color: "#2f6ef3", fontWeight: 600 }}
            >
              Github Actions
            </a>
          </span>
          <span>
            Source code is available on{" "}
            <a
              href="https://github.com/elianiva/elianiva.github.io"
              style={{ color: "#2f6ef3", fontWeight: 600 }}
            >
              Github
            </a>
          </span>
          &copy; 2020
          <a
            href="https://github.com/elianiva/"
            style={{ color: "#2f6ef3", fontWeight: 600 }}
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
