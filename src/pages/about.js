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
        <h3>My personal identity</h3>
        <p>
          Hello internet people! My real name is Dicha Zelianivan Arkana. I'm a
          self taught front end web developer and Linux enthusiast. I do some
          random project just for a hobby for now. You can check my github right
          over <a href="https://github.com/elianiva">here.</a>
        </p>
        <p>
          If you visited this site before, you might notice that my username is
          Irrellia. I changed it to my middle name and removed the first and
          last letter. Apparently, my previous username is one of League of
          Legends character. I don't fancy having a same name as anybody else, I
          like to have a unique name.
        </p>
        <h3>About my website</h3>
        <p>
          I built this website using an awesome SSG called{" "}
          <a href="https://gatsbyjs.org/">Gatsby JS</a>. It is based on React JS
          and some <a href="https://graphql.com">GraphQL</a> magic, and voila!
          You get this awesome Static Site Generator. It has so many plugins to
          help you build your website.
        </p>
        <p>
          I hosted this website on{" "}
          <a href="https://pages.github.com">Github Pages</a> because it is so
          easy to setup, it's free and it has a cool domain name. I use the help
          of <a href="https://travis-ci.org/">Travis CI</a> to build and deploy
          my code automatically everytime I push to my repo so I don't have to
          build it manually and deploy it.
        </p>
        <h3>My setup</h3>
        <p>
          I made my website using my lovely Thinkpad X220. It has an Intel i5
          2520M, 320GB HDD and 4GB of RAMs. I'm planning on upgrading it in the
          future, but for now it's enough. I also don't use those fancy
          mechanical keyboard, at least not yet. I'm not really sure whether to
          buy it or not because my Thinkpad keyboard is just awesome!
        </p>
        <p>
          Those are the hardware side of thing, now let's talk about the
          software side of thing. I use{" "}
          <a href="https://archlinux.org/">Archlinux</a> as my operating system,
          I don't use Windows because I don't like it. Linux is way better for
          my needs, who cares about game support anyway, I don't play any game
          (well I do play some game, but only when I got super bored or other
          special occasion)
        </p>
        <p>
          I use a window manager called{" "}
          <a href="https://github.com/baskerville/bspwm">BSPWM</a>. My text
          editor is <a href="https://neovim.io">Neovim</a> which is basically
          Vim with steroid. I am planning on making some sort of series on my
          website regarding these things, so keep an eye out ;)
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
