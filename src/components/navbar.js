import React, { useState } from "react"
import { Link } from "gatsby"
import Styles from "./navbar.module.scss"

function Navbar() {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className={Styles.container}>
        <div
          className={Styles.logo}
          style={isOpen ? { opacity: 0 } : { opacity: 1 }}
        >
          IRRELLIA
        </div>
        <div className={Styles.hamburger}>
          <input type="checkbox" onClick={() => setOpen(!isOpen)} />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={Styles.overlay}
        style={
          isOpen
            ? { display: "block", opacity: 1 }
            : { visibility: "none", opacity: 0 }
        }
      >
        <div className={Styles.items}>
          <span className={Styles.item}>
            <Link to="/">HOME</Link>
          </span>
          <span className={Styles.item}>
            <Link to="/archives">ARCHIVES</Link>
          </span>
          <span className={Styles.item}>
            <Link to="/about">ABOUT</Link>
          </span>
        </div>
      </div>
    </>
  )
}

export default Navbar
