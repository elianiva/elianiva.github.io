import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../assets/logo.svg"
import Styles from "../styles/index.module.css"
import Arrow from "../assets/arrow.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={Styles.container}>
      <div className={Styles.greet}>
        <div className={Styles.logo}>
          <Logo className={Styles.svg} />
        </div>
        <span className={Styles.greetText}>
          Hi there! I’m Irrellia and welcome to my personal blog.
        </span>
        <span className={Styles.greetDesc}>
          I made this website because I like to write and share something useful
          that I found from the internet and share it with you guys. I hope you
          get something useful from my website. Cheers :)
        </span>
        <a href="#posts" className={Styles.arrow}>
          <Arrow />
        </a>
      </div>
      <div className={Styles.posts} id="posts">
        <span className={Styles.title}>LATEST POSTS</span>
        <hr className={Styles.underline} />
      </div>
    </div>
  </Layout>
)

export default IndexPage
