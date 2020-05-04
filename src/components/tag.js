import React from "react"
import PropTypes from "prop-types"
import Styles from "../styles/tag.module.css"

function Tag(props) {
  return (
    <div className={Styles.wrapper}>
      <span className={Styles.tagBox}>{props.name}</span>
      <span className={Styles.number}>{props.number}</span>
    </div>
  )
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
}

export default Tag
