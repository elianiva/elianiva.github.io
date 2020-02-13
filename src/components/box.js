import React from "react"
import Styles from "../styles/box.module.css"

function Box(props) {
  return (
    <div className={Styles.wrapper}>
      <span className={Styles.catBox}>{props.name}</span>
      <span className={Styles.number}>{props.number}</span>
    </div>
  )
}

export default Box
