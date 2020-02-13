import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Styles from "../styles/footer.module.css"
import Facebook from "../assets/facebook.svg"
import Reddit from "../assets/reddit.svg"
import Twitter from "../assets/twitter.svg"
import Github from "../assets/github.svg"

function Footer() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          facebook
          reddit
          twitter
          github
        }
      }
    }
  `)
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <div className={Styles.sideWrap}>
          <span className={Styles.findme}>FIND ME ON</span>
          <div className={Styles.icons}>
            <a
              href={data.site.siteMetadata.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className={Styles.icon} fill="#292d3e" />
            </a>
            <a
              href={data.site.siteMetadata.reddit}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Reddit className={Styles.icon} fill="#292d3e" />
            </a>
            <a
              href={data.site.siteMetadata.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className={Styles.icon} fill="#292d3e" />
            </a>
            <a
              href={data.site.siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className={Styles.icon} fill="#292d3e" />
            </a>
          </div>
        </div>
        <span className={Styles.desc}>
          This site is built using{" "}
          <a href="https://www.gatsbyjs.org/" className={Styles.hl}>
            GATSBY
          </a>{" "}
          and hosted on{" "}
          <a href="https://github.com/" className={Styles.hl}>
            GITHUB
          </a>
        </span>
      </div>
    </div>
  )
}

export default Footer
