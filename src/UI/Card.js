import React from 'react'
import classes from './Card.module.css'
function Card(props) {
  const className = `${classes.card} ${props.className}`
  return <div className={className}>{props.children}</div>
}

export default Card
