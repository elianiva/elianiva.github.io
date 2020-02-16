import React from "react"
import Styles from "../styles/tag.module.css"

function Tag(props) {
  return (
    <div className={Styles.wrapper}>
      <span className={Styles.tagBox}>{props.name}</span>
      <span className={Styles.number}>{props.number}</span>
    </div>
  )
}

export default Tag
