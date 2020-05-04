import React, { useState } from "react"
import { Link } from "gatsby"
import Styles from "../styles/navbar.module.css"

// icons
import Facebook from "../assets/facebook-logo.svg"
import Twitter from "../assets/twitter.svg"
import Reddit from "../assets/reddit.svg"
import Rss from "../assets/rss.svg"

function Navbar() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <div
          className={Styles.logo}
          style={isOpen ? { opacity: 0 } : { opacity: 1 }}
        >
          <Link to="/" rel="Home">
            Elianiva
          </Link>
        </div>
        <div className={Styles.menu}>
          <Link to="/" rel="Home">
            <span>HOME</span>
          </Link>
          <Link to="/posts" rel="Tags">
            <span>POSTS</span>
          </Link>
          <Link to="/tags" rel="Tags">
            <span>TAGS</span>
          </Link>
          <Link to="/books" rel="Archives">
            <span>BOOKS</span>
          </Link>
          <Link to="/about" rel="About">
            <span>ABOUT</span>
          </Link>
        </div>
        <div className={Styles.icons}>
          <a href="https://facebook.com/ho0m4n">
            <Facebook />
          </a>
          <a href="https://twitter.com/irrellia_">
            <Twitter />
          </a>
          <a href="https://reddit.com/irrellia">
            <Reddit />
          </a>
          <a href="https://elianiva.github.io/rss.xml">
            <Rss />
          </a>
        </div>
        <div className={Styles.hamburger}>
          <input
            type="checkbox"
            onClick={() => setOpen(!isOpen)}
            label="hamburger"
          />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={Styles.overlay}
        style={
          isOpen
            ? { display: "flex", opacity: 1, visibility: "visible" }
            : { visibility: "none", pointerEvents: "none", opacity: 0 }
        }
      >
        <div className={Styles.items}>
          <Link to="/" tabIndex="-1">
            HOME
          </Link>
          <Link to="/posts" tabIndex="-1">
            POSTS
          </Link>
          <Link to="/tags" tabIndex="-1">
            TAGS
          </Link>
          <Link to="/books" tabIndex="-1">
            BOOKS
          </Link>
          <Link to="/about" tabIndex="-1">
            ABOUT
          </Link>
          <div className={Styles.mobileIcons}>
            <a href="https://facebook.com/ho0m4n">
              <Facebook />
            </a>
            <a href="https://twitter.com/irrellia_">
              <Twitter />
            </a>
            <a href="https://reddit.com/irrellia">
              <Reddit />
            </a>
            <a href="https://elianiva.github.io/rss.xml">
              <Rss />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
