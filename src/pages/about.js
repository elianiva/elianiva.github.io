import React from "react"
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
        <span className={`${Styles.question} ${Styles.section}`}>
          {" "}
          WHO AM I?
        </span>
        <span className={Styles.desc}>
          You might ask. So, let’s start with my real name. My real name is{" "}
          <b>Dicha Zelianivan Arkana.</b> I’m a Vocational School Student. My
          nickname is <b>Irrellia</b>, which appears to be one of League of
          Legends champion. That is a pure coincidence, I don’t even play League
          of Legends XD.
        </span>
        <span className={`${Styles.question} ${Styles.section}`}>
          WHAT I DO?
        </span>
        <span className={Styles.desc}>
          I made some web apps currently just for fun and never make it public.
          I want to be a full stack developer one day. Also, I do tinker around
          with Neovim, Linux Stuff, Tiling WM's and all of those sorts of things
          quite often. Those things are more fun to me than video games.
        </span>
        <span className={`${Styles.question} ${Styles.section}`}>
          WHY DID I MAKE THIS SITE?
        </span>
        <span className={Styles.desc}>
          I just like to write something and sharing it to other people and
          enjoy the idea of sharing your knowledge to other people. Of course,
          it's also to try out this new stack (well it isn't actually, but it is
          to me) called JAMstack.
        </span>
        <span className={`${Styles.question} ${Styles.section}`}>
          HOW DID I MAKE THIS SITE?
        </span>
        <span className={Styles.desc}>
          I made this site using SSG called{" "}
          <a
            href="https://www.gatsbyjs.org"
            className={Styles.hl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GATSBY
          </a>
          . It’s based on{" "}
          <a
            href="https://reactjs.org"
            className={Styles.hl}
            target="_blank"
            rel="noopener noreferrer"
          >
            REACT
          </a>{" "}
          and it’s hella awesome. I write the code using{" "}
          <a
            href="https://neovim.io"
            className={Styles.hl}
            target="_blank"
            rel="noopener noreferrer"
          >
            NEOVIM
          </a>{" "}
          on Linux,{" "}
          <a
            href="https://archlinux.org"
            className={Styles.hl}
            target="_blank"
            rel="noopener noreferrer"
          >
            ARCHLINUX
          </a>{" "}
          to be more specific. I also using{" "}
          <a
            href="https://figma.com"
            className={Styles.hl}
            target="_blank"
            rel="noopener noreferrer"
          >
            FIGMA
          </a>{" "}
          for the mockup design before beginning to write the code.
        </span>
      </div>
    </Layout>
  )
}

export default AboutPage
