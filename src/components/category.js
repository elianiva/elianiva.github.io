import React from "react"
import Styles from "../styles/category.module.css"

function Category(props) {
  return (
    <div className={Styles.wrapper}>
      <span className={Styles.catBox}>{props.category}</span>
      <span className={Styles.number}>{props.number}</span>
    </div>
  )
}

export default Category
