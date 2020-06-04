import React from "react"
import PropTypes from "prop-types"
import Styles from "../styles/card.module.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Date from "../assets/date.svg"
import moment from "moment"

function Card(props) {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "assets/placeholder.png" }) {
        childImageSharp {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={Styles.container}>
      <Img
        className={Styles.image}
        alt="Post Thumbnail"
        fluid={props.cover || data.file.childImageSharp.fluid}
      />
      <div className={Styles.wrapper}>
        <span className={Styles.title}>{props.title}</span>
        <span className={Styles.date}>
          <Date className={Styles.prefix} />{" "}
          {moment(props.date).format("dddd, DD MMMM YYYY")}
        </span>
        <span
          className={Styles.desc}
          dangerouslySetInnerHTML={{ __html: props.desc }}
        ></span>
        <div className={Styles.tags}>
          {props.tags.map(tag => (
            <span key={tag} className={Styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  cover: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
}

export default Card
