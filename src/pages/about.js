import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Styles from "../styles/about.module.css"

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <div className={Styles.container}>
        <h1>ABOUT ME</h1>
        <hr className={Styles.divider} />
        <h3>My personal identity</h3>
        <p>
          Hello internet people! My real name is Dicha Zelianivan Arkana. I'm a
          self taught front end web developer (fullstack soon ツ) and an open
          source enthusiast. I do some random project just for a hobby now. You
          can check my github <a href="https://github.com/elianiva">here.</a>
        </p>
        <p>
          If you visited this site before, you might notice that my username is
          Irrellia. I changed it to my middle name and removed the first and
          last letter ( Z
          <span style={{ color: `#2f6ef3`, fontWeight: "bold" }}>elianiva</span>
          n). Apparently, my previous username is one of League of Legends
          character. I don't fancy having a same name as anybody else, I like to
          have a unique name ツ.
        </p>
        <h3>About my website</h3>
        <p>
          I built this website using an awesome SSG called{" "}
          <a href="https://gatsbyjs.org/">Gatsby JS</a>. It is based on{" "}
          <a href="https://reactjs.org/">React JS</a> with some{" "}
          <a href="https://graphql.com">GraphQL</a> magic, and voila! You get
          this awesome Static Site Generator. It has so many plugins to help you
          build your website.
        </p>
        <p>
          I hosted this website on{" "}
          <a href="https://pages.github.com">Github Pages</a> because it is so
          easy to setup, it's free and it has a cool domain name (to me at least
          lol). Though I might buy my own domain in the future. I use the help
          of{" "}
          <a href="https://travis-ci.org/" className={Styles.nolonger}>
            Travis CI
          </a>{" "}
          <a href="https://github.com/features/actions">Github Actions</a> to
          build and deploy my code automatically everytime I push to my repo so
          I don't have to build it manually and deploy it by myself.
        </p>
        <h3>My setup</h3>
        <p>
          I made my website using my laptop which is Thinkpad X220. Here's a
          table about my current specs if you want to know.
        </p>
        <table>
          <tr>
            <th colSpan="2">My X220 specs</th>
          </tr>
          <tr>
            <td>CPU</td>
            <td>i5 2520M (3M cache, up to 3.2 GHz)</td>
          </tr>
          <tr>
            <td>GPU</td>
            <td>Intel HD Graphics 3000</td>
          </tr>
          <tr>
            <td>Storage</td>
            <td>Adata SU650 120GB</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>2x4GB DDR3 1333MHz</td>
          </tr>
          <tr>
            <td>Monitor</td>
            <td>12.5-inch TN panel with 1366x768 screen resolution</td>
          </tr>
          <tr>
            <td>OS</td>
            <td>GNU/Linux (Archlinux)</td>
          </tr>
        </table>
        <p>
          Those are the hardware side of thing, now let's talk about the
          software side of thing. I use{" "}
          <a href="https://archlinux.org/">Archlinux</a> as my operating system.
          You can read a{" "}
          <Link to="/post/why-i-use-linux" rel="post">
            post I made a while ago
          </Link>{" "}
          about why I use Linux. I use a window manager called{" "}
          <a href="https://dwm.suckless.org/" className={Styles.nolonger}>
            DWM
          </a>{" "}
          <a
            href="https://github.com/baskerville/bspwm/"
            className={Styles.nolonger}
          >
            BSPWM
          </a>
          <a href="https://awesomewm.org/">AwesomeWM</a>. My text editor is{" "}
          <a href="https://neovim.io">Neovim</a> which is basically Vim with
          steroid. All of my dotfiles can be found{" "}
          <a href="https://github.com/elianiva/dotfiles">here</a>
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
