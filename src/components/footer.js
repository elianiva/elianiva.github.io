import React from "react"
import Styles from "../components/footer.module.scss"
import Facebook from "../assets/facebook.svg"
import Reddit from "../assets/reddit.svg"
import Twitter from "../assets/twitter.svg"
import Github from "../assets/github.svg"

function Footer() {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <span>FIND ME ON</span>
        <div className={Styles.icons}>
          <Facebook className={Styles.icon} fill="#292d3e" />
          <Reddit className={Styles.icon} fill="#292d3e" />
          <Twitter className={Styles.icon} fill="#292d3e" />
          <Github className={Styles.icon} fill="#292d3e" />
        </div>
        <span className={Styles.desc}>
          This site is built using{" "}
          <a href="https://www.gatsbyjs.org/" className={Styles.gatsby}>
            GATSBY
          </a>{" "}
          and hosted on{" "}
          <a href="https://github.com/" className={Styles.github}>
            GITHUB
          </a>
        </span>
      </div>
    </div>
  )
}

export default Footer
