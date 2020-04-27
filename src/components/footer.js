import React from "react"
import Styles from "../styles/footer.module.css"

function Footer() {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <div className={Styles.sideWrap}>
          <span className={Styles.findme}>FIND ME ON</span>
        </div>
        <span className={Styles.desc}>
          This site is built using{" "}
          <a href="https://www.gatsbyjs.org/" className={Styles.hl}>
            GATSBY
          </a>{" "}
          and hosted on{" "}
          <a href="https://github.com/" className={Styles.hl}>
            GITHUB
          </a>{" "}
          | Also subsribe to my{" "}
          <a href="https://irrellia.github.io/rss.xml" className={Styles.hl}>
            RSS Feed
          </a>
        </span>
        <br />
        <span className={Styles.desc}>
          &copy; 2020 - 2020{" "}
          <a href="https://github.com/irrellia" className={Styles.hl}>
            IRRELLIA
          </a>
        </span>
      </div>
    </div>
  )
}

export default Footer
